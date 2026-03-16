import React from "react";
const CounterDisplay=({count,incrementCount,decrementCount,resetCount})=>{
  console.log("child rendered");
  return(
    <>
      <h2>Water count: <span style={{color:"blue"}}>{count}</span></h2>
        <div>
          <button onClick={incrementCount} > Increase</button> {" "}
          <button onClick={decrementCount} > Decrease</button>{" "}
          <button onClick={resetCount} > Reset</button>
        </div>
    </>
  )
}
export default React.memo(CounterDisplay) ;