import React ,{useState}from 'react'
import "./AddUser.css"
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import CountryData from "../../CountryData.json"
import { Outlet ,useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const AddUser = () => {
    const [formData, setFormData] = useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        country:"",
        address:"",
        usertype:"",
        company:""
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
    else if(formData.country.length===0){
        alert("sorry coun")
    }
    else if(formData.address.length===0){
        alert("sorry ad")
    }
    else if(formData.usertype.length===0){
        alert("sorry ut")
    }
    else if(formData.company.length===0){
        alert("sorry com")
    }
    final()
}
const final=()=>{
    const sendData={
        name:formData.name,
        username:formData.username,
        email:formData.email,
        mobile:phoneNumber,
        country:formData.country,
        address:formData.address,
        usertype:formData.usertype,
        company:formData.company
    }
    console.log(sendData);

}
  return (
          <div className="add-user">
      <div className="add-user-left" style={{ width: "30rem", height: "93rem" }}>
        <SideBar />
      </div>
      <div className="add-user-right" style={{ width: "161.9rem", height: "92.9rem" }}>
        <div className="add-user-nav">
          <Header />
        </div>
        <div className="add-user-main">
          <div className="add-user-contaner">
            <p>Add User</p>
            <div className='add-user-div1'>
            <div className='sub1-add-user-div1' >
            <div className='person-add-user-sub1-add-user-div1'>
                <input  type='file' className='personfile' />
            <img src='./assets/person1.svg' alt='none' className='person-add-user'/>
            </div >
            <div className='subsub1-sub1-add-user-div1'>
                <div className='sub1-subsub1-sub1-add-user-div1'>
                    <label>Name</label>
                    <input name='name' type='text' value={formData.name} onChange={handlData} required/>
                </div>
                <div className='sub2-subsub1-sub1-add-user-div1'>
                    <label>Username</label>
                    <input name='username' type='text' value={formData.username} onChange={handlData} required />
                    <input type='checkbox' />
                </div>
            </div>

            <div className='subsub2-sub1-add-user-div1'>
                <div className='sub1-subsub2-sub1-add-user-div1'>
                    <label>Email</label>
                    <input name='email' type='email' value={formData.email} onChange={handlData} required/>
                </div>
                <div className='sub2-subsub2-sub1-add-user-div1'>
                    <label>Mobile No.</label>
                    <div className='ma'>
                    <PhoneInput
                    className="phoneInput"
                    placeholder="Enter phone number"
                    international
                    value={phoneNumber} onChange={handleNumber}
                      required
                    />
                    </div>
                </div>
            </div>

            <div className='subsub3-sub1-add-user-div1'>
                <div className='sub1-subsub3-sub1-add-user-div1'>
                    <label>Country</label>
                    <select name='country' type='text' value={formData.country} onChange={handlData} required>
                        <option>Select Country</option>
                        {CountryData.map((item,index)=>{
                            return(
                        <option value={item.country_id} key={index}>{item.country_name}</option>
                            );
                        })}
                    </select>                </div>
                <div className='sub2-subsub3-sub1-add-user-div1'>
                    <label>Address</label>
                    <input name='address' type='text' value={formData.address} onChange={handlData} required/>
                </div>
            </div>

            <div className='subsub4-sub1-add-user-div1'>
                <div className='sub1-subsub4-sub1-add-user-div1'>
                    <label>User Type</label>
                    <select name='usertype' type='text' value={formData.usertype} onChange={handlData} required>
                        <option></option>
                        <option>Admin</option>
                        <option>Manager</option>
                        <option>User</option>
                    </select>                </div>
                <div className='sub2-subsub4-sub1-add-user-div1'>
                    <label>Company</label>
                    <select name='company' type='text' value={formData.company} onChange={handlData} required>
                        <option disabled >Select Company</option>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>                 
                    </div>
            </div>
            <div className='subsub5-sub1-add-user-div1' onClick={()=>handlSubmit()} >
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

export default AddUser