import { useState,useEffect, Fragment } from 'react';
import {  useParams } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

export function StockDetails(props){
    const {code} = useParams();
    const [dates,setDates] = useState(null);
    const [current,setCurrent] = useState(null);
    const [todayData,setTodayData] = useState(null);

    const [curTab,setCurTab] = useState("5D")
    let days;
    const month = {"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"June","07":"Jul","08":"Aug","09":"Sep","10":"Oct","11":"Nov","12":"Dec"}

    useEffect(()=>{
        getWeekData();
        props.codes.map((ele)=>{
            if(ele.code===code){
                setCurrent(ele);
            }
        })
    },[])

    useEffect(()=>{
        if(document.getElementsByClassName("tab")){
            let elements  =document.getElementsByClassName("tab");
            for(let i=0;i<elements.length;i++){
                if(elements[i].innerHTML===curTab){
                    elements[i].classList.add("tab-active")
                }else{
                    elements[i].classList.remove("tab-active")
                }
            }
        }
    },[curTab])

    function getWeekData(){
        fetch(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${code}&apikey=TJPCDJZ5WY9ICQ4W`,
            {
              method: "GET",
            }
          )
            .then((data) => data.json())
            .then((stocks) => {
                days=5;
                let arr=[];
                var dates = Object.keys(stocks["Time Series (Daily)"]);
                for(let i=days-1;i>=0;i--){
                    arr.push({name:`${month[dates[i].split("-")[1]]} ${dates[i].split("-")[2]}` , value:stocks["Time Series (Daily)"][dates[i]]["4. close"],volume:stocks["Time Series (Daily)"][dates[i]]["5. volume"]})
                }
                setDates(arr);
                const latest =parseFloat(stocks["Time Series (Daily)"][Object.keys(stocks["Time Series (Daily)"])[0]]["4. close"]);
                const latest2 = parseFloat(stocks["Time Series (Daily)"][Object.keys(stocks["Time Series (Daily)"])[1]]["4. close"]);
                setTodayData({day:`${month[dates[0].split("-")[1]]} ${dates[0].split("-")[2]}`,latest:latest,diff:(latest2-latest).toFixed(3),per:(((latest2-latest)/latest)/100).toFixed(6)})
            })
            .catch((err)=>console.log(err))
    }

    function getMonthData(){
        fetch(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${code}&apikey=TJPCDJZ5WY9ICQ4W`,
            {
              method: "GET",
            }
          )
            .then((data) => data.json())
            .then((stocks) => {
                days=30;
                let arr=[];
                var dates = Object.keys(stocks["Time Series (Daily)"]);
                for(let i=days-1;i>=0;i--){
                    arr.push({name:`${month[dates[i].split("-")[1]]} ${dates[i].split("-")[2]}` , value:stocks["Time Series (Daily)"][dates[i]]["4. close"],volume:stocks["Time Series (Daily)"][dates[i]]["5. volume"]})
                }
                setDates(arr);
            })
            .catch((err)=>console.log(err))
    }


    function getMonthsData(){
        fetch(
            `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${code}&apikey=TJPCDJZ5WY9ICQ4W`,
            {
              method: "GET",
            }
          )
            .then((data) => data.json())
            .then((stocks) => {
                console.log(stocks);
                days=6;
                let arr=[];
                var dates = Object.keys(stocks["Monthly Time Series"]);
                for(let i=days-1;i>=0;i--){
                    arr.push({name:`${month[dates[i].split("-")[1]]}` , value:stocks["Monthly Time Series"][dates[i]]["4. close"],volume:stocks["Monthly Time Series"][dates[i]]["5. volume"]})
                }
                setDates(arr);
            })
            .catch((err)=>console.log(err))
    }


      var item = "";
      const mouseEnterHandler = (key) => {
        item = key;
      };
      const Custooltip = ({ active, payload }) => {
        return (
          <div>
            {payload.map(
              (ele) =>{
                if(ele.name === item ){
                    console.log(ele.name,ele.value,ele.payload);
                    return(
                        <div className='p-5' style={{backgroundColor:"white",boxShadow:"0 5px 15px rgba(0,0,0,0.8)"}}>
                            <div className='p-5' style={{color:"black",fontWeight:"bold"}}>USD ${ele.payload.value}</div>
                            <div className='p-5' style={{color:"gray"}}>{ele.payload.name}</div>
                            <div  className='p-5'style={{color:"gray"}}>VOLUME: {ele.payload.volume}</div>
                        </div>
                    )
                }
              }
            )}
          </div>
        );
      };
    return(
        <Fragment>
            <div>
                {
                    current && todayData?
                    <div>
                        <div style={{padding:"0 20px"}} className='font-title font-bold'>{current.name}</div>
                        <div className='flex'>
                            <div className='font-large font-bold'>${Math.abs(todayData.latest)}</div>
                            <div className={ `font-bold ${todayData.per>0?"rise-bg":"fall-bg"}`}>{Math.abs(todayData.per)} %</div>
                            <div className={ `font-bold ${todayData.diff>0?"rise":"fall"}`} ><span>{todayData.diff>0?"+":"-"}</span> {Math.abs(todayData.diff)} Today</div>
                        </div>
                        <div className='font-small font-bold text-gray' style={{marginTop:"-25px",padding:" 0 20px"}}>{todayData.day} <span className='dot'>.</span > USD <span className='dot'>.</span> NYSE <span className='dot'>.</span> Disclaimer</div>
                    </div>
                    :"Loading..."
                }
            </div>
            <div className='flex font-bold' style={{ margin:"5px 50px 20px 50px"}}>
                <div className='tab' onClick={()=>{getWeekData(); setCurTab("5D")}}>5D</div>
                <div className='tab' onClick={()=>{getMonthData(); setCurTab("1M")}}>1M</div>
                <div className='tab'  onClick={()=>{getMonthsData(); setCurTab("6M")}}>6M</div>
            </div>
            <div>{
            dates?
            <LineChart
            width={600}
            height={300}
            data={dates}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip position={{ y: 0 }} content={<Custooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="green"
              activeDot={{
                onMouseOver: () => mouseEnterHandler("value"),
                onMouseLeave: () => mouseEnterHandler("")
              }}
            />
          </LineChart>
        :"Loading..."
            }</div>
        </Fragment>
    )

}