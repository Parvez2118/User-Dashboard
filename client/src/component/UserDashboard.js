import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram ,AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
function UserDashboard(){
  const [data,setData]= useState({});
  let navigate=useNavigate();
  const callAboutPage= async ()=>{
      try{
          const res= await fetch('http://localhost:8000/abc' ,{
              method:"GET",
              headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
              },
              credentials:"include"
});
          const data1= await res.json();
          setData(data1);
          if(!res.status===200){
              const error= new Error(res.error);
              throw error;
          }
      }
catch(err){
          navigate('/login');
      }
  }

    useEffect(() => {
        callAboutPage();
    
      },[]);
    return(
        <div className='main'>
          <div className="profile-card">
            <div className="image">
                <img className="profile-img" src="https://speakerhub.com/sites/default/files/styles/speaker_share/public/user/profile_picture/2021/07/29/wyatt-carrell.png?itok=sGiwD8RS"></img>
            </div>
           
            <div className="text-data">
                <span className="name">Name:<span style={{paddingLeft:8+"px",fontSize:22+"px",fontWeight:400}}>{data.name}</span></span>
                <span className="name">Email:<span style={{paddingLeft:8+"px",fontSize:22+"px",fontWeight:400}}>{data.email}</span></span>
                <span className="name">Occupation:<span style={{paddingLeft:8+"px",fontSize:22+"px",fontWeight:400}}>{data.job}</span></span>
                <span className="name">Phone No.:<span style={{paddingLeft:8+"px",fontSize:22+"px",fontWeight:400}}>{data.phonenumber}</span></span>
            </div>
            <div className="media-buttons">
             <a  className="link" href="#"><BsFacebook></BsFacebook></a>
             <a  className="link" href="#"><AiFillInstagram></AiFillInstagram></a>
             <a className="link" href="#"><BiLogoGmail></BiLogoGmail></a>
             <a className="link" href="#"><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
        </div>
        </div>
    )
}

export default UserDashboard;
