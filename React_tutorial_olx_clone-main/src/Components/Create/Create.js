import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {} from '../Header/Header'
import { FirebaseContext,AuthCountext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


const Create = () => {
  const history=useHistory()
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthCountext)
  const [name,setName]=useState('');
  const [category,setCategory]=useState('');
  const [Price,setPrice]=useState('');
  const [image,setImage]=useState(null);
  const date=new Date()

  const handlesubmit=()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('Products').add({
          name,
          category,
          Price,
          url,
          userID:user.uid,
          createdAt:date.toDateString()
         })
          history.push('/')
         
      })
    })
  }

      

  

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number"
              id="fname" 
              value={Price}
              onChange={(e)=>{
                setPrice(e.target.value)
              }}
            name="Price" />
            <br />
          
          <br />
          {image ? <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : '' }></img> :''}
          
          
            <br />
            <input
            onChange={(e)=>{
              setImage(e.target.files[0])
            }}
             type="file" />
            <br />
            <button
            onClick={handlesubmit}
             className="uploadBtn">
              upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
