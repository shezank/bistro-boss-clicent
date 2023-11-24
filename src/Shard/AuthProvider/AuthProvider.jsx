import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../Firebase/Firebase.confit';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const gProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublice = useAxiosPublic();

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            if (currenUser) {
                // get token and store clicent 
                const userInfo = { email: currenUser.email };
                axiosPublice.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                // do somting 
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })

        return () => {
            return unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;