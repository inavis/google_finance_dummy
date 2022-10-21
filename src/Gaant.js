import { Fragment, useEffect } from "react"
import { Chart } from "react-google-charts";
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";


export function Gaant(){
    let tasks = [
        {
          start: new Date(2020, 1, 1),
          end: new Date(2020, 1, 2),
          name: 'Idea',
          id: 'Task 0',
          type:'task',
          progress: 45,
          isDisabled: true,
          styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        }
    ];
    
    var max=15;
    var res={
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
          }]};
          useEffect(()=>{
            res["data"].map((ele,index)=>{
                console.log(index,ele["operation_name"],ele["start_time_ts"],ele["end_time"],ele["duration"])
                if(index>0){
                    console.log(new Date(ele["end_time"]).getTime() - new Date(res["data"][index-1]["end_time"]).getTime())
                }
            })
          })
    var data =[{name:"process1",start:0,end:0.3},
    {name:"process1",start:0.3,end:0.8},
    {name:"process1",start:0.5,end:1.3},
    {name:"process1",start:0.4,end:1.8},
    {name:"process1",start:4.9,end:1.4}    
]
    return(
        <div>
            <div id="chart_div"></div>
            GAANTT3
            <Gantt tasks={tasks} />
            <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
            <div style={{width:"30%",overflow:"scroll",height:"300px"}}>
                <div className="main-row  sub-row-left">SERVICES</div>
                <div className=" sub-row-left">task144444444444444444444444444444455555555555555555555555</div>
                <div className=" sub-row-left">task1</div>
                <div className=" sub-row-left">task1</div>
                <div className=" sub-row-left">task1</div>
            </div>
            <div style={{width:"70%",overflow:"scroll"}}>
                <div className="main-row"  style={{display:"flex",flexDirection:"row"}}>

                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">1.0s</span>
                    <span className="sub-row">1.5s</span>
                    <span className="sub-row">2.0s</span>
                    <span className="sub-row">2.5s</span>
                    <span className="sub-row">3.0s</span>
                    <span className="sub-row">3.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                    <span className="sub-row">0.5s</span>
                </div>
                <div className="main-row"  >
                    <div>
                        {
                            data.map(({name,start,end})=>{
                                return(
                                    <div className="sub-row-2" style={{display:"flex",flexDirection:"row"}}>
                                        <div className="p-x" style={{marginLeft:`${start*10*20}px`}}>{start}</div>
                                        <div className="fill" style={{width:`${start+end*10*22.4}px`}}></div>
                                        <div className="p-x">{end}</div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}