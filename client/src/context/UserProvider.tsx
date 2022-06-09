import { useReducer, useEffect } from "react"
import { API } from "../lib/api";
import { UserContextProps } from "./interface/context-interface";
import { UserContext } from "./UserContext"
import { UserReducer } from "./UserReducer"

interface props {
    children: JSX.Element | JSX.Element[]
}

const InitialState: UserContextProps = {
    user: null
};

export const UserProvider =  ({children} : props)=>{
    const [state, dispatch] = useReducer(UserReducer, InitialState)
    useEffect(() => {
        const user = window.localStorage.getItem('user')
        if(user){
            dispatch({
                type: 'login',
                payload: JSON.parse(user) 
            })
        }
    },[]);

   

    return (
        <UserContext.Provider value ={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

