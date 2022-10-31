import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //create email and password authentication for signup
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //eta spy er moto kaj kore, eta diye bujha jay user login hyse naki hyni

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return()=>{
            return unsubscribe();
        }

    },[])

    // signIn with email and pass for login

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;