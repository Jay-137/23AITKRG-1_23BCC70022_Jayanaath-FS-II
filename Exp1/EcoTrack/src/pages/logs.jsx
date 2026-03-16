// //Activities whos carbon is more or equal to 4

// import logs from "../data/logs";

// const Logs = () =>{
//     const highImpact = logs.filter(
//         (log) => log.carbon >= 4
//     );
//     return(
//         <div>
//             <h2>High Carbon Activities</h2>

//             {highImpact.map((log) => (
//                 <li key={log.id}>
//                     {log.activity} - {log.carbon}Kg
//                 </li>
//             ))}
            
           
//         </div>
//     )
// }

// export default Logs;


import logs from "../data/logs";

const Log=()=>{
    const HighImpact=logs.filter(log=>log.carbon>=4);
    return(
        <div>
            <h2>High carbon Activities</h2>
        <ul>
            {HighImpact.map(log=>(
                <li key={log.id}>{log.activity}-{log.carbon}Kgs</li>
            ))}
            </ul>
        </div>
    );
}

export default Log;