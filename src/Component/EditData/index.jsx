import "./style.css";
import crossImg from "../../Assets/crossImg.png";

import { useEffect, useState } from "react";
import axios from "axios";

function EditData(props
) {
  
  let [name, setName] = useState(" ");
  let [email, setEmail] = useState(" ");
  let [website, setWebsite] = useState(" ");
  let [phone, setPhone] = useState(" ");
  const [displayModal, setDisplayModal] = useState(false);
  
 
const handleChange=(e)=>{
      if(e.target.name=="name")
      {
      setName(e.target.value);
      }
      if(e.target.name=="email")
      {
      setEmail(e.target.value);
      }
      if(e.target.name=="website")
      {
      setWebsite(e.target.value);
      }
      if(e.target.name=="phone")
      {
      setPhone(e.target.value);
      }
     
}

  function ModalToggle() {
    if (displayModal) {
      setDisplayModal(false);
    } else {
      setDisplayModal(true);
    }
  }
  useEffect(()=>{
       setName(props.name);
       setEmail(props.email);
       setWebsite(props.website);
       setPhone(props.phone)
  },[]);
  const onSubmit=async(e)=>{
    if (displayModal) {
      setDisplayModal(false);
    } else {
      setDisplayModal(true);
    }
      e.preventDefault();

     
      await axios.put(`https://jsonplaceholder.typicode.com/users/${props.id}`,
      {
         name:"Aarti"
        })
      .then(function (response){console.log(response)})
    
  }
  return (
    <>
      {displayModal ? (
        ""
      ) : (
        <div className="portfolio-container">
            <span className="view-portfolio">Edit Card Data</span>
            <span className="view-portfolio"><img onClick={ModalToggle}className="crossImg" src={ crossImg }/></span>
          <div className="view-portfolio-modal">
              <div className="portfolio-heading-img">

                  <div className="form-container"> 
                    <label >Name</label>
                 
                  <input type="text" placeholder="Enter username" value={name} name="name" onChange={e=>handleChange(e)}/></div>

                  <div className="form-container"> 
                  <label >Email</label>
                  <input type="text" value={email} placeholder="Enter email" name="email" onChange={e=>handleChange(e)}/>
                  </div>
                 
                  <div className="form-container"> 
                <label >Phone</label>
                <input type="text" value={phone} placeholder="Enter phone" name="phone" onChange={e=>handleChange(e)}/>
                </div>
                <div className="form-container"> 
                <label >Website</label>
                <input type="text" value={website} placeholder="Enter website" name="website" onChange={e=>handleChange(e)}/>
                </div>
                
              </div>
              
              </div>
              <div className="action-btn">
              <button className="cancel-btn" onClick={ModalToggle}>Cancel</button>
              <button className="ok-btn" onClick={e=>onSubmit(e)}>OK</button>
              </div>
          </div>
       
      )}
    </>
  );
}
export default EditData;
