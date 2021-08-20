import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
function Login() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function login(event) {
        event.preventDefault(); //stops the refresh

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }
    function register(event) {
        event.preventDefault(); //stops the refresh

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='Amazon Logo'/>
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type='email'/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type='password'/>
                    <button onClick={login} type='submit' className='login__signinButton'>Sign In</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                </form>
                
                
            </div>


        </div>
    )
}

export default Login;
