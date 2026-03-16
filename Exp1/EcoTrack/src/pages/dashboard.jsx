import logs from '../data/logs'
const Dashboard=()=>{
    const total = logs.reduce((sum,log)=>sum+log.carbon,0);
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Total carbon footprint:{total}Kg</p>
            <ul>
                {logs.map((log)=>(
                    <li key={log.id}>
                        {log.activity}-{log.carbon}Kgs
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Dashboard;



// import logs from "../data/logs";

// const Dashboard = () => {
//     const totalCarbon = logs.reduce((sum, log)=> sum+log.carbon, 0);

//     return (
//         <div>
//             <h2>Dashboard</h2>
//             <p>Total Carbon Foootprint: {totalCarbon} Kg</p>

//             <ul>
//                 {
//                     logs.map((log)=>(
//                         <li key={log.id}>
//                             {log.activity} - {log.carbon}Kg
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Dashboard;