import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


 export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser= (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        setUser(null)
        
        return signOut(auth);
      }

    const loginUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const userInfo ={
        user, loading, createUser, setUser, loginUser, logOut
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
    
        return () => {
          unsubscribed();
        };
      }, []);
    return (
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;