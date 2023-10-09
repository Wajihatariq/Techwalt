import React,{useState} from "react";
import "./AddDevice.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import teltonika from "../Teltonika.json";
import ruptela from "../Ruptela.json";
const AddDevice = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [carType, setCarType] = useState("truck")
  const [formData, setFormData] = useState({
    vehicletype:"Car",
    plate:"",
    imei:"",
    devicetype:"",
    model:"",
    camera:"",
    user:""
  });
  const handlData=(e)=>{
    console.log({...formData,[e.target.name]:e.target.value})
    setFormData({...formData,[e.target.name]:e.target.value});

}
const handleNumber=(value)=>{
    setPhoneNumber(value)
}
const handlSubmit=()=>{
  if(formData.vehicletype.length===0){
      alert("sorry n")
  }
  else if(formData.plate.length===0){
      alert("sorry u")
  }
  else if(formData.imei.length < 15 || formData.imei.length > 15){
      alert("IMEI must be 15 digits")
  }
  else if(phoneNumber.length===0){
      alert("sorry p")
  }
  else if(formData.devicetype.length===0){
      alert("sorry coun")
  }
  else if(formData.model.length===0){
      alert("sorry ad")
  }
  else if(formData.camera.length===0){
      alert("sorry ut")
  }
  else if(formData.user.length===0){
      alert("sorry com")
  }
  final()
}
const final=()=>{
  const sendData={
    vehicletype:formData.vehicletype,
      plate:formData.plate,
      imei:formData.imei,
      mobile:phoneNumber,
      devicetype:formData.devicetype,
      model:formData.model,
      camera:formData.camera,
      user:formData.user
  }
  console.log(sendData);

}

  
  
  return (
    <div className="add-device">
      <div
        className="add-device-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="add-device-right"
        style={{ width: "161.9rem", height: "92.9rem"}}
      >
        <div className="add-device-nav">
          <Header />
        </div>
        <div className="add-device-main">
          <div className="add-device-contaner">
            <p>Add Device/Vehicle</p>
            <div className="add-device-div1">
              <div className="sub1-add-device-div1">
                <div className="left-subsub1-sub1-add-device-div1">
                  <div className="sub1-left-subsub1-sub1-add-device-div1" style={{position:"relative"}}>
                    <label>Vehicle Type</label>
                    <select value={formData.vehicletype} name="vehicletype" onChange={handlData} >
                      {/* <option disabled selected></option> */}
                      <option selected>Car</option>
                      <option>Truck</option>
                    </select>
                    {formData.vehicletype=="Car" ?<img src="./assets/Car.svg" alt="none" style={{width:"5.5rem",height:"2.1rem",position:"absolute",right:"7rem",top:"4rem"}}/>:<img src="./assets/truck.svg" alt="none" style={{width:"5.5rem",height:"2.1rem",position:"absolute",right:"7rem",top:"4rem"}}/>}
                  </div>
                  <div 
                  className="sub2-left-subsub1-sub1-add-device-div1"
                  >
                    <label>Plate No.</label>
                   <input value={formData.plate} name="plate" type="text" onChange={handlData}/>
                  </div>
                  <div className="sub3-left-subsub1-sub1-add-device-div1">
                    <label>Device IMEI</label>
                   <input value={formData.imei} name="imei" type="number" onChange={handlData}/>
                  </div>
                  <div className="sub4-left-subsub1-sub1-add-device-div1">
                    <label>Device Type</label>
                    <select value={formData.devicetype} name="devicetype" type="text" onChange={handlData}>
                    <option selected disabled></option>
                      <option>Ruptela</option>
                      <option>Teltonika</option>
                    </select>
                  </div>
                  <div className="sub5-left-subsub1-sub1-add-device-div1">
                    <label>Device Model</label>
                    <select value={formData.model} name="model" type="text" onChange={handlData}>
                      
{formData.devicetype=="Ruptela"? ruptela.map((item)=>{
  return(
    <option>{item.device}</option>
  )
}):teltonika.map((item)=>{
  return(
    <option>{item.device}</option>
  )
}) }             
                    </select>
                  </div>
                  <div className="sub6-left-subsub1-sub1-add-device-div1">
                    <label>Camera (Optional)</label>
                    <select value={formData.camera} name="camera" type="text" onChange={handlData} >
                      <option selected></option>
                      <option>b</option>
                      <option>c</option>
                    </select>
                  </div>
                  <div 
                  className="sub7-left-subsub1-sub1-add-device-div1"
                  >
                    <label>Mobile No.</label>
                    <div className='ma'>
                    <PhoneInput
                    className="phoneInput"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    international
                    onChange={handleNumber}
                    />
                    </div>
                  </div>
                  <div className="sub8-left-subsub1-sub1-add-device-div1">
                    <label>Add to User (Optional)</label>
                    <select value={formData.user} name="user" type="text" onChange={handlData}>
                      <option selected></option>
                      <option>b</option>
                      <option>c</option>
                    </select>
                  </div>
                 
                </div>
                <div className="right-subsub1-sub1-add-device-div1">
                  <div className="sub3-right-subsub1-sub1-add-device-div1">
                    <img src="./assets/eng.jpeg" alt="none"/>
                  </div>
                  <div className="sub4-right-subsub1-sub1-add-device-div1">
                  <img src="./assets/image 11.png" alt="none"/>
                  </div>
                  <div className="sub5-right-subsub1-sub1-add-device-div1" onClick={()=>handlSubmit()}>
                   <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AddDevice;
