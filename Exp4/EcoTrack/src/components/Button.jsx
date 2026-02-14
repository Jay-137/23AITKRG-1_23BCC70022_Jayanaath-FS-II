import React from "react";
//Memoized Button component to prevent unneccesary re render
const Button=React.memo(({clkHandler,textVal})=>{
  console.log("Button Rendered");
  return (
    <button onClick={clkHandler} style={{padding:"5px"}}>{textVal}</button>
  )
});
export default Button;