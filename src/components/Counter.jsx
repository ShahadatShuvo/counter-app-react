import React from "react";
function Counter() {
  const [count, setCount] = React.useState(0);

  function btnIncrement() {
    setCount(count + 1);
  }

  function btnDecrease() {
    setCount(count - 1);
  }
  return (
    <div className="parent">
      <h1>Counter</h1>
      <div className="header">
        <h1>{count}</h1>
        <div className="child">
          <button onClick={btnIncrement}>Increase</button>
          <button onClick={btnDecrease}>Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
