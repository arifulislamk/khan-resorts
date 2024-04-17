import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProbider = new GithubAuthProvider();

    const [user, setUser] = useState(null);

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googlelogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githublogin = () => {
        return signInWithPopup(auth, githubProbider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('inside from useeffect', currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authinfo = {
        user,
        createuser,
        loginuser,
        googlelogin,
        logOut,
        githublogin
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;