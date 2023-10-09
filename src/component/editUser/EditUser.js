import React, { useState } from "react";
import "./EditUser.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import CountryData from "../../CountryData.json";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const EditUser = () => {
  const getData = useLocation();
  const num={
    mobile:getData.state.mobile
  }
  const [phoneNumber, setPhoneNumber] = useState(num.mobile);
  const handleNumber = (e) => {
    console.log(e)
    setPhoneNumber(e)
  };
  const [formData, setFormData] = useState({
    name: getData.state.name,
    username: getData.state.username,
    email: getData.state.email,
    // mobile: getData.state.mobile,
    country: getData.state.country,
    company: getData.state.company,
    role: getData.state.role,
    img: getData.state.img,
})
const handlData=(e)=>{
    console.log({...formData,[e.target.name]:e.target.value})
    setFormData({...formData,[e.target.name]:e.target.value});

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
// else if(formData.address.length===0){
//     alert("sorry ad")
// }
else if(formData.role.length===0){
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
    <div className="edit-user">
      <div
        className="edit-user-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="edit-user-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="edit-user-nav">
          <Header />
        </div>
        <div className="edit-user-main">
          <div className="edit-user-contaner">
            <p>Edit User</p>
            <div className="edit-user-div1">
              <div className="sub1-edit-user-div1">
                <div className="person-edit-user-sub1-edit-user-div1">
                  <input type="file" className="personfile" />
                  <img src={formData.img} alt="none" className="person-edit-user" onChange={handlData} />
                </div>
                <div className="subsub1-sub1-edit-user-div1">
                  <div className="sub1-subsub1-sub1-edit-user-div1">
                    <label>Name</label>
                    <input value={formData.name} type='text' name="name"  onChange={handlData} />
                  </div>
                  <div className="sub2-subsub1-sub1-edit-user-div1">
                    <label>Username</label>
                    <input value={formData.username} type='text'name="username"  onChange={handlData} />
                    <input type="checkbox" />
                  </div>
                </div>

                <div className="subsub2-sub1-edit-user-div1">
                  <div className="sub1-subsub2-sub1-edit-user-div1">
                    <label>Email</label>
                    <input value={formData.email} type='email' name="email"  onChange={handlData}  />
                  </div>
                  <div className="sub2-subsub2-sub1-edit-user-div1">
                    <label>Mobile No.</label>
                    <div className="ma">
                      <PhoneInput
                        className="phoneInput"
                        placeholder="Enter phone number"
                        value={num.mobile}
                        international
                        onChange={handleNumber}
                        name="mobile"
                        
                      />
                    </div>
                  </div>
                </div>

                <div className="subsub3-sub1-edit-user-div1">
                  <div className="sub1-subsub3-sub1-edit-user-div1">
                    <label>Country</label>
                    <select  type='text' name="country" onChange={handlData} >
                      <option>{formData.country}</option>
                      {CountryData.map((item, index) => {
                        return (
                          <option value={item.country_id} key={index}>
                            {item.country_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="sub2-subsub3-sub1-edit-user-div1">
                    <label>Address</label>
                    <input type='text' value={formData.address} name="address" onChange={handlData} />
                  </div>
                </div>

                <div className="subsub4-sub1-edit-user-div1">
                  <div className="sub1-subsub4-sub1-edit-user-div1">
                    <label>User Type</label>
                    <select type='text' name="role" onChange={handlData} >
                      <option>{formData.role}</option>
                      <option>Admin</option>
                      <option>Manager</option>
                      <option>User</option>
                    </select>
                  </div>
                  <div className="sub2-subsub4-sub1-edit-user-div1">
                    <label>Company</label>
                    <select type='text' name="company"  onChange={handlData} >
                     <option>{formData.company}</option>
                     <option>a</option>
                     <option>b</option>
                     <option>c</option>
                    </select>

                  </div>
                </div>
                <div className="subsub5-sub1-view-user-div1" onClick={()=>handlSubmit()}>
                  <button>Submit</button>
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

export default EditUser;
