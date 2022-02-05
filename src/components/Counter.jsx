import React from "react";
import Count from "./Count";
import Increase from "./Increase";
import Decrease from "./Decrease";
function Counter() {
  const [count, setCount] = React.useState(0);

  function btnIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function btnDecrease() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="parent">
      <h1>Counter</h1>
      <div className="header">
        <Count count={count} />
        <div className="child">
          <Increase handleClick={btnIncrement}
           />
          <Decrease handleClick={btnDecrease} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
