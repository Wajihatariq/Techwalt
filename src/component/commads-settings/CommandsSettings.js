import React,{useState} from "react";
import "./CommandsSettings.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet } from "react-router-dom";
import SystemParams from "./system params/SystemParams";
import InputOutput from "./input-output/InputOutput";
import Connectivity from "./connectivity/Connectivity";
import Configuration from "./configuration/Configuration";
import Tracking from "./tracking/Tracking"
import Miscellaneous from "./miscellaneous/Miscellaneous"
import Bluetooth from "./bluetooth/Bluetooth"
import Can from "./can/Can";
import Actions from "./actions/Actions";
import CommandsQueue from "./commands-queue/CommandsQueue";
import Accelerometer from "./accelerometer/Accelerometer"
const CommandsSettings = () => {
const [section1, setSection1] = useState("none")
const [section1State, setSection1State] = useState("inputoutput")
const [section2, setSection2] = useState("block")
const [section2State, setSection2State] = useState("")
const [section3, setSection3] = useState("none")
const [section3State, setSection3State] = useState("")
const [section4, setSection4] = useState("none")
const [section4State, setSection4State] = useState("")
const [section5, setSection5] = useState("none")
const [section5State, setSection5State] = useState("")
const [section6, setSection6] = useState("none")
const [section6State, setSection6State] = useState("")
const [section7, setSection7] = useState("none")
const [section7State, setSection7State] = useState("")
const [section8, setSection8] = useState("none")
const [section8State, setSection8State] = useState("")
const [section9, setSection9] = useState("none")
const [section9State, setSection9State] = useState("")
const [section10, setSection10] = useState("none")
const [section10State, setSection10State] = useState("")
const [section11, setSection11] = useState("none")
const [section11State, setSection11State] = useState("")
const handlSec1=(data)=>{
  if(data=="inputoutput"){
    setSection1State("inputoutput")
    setSection2State("")
    setSection3State("")
    setSection4State("")
    setSection5State("")
    setSection6State("")
    setSection8State("")
    setSection9State("")
    setSection10State("")
    setSection11State("")
    setSection7State("")






    setSection1("none")
    setSection2("block")
    setSection3("none")
    setSection4("none")
    setSection5("none")
    setSection6("none")
    setSection8("none")
    setSection9("none")
    setSection10("none")
    setSection11("none")
    setSection7("none")





  }
  else if(data=="systemparams"){
    setSection2State("systemparams")
    setSection1State("")
    setSection3State("")
    setSection4State("")
    setSection5State("")
    setSection6State("")
    setSection8State("")
    setSection9State("")
    setSection10State("")
    setSection11State("")
    setSection7State("")








    setSection1("block")
    setSection2("none")
    setSection3("none")
    setSection4("none")
    setSection5("none")
    setSection6("none")
    setSection8("none")
    setSection9("none")
    setSection10("none")
    setSection11("none")
    setSection7("none")



  }
  else if(data=="connectivity"){
    setSection3State("connectivity")
    setSection2State("")
    setSection1State("")
    setSection4State("")
    setSection5State("")
    setSection6State("")
    setSection8State("")
    setSection9State("")
    setSection10State("")
    setSection11State("")
    setSection7State("")





    setSection3("block")
    setSection1("none")
    setSection2("none")
    setSection4("none")
    setSection5("none")
    setSection6("none")
    setSection8("none")
    setSection9("none")
    setSection10("none")
    setSection11("none")
    setSection7("none")





  }
  else if(data=="configuration"){
    setSection4State("configuration")
    setSection3State("")
    setSection2State("")
    setSection1State("")
    setSection5State("")
    setSection6State("")
    setSection8State("")
    setSection9State("")
    setSection10State("")
    setSection11State("")
    setSection7State("")





    setSection4("block")
    setSection3("none")
    setSection1("none")
    setSection2("none")
    setSection5("none")
    setSection6("none")
    setSection8("none")
    setSection9("none")
    setSection10("none")
    setSection11("none")
    setSection7("none")




  }
  else if(data=="tracking"){
    setSection5State("tracking")
    setSection3State("")
    setSection2State("")
    setSection1State("")
    setSection4State("")
    setSection6State("")
    setSection8State("")
    setSection9State("")
    setSection10State("")
    setSection11State("")
    setSection7State("")





    setSection5("block")
    setSection3("none")
    setSection1("none")
    setSection2("none")
    setSection4("none")
    setSection6("none")
    setSection8("none")
    setSection9("none")
    setSection10("none")
    setSection11("none")
    setSection7("none")





  }
  else if(data=="miscellaneous"){
    setSection6State("miscellaneous")
    setSection3State("")
    setSection2State("")
    setSection1State("")
    setSection4State("")
    setSection5State("")
    setSection8State("")
    setSection9State("")
    setSection10State("")
    setSection11State("")
    setSection7State("")





    setSection6("block")
    setSection3("none")
    setSection1("none")
    setSection2("none")
    setSection4("none")
    setSection5("none")
    setSection8("none")
    setSection9("none")
    setSection10("none")
    setSection11("none")
    setSection7("none")




  }
  else if(data=="can"){
    setSection8State("can")
    setSection3State("")
    setSection2State("")
    setSection1State("")
    setSection4State("")
    setSection5State("")
    setSection6State("")
    setSection9State("")
    setSection10State("")
    setSection11State("")
    setSection7State("")





    setSection8("block")
    setSection3("none")
    setSection1("none")
    setSection2("none")
    setSection4("none")
    setSection5("none")
    setSection6("none")
    setSection9("none")
    setSection10("none")
    setSection11("none")
    setSection7("none")




  }
  else if(data=="bluetooth"){
    setSection9State("bluetooth")
    setSection3State("")
    setSection2State("")
    setSection1State("")
    setSection4State("")
    setSection5State("")
    setSection6State("")
    setSection8State("")
    setSection10State("")
    setSection11State("")
    setSection7State("")





    setSection9("block")
    setSection3("none")
    setSection1("none")
    setSection2("none")
    setSection4("none")
    setSection5("none")
    setSection6("none")
    setSection8("none")
    setSection10("none")
    setSection11("none")
    setSection7("none")


  }
  else if(data=="actions"){
    setSection10State("actions")
    setSection3State("")
    setSection2State("")
    setSection1State("")
    setSection4State("")
    setSection5State("")
    setSection6State("")
    setSection8State("")
    setSection9State("")
    setSection11State("")
    setSection7State("")





    setSection10("block")
    setSection3("none")
    setSection1("none")
    setSection2("none")
    setSection4("none")
    setSection5("none")
    setSection6("none")
    setSection8("none")
    setSection9("none")
    setSection11("none")
    setSection7("none")


  }
  else if(data=="commands-queue"){
    setSection11State("commands-queue")
    setSection3State("")
    setSection2State("")
    setSection1State("")
    setSection4State("")
    setSection5State("")
    setSection6State("")
    setSection8State("")
    setSection9State("")
    setSection10State("")
    setSection7State("")





    setSection11("block")
    setSection3("none")
    setSection1("none")
    setSection2("none")
    setSection4("none")
    setSection5("none")
    setSection6("none")
    setSection8("none")
    setSection9("none")
    setSection10("none")
    setSection7("none")
  }
  else if(data=="accelerometer"){
    setSection7State("accelerometer")
    setSection3State("")
    setSection2State("")
    setSection1State("")
    setSection4State("")
    setSection5State("")
    setSection6State("")
    setSection8State("")
    setSection9State("")
    setSection10State("")
    setSection11State("")





    setSection7("block")
    setSection3("none")
    setSection1("none")
    setSection2("none")
    setSection4("none")
    setSection5("none")
    setSection6("none")
    setSection8("none")
    setSection9("none")
    setSection10("none")
    setSection11("none")
  }
}
  return (
    <div className="command-setting">
      <div
        className="command-setting-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="command-setting-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="command-setting-nav">
          <Header />
        </div>
        <div className="command-setting-main">
          <div className="command-setting-contaner">
            <div className="command-setting-div1">
              <div className="sub1-command-setting-div1">
                <p>Commands & Settings</p>
              </div>
            </div>
            <div className="command-setting-div2">
              <div className="sub1-command-setting-div2">
                <p>DXB U12345</p>
                <p>Device: Teltonika FMC130</p>
                <p>IMEI: 123456789012345</p>
              </div>
              <div className="sub2-command-setting-div2">
                <div className="subsub1-sub2-command-setting-div2" style={{backgroundColor:section1State=="inputoutput"?"#1A2678":"white"}} onClick={()=>{handlSec1("inputoutput")}}>
                  <p style={{color:section1State=="inputoutput"?"white":"#005EEC"}}>Input&nbsp;/&nbsp;Output</p>
                </div>
                <div className="subsub2-sub2-command-setting-div2" style={{backgroundColor:section2State=="systemparams"?"#1A2678":"white"}} onClick={()=>{handlSec1("systemparams")}}>
                  <p style={{color:section2State=="systemparams"?"white":"#005EEC"}}>System Params</p>
                </div>
                <div className="subsub3-sub2-command-setting-div2" style={{backgroundColor:section3State=="connectivity"?"#1A2678":"white"}} onClick={()=>{handlSec1("connectivity")}}>
                  <p style={{color:section3State=="connectivity"?"white":"#005EEC"}}>Connectivity</p>
                </div>
                <div className="subsub4-sub2-command-setting-div2" style={{backgroundColor:section4State=="configuration"?"#1A2678":"white"}} onClick={()=>{handlSec1("configuration")}}>
                  <p style={{color:section4State=="configuration"?"white":"#005EEC"}}>Configuration</p>
                </div>
                <div className="subsub5-sub2-command-setting-div2" style={{backgroundColor:section5State=="tracking"?"#1A2678":"white"}} onClick={()=>{handlSec1("tracking")}}>
                  <p style={{color:section5State=="tracking"?"white":"#005EEC"}}>Tracking</p>
                </div>
                <div className="subsub6-sub2-command-setting-div2" style={{backgroundColor:section6State=="miscellaneous"?"#1A2678":"white"}} onClick={()=>{handlSec1("miscellaneous")}}>
                  <p style={{color:section6State=="miscellaneous"?"white":"#005EEC"}}>Miscellaneous</p>
                </div>



                <div className="subsub7-sub2-command-setting-div2" style={{backgroundColor:section7State=="accelerometer"?"#1A2678":"white"}} onClick={()=>{handlSec1("accelerometer")}}>
                  <p style={{color:section7State=="accelerometer"?"white":"#005EEC"}}>Accelerometer</p>
                </div>
                <div className="subsub8-sub2-command-setting-div2" style={{backgroundColor:section8State=="can"?"#1A2678":"white"}} onClick={()=>{handlSec1("can")}}>
                  <p style={{color:section8State=="can"?"white":"#005EEC"}}>CAN</p>
                </div>
                <div className="subsub9-sub2-command-setting-div2" style={{backgroundColor:section9State=="bluetooth"?"#1A2678":"white"}} onClick={()=>{handlSec1("bluetooth")}}>
                  <p style={{color:section9State=="bluetooth"?"white":"#005EEC"}}>Bluetooth</p>
                </div>
                <div className="subsub10-sub2-command-setting-div2" style={{backgroundColor:section10State=="actions"?"#1A2678":"white"}} onClick={()=>{handlSec1("actions")}}>
                  <p style={{color:section10State=="actions"?"white":"#005EEC"}}>Actions</p>
                </div>
                <div className="subsub11-sub2-command-setting-div2" style={{backgroundColor:section11State=="commands-queue"?"#1A2678":"white"}} onClick={()=>{handlSec1("commands-queue")}}>
                  <p style={{color:section11State=="commands-queue"?"white":"#005EEC"}}>Commands Queue</p>
                </div>
              </div>
            </div>
{/* ////////////////////////////////////// */}
            <div className="command-setting-div3" >
              <div style={{display:section1}}>
              <SystemParams/>
              </div>
              <div style={{display:section2}}>
              <InputOutput/>
              </div>
               <div style={{display:section3}}>
              <Connectivity/>
              </div>
              <div style={{display:section4}}>
              <Configuration/>
              </div>
              <div style={{display:section5}}>
              <Tracking/>
              </div>
              <div style={{display:section6}}>
              <Miscellaneous/>
              </div>
              <div style={{display:section7}}>
              <Accelerometer/>
              </div>
              <div style={{display:section8}}>
              <Can/>
              </div>
              <div style={{display:section9}}>
              <Bluetooth/>
              </div>
              <div style={{display:section10}}>
              <Actions/>
              </div>
              <div style={{display:section11}}>
              <CommandsQueue/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CommandsSettings;
