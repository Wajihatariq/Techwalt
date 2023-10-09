import React, { useState } from "react";
import "./Connectivity.css";
import Try from "../try/Try"
const Connectivity = () => {
  const [left1, setLeft1] = useState("none");
  const [left1State, setLeft1State] = useState(false);
  const [left2, setLeft2] = useState("none");
  const [left2State, setLeft2State] = useState(false);
  const [left3, setLeft3] = useState("none");
  const [left3State, setLeft3State] = useState(false);
  // //////////////////////////////////
  const [mid1, setMid1] = useState("none");
  const [mid1State, setMid1State] = useState(false);
  const [mid2, setMid2] = useState("none");
  const [mid2State, setMid2State] = useState(false);
  const [mid3, setMid3] = useState("none");
  const [mid3State, setMid3State] = useState(false);
  const [mid4, setMid4] = useState("none");
  const [mid4State, setMid4State] = useState(false);
  // /////////////////////////////////////////
  const [right1, setRight1] = useState("none");
  const [right1State, setRight1State] = useState(false);
  const [right2, setRight2] = useState("none");
  const [right2State, setRight2State] = useState(false);
  const [right3, setRight3] = useState("none");
  const [right3State, setRight3State] = useState(false);
  const [right4, setRight4] = useState("none");
  const [right4State, setRight4State] = useState(false);
  const [records, setRecords] = useState("Newest First");
  const [server1, setServer1] = useState("TCP");
  const [server2, setServer2] = useState("TCP");
  const [ignitionDetectionSource, setIgnitionDetectionSource] =
    useState("Digital Input");
  const [mode, setMode] = useState("");
  const [
    dataCodecToUseForDataTransmission,
    setDataCodecToUseForDataTransmission,
  ] = useState("Codec 8");
  const [batteryChargeMode, setBatteryChargeMode] = useState("Always");

  // //////////////////////////////////////////////
const [focusLeft1, setFocusLeft1] = useState("")
const [focusLeft2, setFocusLeft2] = useState("")
const [focusLeft3, setFocusLeft3] = useState("")
const [focusLeft4, setFocusLeft4] = useState("")
const [focusLeft5, setFocusLeft5] = useState("")
const [focusLeft6, setFocusLeft6] = useState("")

const [focusMid1, setFocusMid1] = useState("")
const [focusMid2, setFocusMid2] = useState("")
const [focusMid3, setFocusMid3] = useState("")
const [focusMid4, setFocusMid4] = useState("")

const [focusRight1, setFocusRight1] = useState("")
const [focusRight2, setFocusRight2] = useState("")
const [focusRight3, setFocusRight3] = useState("")
const [focusRight4, setFocusRight4] = useState("")
const [focusRight5, setFocusRight5] = useState(".1rem solid #898A8D")
const [focusRight6, setFocusRight6] = useState("")
const [focusRight7, setFocusRight7] = useState("")

// /////////////////////////////////////////////
  const handlLeft1 = (state) => {
    if (state == false) {
      setLeft1("block");
      setLeft1State(true);
    } else {
      setLeft1("none");
      setLeft1State(false);
    }
  };
  const handlLeft2 = (state) => {
    if (state == false) {
      setLeft2("block");
      setLeft2State(true);
    } else {
      setLeft2("none");
      setLeft2State(false);
    }
  };
  const handlLeft3 = (state) => {
    if (state == false) {
      setLeft3("block");
      setLeft3State(true);
    } else {
      setLeft3("none");
      setLeft3State(false);
    }
  };
  //////////////////////////////////////
  const handlMid1 = (state) => {
    if (state == false) {
      setMid1("block");
      setMid1State(true);
    } else {
      setMid1("none");
      setMid1State(false);
    }
  };
  const handlMid2 = (state) => {
    if (state == false) {
      setMid2("block");
      setMid2State(true);
    } else {
      setMid2("none");
      setMid2State(false);
    }
  };
  const handlMid3 = (state) => {
    if (state == false) {
      setMid3("block");
      setMid3State(true);
    } else {
      setMid3("none");
      setMid3State(false);
    }
  };
  const handlMid4 = (state) => {
    if (state == false) {
      setMid4("block");
      setMid4State(true);
    } else {
      setMid4("none");
      setMid4State(false);
    }
  };
  // ///////////////////////////
  const handlRight1 = (state) => {
    if (state == false) {
      setRight1("block");
      setRight1State(true);
    } else {
      setRight1("none");
      setRight1State(false);
    }
  };
  const handlRight2 = (state) => {
    if (state == false) {
      setRight2("block");
      setRight2State(true);
    } else {
      setRight2("none");
      setRight2State(false);
    }
  };
  const handlRight3 = (state) => {
    if (state == false) {
      setRight3("block");
      setRight3State(true);
    } else {
      setRight3("none");
      setRight3State(false);
    }
  };
  const handlRight4 = (state) => {
    if (state == false) {
      setRight4("block");
      setRight4State(true);
    } else {
      setRight4("none");
      setRight4State(false);
    }
  };
  const handleSelect0 = (e) => {
    console.log(e.target.value);
    setServer1(e.target.value);
  };
  const handleSelect6 = (e) => {
    console.log(e.target.value);
    setServer2(e.target.value);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setRecords(e.target.value);
  };
  const handleSelect1 = (e) => {
    console.log(e.target.value);
    setIgnitionDetectionSource(e.target.value);
  };
  const handleSelect2 = (e) => {
    console.log(e.target.value);
    setMode(e.target.value);
  };
  const handleSelect3 = (e) => {
    console.log(e.target.value);
    setDataCodecToUseForDataTransmission(e.target.value);
  };
  const handleSelect4 = (e) => {
    console.log(e.target.value);
    setBatteryChargeMode(e.target.value);
  };
  return (
    <div className="sub1-connectivity-div3" id="sec3">
      {/* main-box-left*/}
      <div className="subsub1-sub1-connectivity-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-connectivity-div3">
          <div
            className="subsub1-sub1-subsub1-sub1-connectivity-div3"
            
            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlLeft1(left1State)}
            >Records Parameters</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-connectivity-div3">
              {/* <span>
                PUBGObject motion detection is to be configured to determine device
                working mode. Other functionalities that depend on movement
                source are: power manager, fuel consumption and trip.
              </span> */}
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-connectivity-div3">
              <div  className="icon-hover">
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem" ,cursor:"pointer"}}
                  onClick={() => handlLeft1(left1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub1-subsub1-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-connectivity-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-connectivity-div3">
              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}
               
              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                 onFocus={()=>setFocusLeft1(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft1(".1rem solid #898A8D")}
               style={{border:focusLeft1}}>
                  <label>Open Link Timeout</label>
                  <input type="number" />
                  <p>Seconds</p>
                </div>
                <Try text={"Timeout to terminate connection between the device and backend server, 30 - 259200 seconds"}/>

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}
              >
                <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                 onFocus={()=>setFocusLeft2(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft2(".1rem solid #898A8D")}
               style={{border:focusLeft2}}>
                  <label>Server Response Timeout</label>
                  <input type="number" />
                  <p>Seconds</p>
                </div>
                <Try text={"Timeout to wait response from backend server, 5 - 300 seconds"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}
              >
                <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                 onFocus={()=>setFocusLeft3(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft3(".1rem solid #898A8D")}
               style={{border:focusLeft3}}
                >
                  <div className="sub1-subsub3-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3">
                    <label>Records Storing Order</label>
                    <p>
                      {records == "Newest First"
                        ? "Newest First"
                        : "Oldest First"}
                    </p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect(e)}>
                    <option selected></option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                </div>
                <Try text={"The parameter which defines how records are sent to the server"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}
        {/* sub2-main-box-left*/}
        <div className="sub2-subsub1-sub1-connectivity-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-connectivity-div3"
            
            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlLeft2(left2State)}
            >Enable connection over TLS</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-connectivity-div3">
              <div  className="icon-hover">
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem" ,cursor:"pointer"}}
                  onClick={() => handlLeft2(left2State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-connectivity-div3"
            style={{ display: left2 }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub2-sub2-subsub1-sub1-connectivity-div3">
                <p>Enable connection over TLS</p>
              </div>
              <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-connectivity-div3">
                <div className="sub1-subsub2-sub1-subsub2-sub2-subsub1-sub1-connectivity-div3">
                  <label className="connectivity-switch">
                    <input type="checkbox" />
                    <span className="connectivity-slider"></span>
                  </label>
                  <p>TLS Enable</p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-left*/}
        {/* sub3-main-box-left*/}
        {/* <div className="sub3-subsub1-sub1-connectivity-div3"> */}
        <div className="sub3-subsub1-sub1-connectivity-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-connectivity-div3"
            
            style={{
              borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlLeft3(left3State)}
            >FOTA Web</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-connectivity-div3">
              <div  className="icon-hover">
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem",cursor:"pointer" }}
                  onClick={() => handlLeft3(left3State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-connectivity-div3"
            style={{ display: left3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-connectivity-div3">
              <div className="import1-sub1-subsub2-sub3-subsub1-sub1-connectivity-div3">
                <p>Enable connection over TLS</p>
              </div>
              <div className="import2-sub1-subsub2-sub3-subsub1-sub1-connectivity-div3">
                <p>OFF</p>
                <label className="connectivity-switch">
                  <input type="checkbox" />
                  <span className="connectivity-slider"></span>
                </label>
                <p>ON</p>
              </div>
              <div className="subsub1-sub1-subsub2-sub3-subsub1-sub1-connectivity-div3"
               onFocus={()=>setFocusLeft4(".1rem solid #005EEC")}
               onBlur={()=>setFocusLeft4(".1rem solid #898A8D")}
             style={{border:focusLeft4}}>
                <label>Host</label>
                <input type="number" />
                {/* <p>Hours</p> */}
              </div>
              <div className="subsub2-sub1-subsub2-sub3-subsub1-sub1-connectivity-div3"
               onFocus={()=>setFocusLeft5(".1rem solid #005EEC")}
               onBlur={()=>setFocusLeft5(".1rem solid #898A8D")}
             style={{border:focusLeft5}}>
                <label>Port</label>
                <input type="type" />
              </div>


              <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                 onFocus={()=>setFocusLeft6(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft6(".1rem solid #898A8D")}
               style={{border:focusLeft6}}>
                  <label>Period</label>
                  <input type="number" />
                  <p>mins</p>
                </div>
             
            </div> 
          </div>
        </div>
        {/* sub3-main-box-left*/}
      </div>






      {/* main-box-mid*/}
      <div className="subsub2-sub1-connectivity-div3">
        {/* sub1-main-box-mid*/}

        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub2-sub1-connectivity-div3">
          <div
            className="subsub1-sub2-subsub2-sub1-connectivity-div3"
            
            style={{
              borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlMid2(mid2State)}
            >Network Ping</p>
            <div className="sub1-subsub1-sub2-subsub2-sub1-connectivity-div3">
              <span
              onClick={() => handlMid2(mid2State)}
              >
                Set up network ping with a certain timeout to prevent link close
                by the operator.{" "}
              </span>
              <div className="subsub1-sub1-subsub1-sub2-subsub2-sub1-connectivity-div3">
              <div  className="icon-hover">
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem",cursor:"pointer" }}
                  onClick={() => handlMid2(mid2State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub2-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub2-sub1-connectivity-div3"
            style={{ display: mid2 }}
          >
            <div className="import-subsub2-sub2-subsub2-sub1-connectivity-div3">
              <p>Network Ping</p>
            </div>
            <div className="sub1-subsub2-sub2-subsub2-sub1-connectivity-div3">
              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems:"center"
                }}
              >
                <div className="subsub1-sub1-subsub2-sub2-subsub2-sub1-connectivity-div3"
                 onFocus={()=>setFocusMid1(".1rem solid #005EEC")}
                 onBlur={()=>setFocusMid1(".1rem solid #898A8D")}
               style={{border:focusMid1}}>
                  <label style={{marginLeft:".4rem"}}>Timeout</label>
                  <input type="number" />
                  <p>Seconds</p>
                </div>
                <Try text={"Network ping timeout, range 0 - 300 seconds"}/>

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub2-sub1-connectivity-div3">
          <div
            className="subsub1-sub3-subsub2-sub1-connectivity-div3"
            
            style={{
              borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlMid3(mid3State)}
            >GPRS Server Setup</p>
            <div className="sub1-subsub1-sub3-subsub2-sub1-connectivity-div3">
              <span
              onClick={() => handlMid3(mid3State)}
              >
                Setup server to send data by GPRS link. Note: after changing
                this setting device will be disconnected from current server.
              </span>
              <div className="subsub1-sub1-subsub1-sub3-subsub2-sub1-connectivity-div3">
              <div  className="icon-hover">
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem",cursor:"pointer" }}
                  onClick={() => handlMid3(mid3State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub2-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub2-sub1-connectivity-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub2-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub2-sub3-subsub2-sub1-connectivity-div3"
              onFocus={()=>setFocusMid2(".1rem solid #005EEC")}
              onBlur={()=>setFocusMid2(".1rem solid #898A8D")}
            style={{border:focusMid2}}
              >
                <label>Host</label>
                <input type="number" />
              </div>
              <div className="subsub2-sub1-subsub2-sub3-subsub2-sub1-connectivity-div3"
              onFocus={()=>setFocusMid3(".1rem solid #005EEC")}
              onBlur={()=>setFocusMid3(".1rem solid #898A8D")}
            style={{border:focusMid3}}
              >
                <label>Port</label>
                <input type="type" />
              </div>

              <div className="subsub3-sub1-subsub2-sub3-subsub2-sub1-connectivity-div3"
              onFocus={()=>setFocusMid4(".1rem solid #005EEC")}
              onBlur={()=>setFocusMid4(".1rem solid #898A8D")}
            style={{border:focusMid4}}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub3-subsub2-sub1-connectivity-div3">
                  <label style={{paddingTop:".3rem"}}>Server Protocol</label>
                  <p>{server1 == "TCP" ? "TCP" : "UDP"}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect0(e)} style={{fontSize:"1.2rem"}}>
                  <option selected></option>
                  <option>TCP</option>
                  <option>UDP</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-mid*/}
        {/* sub4-main-box-mid*/}
    
        {/* sub4-main-box-mid*/}
      </div>
      {/* main-box-mid*/}






      {/* main-box-right*/}
      <div className="subsub3-sub1-connectivity-div3">
        {/* sub1-main-box-right*/}
        <div className="sub1-subsub3-sub1-connectivity-div3">
          <div
            className="subsub1-sub1-subsub3-sub1-connectivity-div3"
            

            style={{
              borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlRight1(right1State)}
            >GPRS Setup</p>
            <div className="sub1-subsub1-sub1-subsub3-sub1-connectivity-div3">
              <span
              onClick={() => handlRight1(right1State)}
              >
                Setup sending data by GPRS link. Note: after changing this
                setting device will be disconnected from current server.
              </span>
              <div className="subsub1-sub1-subsub1-sub1-subsub3-sub1-connectivity-div3">
              <div  className="icon-hover">
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem" ,cursor:"pointer"}}
                  onClick={() => handlRight1(right1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub1-subsub3-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub3-sub1-connectivity-div3"
            style={{ display: right1 }}
          >
            <div className="sub1-subsub2-sub1-subsub3-sub1-connectivity-div3">
              <div className="import1-sub1-subsub2-subsub2-sub1-subsub3-sub1-connectivity-div3">
                <label className="connectivity-switch">
                  <input type="checkbox" />
                  <span className="connectivity-slider"></span>
                </label>
                <p>GPRS Enabled</p>
              </div>
              <div className="subsub1-sub1-subsub2-sub1-subsub3-sub1-connectivity-div3"
              onFocus={()=>setFocusRight1(".1rem solid #005EEC")}
              onBlur={()=>setFocusRight1(".1rem solid #898A8D")}
            style={{border:focusRight1}}
              >
                <label>APN Name</label>
                <input type="text" />
                {/* <p>Hours</p> */}
              </div>
              <div className="subsub2-sub1-subsub2-sub1-subsub3-sub1-connectivity-div3"
               onFocus={()=>setFocusRight2(".1rem solid #005EEC")}
               onBlur={()=>setFocusRight2(".1rem solid #898A8D")}
             style={{border:focusRight2}}>
                <label>APN Username</label>
                <input type="text" />
              </div>
              <div className="subsub3-sub1-subsub2-sub1-subsub3-sub1-connectivity-div3"
               onFocus={()=>setFocusRight3(".1rem solid #005EEC")}
               onBlur={()=>setFocusRight3(".1rem solid #898A8D")}
             style={{border:focusRight3}}>
                <label>APN Password</label>
                <input type="text" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub3-sub1-connectivity-div3">
          <div
            className="subsub1-sub2-subsub3-sub1-connectivity-div3"
            
            style={{
              borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlRight2(right2State)}
            >Secondary GPRS Server Setup</p>
            <div className="sub1-subsub1-sub2-subsub3-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub1-sub2-subsub3-sub1-connectivity-div3">
              <div  className="icon-hover">
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem",cursor:"pointer" }}
                  onClick={() => handlRight2(right2State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub3-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub3-sub1-connectivity-div3"
            style={{ display: right2 }}
          >
            <div className="sub1-subsub2-sub2-subsub3-sub1-connectivity-div3">

              <div className="subsub1-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3"
              onFocus={()=>setFocusRight4(".1rem solid #005EEC")}
              onBlur={()=>setFocusRight4(".1rem solid #898A8D")}
            style={{border:focusRight4}}>
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3">
                  <label>Mode</label>
                  <p>{mode}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect2(e)}>
                  <option selected></option>
                  <option>Disable</option>
                  <option>Duplicate</option>
                  <option>Backup</option>
                </select>
              </div>

              <div className="subsub2-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3" style={{width:"29.1rem",height:"3.3rem",border:focusRight5}}
               onFocus={()=>setFocusRight5(".1rem solid #005EEC")}
               onBlur={()=>setFocusRight5(".1rem solid #898A8D")}
              >
                <label>Host</label>
                <input type="number" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3"
              onFocus={()=>setFocusRight6(".1rem solid #005EEC")}
              onBlur={()=>setFocusRight6(".1rem solid #898A8D")}
            style={{border:focusRight6}}>
                <label>Port</label>
                <input type="number" />
              </div>




              <div className="subsub4-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3"
              onFocus={()=>setFocusRight7(".1rem solid #005EEC")}
              onBlur={()=>setFocusRight7(".1rem solid #898A8D")}
            style={{border:focusRight7}}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3">
                  <label>Server Protocol</label>
                  <p>{server2 == "TCP" ? "TCP" : "UDP"}</p>
                                  </div>
                <select value={""} onChange={(e) => handleSelect6(e)}>
                  <option selected></option>
                  <option>TCP</option>
                  <option>UDP</option>
                </select>
              </div>
              
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-right*/}
      </div>
      {/* main-box-right*/}
    </div>
  );
};

export default Connectivity;
