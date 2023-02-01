import { Navigate } from "react-router-dom";
import { useStoreContext } from "../context/store";

const ProtectedRoute = ({ children }) => {
  const {
    store: { otp, store, verify },
  } = useStoreContext();
  console.log(otp, store, verify, "store");
  
    
  return !localStorage.getItem("store_id") ? <Navigate to="/" /> : children;
};

export default ProtectedRoute;
