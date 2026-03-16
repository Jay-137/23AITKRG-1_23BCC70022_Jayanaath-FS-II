import {fetchLogs} from "../store/logSlice";
// import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
const Logs=()=>{
  const {data,status,error}=useSelector(state=>state.logs);
  const dispatch=useDispatch();
  const clickHandler=()=>{
      dispatch(fetchLogs());
  }

  // useEffect(()=>{
  //   if(status==='idle')
  //     dispatch(fetchLogs());
  // },[status,dispatch])
  let content=null;
   if(status==='loading')
      content=<p>Loading content....</p>;
   else if(status==='failed')
      content=<p>{error}</p>
   else{
    const highcarbon=data.filter((log)=>log.carbon>=4);
    content=(
      <>
      <ul>
          {highcarbon.map(elem=>(
              <li key={elem.id}>{elem.activity}={elem.carbon}Kgs</li>
          ))}
      </ul>
      </>  
    )
  }
  return(
    <>
     <h1>High Carbon Activities</h1>
     <button onClick={clickHandler} style={{padding:"5px"}}>Fetch Logs</button>
     {content}
    </>
  )
}
export default Logs;


