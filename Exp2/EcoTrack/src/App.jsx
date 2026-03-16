import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import ProtectedRoute from "./protectedroutes/ProtectedRoute";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardSummary from "./pages/DashboardSummary";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import Logs from "./pages/Logs";
import DashboardSettings from "./pages/DashboardSettings";
import Logout from "./pages/Logout";

const App=()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<ProtectedRoute/>}>
          <Route path="/" element={<DashboardLayout/>}>
            <Route index element={<DashboardSummary/>}/>
            <Route path="summary" element={<DashboardSummary/>}/>
            <Route path="analytics" element={<DashboardAnalytics/>}/>
            <Route path="settings" element={<DashboardSettings/>}/>
          </Route>
          <Route path="/logs" element={<Logs/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;