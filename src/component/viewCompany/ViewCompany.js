import React, { useState } from "react";
import "./ViewCompany.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import CountryData from "../../CountryData.json";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ViewCompany = () => {
  const getData = useLocation();
  const data = {
    companyName: getData.state.companyName,
    username: getData.state.username,
    email: getData.state.email,
    mobile: getData.state.mobile,
    country_name: getData.state.country_name,
    address: getData.state.address,
    img: getData.state.img,
  };
  console.log(data);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleNumber = (value) => {
    setPhoneNumber(value);
  };
  return (
    <div className="view-company">
      <div
        className="view-company-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="view-company-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="view-company-nav">
          <Header />
        </div>
        <div className="view-company-main">
          <div className="view-company-contaner">
            <p>View Company</p>
            <div className="view-company-div1">
              <div className="sub1-view-company-div1">
                <div className="person-view-company-sub1-view-company-div1">
                  <img
                    src={data.img}
                    alt="none"
                    className="person-view-company"
                  />
                </div>
                <div className="subsub1-sub1-view-company-div1">
                  <div className="sub1-subsub1-sub1-view-company-div1">
                    <label>Name</label>
                    <input disabled value={data.companyName} />
                  </div>
                  <div className="sub2-subsub1-sub1-view-company-div1">
                    <label>Username</label>
                    <input disabled value={data.username} />
                    <input type="checkbox" />
                  </div>
                </div>

                <div className="subsub2-sub1-view-company-div1">
                  <div className="sub1-subsub2-sub1-view-company-div1">
                    <label>Email</label>
                    <input disabled value={data.email} />
                  </div>
                  <div className="sub2-subsub2-sub1-view-company-div1">
                    <label>Mobile No.</label>
                    {/* <div className='subsub1-sub2-subsub2-sub1-add-company-div1'>
                        <div className='sub1-subsub1-sub2-subsub2-sub1-add-company-div1'>
                        <select >
                        <option><img src='./assets/flag.svg' alt='none'/></option>
                        <option>jnd</option>
                        <option>jdo</option>
                    </select>
                    <span>
                        +44
                    </span>
                        </div>
                    
                    <div style={{ width: ".1rem",height: "4.4rem",backgroundColor:"#7A7D8B",marginTop:".4rem"}}></div>
                    <input/>
                    </div> */}
                    <div className="ma">
                      <PhoneInput
                        className="phoneInput"
                        placeholder="Enter phone number"
                        value={data.mobile}
                        // disabled
                        onChange={handleNumber}
                      />
                    </div>
                    {/* <PhoneInput
                    className="phoneInput"
                    country={'us'}
                    value={phoneNumber}
                    onChange={handleNumber}
                    inputProps={{
                        required:true,
                    }}
                    style={{border:"0rem",outline:"none",width:"60rem"}}
                    /> */}
                  </div>
                </div>

                <div className="subsub3-sub1-view-company-div1">
                  <div className="sub1-subsub3-sub1-view-company-div1">
                    <label>Country</label>
                    <input disabled value={data.country_name} />
                    {/* <select>
                        <option disabled selected>{data.country}</option>
                    </select>           */}
                  </div>
                  <div className="sub2-subsub3-sub1-view-company-div1">
                    <label>Address</label>
                    <input disabled value={data.address} />
                  </div>
                </div>

                {/* <div className='subsub4-sub1-view-company-div1'>
                <div className='sub1-subsub4-sub1-view-company-div1'>
                    <label>User Type</label>
                    <input disabled value={data.role}/>

                    <select>
                        <option disabled selected>{data.role}</option>
                        
                    </select>        
                            </div>
                <div className='sub2-subsub4-sub1-view-company-div1'>
                    <label>Company</label>
                    <input disabled value={data.company}/>

                    <select>
                        <option disabled selected>{data.company}</option>
                    </select>                 
                    </div>
            </div> */}
                {/* <div className='subsub5-sub1-view-company-div1' >
<button>Submit</button>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ViewCompany;
