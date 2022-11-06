import { Fragment, useEffect, useState } from "react"
import { Chart } from "react-google-charts";
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

import img1 from "./red-arrow.jpg"


export function Gaant() {
  let tasks = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: 'Idea',
      id: 'Task 0',
      type: 'task',
      progress: 45,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    }
  ];

  var colors = ["red","green","yellow","gray","purple","magenta","pink","brown","lightgreen","orange"]
  var res = {
    "data": [
      {
        "id": "5c3727217862facc",
        "operation_name": "/owners",
        "start_time": 1663916309421673000,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:39.3778Z",
        "duration": 10377773
      },
      {
        "id": "6a0da47bf52deb6e",
        "operation_name": "OwnerResource.findAll",
        "start_time": 1663916309422322388,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:38.1865Z",
        "duration": 9186540
      },
      {
        "id": "d0ac354d42002909",
        "operation_name": "JpaRepository.findAll",
        "start_time": 1663916309422365322,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:37.3409Z",
        "duration": 8340874
      },
      {
        "id": "a942d60fbbee5358",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309429797852,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0313Z",
        "duration": 31293
      },
      {
        "id": "ebaba95578370b95",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309429627599,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0193Z",
        "duration": 19258
      },
      {
        "id": "a8d4a508d5a08129",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309429440020,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0211Z",
        "duration": 21120
      },
      {
        "id": "ff964addc7da4770",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309429206381,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0177Z",
        "duration": 17698
      },
      {
        "id": "5a7720f250d674bd",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309429033404,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0201Z",
        "duration": 20148
      },
      {
        "id": "12e4feccf604234e",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309428842046,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0217Z",
        "duration": 21662
      },
      {
        "id": "e104689e1a3a0361",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309428653938,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0209Z",
        "duration": 20923
      },
      {
        "id": "fd6f7b7b3e6aaa55",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309428443797,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0237Z",
        "duration": 23684
      },
      {
        "id": "9fd0bb9ed9b311da",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309427611218,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0192Z",
        "duration": 19187
      },
      {
        "id": "350d8d95cb709f27",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309427399092,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0225Z",
        "duration": 22458
      },
      {
        "id": "9c4e1e3e6406dbeb",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309427133549,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0226Z",
        "duration": 22611
      },
      {
        "id": "8675ea0e86cde059",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309427023419,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0124Z",
        "duration": 12447
      },
      {
        "id": "943f55e327d2ac99",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309426910859,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.013Z",
        "duration": 13024
      },
      {
        "id": "8196d19e0f8d308b",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309426795881,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0135Z",
        "duration": 13454
      },
      {
        "id": "492d8d5eb13e153f",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309426669290,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0155Z",
        "duration": 15478
      },
      {
        "id": "316594ead50ecde4",
        "operation_name": "SELECT 5d8351bc-c0cd-4d9d-9f3e-6efb9f457015",
        "start_time": 1663916309426506470,
        "start_time_ts": "2022-09-23T06:58:29Z",
        "end_time": "2022-09-23T06:58:29.0194Z",
        "duration": 19399
      }]
  };
  const [data, setData] = useState(null);
  const [limit,setLimit] = useState(null);
  useEffect(() => {
    const arr = [];
    var maximum=-10000000000000;
    res["data"].map((ele, index) => {
      var startDate = new Date(ele["start_time_ts"]);
      var endDate   = new Date(ele["end_time"]);
      var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      
      if(index>0){
        var prev_endDate = new Date(res["data"][index - 1]["end_time"] )
      var prev_seconds = (prev_endDate.getTime()-endDate.getTime()) / 1000;
      }
      // arr.push({name:ele["operation_name"],start:0,end:seconds})
      if(ele["duration"]/1000000>maximum){
        maximum = ele["duration"]/1000000
      }
      if (index > 0) {
        arr.push({ name: ele["operation_name"], start:Math.abs(prev_seconds), end: ele["duration"]/1000000 })
      } else {
        arr.push({ name: ele["operation_name"], start: 0, end: seconds})
      }
    })
    setData(arr);
    let arrlimit=[];
    for(let i=0;i<=maximum+0.5;i=i+0.5){
      arrlimit.push(i);
    }
    setLimit(arrlimit);
  },[])

  const scrollRight= () =>{
    const element = document.getElementsByClassName("chart")[0];
    element.scrollLeft+=5000
  }

  return (

    data && limit ?
      <div className="main">
        <div>
          <h3 className="float-left title">Gaant Chart</h3>
          {/* <img src={img2} className="red-cross float-right" /> */}
        </div>
        <div className="chart">
          <div className="chart-title">
            <div className="main-row  sub-row-left purple-box font-small">SERVICES</div>
            {
                  data.map(({ name, start, end }) => {
                    return (
                      <div key={end} className=" sub-row-left font-small">{name}</div>
                    )
                  })
                }
          </div>
          <div className="chart-values">
            <div className="main-row" style={{ display: "flex", flexDirection: "row" }}>
              {
                limit.map((ele)=>(
                  <span key={ele} className="sub-row purple-box font-small">{ele}</span>
                ))
              }
            </div>
            <div className="main-row"  >
              <div>
                {
                  data.map(({ name, start, end }) => {
                    return (
                      <div key={end} className="sub-row-2" style={{width:`${limit.length*111.5}px`,display: "flex", flexDirection: "row"}}>
                        <div className="p-x font-small" style={{ marginLeft: `${start * 10 * 15}px` }}>{start.toFixed(2)} ms</div>
                        <div className="fill" style={{ width: `${end *21.5*10}px`,backgroundColor:`${colors[Math.floor(Math.random()*10)]}` }}></div>
                        <div className="p-x font-small">{end.toFixed(2)} ms</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <button onClick={scrollRight} ><img className="red-arrow" src={img1}/></button>
      </div>
      : ""

  )
}