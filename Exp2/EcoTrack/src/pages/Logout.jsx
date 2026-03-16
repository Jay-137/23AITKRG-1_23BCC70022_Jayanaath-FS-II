import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

const Logout=()=>{
  const {setIsLoggedIn}=useAuth();
  const navigate=useNavigate();
  const handleLogout=()=>{
    setIsLoggedIn(false);
    navigate("/login");
  }
  return(
      <button onClick={handleLogout}>Logout</button>
  )
}
export default Logout;