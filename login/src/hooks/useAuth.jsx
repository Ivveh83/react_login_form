{/*Den här komponenten gör att jag slipper importera de två komponenterna nedan i resten av applikationen*/}

import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;