import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProbider = new GithubAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googlelogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githublogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProbider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updatedProfile = (name, photo) => {
        return ( updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }) )
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
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
        githublogin,
        loading,
        updatedProfile
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;