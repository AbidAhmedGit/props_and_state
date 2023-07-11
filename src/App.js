import "./styles.css";
import { useState } from "react";
import Test from "./Test";

export default function App() {
  const [counter, setCounter] = useState(0);

  console.log(counter);
  console.log("re render");

  return (
    <div className="App">
      {/* <div>Count: {counter}</div> */}
      <button onClick={() => setCounter(counter + 1)}> Increment </button>
      <Test counter={counter}>
        <div> I am from parent </div>
      </Test>
    </div>
  );
}
