import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
const [userDetails,setUserDetails]=useState()
const {postDetials}=useContext(PostContext)
const {firebase} =useContext(FirebaseContext)

useEffect(()=>{
  // const {userID} =postDetials   
  // console.log(userID);
  // firebase.firestore().collection('users').where('id','==',userID).get().then((res)=>{
  //   res.forEach((element)=>{
  //     console.log(element.data);
  //   })
  // })
})

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}



export default View;
