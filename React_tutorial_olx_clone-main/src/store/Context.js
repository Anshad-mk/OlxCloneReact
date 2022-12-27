import {createContext, useState} from 'react'

export const FirebaseContext =createContext(null) 
export const AuthCountext=createContext(null)


export default function Context ({children}){
    const [user,setUser]=useState(null)
    return(
<AuthCountext.Provider value={{user,setUser}}>
{children}
</AuthCountext.Provider>
    )
 }