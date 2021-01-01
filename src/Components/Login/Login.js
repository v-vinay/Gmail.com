import { Button } from '@material-ui/core';
import React from 'react'
import {useDispatch} from "react-redux";
import { logIn } from '../../features/UserSlice';
import { auth, provider } from '../../firebase';
import "./Login.css";
function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(logIn({
                displayName: user.displayName,
                email: user.email,
                profileURL: user.photoURL
            }));
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login-container">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=1200:675" alt=""/>
                <Button variant="contained" color="primary" onClick={() => signIn()}>Login</Button>
            </div>
        </div>
    )
}

export default Login
