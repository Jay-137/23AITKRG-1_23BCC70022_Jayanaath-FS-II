import logs from "../data/logs";
const Logs=()=>{
  const highcarbon=logs.filter((log)=>log.carbon>=4);
  return(
    <>
      <h1>High Carbon Activities</h1>
      <ul>
        {
          highcarbon.map(elem=>{
            return(
              <li key={elem.id}>{elem.activity}={elem.carbon}Kgs</li>
            )
          })
        }
      </ul>
    </>
  )
}
export default Logs;