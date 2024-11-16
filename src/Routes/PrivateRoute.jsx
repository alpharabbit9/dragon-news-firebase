import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    const location = useLocation() ;

    console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children ;
    }

    else{
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;