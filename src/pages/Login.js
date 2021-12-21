import React, { useEffect } from 'react'
import * as firebaseui from 'firebaseui'
import firebase from '../api/firebase';
import { StyledFirebaseAuth  } from 'react-firebaseui';
import useAuth from '../hooks/useAuth';
import { Container, Paper, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';


const Login = () => {
    const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh; 
    background-image: transparent;
`
    const { signInWithGoogle } = useAuth()
    return (
        <LoginContainer>
            <Paper elevation={2} >
                <Typography variant="h4" align="center">
                    Login
                </Typography>
                <Button onClick={signInWithGoogle}>
                    Login with Google
                </Button>
            </Paper>
        </LoginContainer>
    )
}

export default Login
