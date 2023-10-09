import React ,{useState}from 'react'
import "./AddCompany.css"
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import CountryData from "../../CountryData.json"
import { Outlet ,useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const AddCompany = () => {
    const [formData, setFormData] = useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        country_name:"",
        address:""
    })
    const handlData=(e)=>{
        console.log({...formData,[e.target.name]:e.target.value})
        setFormData({...formData,[e.target.name]:e.target.value});

    }
const [phoneNumber, setPhoneNumber] = useState("");
const handleNumber=(value)=>{
    setPhoneNumber(value)
}
const handlSubmit=()=>{
    if(formData.name.length===0){
        alert("sorry n")
    }
    else if(formData.username.length===0){
        alert("sorry u")
    }
    else if(formData.email.length===0){
        alert("sorry e")
    }
    else if(phoneNumber.length===0){
        alert("sorry p")
    }
    else if(formData.country_name.length===0){
        alert("sorry coun")
    }
    else if(formData.address.length===0){
        alert("sorry ad")
    }
    final()
}
const final=()=>{
    const sendData={
        name:formData.name,
        username:formData.username,
        email:formData.email,
        mobile:phoneNumber,
        country_name:formData.country_name,
        address:formData.address,
    }
    console.log(sendData);

}
  return (
          <div className="add-company">
      <div className="add-company-left" style={{ width: "30rem", height: "93rem" }}>
        <SideBar />
      </div>
      <div className="add-company-right" style={{ width: "161.9rem", height: "92.9rem" }}>
        <div className="add-company-nav">
          <Header />
        </div>
        <div className="add-company-main">
          <div className="add-company-contaner">
            <p>Add Company</p>
            <div className='add-company-div1'>
            <div className='sub1-add-company-div1' >
            <div className='person-add-company-sub1-add-company-div1'>
                <input  type='file' className='personfile' />
            <img src='./assets/uber.svg' alt='none' className='person-add-company'/>
            </div >
            <div className='subsub1-sub1-add-company-div1'>
                <div className='sub1-subsub1-sub1-add-company-div1'>
                    <label>Name</label>
                    <input name='name' type='text' value={formData.name} onChange={handlData} required/>
                </div>
                <div className='sub2-subsub1-sub1-add-company-div1'>
                    <label>Username</label>
                    <input name='username' type='text' value={formData.username} onChange={handlData} required />
                    <input type='checkbox' />
                </div>
            </div>

            <div className='subsub2-sub1-add-company-div1'>
                <div className='sub1-subsub2-sub1-add-company-div1'>
                    <label>Email</label>
                    <input name='email' type='email' value={formData.email} onChange={handlData} required/>
                </div>
                <div className='sub2-subsub2-sub1-add-company-div1'>
                    <label>Mobile No.</label>
                    <div className='ma'>
                    <PhoneInput
                    className="phoneInput"
                    placeholder="Enter phone number"
                      value={phoneNumber} onChange={handleNumber}
                      required
                    />
                    </div>
                </div>
            </div>

            <div className='subsub3-sub1-add-company-div1'>
                <div className='sub1-subsub3-sub1-add-company-div1'>
                    <label>Country</label>
                    <select name='country_name' type='text' value={formData.country_name} onChange={handlData} required>
                        <option>Select Country</option>
                        {CountryData.map((item,index)=>{
                            return(
                        <option value={item.country_id} key={index}>{item.country_name}</option>
                            );
                        })}
                    </select>                </div>
                <div className='sub2-subsub3-sub1-add-company-div1'>
                    <label>Address</label>
                    <input name='address' type='text' value={formData.address} onChange={handlData} required/>
                </div>
            </div>

           
            <div className='subsub5-sub1-add-company-div1' onClick={()=>handlSubmit()} >
<button>Submit</button>
            </div>
            </div>
            
            </div>

          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AddCompany