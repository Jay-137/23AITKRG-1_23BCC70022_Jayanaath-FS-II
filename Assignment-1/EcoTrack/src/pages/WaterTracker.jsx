import { useCallback, useEffect, useState } from "react";
import CounterDisplay from "../components/CounterDisplay";
import Tip from "../components/Tip";
const WaterTracker=()=>{
  const [count,setCount]=useState(()=>{
    const wCount=localStorage.getItem("water");
    return wCount?Number(wCount):0;
  });
  const [goal,setGoal]=useState(8);
  
  useEffect(()=>{

    localStorage.setItem("water",count);
 
  },[count])

  const incrementCount=useCallback(()=>{
    setCount(prev=>prev+1);
  },[]);
  const decrementCount=useCallback(()=>{
    if(count>0)
      setCount(prev=>prev-1);
    else
      alert("Count cannot be negative");
  },[])
  const resetCount=useCallback(()=>{
    setCount(prev=>0);
  },[])
  const incrementGoal=()=>{
    setGoal(prev=>prev+1);
  }
  const decrementGoal=()=>{
    setGoal(prev=>prev>0?prev-1:0);
  }
  return (
    <div>
        <h1>Track your daily water consumption</h1>
        <h2 style={{color:"green"}}>Your daily tip of the day: <Tip/></h2>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <button onClick={decrementGoal} style={{padding:"5px",width:"fit-content",height:"fit-content"}}>-</button>
          <h2>Your current goal is: <span style={{color:"red"}}>{goal}</span></h2>
          
          <button onClick={incrementGoal} style={{padding:"5px",width:"fit-content",height:"fit-content"}}>+</button>
          </div>
        <CounterDisplay 
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
        count={count}/>

        {count>=goal && <h3>🎉Congratulations, Goal Reached</h3>}
    </div>
  )
};
export default WaterTracker;