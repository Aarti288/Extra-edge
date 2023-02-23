import React from "react";
import "../Component/Profile.css"
import {RiHeart3Fill} from 'react-icons/ri';

import { useState,useEffect } from "react";
import EditData from "./EditData";


const ProfileData=()=>{
    const [toggle, setToggle] = useState(false);
    const [userid,setuserId]=useState(1);
    let [name, setName] = useState(" ");
  let [username, setUsername] = useState(" ");
  let [email, setEmail] = useState(" ");
  let [website, setWebsite] = useState(" ");
  let [phone, setPhone] = useState(" ");
    const [users,setUser]=useState([]);
    const  [toggleHeart, setToggleHeart] = useState(false);
  const [id,setId]=useState([]);

  function deleteData(id)
  {
    function removeObjectWithId(users, id)
    {
      const objWithIdIndex = users.findIndex((obj) => obj.id === id);
      users.splice(objWithIdIndex, 1);
      return users;
     }
      const newArr = removeObjectWithId(users, id);
      console.log(newArr);
     

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
     
        setuserId(id);
       
        setName(name);
        setEmail(email);
        setUsername(username);
        setPhone(phone);
        setWebsite(website);
        {
          if (toggle) {
            setToggle(false);
          } 
          else{
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
   
    <span onClick={()=>deleteData(ele.id)} className="delete-btn">Delete</span>
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