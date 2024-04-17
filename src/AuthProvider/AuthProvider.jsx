import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null) ;

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginuser = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password) 
    }

    const authinfo = {
        user,
        createuser,
        loginuser
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;