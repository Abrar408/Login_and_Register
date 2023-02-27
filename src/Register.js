import React,{useState} from 'react';
import {Helmet} from "react-helmet";
// import './register.css'

function Register(props){

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
            <h2>Register</h2>
            <div className="input-box">
            <ion-icon name="person-outline"></ion-icon>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Username</label>
            </div>
            <div className="input-box">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Email</label>
            </div>
            <div className="input-box">
            <ion-icon name="lock-open-outline"></ion-icon>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            </div>
            <div className="input-box">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="">Confirm Password</label>
            </div>
            {/* <div className='invalid'>{invalid}</div> */}
            {/* <div className="forgot">
            <label htmlFor=""><input type="checkbox"/>Remember Me</label> 
            <a href="#">Forgot Password?</a>           
            </div> */}
            <button type="submit" onClick={validate}>Register</button>
            <div className="register">
            <p>Already have an account?<a href="#" onClick={()=>props.setCurrentForm('login')}>Log in</a></p>
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
export default Register;