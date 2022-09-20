import { useEffect } from "react";
import { Column } from "./Column";

export function StockList({codes}){
    



return(
    <div>
        <div className="text-left font-title font-bold">You may be interested in</div>
        {
            codes.map(({code,name,color})=>{
                return(
                   <Column name={name} color={color} code={code}/>
                )
            })
        }
    </div>
)
}