import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { Switch } from "react-router-dom";
import { StockList } from "./StockList";
import { StockDetails } from "./StockDetails";
import { NotFound } from "./NotFound";
import { Gaant } from "./Gaant";

function App() {
  // const codes =["BAC","GE","F","MSFT","NFLX","NVDA"];
  const codes = [{code:"BAC",name:"Bank of America Corp",color:"blue"}, {code:"NFLX",name:"Netflix",color:"red"}];

  return (
    <div className="App">

      <Switch>
        <Route path="/tasks">
          <Gaant/>
        </Route>
        <Route path="/stock/:code">
          <StockDetails codes={codes} />
        </Route>
        <Route path="/" exact>
          <StockList codes={codes}/>
        </Route>
        <Route path="**">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
