import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'
import firebase from '../api/firebase'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'

const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext)
    

    const login = (user) => {
        setAuth({
            isAuthenticated: true,
            user: user
        })
    }

    const logout = () => {
        setAuth({
            isAuthenticated: false,
            user: null
        })
    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(firebase.auth, provider)
        
        if (result.user) {
            login(result.user)
        }
        console.log(result)
        return result
    }


    return ({
        auth,
        login,
        logout,
        signInWithGoogle
    })
}

export default useAuth
