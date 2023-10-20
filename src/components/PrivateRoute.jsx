import { auth } from "../firebase-setup/firebase"; 
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export const PrivateRoute = ({children}) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return "Loading...";
  }

  if(user){
    return children;
  } else{
    return <Navigate to="/" />;
  }
};