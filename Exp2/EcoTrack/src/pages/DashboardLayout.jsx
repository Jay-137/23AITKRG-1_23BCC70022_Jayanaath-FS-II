import { Link,Outlet } from "react-router-dom";
const DashboardLayout=()=>{
  return(
    <div style={{padding:"1rem"}}>
      <h2>Dashboard</h2>
      <nav>
        <Link to="summary">Summary</Link>{" | "}
        <Link to="analytics">Analytics</Link>{" | "}
        <Link to="settings">Settings</Link>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  )
}
export default DashboardLayout;