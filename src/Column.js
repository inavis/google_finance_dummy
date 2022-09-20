import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export function Column ({code,name,color}){

    const [stockData,setStockData] = useState(null);
    const history = useHistory();

    useEffect(()=>{
        
        fetch(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${code}&apikey=TJPCDJZ5WY9ICQ4W`,
            {
              method: "GET",
            }
          )
            .then((data) => data.json())
            .then((stocks) => {
                const latest =parseFloat(stocks["Time Series (Daily)"][Object.keys(stocks["Time Series (Daily)"])[0]]["4. close"]);
                const latest2 = parseFloat(stocks["Time Series (Daily)"][Object.keys(stocks["Time Series (Daily)"])[1]]["4. close"]);
                setStockData({latest:latest,diff:(latest2-latest).toFixed(3),per:(((latest2-latest)/latest)/100).toFixed(6)})
            })
            .catch((err)=>console.log(err))

    },[])


    return(
             <Fragment>
                {
                    stockData?
                    <div className="flex table font-bold " onClick={()=>{
                        history.push(`/stock/${code}`);
                    }}>
                        <div className="item-20 rise-bg text-white" style={{backgroundColor:color}}>{code}</div>
                        <div className="item-40">{name}</div>
                        <div  className="item-20">${Math.abs(stockData.latest)}</div>
                        <div  className={ `item-20 ${stockData.diff>0?"rise":"fall"}`} ><span>{stockData.diff>0?"+":"-"}</span> {Math.abs(stockData.diff)}</div>
                        <div  className={ `item-20 ${stockData.per>0?"rise-bg":"fall-bg"}`}  >{Math.abs(stockData.per)}</div>
             </div>
             :
             <div>Loading...</div>
                }
             </Fragment>
    )
}