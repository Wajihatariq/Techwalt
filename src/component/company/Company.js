import React,{useState,useEffect} from 'react'
import "./Company.css"
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import CountryData from "../../CountryData.json"

import { CSVLink } from "react-csv";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
const Company = () => {
    const CompanyData = [
      {
        id: "1",
        img: "./assets/uber.svg",
        companyName: "Uber",
        username:"abc",
        owner: "Daniel",
        email: "test@gmail.com1",
        mobile: "+97 6730753792",
        noVehicle: "24",
        country_name: "Pakistan",
        status: "Deactivated",
        address:"abc"
      },
      {
        id: "2",
        img: "./assets/uber.svg",
        companyName: "Uber",
        username:"abc",
        owner: "Daniel",
        email: "test@gmail.com1",
        mobile: "+97 6730753792",
        noVehicle: "24",
        country_name: "Pakistan",
        status: "Active",
        address:"abc"

      },
      {
        id: "3",
        img: "./assets/uber.svg",
        companyName: "Uber",
        username:"abc",
        owner: "Daniel",
        email: "test@gmail.com",
        mobile: "+97 6730753792",
        noVehicle: "23",
        country_name: "Pakistan",
        status: "Active",
        address:"abc"

      },
      {
        id: "4",
        img: "./assets/uber.svg",
        companyName: "Uber",
        username:"abc",
        owner: "Daniel",
        email: "test@gmail.com",
        mobile: "+97 6730753792",
        noVehicle: "23",
        country_name: "India",
        status: "Deactivated",
        address:"abc"

      },

    ];
  
    const [companyStatus, setCompanyStatus] = useState("");
    const [stateColor, setStateColor] = useState("#7A7D8B");
    const [searchCompanyNameText, setSearchCompanyNameText] = useState("");
    const [searchOwnerText, setSearchOwnerText] = useState("");
    const [searchCountryText, setSearchCountryText] = useState("Country");
    const [searchEmailText, setSearchEmailText] = useState("");
    const [searchStatusText, setSearchStatusText] = useState("");
    const [companyRemove, setCompanyRemove] = useState("none");
    const [companyRemoveId, setCompanyRemoveId] = useState("");
  
    const [data, setData] = useState(CompanyData);
    const handleStateColor = (value) => {
      console.log(CompanyData);
      const val = value.target.value;
      console.log(value.target.value);
      if (val === "Active") {
        setStateColor("#63D16E");
        // setSatus(val);
        setSearchStatusText(val);
  
        // filterData(val);
      } else if (val === "Deactivated") {
        setStateColor("#FF3062");
        // setSatus(val);
        setSearchStatusText(val);
  
        // filterData(val);
      } else {
        setSearchStatusText(val)
        setStateColor("#7A7D8B");
        setData(CompanyData);
      }
    };
    const handleCompanyName = (value) => {
      const val = value.target.value;
      setSearchCompanyNameText(val);
      // filterData(val);
    };
    const handleOwner = (value) => {
      const val = value.target.value;
      setSearchOwnerText(val);
      // filterData(val);
    };
    const handleEmail = (value) => {
      const val = value.target.value;
      setSearchEmailText(val);
      // filterData(val);
    };
    const handleCountry = (value) => {
      const val = value.target.value;
      console.log(val)
      setSearchCountryText(val);
      // filterData(val);
    };
  
  
    const navigate = useNavigate();
  
    const handlViewCompany = (
      companyName,
      username,
      email,
      mobile,
      country_name,
      address,
      img
    ) => {
      navigate("/ViewCompany", {
        state: {
          companyName:companyName,
          username:username,
          email:email,
          mobile:mobile,
          country_name:country_name,
          address:address,
          img:img,
        },
      });
    };
    const handlEditCompany = (
      companyName,
      username,
      email,
      mobile,
      country_name,
      address,
      img
    ) => {
      navigate("/EditCompany", {
        state: {
          companyName:companyName,
          username:username,
          email:email,
          mobile:mobile,
          country_name:country_name,
          address:address,
          img:img,
        },
      });
    };
    useEffect(() => {
      setData(
        CompanyData.filter((item)=>{
          return (!searchCompanyNameText || item.companyName.toLocaleLowerCase().includes(searchCompanyNameText.toLocaleLowerCase())) && (!searchOwnerText || item.owner.toLocaleLowerCase().includes(searchOwnerText.toLocaleLowerCase())) && (!searchEmailText || item.email.toLocaleLowerCase().includes(searchEmailText.toLocaleLowerCase())) && (searchStatusText=="Status"?item.status : (!searchStatusText || item.status===searchStatusText)) && (searchCountryText=="Country"?item.country_name : (!searchCountryText || item.country_name===searchCountryText));
        })
      )
    }, [searchCompanyNameText,searchOwnerText,searchEmailText,searchStatusText,searchCountryText])
    const handlRemoveCompany = (id) => {
      console.log(id);
      setCompanyRemoveId(id);
      setCompanyRemove("block");
      setTimeout(() => {
        setCompanyRemoveId("");
        setCompanyRemove("none");
      }, 2000);
    };
    const handlCompanyStatus = (status) => {
      console.log(status);
      if (status == "Active") {
        setCompanyStatus("Deactivated");
      } else {
        setCompanyStatus("Active");
      }
    };
    const handlDialogBoxCompanyState=(data)=>{
      console.log(data)
    }
    const handlClear=()=>{
      setSearchCompanyNameText("")
      setSearchOwnerText("")
      setSearchEmailText("")
      setSearchCountryText("Country")
      setSearchStatusText("")
      setStateColor("grey")
      setData(CompanyData);
    }
    return (
      <div className="company">
        <div className="company-left" style={{ width: "30rem", height: "93rem" }}>
          <SideBar />
        </div>
        <div className="company-right" style={{ width: "161.9rem", height: "92.9rem" }}>
          <div className="company-nav">
            <Header />
          </div>
          <div className="company-main">
            <div className="company-contaner">
              <div className="company-div1">
                <div className="sub1-company-div1">
                  <p>
                    Total Companies <span>35</span>
                  </p>
  
                  <div className="subsub1-sub1-company-div1">
                    <CSVLink
                      data={CompanyData}
                      filename="companys"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="sub1-subsub1-sub1-company-div1">
                        <img src="./assets/export.svg" alt="none" />
                        <button>Export</button>
                      </div>
                    </CSVLink>
                    <div className="sub2-subsub1-sub1-company-div1"
                    style={{cursor:"pointer"}}
                    >
                      <img src="./assets/addbtn.svg" alt="none" />
                      <button onClick={() => navigate("/AddCompany")}>
                        Add Company
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sub2-company-div1">
                  <div className="subsub1-sub2-company-div1">
                    <div className="sub1-subsub1-sub2-company-div1">
                      <div>
                        <img
                          src="./assets/searchwithperson.svg"
                          alt="none"
                          className="company-search-icon"
                        />
                      </div>
                      <span>Search Company</span>
                    </div>
                    <div className="sub2-subsub1-sub2-company-div1">
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={searchCompanyNameText}
                        onChange={(value) => handleCompanyName(value)}
                      />
                      <input
                        type="text"
                        placeholder="Owner"
                        value={searchOwnerText}
                        onChange={(value) => handleOwner(value)}
                      />
                      <input
                        type="mail"
                        placeholder="Email"
                        value={searchEmailText}
                        onChange={(value) => handleEmail(value)}
                      />
                      <select value={searchCountryText}  onChange={(value) => handleCountry(value)}
                      style={{color:searchCountryText=="Country"?"#7A7D8B":"black"}}
                      >
                        <option value="Country" >
                          Select Country
                        </option>
                        {CountryData.map((item,index)=>{
                            return(
                        <option value={item.country_name} key={index} style={{color:"black",backgroundColor:"white"}}>{item.country_name}</option>
                            );
                        })}
                      </select>
                      <select
                        style={{ color: stateColor }}
                        onChange={(value) => handleStateColor(value)}
                      >
                        <option selected value="Status">
                          Status
                        </option>
                        <option style={{ color: "#63D16E" }} value="Active">
                          Active
                        </option>
                        <option style={{ color: "#FF3062" }} value="Deactivated">
                          Deactivated
                        </option>
                      </select>
  
                      <div className="sub1-sub2-subsub1-sub2-company-div1"
                       style={{cursor:"pointer"}}
                      onClick={()=>handlClear()}>
                        <img src="./assets/clear.svg" alt="none" />
                        <button>Clear</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-div2">
                <div className="sub1-company-div2">
                  <div className="subsub1-sub1-company-div2">
                    <p></p>
                    <p>Company Name</p>
                    <p>Owner</p>
                    <p>Email</p>
                    <p>Mobile No.</p>
                    <p>No. of Vehicles</p>
                    {/* <p>Role</p> */}
                    <p>Country</p>
                    <p>Status</p>
                    <p></p>
                  </div>
                </div>
                <div className="sub2-company-div2">
                  {data.map((item) => {
                    return (
                      <div id="import-company">
                        <p id="sub1-import-company">{item.id}</p>
                        <div className="subsub1-sub2-company-div2">
                          <img src={item.img} alt="none" className="person" />
                          <p>{item.companyName}</p>
                          <p>{item.owner}</p>
                          <p>{item.email}</p>
                          <p>{item.mobile}</p>
                          <p>{item.noVehicle}</p>
                          {/* <p>{item.role}</p> */}
                          <p>{item.country_name}</p>
                          <p
                            style={{
                              color:
                                item.status == "Active" ? "#63D16E" : "#FF3062",
                            }}
                          >
                            {item.status}
                          </p>
                        </div>
  
                        <div className="company-dropdown">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className=" dropdown-toggle company-dropdown-img "
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={() => handlCompanyStatus(item.status)}
                          />
                          <div className="dropdown-menu company-dropdown-div">
                            <div className="sub1-company-dropdown-div">
                              <div
                                className="subsub1-sub1-company-dropdown-div"
                                onClick={() =>
                                  handlViewCompany(
                                    item.companyName,
                                    item.username,
                                    item.email,
                                    item.mobile,
                                    item.country_name,
                                    item.address,
                                    item.img
                                  )
                                }
                              >
                                <img
                                  src="./assets/view.svg"
                                  alt="none"
                                  style={{ width: "1.5rem", height: "2rem" }}
                                />
                                <p>View</p>
                              </div>
                              <div
                                className="subsub2-sub1-company-dropdown-div"
                                onClick={() =>
                                  handlEditCompany(
                                    item.companyName,
                                    item.username,
                                    item.email,
                                    item.mobile,
                                    item.country_name,
                                    item.address,
                                    item.img
                                  )
                                }
                              >
                                <img
                                  src="./assets/edit.svg"
                                  alt="none"
                                  style={{ width: "1.5rem", height: "1.5rem" }}
                                />
                                <p>Edit</p>
                              </div>
                              <div
                                className="subsub3-sub1-company-dropdown-div"
                                onClick={() => handlRemoveCompany(item.id)}
                              >
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                  style={{ width: "1.5rem", height: "1.5rem" }}
                                />
                                <p>Remove</p>
                              </div>
                              <div
                                className="subsub4-sub1-company-dropdown-div"
                                style={{
                                  width:
                                    companyStatus == "Active" ? "7.4rem" : "10.5rem",
                                }}
                                onClick={()=>handlDialogBoxCompanyState(companyStatus)}
                              >
                                <img
                                  src={
                                    companyStatus == "Deactivated"
                                      ? "./assets/deactivate.svg"
                                      : "./assets/Activate.svg"
                                  }
                                  alt="none"
                                  style={{ width: "1.5rem", height: "1.5rem" }}
                                />
                                <p>{companyStatus}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
  
                <div className="company-remove" style={{ display: companyRemove }}>
                  <h1>Id {companyRemoveId} User has been Removed</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
  };

export default Company