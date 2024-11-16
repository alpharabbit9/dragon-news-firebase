import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext() ;
const AuthProvider = ({children}) => {

    const createNewUser = (email ,password) => {

        setLoading(true)

       return createUserWithEmailAndPassword(auth ,email , password) ;

    }

    const userLogin=(email,password) =>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password);

    }

    const userLogOut= () => {
        setLoading(true)

        return signOut(auth) ;
    }

    const [user , setUser] = useState(null) ;
    const [loading , setLoading] = useState(true)

    console.log(loading,user)

    const authInfo = {
        user ,
        setUser,
        createNewUser ,
        userLogin,
        userLogOut,
        loading
    }

    useEffect(() =>{

        const unSubscribe = onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })

        return () =>{
            unSubscribe() ;
        }



    },[])


    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;