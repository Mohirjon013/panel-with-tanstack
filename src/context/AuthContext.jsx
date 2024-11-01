import { createContext, useState } from "react";

export const Context = createContext()

export const AuthContext = ({children}) => {
    const [token , setToken] = useState(null)
    const [register , setRegister] = useState(null)


    return (
        <Context.Provider value={{token, setToken, register, setRegister}}>
            {children}
        </Context.Provider>
    )

}