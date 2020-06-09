import React from "react";
import "./App.css";
import "./css/tailwind.css"
import Home from "./Components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Order from "./Components/Order";

function App() {
  return (
    <div className="">
      <BrowserRouter>

        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/order"> <Order/> </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
