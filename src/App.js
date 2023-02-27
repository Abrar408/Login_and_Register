import React,{useState} from 'react';
// import {Helmet} from "react-helmet";
// import './index.css'
// import './login.css'
// import './register.css'
import Login from './Login'
import Register from './Register'

function App() {
  const _email = 'abrar123@gmail.com'
  const _password = 'abcd123'      
  const[currentForm,setCurrentForm] = useState('login')
  return (    
    currentForm === 'login' ?   
    <Login email={_email} password={_password} setCurrentForm={setCurrentForm}/> : <Register email={_email} password={_password} setCurrentForm={setCurrentForm}/>
  )
}

export default App;
