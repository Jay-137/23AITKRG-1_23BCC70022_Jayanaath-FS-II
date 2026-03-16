import { useEffect,useState } from "react";

const Tip=()=>{
  const [tip,setTip]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
    useEffect(()=>{
      const fetchTip=async ()=>{
        try{
          setLoading(true);
          const response= await fetch("https://api.adviceslip.com/advice");
          if(!response.ok)
            throw new Error("Failed to fetch advice");
          const data=await response.json();
          setTip(data.slip.advice);
        }
        catch(err){
          setError(err.message);
        }
        finally{
          setLoading(false);
        }
      }
      fetchTip();
    },[])
    if(loading)
      return <span>Loading....</span>
    if(error)
      return <span>{error}</span>
    return <span>{tip}</span>
}
export default Tip;