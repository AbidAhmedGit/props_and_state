import "./styles.css";
import { useState } from "react";

export default function Test(props) {
  return (
    <>
      <div className="App">Props from parent : {props.counter}</div>
      <div> {props.children} </div>
    </>
  );
}
