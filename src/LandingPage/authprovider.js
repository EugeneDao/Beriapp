import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "./components/config"

export const Authcontext = React.createContext();
export default function AuthProvider(children) {;
const [user, getUser] = useState({});
const navigate = useNavigate();
const [isLoading,setIsLoading] = useState({});

React.useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((user)=>{
        console.log({user});
        if (user){
            const {displayName, email, uid, photoURL} = user
            setUser({displayName, email, uid, photoURL});
            setIsLoading(false);
        }

    })
})