import React,{useState} from "react";
import "./ViewDevice.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet ,useLocation} from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import teltonika from "../Teltonika.json";
import ruptela from "../Ruptela.json";
const ViewDevice = () => {
    const getData=useLocation();
    const data={
        vehicleType:getData.state.vehicleType,
      plate:getData.state.plate,
      imei:getData.state.imei,
      mobile:getData.state.mobile,
      device:getData.state.device,
      model:getData.state.model,
      camera:getData.state.camera,
      user:getData.state.user
    }
    console.log(data)
  const [phoneNumber, setPhoneNumber] = useState("");
  const [carType, setCarType] = useState("truck")
  const [formData, setFormData] = useState({
    vehicletype:"Car",
    plate:"",
    iemi:"",
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
  else if(formData.iemi.length===0){
      alert("sorry e")
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
      iemi:formData.iemi,
      mobile:phoneNumber,
      devicetype:formData.devicetype,
      model:formData.model,
      camera:formData.camera,
      user:formData.user
  }
  console.log(sendData);

}

  
  
  return (
    <div className="view-device">
      <div
        className="view-device-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="view-device-right"
        style={{ width: "161.9rem", height: "92.9rem"}}
      >
        <div className="view-device-nav">
          <Header />
        </div>
        <div className="view-device-main">
          <div className="view-device-contaner">
            <p>View Device/Vehicle</p>
            <div className="view-device-div1">
              <div className="sub1-view-device-div1">
                <div className="left-subsub1-sub1-view-device-div1">
                  <div className="sub1-left-subsub1-sub1-view-device-div1" style={{position:"relative"}}>
                    <label>Vehicle Type</label>
                    <select value={data.vehicleType} name="vehicletype" onChange={handlData} disabled>
                      {/* <option disabled selected></option> */}
                      <option selected>Car</option>
                      <option>Truck</option>
                    </select>
                    {data.vehicleType=="Car" ?<img src="./assets/Car.svg" alt="none" style={{width:"5.5rem",height:"2.1rem",position:"absolute",right:"7rem",top:"4rem"}}/>:<img src="./assets/truck.svg" alt="none" style={{width:"5.5rem",height:"2.1rem",position:"absolute",right:"7rem",top:"4rem"}}/>}
                  </div>
                  <div 
                  className="sub2-left-subsub1-sub1-view-device-div1"
                  >
                    <label>Plate No.</label>
                   <input value={data.plate} name="plate" type="text" disabled/>
                  </div>
                  <div className="sub3-left-subsub1-sub1-view-device-div1">
                    <label>Device IMEI</label>
                   <input value={data.imei} name="iemi" type="text" disabled/>
                  </div>
                  <div className="sub4-left-subsub1-sub1-view-device-div1">
                    <label>Device Type</label>
                    <select  name="devicetype" type="text" disabled>
                    <option selected disabled>{data.device}</option>
                    </select>
                  </div>
                  <div className="sub5-left-subsub1-sub1-view-device-div1">
                    <label>Device Model</label>
                    <select  name="model" type="text" disabled>
                      <option disabled selected>{data.model}</option>
            
                    </select>
                  </div>
                  <div className="sub6-left-subsub1-sub1-view-device-div1">
                    <label>Camera (Optional)</label>
                    <select  name="camera" type="text" disabled>
                      <option selected disabled>{data.camera}</option>
                    </select>
                  </div>
                  <div 
                  className="sub7-left-subsub1-sub1-view-device-div1"
                  >
                    <label>Mobile No.</label>
                    <div className='ma'>
                    <PhoneInput
                    className="phoneInput"
                    placeholder="Enter phone number"
                    value={data.mobile}
                    onChange={handleNumber}
                    />
                    </div>
                  </div>
                  <div className="sub8-left-subsub1-sub1-view-device-div1">
                    <label>Add to User (Optional)</label>
                    <select name="user" type="text" disabled>
                      <option selected disabled>{data.user}</option>
                    </select>
                  </div>
                 
                </div>
                <div className="right-subsub1-sub1-view-device-div1">
                  <div className="sub3-right-subsub1-sub1-view-device-div1">
                    <img src="./assets/eng.jpeg" alt="none"/>
                  </div>
                  <div className="sub4-right-subsub1-sub1-view-device-div1">
                  <img src="./assets/image 11.png" alt="none"/>
                  </div>
                  {/* <div className="sub5-right-subsub1-sub1-view-device-div1" onClick={()=>handlSubmit()}>
                   <button>Submit</button>
                  </div> */}
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

export default ViewDevice;
