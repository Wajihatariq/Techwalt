import React, { useState, useEffect } from "react";
import "./Rules.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import teltonika from "../Teltonika.json";
import ruptela from "../Ruptela.json";
const Rules = () => {
  const navigate = useNavigate();
  const RuleData = [
    {
      id: "1",
      rule: "Enter Geofence Zone1",
      device: "Teltonika",
      model: "FMC001",
      pin: "DIN4",
      vehicle: "26",
      status: "Active",
    },
    {
      id: "2",
      rule: "Leaving Geofence",
      device: "Teltonika",
      model: "FMC001",
      pin: "DOUT1",
      vehicle: "26",
      status: "Active",
    },
    {
      id: "3",
      rule: "Ignition ON",
      device: "Teltonika",
      model: "FMC001",
      vehicle: "26",
      pin: "Device Accelerometer",
      status: "Active",
    },
    {
      id: "4",
      rule: "Ignition Enabled",
      device: "Teltonika",
      model: "FMC001",
      pin: "DIN4",
      vehicle: "26",
      status: "Deactivated",
    },
    {
      id: "5",
      rule: "OverSpeed 121Km/Hr",
      device: "Ruptela",
      model: "FMC001",
      pin: "DIN4",
      vehicle: "26",
      status: "Deactivated",
    },
  ];
  const [ruleStatus, setRuleStatus] = useState("");
  const [stateColor, setStateColor] = useState("#7A7D8B");
  const [searchStatusText, setSearchStatusText] = useState("");
  const [searchDeviceText, setSearchDeviceText] = useState("Device");
  const [searchModelText, setSearchModelText] = useState("Model");
  const [searchRuleText, setSearchRuleText] = useState("Rule");
  const [data, setData] = useState(RuleData);
  const [ruleRemove, setRuleRemove] = useState("none");
  const [ruleRemoveId, setRuleRemoveId] = useState("");

  const handleRule = (value) => {
    const val = value.target.value;
    setSearchRuleText(val);
  };
  const handleDevice = (value) => {
    const val = value.target.value;
    console.log(val);
    if (val === "Teltonika") {
      // setStateColor("#63D16E");
      // setSatus(val);
      setSearchDeviceText(val);

      // filterData(val);
    } else if (val === "Ruptela") {
      // setStateColor("#FF3062");
      // setSatus(val);
      setSearchDeviceText(val);

      // filterData(val);
    } else {
      setSearchDeviceText(val);
      // setStateColor("#7A7D8B");
      setData(RuleData);
    }
  };
  const handleModel = (value) => {
    const val = value.target.value;
    if (val === "Model") {
      setSearchModelText(val);
      // setData(DevicesData);

      // {searchDeviceText=="Ruptela"? ruptela.map((item)=>{
      //   return(
      //     <option>{item.device}</option>
      //   )
      // }):teltonika.map((item)=>{
      //   return(
      //     <option>{item.device}</option>
      //   )
      // }) }
    } else {
      setSearchModelText(val);
    }
  };
  const handleStateColor = (value) => {
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
      setSearchStatusText(val);
      setStateColor("#7A7D8B");
      setData(RuleData);
    }
  };
  useEffect(() => {
    setData(
      RuleData.filter((item) => {
        return (
          (searchRuleText == "Rule"
            ? item.rule
            : !searchRuleText || item.rule === searchRuleText) &&
          (searchDeviceText == "Device"
            ? item.device
            : !searchDeviceText || item.device === searchDeviceText) &&
          (searchStatusText == "Status"
            ? item.status
            : !searchStatusText || item.status === searchStatusText) &&
          (searchModelText == "Model"
            ? item.device
            : !searchModelText || item.device === searchModelText)
        );
      })
    );
  }, [searchRuleText, searchDeviceText, searchStatusText, searchModelText]);
  const handlClear = () => {
    setSearchRuleText("Rule");
    setSearchDeviceText("Device");
    setSearchModelText("Model");
    setSearchStatusText("");
    setStateColor("grey");
    setData(RuleData);
  };
  const handlRemoveRule = (id) => {
    console.log(id);
    setRuleRemoveId(id);
    setRuleRemove("block");
    setTimeout(() => {
      setRuleRemoveId("");
      setRuleRemove("none");
    }, 2000);
  };
  const handlDialogBoxRuleState = (data) => {
    console.log(data);
  };
  const handlRuleStatus = (status) => {
    console.log(status);
    if (status == "Active") {
      setRuleStatus("Deactivated");
    } else {
      setRuleStatus("Activate");
    }
  };
  return (
    <div className="rules">
      <div className="rules-left" style={{ width: "30rem", height: "93rem" }}>
        <SideBar />
      </div>
      <div className="rules-right" style={{ width: "161.9rem", height: "92.9rem" }}>
        <div className="rules-nav">
          <Header />
        </div>
        <div className="rules-main">
          <div className="rules-contaner">
            <div className="rules-div1">
              <div className="sub1-rules-div1">
                <p>
                  Total rules <span>35</span>
                </p>

                <div className="subsub1-sub1-rules-div1">
                  {/* <div className="sub1-subsub1-sub1-rules-div1">
                    <img src="./assets/export.png" alt="none"/>
                    <button>Export</button>
                  </div> */}
                  <div className="sub2-subsub1-sub1-rules-div1"
                  style={{cursor:"pointer"}}
                  onClick={()=>navigate("/AddRule")}
                  >
                    <img src="./assets/addbtn.svg" alt="none" />
                    <button>Add rule</button>
                  </div>
                </div>
              </div>
              <div className="sub2-rules-div1">
                <div className="subsub1-sub2-rules-div1">
                  <div className="sub1-subsub1-sub2-rules-div1">
                    <div>
                      <img
                        src="./assets/searchwithperson.svg"
                        alt="none"
                        className="rules-search-icon"
                      />
                    </div>
                    <span>Search rule</span>
                  </div>
                  <div className="sub2-subsub1-sub2-rules-div1">
                    <select
                      type="numder"
                      value={searchRuleText}
                      onChange={(value) => handleRule(value)}
                      style={{color:searchRuleText=="Rule"?"#7A7D8B":"black"}}
                    >
                      <option value="Rule">Rule Type</option>
                      <option  >Enter Geofence Zone1</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Leaving Geofence</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Ignition ON</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Ignition OFF</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Ignition Disabled</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Ignition Enabled</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Crash</option>
                      <option style={{color:"black",backgroundColor:"white"}}>OverSpeed 121Km/Hr</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Door Open</option>
                    </select>
                    <select
                      type="numder"
                      value={searchDeviceText}
                      onChange={(value) => handleDevice(value)}
                      style={{color:searchDeviceText=="Device"?"#7A7D8B":"black"}}
                    >
                      <option selected value="Device">
                        Device Type
                      </option>
                      <option value="Teltonika" style={{color:"black"}}>Teltonika</option>
                      <option value="Ruptela" style={{color:"black"}}>Ruptela</option>
                    </select>
                    <select
                      type="text"
                      value={searchModelText}
                      onChange={(value) => handleModel(value)}
                      style={{color:searchModelText=="Model"?"#7A7D8B":"black"}}
                    >
                      <option selected value="Model">
                        Model
                      </option>
                      {searchDeviceText == "Ruptela"
                        ? ruptela.map((item) => {
                            return <option style={{color:"black",backgroundColor:"white"}}>{item.device}</option>;
                          })
                        : teltonika.map((item) => {
                            return <option style={{color:"black",backgroundColor:"white"}}>{item.device}</option>;
                          })}
                    </select>
                    <select
                      style={{ color: stateColor }}
                      onChange={(value) => handleStateColor(value)}
                      value={searchStatusText}
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
                    <div
                      className="sub1-sub2-subsub1-sub2-rules-div1"
                      onClick={() => handlClear()}
                      style={{cursor:"pointer"}}
                    >
                      <img src="./assets/clear.svg" alt="none" />
                      <button>Clear</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rules-div2">
              <div className="sub1-rules-div2">
                <div className="subsub1-sub1-rules-div2">
                  {/* <p></p> */}
                  <p>Rule Type</p>
                  <p>Device Type</p>
                  <p>Device Model</p>
                  <p>I/O Pin</p>
                  <p>No. of Vehicles</p>
                  {/* <p>Last Location</p> */}
                  {/* <p>Company</p> */}
                  {/* <p>Country</p> */}
                  <p>Status</p>
                  <p></p>
                </div>
              </div>
              <div className="sub2-rules-div2">
                {data.map((item) => {
                  return (
                    <div id="import-rules">
                      <p id="sub1-import-rules">{item.id}</p>
                      <div className="subsub1-sub2-rules-div2">
                        {/* <img src={item.img} alt="none" className="person"/> */}
                        <p>{item.rule}</p>
                        <p>{item.device}</p>
                        <p>{item.model}</p>
                        <p>{item.pin}</p>
                        <p>{item.vehicle}</p>
                        <p
                          style={{
                            color:
                              item.status == "Active" ? "#63D16E" : "#FF3062",
                          }}
                        >
                          {item.status}
                        </p>
                        {/* <img src="./assets/settings.png" alt="none"/>      */}
                      </div>
                      <div className="rules-dropdown">
                        <img
                          src="./assets/Settings.svg"
                          alt="none"
                          className=" dropdown-toggle rules-dropdown-img "
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => handlRuleStatus(item.status)}
                        />
                        <div className="dropdown-menu rules-dropdown-div">
                          <div className="sub1-rules-dropdown-div">
                            <div
                              className="subsub1-sub1-rules-dropdown-div"
                              onClick={() => navigate("/AddVehicle")}
                            >
                              <img
                                src="./assets/AddCar.svg"
                                alt="none"
                                style={{ width: "1.6rem", height: "1.6rem" }}
                              />
                              <p>Add Vehicle</p>
                            </div>
                            <div
                              className="subsub2-sub1-rules-dropdown-div"
                              onClick={() => navigate("/EditRule")}
                            >
                              <img
                                src="./assets/edit.svg"
                                alt="none"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                              />
                              <p>Edit</p>
                            </div>
                            <div
                              className="subsub3-sub1-rules-dropdown-div"
                              onClick={() => handlRemoveRule(item.id)}
                            >
                              <img
                                src="./assets/remove.svg"
                                alt="none"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                              />
                              <p>Remove</p>
                            </div>
                            <div
                              className="subsub4-sub1-rules-dropdown-div"
                              style={{
                                width:
                                  ruleStatus == "Activate"
                                    ? "8.7rem"
                                    : "11.3rem",
                              }}
                              onClick={() =>
                                handlDialogBoxRuleState(ruleStatus)
                              }
                            >
                              <img
                                src={
                                  ruleStatus == "Deactivated"
                                    ? "./assets/deactivate.svg"
                                    : "./assets/Activate.svg"
                                }
                                alt="none"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                              />
                              <p>{ruleStatus}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="rule-remove" style={{ display: ruleRemove }}>
                <h1>Id {ruleRemoveId} User has been Removed</h1>
              </div>
            </div>

           
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Rules;
