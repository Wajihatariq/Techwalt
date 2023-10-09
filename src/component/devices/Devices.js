import React, { useState,useEffect } from "react";
import "./Devices.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { CSVLink } from "react-csv";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/js/dist/dropdown";
import teltonika from "../Teltonika.json";
import ruptela from "../Ruptela.json";
const Devices = () => {
  const DevicesData = [
    {
      id: "1",
      plate: "DXB U12345",
      vehicleType:"Car",
      camera:"yes",
      mobile:"+971566485124",
      user:"yes",
      device: "Teltonika",
      model: "FMB110",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "2",
      plate: "DXB U12345",
      device: "Teltonika",
      vehicleType:"Truck",
      camera:"yes",
      mobile:"+971566485124",
      user:"no",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Not Connected",
    },
    {
      id: "3",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Car",
      camera:"no",
      mobile:"+971566485124",
      user:"yes",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "4",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Truck",
      camera:"no",
      mobile:"+921566485124",
      user:"no",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "1",
      plate: "DXB U12345",
      vehicleType:"Car",
      camera:"yes",
      mobile:"+971566485124",
      user:"yes",
      device: "Teltonika",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "2",
      plate: "DXB U12345",
      device: "Teltonika",
      vehicleType:"Truck",
      camera:"yes",
      mobile:"+971566485124",
      user:"no",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Not Connected",
    },
    {
      id: "3",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Car",
      camera:"no",
      mobile:"+971566485124",
      user:"yes",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "4",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Truck",
      camera:"no",
      mobile:"+921566485124",
      user:"no",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },

    {
      id: "1",
      plate: "DXB U12345",
      vehicleType:"Car",
      camera:"yes",
      mobile:"+971566485124",
      user:"yes",
      device: "Teltonika",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "2",
      plate: "DXB U12345",
      device: "Teltonika",
      vehicleType:"Truck",
      camera:"yes",
      mobile:"+971566485124",
      user:"no",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Not Connected",
    },
    {
      id: "3",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Car",
      camera:"no",
      mobile:"+971566485124",
      user:"yes",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "4",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Truck",
      camera:"no",
      mobile:"+921566485124",
      user:"no",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "1",
      plate: "DXB U12345",
      vehicleType:"Car",
      camera:"yes",
      mobile:"+971566485124",
      user:"yes",
      device: "Teltonika",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "2",
      plate: "DXB U12345",
      device: "Teltonika",
      vehicleType:"Truck",
      camera:"yes",
      mobile:"+971566485124",
      user:"no",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Not Connected",
    },
    {
      id: "3",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Car",
      camera:"no",
      mobile:"+971566485124",
      user:"yes",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "4",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Truck",
      camera:"no",
      mobile:"+921566485124",
      user:"no",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "1",
      plate: "DXB U12345",
      vehicleType:"Car",
      camera:"yes",
      mobile:"+971566485124",
      user:"yes",
      device: "Teltonika",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "2",
      plate: "DXB U12345",
      device: "Teltonika",
      vehicleType:"Truck",
      camera:"yes",
      mobile:"+971566485124",
      user:"no",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Not Connected",
    },
    {
      id: "3",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Car",
      camera:"no",
      mobile:"+971566485124",
      user:"yes",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "4",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "Ruptela Trace5 NA",
      vehicleType:"Truck",
      camera:"no",
      mobile:"+921566485124",
      user:"no",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "1",
      plate: "DXB U12345",
      vehicleType:"Car",
      camera:"yes",
      mobile:"+971566485124",
      user:"yes",
      device: "Teltonika",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "2",
      plate: "DXB U12345",
      device: "Teltonika",
      vehicleType:"Truck",
      camera:"yes",
      mobile:"+971566485124",
      user:"no",
      model: "FMC001",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Not Connected",
    },
    {
      id: "3",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Car",
      camera:"no",
      mobile:"+971566485124",
      user:"yes",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    {
      id: "4",
      plate: "DXB U12345",
      device: "Ruptela",
      model: "FMC001",
      vehicleType:"Truck",
      camera:"no",
      mobile:"+921566485124",
      user:"no",
      imei: "861234984526712",
      lastLocation: {
        gps: "24.35164,54.514485",
        time: "11/12/2023 10:31 PM",
      },
      company: "delta",
      status: "Connected",
    },
    
  ];
  const [stateColor, setStateColor] = useState("#7A7D8B");
  const [searchPlateText, setSearchPlateText] = useState("");
  const [searchImeiText, setSearchImeiText] = useState("");
  const [searchDeviceText, setSearchDeviceText] = useState("Device");
  const [searchStatusText, setSearchStatusText] = useState("");
  const [searchModelText, setSearchModelText] = useState("Model");
  const [data, setData] = useState(DevicesData);
  const [deviceRemove, setDeviceRemove] = useState("none");
  const [deviceRemoveId, setDeviceRemoveId] = useState("");
  const [deviceRemoveImei, setDeviceRemoveImei] = useState("");

  const navigate = useNavigate();
  // const handleStateColor = (value) => {
  //   const val = value.target.value;
  //   if (val === "Connected") {
  //     setStateColor("#63D16E");
  //   } else if (val === "Not Connected") {
  //     setStateColor("#FF3062");
  //   } else {
  //     setStateColor("#7A7D8B");
  //   }
  // };
 
const handlePlate=(value)=>{
  const val = value.target.value;
setSearchPlateText(val);
};
const handleImei=(value)=>{
  const val = value.target.value;
setSearchImeiText(val);
};
const handleDevice=(value)=>{
  const val = value.target.value;
  console.log(val)
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
    setData(DevicesData);
  }
};
const handleModel =(value)=>{
  const val = value.target.value;
  if(val==="Model"){
    setSearchModelText(val)
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

  }
  else{
    setSearchModelText(val)

  }

}
const handleStateColor = (value) => {
  console.log(DevicesData);
  const val = value.target.value;
  console.log(value.target.value);
  if (val === "Connected") {
    setStateColor("#63D16E");
    // setSatus(val);
    setSearchStatusText(val);

    // filterData(val);
  } else if (val === "Not Connected") {
    setStateColor("#FF3062");
    // setSatus(val);
    setSearchStatusText(val);

    // filterData(val);
  } else {
        setSearchStatusText(val);
    setStateColor("#7A7D8B");
    setData(DevicesData);
  }
};
useEffect(() => {
  // console.log(typeof(searchModelText))
  // console.log(searchStatusText)

  setData(
    DevicesData.filter((item)=>{
      return (!searchPlateText || item.plate.toLocaleLowerCase().includes(searchPlateText.toLocaleLowerCase())) && (!searchImeiText || item.imei.toLocaleLowerCase().includes(searchImeiText.toLocaleLowerCase())) && (searchDeviceText=="Device"?item.device : (!searchDeviceText || item.device===searchDeviceText)) && (searchStatusText=="Status"?item.status : (!searchStatusText || item.status===searchStatusText))&&(searchModelText=="Model" ? item.model : (!searchModelText || item.model===searchModelText));
                                                                                                
    })
  )
}, [searchPlateText,searchImeiText,searchDeviceText,searchStatusText,searchModelText]);
const handlClear=()=>{
  setSearchPlateText("")
  setSearchImeiText("")
  setSearchDeviceText("Device")
  setSearchModelText("Model")
  setSearchStatusText("")
  setStateColor("grey")
  setData(DevicesData);
}
const handlViewDevice=(vehicleType,plate,imei,device,model,camera,mobile,user)=>{
navigate('/ViewDevice',{state:{vehicleType:vehicleType,plate:plate,imei:imei,device:device,model:model,camera:camera,mobile:mobile,user:user}})
};
const handlEditDevice=(vehicleType,plate,imei,device,model,camera,mobile,user)=>{
  navigate('/EditDevice',{state:{vehicleType:vehicleType,plate:plate,imei:imei,device:device,model:model,camera:camera,mobile:mobile,user:user}})
  };
  const handlRemoveDevice = (id,imei) => {
    console.log(id,imei);
    setDeviceRemoveId(id);
    setDeviceRemoveImei(imei);
    setDeviceRemove("block");
    setTimeout(() => {
      setDeviceRemoveId("");
      setDeviceRemoveImei("");
      setDeviceRemove("none");
    }, 2000);
  };
  return (
    <div className="devices">
      <div className="devices-left" style={{ width: "30rem", height: "93rem" }}>
        <SideBar />
      </div>                                        
      <div
        className="devices-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="devices-nav">
          <Header />
        </div>
        <div className="devices-main">
          <div className="devices-contaner">
            <div className="devices-div1">
              <div className="sub1-devices-div1">
                <p>
                  Total Devices <span>35</span>
                </p>

                <div className="subsub1-sub1-devices-div1">
                  <CSVLink
                    data={DevicesData}
                    filename="Devices"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="sub1-subsub1-sub1-devices-div1">
                      <img src="./assets/export.svg" alt="none" />
                      <button>Export</button>
                    </div>
                  </CSVLink>
                  <div className="sub2-subsub1-sub1-devices-div1" style={{cursor:"pointer"}}>
                    <img src="./assets/addbtn.svg" alt="none" />
                    <button onClick={() => navigate("/AddDevice")}>
                      Add Device
                    </button>
                  </div>
                </div>
              </div>
              <div className="sub2-devices-div1">
                <div className="subsub1-sub2-devices-div1">
                  <div className="sub1-subsub1-sub2-devices-div1">
                    <div>
                      <img
                        src="./assets/searchwithperson.svg"
                        alt="none"
                        className="devices-search-icon"
                      />
                    </div>
                    <span>Search Device</span>
                  </div>
                  <div className="sub2-subsub1-sub2-devices-div1">
                    <input placeholder="Plate No." 
                     type="text"
                     value={searchPlateText}
                     onChange={(value) => handlePlate(value)}
                    />
                    <input placeholder="IMEI"
                     type="numder"
                     value={searchImeiText}
                     onChange={(value) => handleImei(value)}
                    />
                    <select 
                     type="text"
                     value={searchDeviceText}
                     onChange={(value) => handleDevice(value)}
                     style={{color:searchDeviceText=="Device"?"grey":"black"}}
                    >
                      <option selected  value="Device" >Device</option>
                      <option  value="Teltonika">Teltonika</option>
                      <option  value="Ruptela" style={{color:"black"}}>Ruptela</option>
                    </select>
                    <select
                    type="text"
                    value={searchModelText}
                    onChange={(value) => handleModel(value)}
                    style={{color:searchModelText=="Model"?"grey":"black"}}
                    >
                      <option selected value="Model">Model</option>
                    {searchDeviceText=="Ruptela"? ruptela.map((item)=>{
  return(
    <option style={{color:"black",backgroundColor:"white"}}>{item.device}</option>
  )
}):teltonika.map((item)=>{
  return(
    <option style={{color:"black",backgroundColor:"white"}}>{item.device}</option>
  )
}) }  
                    </select>
                    <select>
                      <option>Company</option>
                      <option></option>
                      <option></option>
                    </select>
                    <select
                      style={{ color: stateColor }}
                      onChange={(value) => handleStateColor(value)}
                      value={searchStatusText}
                    >
                      <option selected value="Status">
                        Status
                      </option>
                      <option style={{ color: "#63D16E" }} value="Connected">Connected</option>
                      <option style={{ color: "#FF3062" }} value="Not Connected">
                        Not Connected
                      </option>
                    </select>
                    <div className="sub1-sub2-subsub1-sub2-devices-div1" onClick={()=>handlClear()} style={{cursor:"pointer"}}>
                      <img src="./assets/clear.svg" alt="none" />
                      <button>Clear</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="devices-div2">
              <div className="sub1-devices-div2">
                <div className="subsub1-sub1-devices-div2">
                  <p>Plate No.</p>
                  <p>Device</p>
                  <p>Model</p>
                  <p>IMEI No.</p>
                  <p>Last Location</p>
                  <p>Company</p>
                  <p>Status</p>
                  <p></p>
                </div>
              </div>
              <div className="sub2-devices-div2">
                {data.map((item) => {
                  return (
                    <div id="import-devices">
                      <p id="sub1-import-devices">{item.id}</p>
                      <div className="subsub1-sub2-devices-div2">
                        <p>{item.plate}</p>
                        <p>{item.device}</p>
                        <p>{item.model}</p>
                        <p>{item.imei}</p>
                        <div className="import-gps-time-devices">
                          <p
                            className="sub1-import-gps-time-devices"
                            style={{ width: "20rem" }}
                          >
                            GPS:
                            <a
                              href="https://goo.gl/maps/sb8f95HXVLo6e7st8"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "#1A3096",
                              }}
                            >
                              {item.lastLocation.gps}
                            </a>
                          </p>
                          <p className="sub2-import-gps-time-devices">
                            Time: {item.lastLocation.time}
                          </p>
                        </div>
                        <p>{item.company}</p>
                        <p
                          style={{
                            color:
                              item.status == "Connected"
                                ? "#63D16E"
                                : "#FF3062",
                          }}
                        >
                          {item.status}
                        </p>
                      </div>
                      <div className="devices-dropdown">
                        <img
                          src="./assets/Settings.svg"
                          alt="none"
                          className=" dropdown-toggle devices-dropdown-img "
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        />
                        <div className="dropdown-menu devices-dropdown-div">
                          <div className="sub1-devices-dropdown-div">
                            <div className="subsub1-sub1-devices-dropdown-div" onClick={()=>handlViewDevice(item.vehicleType,item.plate,item.imei,item.device,item.model,item.camera,item.mobile,item.user)}>
                              <img
                                src="./assets/view.svg"
                                alt="none"
                                style={{ width: "1.5rem", height: "2rem" }}
                              />
                              <p>View</p>
                            </div>
                            <div className="subsub2-sub1-devices-dropdown-div" onClick={()=>handlEditDevice(item.vehicleType,item.plate,item.imei,item.device,item.model,item.camera,item.mobile,item.user)}>
                              <img
                                src="./assets/edit.svg"
                                alt="none"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                              />
                              <p>Edit</p>
                            </div>
                            <div className="subsub3-sub1-devices-dropdown-div"
                             onClick={() => handlRemoveDevice(item.id,item.imei)}

                            >
                              <img
                                src="./assets/remove.svg"
                                alt="none"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                              />
                              <p>Remove</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="device-remove" style={{ display: deviceRemove ,lineHeight:".5rem"}}>
                <h1>Id {deviceRemoveId} Device has been Removed</h1>
                <h1>with this IMEI No {deviceRemoveImei}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Devices;
