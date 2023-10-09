import React,{useState,useEffect} from "react";
import "./Alerts.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Alerts = () => {
  const navigate = useNavigate();
  const AlertData = [
    {
      id: "1",
      plate: "DXB U12345",
      alert: "Enter Geofence",
      location: {
        gps: "24.35164,54.514485",
        path: "AI Nahyan St,Duabi ,UAE",
      },
      time:"11/12/2023 10:31 PM",
      company: "delta",
    },
    {
        id: "2",
        plate: "DXB U123455",
        alert: "Enter Geofence",
        location: {
          gps: "24.35164,54.514485",
          path: "AI Nahyan St,Duabi ,UAE",
        },
        time:"11/12/2023 10:31 PM",
        company: "deltas",
      },
      {
        id: "1",
        plate: "DXB U12345",
        alert: "Enter Geofence",
        location: {
          gps: "24.35164,54.514485",
          path: "AI Nahyan St,Duabi ,UAE",
        },
        time:"11/12/2023 10:31 PM",
        company: "delta",
      },
      {
          id: "2",
          plate: "DXB U123455",
          alert: "Enter Geofences",
          location: {
            gps: "24.35164,54.514485",
            path: "AI Nahyan St,Duabi ,UAE",
          },
          time:"11/12/2023 10:31 PM",
          company: "deltass",
        },
        {
          id: "1",
          plate: "DXB U12345",
          alert: "Enter Geofence",
          location: {
            gps: "24.35164,54.514485",
            path: "AI Nahyan St,Duabi ,UAE",
          },
          time:"11/12/2023 10:31 PM",
          company: "delta",
        },
        {
            id: "2",
            plate: "DXB U123455",
            alert: "Enter Geofences",
            location: {
              gps: "24.35164,54.514485",
              path: "AI Nahyan St,Duabi ,UAE",
            },
            time:"11/12/2023 10:31 PM",
            company: "deltas",
          },
          {
            id: "1",
            plate: "DXB U12345",
            alert: "Enter Geofence",
            location: {
              gps: "24.35164,54.514485",
              path: "AI Nahyan St,Duabi ,UAE",
            },
            time:"11/12/2023 10:31 PM",
            company: "delta",
          },
          {
              id: "2",
              plate: "DXB U123455",
              alert: "Enter Geofences",
              location: {
                gps: "24.35164,54.514485",
                path: "AI Nahyan St,Duabi ,UAE",
              },
              time:"11/12/2023 10:31 PM",
              company: "deltas",
            },
            {
              id: "1",
              plate: "DXB U12345",
              alert: "Enter Geofence",
              location: {
                gps: "24.35164,54.514485",
                path: "AI Nahyan St,Duabi ,UAE",
              },
              time:"11/12/2023 10:31 PM",
              company: "delta",
            },
            {
                id: "2",
                plate: "DXB U123455",
                alert: "Enter Geofences",
                location: {
                  gps: "24.35164,54.514485",
                  path: "AI Nahyan St,Duabi ,UAE",
                },
                time:"11/12/2023 10:31 PM",
                company: "deltass",
              },
              {
                id: "1",
                plate: "DXB U12345",
                alert: "Enter Geofence",
                location: {
                  gps: "24.35164,54.514485",
                  path: "AI Nahyan St,Duabi ,UAE",
                },
                time:"11/12/2023 10:31 PM",
                company: "delta",
              },
              {
                  id: "2",
                  plate: "DXB U123455",
                  alert: "Enter Geofence",
                  location: {
                    gps: "24.35164,54.514485",
                    path: "AI Nahyan St,Duabi ,UAE",
                  },
                  time:"11/12/2023 10:31 PM",
                  company: "deltass",
                },
                {
                  id: "1",
                  plate: "DXB U12345",
                  alert: "Enter Geofence",
                  location: {
                    gps: "24.35164,54.514485",
                    path: "AI Nahyan St,Duabi ,UAE",
                  },
                  time:"11/12/2023 10:31 PM",
                  company: "delta",
                },
                {
                    id: "2",
                    plate: "DXB U123455",
                    alert: "Enter Geofences",
                    location: {
                      gps: "24.35164,54.514485",
                      path: "AI Nahyan St,Duabi ,UAE",
                    },
                    time:"11/12/2023 10:31 PM",
                    company: "deltass",
                  },
                  {
                    id: "1",
                    plate: "DXB U12345",
                    alert: "Enter Geofence",
                    location: {
                      gps: "24.35164,54.514485",
                      path: "AI Nahyan St,Duabi ,UAE",
                    },
                    time:"11/12/2023 10:31 PM",
                    company: "delta",
                  },
                  {
                      id: "2",
                      plate: "DXB U123455",
                      alert: "Enter Geofence",
                      location: {
                        gps: "24.35164,54.514485",
                        path: "AI Nahyan St,Duabi ,UAE",
                      },
                      time:"11/12/2023 10:31 PM",
                      company: "deltass",
                    }
     
   
  ];
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchPlateText, setSearchPlateText] = useState("");
  const [searchAlertText, setSearchAlertText] = useState("");
  const [searchCompanyText, setSearchCompanyText] = useState("Company");
  const [data, setData] = useState(AlertData);

  const handlePlate = (value) => {
    const val = value.target.value;
    setSearchPlateText(val);
    // filterData(val);
  };
  const handleAlert = (value) => {
    const val = value.target.value;
    setSearchAlertText(val);
    // filterData(val);
  };
  const handleCompany = (value) => {
    const val = value.target.value;
    setSearchCompanyText(val);
    // filterData(val);
  };
  useEffect(() => {
    setData(
      AlertData.filter((item)=>{
        return (!searchPlateText || item.plate.toLocaleLowerCase().includes(searchPlateText.toLocaleLowerCase())) && (!searchAlertText || item.alert.toLocaleLowerCase().includes(searchAlertText.toLocaleLowerCase()))  && (searchCompanyText=="Company"?item.company : (!searchCompanyText || item.company===searchCompanyText));
      })
    )
  }, [searchPlateText,searchAlertText,searchCompanyText]);
  const handlClear=()=>{
    setSearchPlateText("")
    setSearchAlertText("")
    setSearchCompanyText("Company")
    setData(AlertData);
    setStartDate("")
    setEndDate("")
  }
  return (
    <div className="alerts">
      <div className="alerts-left" style={{ width:"30rem",height:"93rem"}}>
        <SideBar />
      </div>
      <div
        className="alerts-right"
        style={{ width:"161.9rem",height:"92.9rem"}}
      >
        <div className="alerts-nav">
          <Header />
        </div>
        <div className="alerts-main">
          <div className="alerts-contaner">

          <div className="alerts-div1">
              <div className="sub1-alerts-div1">
                <p>
                Total Alerts   <span>35</span>
                </p>
                <div className="Astart"> <DatePicker
        selected={startDate}
        calendarClassName="rasta-stripes"

        placeholderText="From"
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        timeInputLabel="Time:"
      dateFormat="dd/MM/yyyy h:mm aa"
      showTimeInput
      />
     </div>
    <div className="Aend">
    <DatePicker
      calendarClassName="rasta-stripes"
      selected={endDate}
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
    </div>
                <div className="subsub1-sub1-alerts-div1">
                <CSVLink
                    data={AlertData}
                    filename="Alert"
                    style={{ textDecoration: "none" }}
                  >
                  <div className="sub1-subsub1-sub1-alerts-div1">
                    <img src="./assets/export.svg" alt="none"/>
                    <button>Export</button>
                  </div>
                  </CSVLink>
                  {/* <div className="sub2-subsub1-sub1-alerts-div1">
                    <img src="./assets/add.png" alt="none"/>
                    <button onClick={()=>navigate("/AddDevice")}>Add Device</button>
                  </div> */}
                   
                </div>
              </div>
              <div className="sub2-alerts-div1">
              <div className="subsub1-sub2-alerts-div1">
                <div className="sub1-subsub1-sub2-alerts-div1">
                <div ><img src="./assets/searchwithperson.svg" alt="none" className="alerts-search-icon"/></div><span>Search Alert</span>
                </div>
               <div className="sub2-subsub1-sub2-alerts-div1">
    <input placeholder="Plate No."
     type="text"
     value={searchPlateText}
     onChange={(value) => handlePlate(value)}
    />
    <input placeholder="Alert Type"
    type="text"
    value={searchAlertText}
    onChange={(value) => handleAlert(value)}
    />
    <input disabled/>
    <input  disabled/>
  
    <select
    type="text"
    value={searchCompanyText}
    onChange={(value) => handleCompany(value)}
    style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}
    >
        <option>Company</option>
        <option>delta</option>
        <option>deltas</option>
        <option>deltass</option>
    </select>
   
    <div className="sub1-sub2-subsub1-sub2-alerts-div1"
    style={{cursor:"pointer"}}
    onClick={()=>handlClear()}
    >
    <img src="./assets/clear.svg" alt="none"/>
    <button>Clear</button>
    </div>
              </div>

              </div>
              </div>
             
            </div>



            {/* <div className="alerts-div1">
              <div className="sub1-alerts-div1">
                <p>
                  Total Alerts <span>35</span>
                </p>

                <div className="subsub1-sub1-alerts-div1">
                  <div className="sub1-subsub1-sub1-alerts-div1">
                    <img src="./assets/export.png" alt="none" />
                    <button>Export</button>
                  </div>
                 
                </div>
              </div>
              <div className="sub2-alerts-div1">
                <div className="subsub1-sub2-alerts-div1">
                  <div>
                    <img
                      src="./assets/searchwithperson.png"
                      alt="none"
                      className="alerts-search-icon"
                    />
                  </div>
                  <span>Search Alerts</span>
                </div>
                <div className="subsub2-sub2-alerts-div1">
                  <input placeholder="Plate No." />
                  <input placeholder="IMEI" />
                  <select>
                    <option>Form</option>
                    <option></option>
                    <option></option>
                  </select>
                  <select>
                    <option>To</option>
                    <option></option>
                    <option></option>
                  </select>
                  <select>
                    <option>Alert Type</option>
                    <option></option>
                    <option></option>
                  </select>
                  
                </div>
                <div className="subsub3-sub2-alerts-div1">
                <div className="sub1-subsub3-sub2-alerts-div1">
                <select>
                    <option>Company</option>
                    <option></option>
                    <option></option>
                  </select>                  
                  </div>
                <div className="sub2-subsub3-sub2-alerts-div1">
                    <img
                      src="./assets/Searchwithpersonwhite.png"
                      alt="none"
                      className="alerts-search-icon"
                    />
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>*/}


<div className="alerts-div2">
            <div className="sub1-alerts-div2">
              <div className="subsub1-sub1-alerts-div2">
                {/* <p></p> */}
                <p>Plate No.</p>
                <p>Alert Type</p>
                <p>Location</p>
                <p>Time</p>
                {/* <p>Last Location</p> */}
                <p>Company</p>
                {/* <p>Country</p> */}
                {/* <p>Status</p> */}
                {/* <p></p> */}
              </div>
              </div>
            <div className="sub2-alerts-div2">
            {data.map((item)=>{
              return(
                <div id="import-alerts">
                <p id="sub1-import-alerts">{item.id}</p>
                <div className="subsub1-sub2-alerts-div2">
                  {/* <img src={item.img} alt="none" className="person"/> */}
                <p>{item.plate}</p>
                <p>{item.alert}</p>
                {/* <p>{item.model}</p> */}
                {/* <p>{item.imei}</p> */}
                <div className="import-gps-path-alerts">
                <a href='https://goo.gl/maps/sb8f95HXVLo6e7st8' target='_blank' className="sub1-import-gps-path-alerts" style={{textDecoration:"none",color:"#1A3096"}}>{item.location.gps}</a>
                <p className="sub2-import-gps-path-alerts">{item.location.path}</p>
                </div>
                <p>{item.time}</p>
                {/* <p>{item.country}</p> */}
                <p>{item.company}</p>
               {/* <img src="./assets/settings.png" alt="none"/>      */}
                 </div>
                 </div>
              );
            })}
            </div>
          

            </div>


            
            {/* <div className="alerts-div2">
              <table className="alerts-div2-table">
                <thead>
                  <tr>
                    <th
                      style={{ borderBottom: "0rem", borderTop: "0rem" }}
                    ></th>
                    <th
                      style={{
                        backgroundColor: "#364153",
                        borderTopLeftRadius: "1rem",
                        borderBottomLeftRadius: "1rem",
                      }}
                    >
                      <div>Plate No.</div>
                    </th>
                    <th style={{ backgroundColor: "#364153" }}>
                      <div>Alert Type</div>
                    </th>
                    <th style={{ backgroundColor: "#364153" }}>
                      <div>Location</div>
                    </th>
                    <th style={{ backgroundColor: "#364153" }}>
                      <div>Time</div>
                    </th>
                    <th
                      style={{
                        backgroundColor: "#364153",
                        borderTopRightRadius: "1rem",
                        borderBottomRightRadius: "1rem",
                      }}
                    >
                      <div>Company</div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {AlertData.map((item) => {
                    return (
                      <tr>
                        <td style={{ paddingLeft: "2rem" }}>
                          <div
                            style={{
                              border: ".1rem solid grey",
                              height: "2.7rem",
                              marginTop: "1rem",
                            }}
                          >
                            {item.id}
                          </div>
                        </td>
                        <td style={{}}>
                          <div
                            style={{
                              height: "7.6rem",
                              borderTop: ".1rem solid grey",
                              borderBottom: ".1rem solid grey",
                              marginTop: ".3rem",
                              paddingTop: "2.5rem",
                              borderLeft: ".1rem solid grey",
                              borderTopLeftRadius: "1rem",
                              borderBottomLeftRadius: "1rem",
                            }}
                          >
                            {item.plate}
                          </div>
                        </td>
                        <td style={{}}>
                          <div
                            style={{
                              height: "7.6rem",
                              borderTop: ".1rem solid grey",
                              borderBottom: ".1rem solid grey",
                              marginTop: ".3rem",
                              paddingTop: "2.5rem",
                            }}
                          >
                            {item.alert}
                          </div>
                        </td>
                        <td style={{}}>
                          <div
                            style={{
                              height: "7.6rem",
                              borderTop: ".1rem solid grey",
                              borderBottom: ".1rem solid grey",
                              marginTop: ".3rem",
                              paddingTop: "1.5rem",
                            }}
                          >
                            <div>{item.location.gps}</div>
                            <div>{item.location.path}</div>
                          </div>
                        </td>
                        <td style={{}}>
                          <div
                            style={{
                              height: "7.6rem",
                              borderTop: ".1rem solid grey",
                              borderBottom: ".1rem solid grey",
                              marginTop: ".3rem",
                              paddingTop: "2.5rem",
                            }}
                          >
                            {item.time}
                          </div>
                        </td>
                        <td style={{}}>
                          <div
                            style={{
                              height: "7.6rem",
                              borderTop: ".1rem solid grey",
                              borderBottom: ".1rem solid grey",
                              marginTop: ".3rem",
                              paddingTop: "2.5rem",
                              borderRight: ".1rem solid grey",
                              borderTopRightRadius: "1rem",
                              borderBottomRightRadius: "1rem",
                            }}
                          >
                            {item.company}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>  */}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Alerts;
