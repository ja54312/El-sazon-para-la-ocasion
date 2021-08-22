import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/React/header/header";


export default function App(){
  return(
    <>
       <Header></Header>
    
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);