import React from 'react';
import {useState,useContext} from 'react'
import {FirebaseContext } from '../../store/Context'
import { useHistory } from 'react-router-dom';


import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const {firebase}= useContext(FirebaseContext)
  const history=useHistory()
  const loginfn=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
  history.push('/')
}).catch((err)=>{
  alert(err.message)
})
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" onClick={()=>history.push('/')} className='btn' height="200px" src={Logo}></img>
        <form onSubmit={loginfn}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John@gmail.com"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
