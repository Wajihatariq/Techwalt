import React,{useState} from "react";
import "./Header.css";
import { NavLink, Outlet } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faChartPie,faUser, faMicrochip,faBell,faFileContract,faFileCircleCheck,faMapLocationDot,faBuilding,faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  
  const [activeState, setActiveState] = useState("active");
  return (
  <div className="header">
    <div className="upper">
      <div className="import-sub1-upper">
 <div className="sub1-upper" >
 <input  className="serach-bar" placeholder="Search"/><div className="search-icon"><ion-icon name="search-outline" ></ion-icon></div>
 </div>
 </div>
 <div className="notifications-icon"><img src="./assets/Bell.svg" alt="none"/><div >33</div></div>
 <p >Andrei Zohrefv</p>
 <div><img src="./assets/Person1.svg" alt="none" className="person-icon"/>
 <img src="./assets/polygon.png" alt="none" className="polygon-header"/>
 </div>
 </div> 
    <div className="lower">
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item " >
       
          <NavLink className="nav-link "   aria-current="page" to="/Dashboard" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2rem",marginLeft:"2rem",marginTop:".2rem"}}> <FontAwesomeIcon icon={faChartPie} /></div>Dashboard</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav-link "    to="/Users" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2.5rem",marginLeft:"3rem"}}> <FontAwesomeIcon icon={faUser} /></div>Users</NavLink>
        </li>
        <li className="nav-item">
       
        <NavLink className="nav-link "    to="/Devices" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2.5rem" ,marginLeft:"2.5rem"}}> <FontAwesomeIcon icon={faMicrochip} /></div>Devices</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link "    to="/Alerts" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2.5rem" ,marginLeft:"3rem"}}> <FontAwesomeIcon icon={faBell} /></div>Alerts</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link "    to="/Reports" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2.5rem" ,marginLeft:"3rem"}}> <FontAwesomeIcon icon={faFileContract} /></div>Reports</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link "    to="/Rules" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2.5rem" ,marginLeft:"3rem"}}> <FontAwesomeIcon icon={faFileCircleCheck} /></div>Rules</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link "    to="/Geofance" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2.5rem" ,marginLeft:"2rem"}}> <FontAwesomeIcon icon={faMapLocationDot} /></div>Geofence</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link "    to="/Company" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2.5rem" ,marginLeft:"2.5rem"}}> <FontAwesomeIcon icon={faBuilding} /></div>Company</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link "    to="/Ticket" style={({isActive})=>({color:isActive ? "#FFFFFF" : "#005EEC",backgroundColor:isActive ? "#1A2678" : "#FFFFFF",paddingLeft:"1.5rem"})}  ><div style={{fontSize:"2.5rem" ,marginLeft:"3rem"}}> <FontAwesomeIcon icon={faTriangleExclamation} /></div>Tickets</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div> 

<Outlet/>
</div>

  );
};

export default Header;



