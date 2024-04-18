import { useContext } from "react";
import { Navigate,useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const HideRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname,"hidden from")

    
    console.log(user)
    if (loading) {
        return <div className="flex justify-center"><span className="loading  loading-spinner loading-lg"></span></div>
    }
    else if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default HideRouter;