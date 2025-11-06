import { createContext, useState } from "react";

const AuthContext = createContext({}); //Obs! Tomt js-objekt inuti

{/*
Tänk såhär:
AuthContext = vattenslang
AuthProvider = vattenkällan som rinner ner i vattenslangen
useContext(AuthContext) = hink som fångar upp vattnet från vattenslangen

- Utan AuthContext (vattenslangen) så finns det ingen förbindelse mellan källan och hinken.
- Utan Authprovider (vattenkälla) så finns det inget vatten. 

Såhär får komponenten tillgång till state:
import AuthContext from "../context/AuthProvider";

const { auth, setAuth } = useContext(AuthContext);
*/}

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

     
    {/*Alla komponenter som ligger inom <AuthContext.Provider> i React-trädet delar samma state, och om någon av dem ändrar auth, så uppdateras alla andra automatiskt.*/}
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;