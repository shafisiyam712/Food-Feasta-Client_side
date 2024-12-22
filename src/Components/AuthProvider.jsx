import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FirebaseInt";

export const authContext=createContext(null)

const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        //setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInUser=(email,password)=>{
        //setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const singInWithGoogle=()=>{
        return signInWithPopup(auth,provider)
    }

    const manageProfile = (name,image) =>{
        return updateProfile(auth.currentUser,{
             displayName:name,photoURL:image
         })
       }
    const singOutUser=()=>{
        //setLoading(true)
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            // console.log("currently logged",currentUser);
             setUser(currentUser)  
             setLoading(false)
             
             
        })
        return()=>{
            unSubscribe()
        }
    } ,[])

    const authMember={
        loading,
        createUser,
        singInUser,
        singOutUser,
        singInWithGoogle,
        manageProfile,
        user,
    }

    return (
        <authContext.Provider value={authMember}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;