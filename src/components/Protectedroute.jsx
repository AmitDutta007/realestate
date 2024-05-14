import { Outlet, Navigate } from "react-router";
import useLoginStatus from "../hooks/useAuthStatus";
import Spinner from "./Spinner";
import { useLocation } from "react-router-dom";

const Protectedroute = () => {
    const { logInUser, checkingStatus } = useLoginStatus();
    const location = useLocation();
    console.log(location.pathname)
    
    if (checkingStatus) {
        return <Spinner/>;
    }
    return logInUser ? <Outlet /> : <Navigate to="/create-listing" />;
}

export default Protectedroute