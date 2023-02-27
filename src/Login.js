import React,{useState} from 'react';
import {Helmet} from "react-helmet";
import './login.css'

function Login(props){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[invalid,setInvalid] = useState('')    

    const validate = (e) => {
    e.preventDefault()
    if(email==="" && password===""){setInvalid("Enter username and password")}
    else if(email!=props.email || password!=props.password){setInvalid("Incorrect username or password")}
    }
    return(
    <>      
    <section>
        <div className="form-box">
        <form action=''>
            <h2>Login</h2>
            <div className="input-box">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Email</label>
            </div>
            <div className="input-box">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="">Password</label>
            </div>
            <div className='invalid'>{invalid}</div>
            <div className="forgot">
            <label htmlFor=""><input type="checkbox"/>Remember Me</label> 
            <a href="#">Forgot Password?</a>           
            </div>
            <button type="submit" onClick={validate}>Log in</button>
            <div className="register">
            <p>Don't have an account?<a href="#" onClick={()=>props.setCurrentForm('register')}>Register</a></p>
            </div>
        </form>
        </div>
    </section>
    <Helmet>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </Helmet>
    </>
    )
}
export default Login;