import React, { useState } from "react";
import "./Dashboard.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet } from "react-router-dom";
import { LiveChatWidget, EventHandlerPayload } from '@livechat/widget-react'


const Dashboard = () => {
  
  
  return (
    <div className="dashboard">
      <div className="dashboard-left" style={{width:"30rem",height:"93rem"}}>
      <SideBar/>
      
        </div>
      <div className="dashboard-right" style={{width:"161.9rem",height:"92.9rem"}}>
        <div className="dashboard-nav">
          <Header/>
          
        </div>
        <div className="dashboard-main">
          <div className="dashboard-contaner">
          <img src="./assets/map.png" alt="none" className="map"/>
         
          </div>
       

        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Dashboard;
