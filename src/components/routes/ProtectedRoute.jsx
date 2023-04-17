import { Outlet } from "react-router-dom"
import LoginPage from "../../pages/LoginPage/LoginPage"
import { useSelector } from "react-redux"
import { AuthSlice } from './../../redux/AuthSlice';

const ProtectedRoute = () => {
  const auth = useSelector((state) => state.Auth.isAuth)
  return auth ? <Outlet/> : <LoginPage/>
}

export default ProtectedRoute