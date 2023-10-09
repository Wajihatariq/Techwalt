import React, { useState,useEffect } from "react";
import "./AddVehicle.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import checkbox from "rc-checkbox";
import teltonika from "../Teltonika.json";
import ruptela from "../Ruptela.json";
import { Outlet, useNavigate } from "react-router-dom";
const AddVehicle = () => {
  const navigate = useNavigate();
  const [exportType, setExportType] = useState(false);
  const [exportType1, setExportType1] = useState("none");

  const handlExportType = () => {
    if (exportType) {
      setExportType1("block");
      setExportType(false);
    } else {
      setExportType1("none");
      setExportType(true);
    }
  };
  const AddVehicle = [
    {
      id: "1",
      plate: "DXB U12341",
      device: "Teltonika",
      model: "FMC001",
      iemi: "49837593896789",
      company: "Delta",
    },
    {
      id: "1",
      plate: "DXB U12342",
      device: "Teltonika",
      model: "FMC001",
      iemi: "49837593896789",
      company: "Delta",
    },
    {
      id: "1",
      plate: "DXB U12343",
      device: "Teltonika",
      model: "FMC001",
      iemi: "49837593896789",
      company: "Delta",
    },
    {
      id: "1",
      plate: "DXB U12344",
      device: "Teltonika",
      model: "FMC001",
      iemi: "49837593896780",
      company: "Delta",
    }
  ];
  const [searchPlateText, setSearchPlateText] = useState("Plate");
  const [searchImeiText, setSearchImeiText] = useState("");
  const [searchDeviceText, setSearchDeviceText] = useState("Device");
  const [searchModelText, setSearchModelText] = useState("Model");
  const [searchCompanyText, setSearchCompanyText] = useState("Company");
  const [data, setData] = useState(AddVehicle);
   
const handlePlate=(value)=>{
  const val = value.target.value;
setSearchPlateText(val);
};
const handleCompany=(value)=>{
  const val = value.target.value;
  setSearchCompanyText(val);
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
    setData(AddVehicle);
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
useEffect(() => {
  setData(
    AddVehicle.filter((item)=>{
      return (searchPlateText=="Plate"?item.plate : (!searchPlateText || item.plate===searchPlateText)) && (!searchImeiText || item.iemi.toLocaleLowerCase().includes(searchImeiText.toLocaleLowerCase())) && (searchDeviceText=="Device"?item.device : (!searchDeviceText || item.device===searchDeviceText)) && (searchModelText=="Model" ? item.device : (!searchModelText || item.device===searchModelText))&& (searchCompanyText=="Company" ? item.company : (!searchCompanyText || item.company===searchCompanyText));
                                                                                                
    })
  )
}, [searchPlateText,searchImeiText,searchDeviceText,searchModelText,searchCompanyText]);
const handlClear=()=>{
  setSearchPlateText("Plate")
  setSearchImeiText("")
  setSearchDeviceText("Device")
  setSearchModelText("Model")
  setSearchCompanyText("Company")
  setData(AddVehicle);
}
 const handleChange=(e)=>{

    const {name,checked}=e.target;
    console.log(name)
    if(name==="allSelect"){
    let tewmpUser=data.map((da)=>{return{...da,isChecked:checked}});
    setData(tewmpUser)
    
    }else{
      let tewmpUser = data.map((da)=>da.plate===name?{...da,isChecked:checked}:da);
      setData(tewmpUser)
    }
    
      }
  return (
    <div className="addvehicle">
      <div
        className="addvehicle-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="addvehicle-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="addvehicle-nav">
          <Header />
        </div>
        <div className="addvehicle-main">
          <div className="addvehicle-contaner">
            <div className="addvehicle-div1">
              <div className="sub1-addvehicle-div1">
                <div className="import-sub1-addvehicle-div1">
                  <div className="sub1-import-sub1-addvehicle-div1">
                  <p>
                  Total Vehicles <span>35</span>
                </p>
                  </div>
               
                  <div className="sub2-import-sub1-addvehicle-div1">
                  <p>
                  Rule:  <span>Geofence</span>
                </p>
                  </div>

                
                </div>
                {/* <p>
                  Total Vehicles <span>35</span>
                </p> */}

                <div className="subsub1-sub1-addvehicle-div1">
                  {/* <div className="sub1-subsub1-sub1-addvehicle-div1" onClick={()=>handlExportType()}>
                  <img src="./assets/reportwhite.png" alt="none" />                
                    <label>Report Type</label>
                    <img src="./assets/down.png" alt="none" />                
                  </div> */}
                  <div className="sub2-subsub1-sub1-addvehicle-div1"
                  
                  style={{cursor:"pointer"}}>
                    <img src="./assets/Save.svg" alt="none" />
                    <button>Save</button>
                  </div>
                </div>
              </div>
              <div className="sub2-addvehicle-div1">
                <div className="subsub1-sub2-addvehicle-div1">
                  <div className="sub1-subsub1-sub2-addvehicle-div1">
                    <div>
                      <img
                        src="./assets/searchwithperson.svg"
                        alt="none"
                        className="addvehicle-search-icon"
                      />
                    </div>
                    <span>Search Vehicle</span>
                  </div>
                  <div className="sub2-subsub1-sub2-addvehicle-div1">
                    <select
                      type="text"
                      value={searchPlateText}
                      onChange={(value) => handlePlate(value)}
                      style={{color:searchPlateText=="Plate"?"#7A7D8B":"black"}}

                    >
                      <option value="Plate">Plate No.</option>
                      <option style={{color:"black"}}>DXB U12345</option>
                      <option style={{color:"black"}}>DXB U12245</option>
                    </select>
                    <select
                      type="text"
                      value={searchDeviceText}
                      onChange={(value) => handleDevice(value)}
                      style={{color:searchDeviceText=="Device"?"#7A7D8B":"black"}}

                    >
                      <option selected value="Device">
                        Device
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
                      <option selected value="Model">Device Model</option>
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
                    <input placeholder="Device IMEI"
                     type="numder"
                     value={searchImeiText}
                     onChange={(value) => handleImei(value)} />

                    <select
                    type="text"
                    value={searchCompanyText}
                    onChange={(value) => handleCompany(value)}
                    style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}

                    >
                      <option value="Company">Company</option>
                      <option style={{color:"black"}}>Delta</option>
                    </select>
                    <div className="sub1-sub2-subsub1-sub2-addvehicle-div1" onClick={()=>handlClear()}
                    style={{cursor:"pointer"}}
                    >
                      <img
                        src="./assets/clear.svg"
                        alt="none"
                      />
                      <button>Clear</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="addvehicle-div2">
              <div className="sub1-addvehicle-div2">
                <div className="subsub1-sub1-addvehicle-div2">
                  <input type="checkbox"
                  onChange={handleChange} name='allSelect'checked={data.filter(da=>da?.isChecked !== true).length < 1}

                  />
                  {/* <p><input type='checkbox' style={{width:"1.5rem",height:"1.5rem",accentColor:"#AD0606"}}/></p> */}
                  <p>Plate No.</p>
                  <p>Device type</p>
                  <p>Device Model</p>
                  <p>Device IMEI</p>
                  {/* <p>Last Location</p> */}
                  <p>Company</p>
                  {/* <p>Country</p> */}
                  {/* <p>Status</p> */}
                  {/* <p></p> */}
                </div>
              </div>
              <div className="sub2-addvehicle-div2">
                {data.map((item) => {
                  return (
                    <div id="import-addvehicle">
                      <p id="sub1-import-addvehicle">{item.id}</p>
                      <div className="subsub1-sub2-addvehicle-div2">
                        {/* <img src={item.img} alt="none" className="person"/> */}
                        <input type="checkbox" 
                          name={item.plate} onChange={handleChange} checked={item?.isChecked || false}

                        />

                        {/* <p><input type='checkbox' style={{width:"1.5rem",height:"1.5rem",accentColor:"#AD0606"}}/></p> */}
                        <p>{item.plate}</p>
                        <p>{item.device}</p>
                        <p>{item.model}</p>
                        {/* <p>{item.model}</p> */}
                        {/* <p>{item.imei}</p> */}
                        {/* <div className="import-gps-path-addvehicle">
                <p className="sub1-import-gps-path-addvehicle">{item.location.gps}</p>
                <p className="sub2-import-gps-path-addvehicle">{item.location.path}</p>
                </div> */}
                        <p>{item.iemi}</p>
                        {/* <p>{item.country}</p> */}
                        <p>{item.company}</p>
                        {/* <img src="./assets/settings.png" alt="none"/>      */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

           
          </div>
        </div>
      </div>
    
      <Outlet />
    </div>
  );
};

export default AddVehicle;
