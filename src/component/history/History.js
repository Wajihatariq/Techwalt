import React, { useState } from "react";
import "./History.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import DatePicker from "react-datepicker";

import { Outlet, useNavigate } from "react-router-dom";
const History = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handlNavigate=()=>{
    navigate("/HistoryPlayBack",{state:{startDate:startDate,endDate:endDate}})
  }
  return (
    <div className="history">
      <div className="history-left" style={{ width: "30rem", height: "93rem" }}>
        <SideBar />
      </div>
      <div
        className="history-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="history-nav">
          <Header />
        </div>
        <div className="history-main">
          <div className="history-contaner">
            <div className="histroy-div1">
              <div className="sub1-histroy-div1">
                <div className="left-sub1-histroy-div1">
                  <div className="sub1-left-sub1-histroy-div1">
                    <div style={{ marginRight: "2rem", marginLeft: "2rem" }}>
                      <img
                        src="./assets/searchwithperson.svg"
                        alt="none"
                        className="history-search-icon"
                      />
                    </div>
                    <span>Search Vehicle History</span>
                  </div>

                  <div className="sub2-left-sub1-histroy-div1">
                    <span>DXB U16779</span>
                    <div>
                      <img
                        src="./assets/blueCar.svg"
                        alt="none"
                        className="history-car-icon"
                      />
                    </div>
                  </div>

                  <div className="sub3-left-sub1-histroy-div1">
                    <div className="subsub1-sub3-left-sub1-histroy-div1">
                      <div>
                      <p className="HstartP">From</p>
                      <div className="Hstart">
                      
                       <DatePicker
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
</div>
<div>
<p  className="HendP">To</p>
     <div className="Hend">
     
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
                      </div>
                   
                    </div>
                  </div>
                </div>
                <div className="right-sub1-histroy-div1">
                  <div className="sub1-right-sub1-histroy-div1" onClick={()=>handlNavigate()}
                  style={{cursor:"pointer"}}
                  >
                    <img src="./assets/Searchwithpersonwhite.svg" alt="none" />
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="histroy-div2">
              <img src="./assets/map.png" alt="none" className="history-map" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default History;
