import { Outlet } from "react-router-dom"
import LoginPage from "../../pages/LoginPage/LoginPage"

const ProtectedRoute = ({ auth ,setAuth }) => {
  return auth ? <Outlet/> : <LoginPage setAuth={setAuth}/>
}

export default ProtectedRoute