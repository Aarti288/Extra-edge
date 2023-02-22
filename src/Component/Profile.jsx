import React from "react";
import "../Component/Profile.css"
import {RiHeart3Fill} from 'react-icons/ri';

import { useState,useEffect } from "react";
import EditData from "./EditData";
import axios from "axios";

const ProfileData=()=>{
    const [toggle, setToggle] = useState(false);
    const [userid,setuserId]=useState();
    let [name, setName] = useState(" ");
  let [username, setUsername] = useState(" ");
  let [email, setEmail] = useState(" ");
  let [website, setWebsite] = useState(" ");
  let [phone, setPhone] = useState(" ");
    const [users,setUser]=useState([]);
    const  [toggleHeart, setToggleHeart] = useState(false);
  const [id,setId]=useState([]);

  const deleteData=async()=>{
    console.log("deleting");
    await axios.delete(`https://jsonplaceholder.typicode.com/users/1`);
  }
    const changeColor = (e) =>{
      setId(e);
      setToggleHeart(!toggleHeart)
       }
    const getUsers=async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        setUser(await response.json());
        
    }
    useEffect(()=>{
      
        getUsers();
       
    },[]);
    function displayModal({id,name,email,phone,website}) {
      console.log("profile",name);
        setuserId(id);
        setName(name);
        setEmail(email);
        setUsername(username);
        setPhone(phone);
        setWebsite(website);
        {
          if (!toggle) {
            setToggle(true);
          } 
        }
      }
    
    let userData = users.map((ele, key) => {
        return (
            <div className="card-container">
            <div className="image-container"><img className="avtar-img" src={`https://avatars.dicebear.com/v2/avataaars/${ele.name}.svg?options[mood][]=happy
`}/></div>
<div><span className="Username">{ele.name}</span></div>
<div><span>{ele.username}</span></div>
<div><span>{ele.email}</span></div>
<div><span>{ele.phone}</span></div>
<div><span>{ele.website}</span></div>
<div className="buttons">
    <span id={ele.id} className="like-btn"><RiHeart3Fill className={
id==ele.id? 'heart active' : 'heart'
} onClick={()=>changeColor(ele.id)} /></span>
   <span className="edit-btn" key={key} onClick={() => displayModal(ele)}>Edit</span> 
   
    <span onClick={deleteData} className="delete-btn">Delete</span>
</div>

</div>
        );
      });
      return (
        <div className="main-container">
          {userData }
          {toggle ? (
            <EditData id={userid} name={name} username={username} email={email} website={website} phone={phone}/>
          ) : (
            " "
          )}
        </div>
      );
          }
export default ProfileData;