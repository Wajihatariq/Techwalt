import React, { useState,useEffect,useRef } from "react";
import "./Reports.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import checkbox from "rc-checkbox";
import DatePicker from "react-datepicker";
import { CSVLink } from "react-csv";

import { Outlet, useNavigate } from "react-router-dom";
const Reports = () => {
  const navigate = useNavigate();
  
  const [exportType, setExportType] = useState(false);
  const [exportType1, setExportType1] = useState("none");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [checks, setChecks] = useState([]);

  const handlExportType = () => {
    if (exportType) {
      setExportType1("block");
      setExportType(false);
    } else {
      setExportType1("none");
      setExportType(true);
    }
  };
  const ReportData = [
    {
      id: "1",
      plate: "DXB U12341",
      device: "Teltonika",
      model: "FMC130",
      iemi: "49837593896789",
      company: "delta",
    },
    {
      id: "2",
      plate: "DXB U123452",
      device: "Ruptela",
      model: "FMC001",
      iemi: "49837593896789",
      company: "deltas",
    },
    {
      id: "3",
      plate: "DXB U12343",
      device: "Teltonika",
      model: "FMC130",
      iemi: "49837593896789",
      company: "delta",
    },
    {
      id: "4",
      plate: "DXB U123454",
      device: "Ruptela",
      model: "FMC001",
      iemi: "49837593896789",
      company: "deltas",
    },
    {
      id: "5",
      plate: "DXB U12345",
      device: "Teltonika",
      model: "FMC130",
      iemi: "49837593896789",
      company: "delta",
    }
  ];
  const [searchPlateText, setSearchPlateText] = useState("");
  const [searchDeviceText, setSearchDeviceText] = useState("Device Type");
  const [searchModelText, setSearchModelText] = useState("Device Model");
  const [searchCompanyText, setSearchCompanyText] = useState("Company");
  const [data, setData] = useState(ReportData);

  const handlePlate = (value) => {
    const val = value.target.value;
    setSearchPlateText(val);
    // filterData(val);
  };
  const handleDevice = (value) => {
    const val = value.target.value;
    setSearchDeviceText(val);
    // filterData(val);
  };
  const handleModel = (value) => {
    const val = value.target.value;
    setSearchModelText(val);
    // filterData(val);
  };
  const handleCompany = (value) => {
    const val = value.target.value;
    setSearchCompanyText(val);
    // filterData(val);
  };
  useEffect(() => {
    setData(
      ReportData.filter((item)=>{
        return (!searchPlateText || item.plate.toLocaleLowerCase().includes(searchPlateText.toLocaleLowerCase())) && (searchDeviceText=="Device Type"?item.device : (!searchDeviceText || item.device===searchDeviceText))&& (searchModelText=="Device Model"?item.model : (!searchModelText || item.model===searchModelText))&& (searchCompanyText=="Company"?item.company : (!searchCompanyText || item.company===searchCompanyText));
      })
    )
  }, [searchPlateText,searchDeviceText,searchModelText,searchCompanyText]);
  const handlClear=()=>{
    setSearchPlateText("")
    setSearchDeviceText("Device Type")
    setSearchModelText("Device Model")
    setSearchCompanyText("Company")
    setData(ReportData);
    setStartDate("");
    setEndDate("")
  };
  useEffect(() => {
    setChecks(ReportData)
  }, [])
  const handleCheck=(e)=>{
    const {name,checked}=e.target;

  if(name==="AllSelect"){
    let tempReport=checks.map((check)=>{return{...check,isChecked:checked}});
    setChecks(tempReport)
  }
  else{
    let tempReport=checks.map((check)=>check.plate===name?{...check,isChecked:checked}:check);
    setChecks(tempReport)
  }

  }
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false)
  const dropdownRef =useRef(null);
  useEffect(() => {
    const onClick=(e)=>{
if(e.target !==dropdownRef.current ){
setIsDropdownDisplayed(false)
}
    };
    document.addEventListener('click',onClick);
    return()=>{
      document.removeEventListener('click',onClick);
    }
  }, [])
  


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
    <div className="reports">
      <div className="reports-left" style={{ width: "30rem", height: "93rem" }}>
        <SideBar />
      </div>
      <div
        className="reports-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="reports-nav">
          <Header />
        </div>
        <div className="reports-main">
          <div className="reports-contaner">
            <div className="reports-div1">
              <div className="sub1-reports-div1">
                <p>
                  Total reports <span>35</span>
                </p>
<div className="Rstart"> <DatePicker
        selected={startDate}
        placeholderText="From"
        calendarClassName="rasta-stripes"

        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        timeInputLabel="Time:"
        dateFormat="dd/MM/yyyy h:mm aa"
        showTimeInput
      />
     </div>
    <div className="Rend">
    <DatePicker
    selected={endDate}
    calendarClassName="rasta-stripes"

    placeholderText="To"
    onChange={(date) => setEndDate(date)}
    selectsEnd
    startDate={startDate}
    endDate={endDate}
    minDate={startDate}
    timeInputLabel="Time:"
    dateFormat="dd/MM/yyyy h:mm aa"
    showTimeInput
      />













       {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </div>
                <div className="subsub1-sub1-reports-div1">
                  <div
                    className="sub1-subsub1-sub1-reports-div1"
                    // onClick={() => handlExportType()}
                    onClick={(e)=>{
                      e.stopPropagation();
                      setIsDropdownDisplayed((prevState)=>!prevState)}}
                      style={{cursor:"pointer"}}
                  >
                    <img src="./assets/report.svg" alt="none" />
                    <label
                    style={{cursor:"pointer"}}
                    >Report Type</label>
                    <img src="./assets/whiteDown.svg" alt="none" />
                  </div>
                  <CSVLink
                    data={ReportData}
                    filename="Reports"
                    style={{ textDecoration: "none" }}
                  >
                  <div className="sub2-subsub1-sub1-reports-div1">
                    <img src="./assets/export.svg" alt="none" />
                    <button>Export</button>
                  </div>
                  </CSVLink>
                </div>
              </div>
              <div className="sub2-reports-div1">
                <div className="subsub1-sub2-reports-div1">
                  <div className="sub1-subsub1-sub2-reports-div1">
                    <div>
                      <img
                        src="./assets/searchwithperson.svg"
                        alt="none"
                        className="reports-search-icon"
                      />
                    </div>
                    <span>Search report</span>
                  </div>
                  <div className="sub2-subsub1-sub2-reports-div1">
                    <input placeholder="Plate No." 
                     type="text"
                     value={searchPlateText}
                     onChange={(value) => handlePlate(value)}
                    />
                    <select
                     type="text"
                     value={searchDeviceText}
                     onChange={(value) => handleDevice(value)}
                     style={{color:searchDeviceText=="Device Type"?"#7A7D8B":"black"}}
                    >
                      <option>Device Type</option>
                      <option style={{color:"black"}}>Ruptela</option>
                      <option style={{color:"black"}}>Teltonika</option>
                    </select>
                    <select 
                     type="text"
                     value={searchModelText}
                     onChange={(value) => handleModel(value)}
                     style={{color:searchModelText=="Device Model"?"#7A7D8B":"black"}}
                    >
                      <option>Device Model</option>
                      <option style={{color:"black"}}>FMC001</option>
                      <option style={{color:"black"}}>FMC130</option>
                    </select>
                    <input disabled/>
                    <input disabled/>

                    <select
                     type="text"
                     value={searchCompanyText}
                     onChange={(value) => handleCompany(value)}
                     style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}
                    >
                      <option>Company</option>
                      <option style={{color:"black"}}>delta</option>
                      <option style={{color:"black"}}>deltas</option>
                    </select>
                    <div className="sub1-sub2-subsub1-sub2-reports-div1"
                    style={{cursor:"pointer"}}
                    onClick={()=>handlClear()}
                    >
                      <img src="./assets/clear.svg" alt="none" />
                      <button>Clear</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reports-div2">
              <div className="sub1-reports-div2">
                <div className="subsub1-sub1-reports-div2">
                  <input type="checkbox" 
                  onChange={handleChange} name='allSelect'checked={data.filter(da=>da?.isChecked !== true).length < 1}

                  // name="AllSelect" onChange={handleCheck}
                  // checked={checks.filter(item=>item?.isChecked !== true).length<1}
                  />
                  {/* <p><input type='checkbox' style={{width:"1.5rem",height:"1.5rem",accentColor:"#AD0606"}}/></p> */}
                  <p>Plate No.</p>
                  <p>Device type</p>
                  <p>Device Model</p>
                  <p>IMEI</p>
                  {/* <p>Last Location</p> */}
                  <p>Company</p>
                  {/* <p>Country</p> */}
                  {/* <p>Status</p> */}
                  {/* <p></p> */}
                </div>
              </div>
              <div className="sub2-reports-div2">
                {data.map((item) => {
                  return (
                    <div id="import-reports">
                      <p id="sub1-import-reports">{item.id}</p>
                      <div className="subsub1-sub2-reports-div2">
                        {/* <img src={item.img} alt="none" className="person"/> */}
                        <input type="checkbox"
                          name={item.plate} onChange={handleChange} checked={item?.isChecked || false}

                        //  name={item.plate} onChange={handleCheck} checked={item?.isChecked ||false}
                         />

                        {/* <p><input type='checkbox' style={{width:"1.5rem",height:"1.5rem",accentColor:"#AD0606"}}/></p> */}
                        <p>{item.plate}</p>
                        <p>{item.device}</p>
                        <p>{item.model}</p>
                        {/* <p>{item.model}</p> */}
                        {/* <p>{item.imei}</p> */}
                        {/* <div className="import-gps-path-reports">
                <p className="sub1-import-gps-path-reports">{item.location.gps}</p>
                <p className="sub2-import-gps-path-reports">{item.location.path}</p>
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

            {isDropdownDisplayed &&   <div className="portal-report-types" 
            onClick={(e)=>{e.stopPropagation()}} ref={dropdownRef}
            >
        <div className="sub1-portal-report-types">
          <div className="subsub1-sub1-portal-report-types">
            <input type="checkbox" />
            <p for="check">Fuel</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Idle</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Connectivity</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Movement</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Ignition ON/OFF</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>OverSpeed</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Crash</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Geofence</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>GPS</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Low Battery</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Not in Route</p>
          </div>
          <div>
            <input type="checkbox" />
            &nbsp;<p>Temperature</p>
          </div>
        </div>
      </div>}

          </div>
        </div>
      </div>
     
      <Outlet />
    </div>
  );
};

export default Reports;
