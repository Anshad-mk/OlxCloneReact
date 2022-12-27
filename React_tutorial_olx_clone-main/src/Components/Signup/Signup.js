import React from 'react';
import { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history = useHistory()
  const[userName,setUserName]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[Password,setPassword]=useState('')
  const {firebase} =useContext(FirebaseContext)

  const handleSubmit =(event)=>{
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,Password).then((result)=>{
      result.user.updateProfile({displayName:userName}).then(()=>{
              firebase.firestore().collection('users').add({
                id:result.user.uid,
                userName:userName,
                phone:phone
              })
              history.push('/login')
      })
    })


  }

  return (
    <div>
      <div className="signupParentDiv">
        <img onClick={()=>history.push('/')} className='btn' width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={userName}
            onChange={(event)=>{setUserName(event.target.value)}}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(event)=>{setPhone(event.target.value)}}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(event)=>{setPassword(event.target.value)}}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Signup</button>
        </form>
        <a onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
