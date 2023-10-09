import React, { useState } from "react";
import "./Tracking.css";
import Try from "../try/Try"
const Tracking = () => {
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
  const [digitalInput, setDigitalInput] = useState("");
  const [priority1, setPriority1] = useState("");
  const [priority2, setPriority2] = useState("");
  const [priority3, setPriority3] = useState("");
  const [priority4, setPriority4] = useState("");
  const [priority5, setPriority5] = useState("");
  const [priority6, setPriority6] = useState("");
  const [priority7, setPriority7] = useState("");
  const [priority8, setPriority8] = useState("");

  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operand3, setOperand3] = useState("");
  const [operand4, setOperand4] = useState("");
  const [operand5, setOperand5] = useState("");
  const [operand6, setOperand6] = useState("");
  const [operand7, setOperand7] = useState("");
  const [operand8, setOperand8] = useState("");

  const [analogueInput, setAnalogueInput] = useState("");
  const [trackingOnDemandMode, setTrackingOnDemandMode] = useState("")

  useState("Digital Input");
  const [
    accelerometerCalibrationAndGravityFilter,
    setAccelerometerCalibrationAndGravityFilter,
  ] = useState("Continuous");
  const [
    dataCodecToUseForDataTransmission,
    setDataCodecToUseForDataTransmission,
  ] = useState("Codec 8");
  const [batteryChargeMode, setBatteryChargeMode] = useState("Always");

  // //////////////////////////////////////////////
const [focusLeft1, setFocusLeft1] = useState(".1rem solid #898A8D")
const [focusLeft2, setFocusLeft2] = useState("")
const [focusLeft3, setFocusLeft3] = useState("")
const [focusLeft4, setFocusLeft4] = useState(".1rem solid #898A8D")
const [focusLeft5, setFocusLeft5] = useState("")
const [focusLeft6, setFocusLeft6] = useState("")
const [focusLeft7, setFocusLeft7] = useState("")
const [focusLeft8, setFocusLeft8] = useState("")
const [focusLeft9, setFocusLeft9] = useState("")
const [focusLeft10,setFocusLeft10] = useState("")
const [focusLeft11,setFocusLeft11] = useState(".1rem solid #898A8D")
const [focusLeft12,setFocusLeft12] = useState("")
const [focusLeft13,setFocusLeft13] = useState("")
const [focusLeft14,setFocusLeft14] = useState("")

const [focusMid1, setFocusMid1] = useState(".1rem solid #898A8D")
const [focusMid2, setFocusMid2] = useState("")
const [focusMid3, setFocusMid3] = useState("")
const [focusMid4, setFocusMid4] = useState(".1rem solid #898A8D")
const [focusMid5, setFocusMid5] = useState("")
const [focusMid6, setFocusMid6] = useState("")
const [focusMid7, setFocusMid7] = useState("")
const [focusMid8, setFocusMid8] = useState("")
const [focusMid9, setFocusMid9] = useState("")
const [focusMid10,setFocusMid10] = useState("")
const [focusMid11,setFocusMid11] = useState("")
const [focusMid12,setFocusMid12] = useState("")

const [focusRight1, setFocusRight1] = useState(".1rem solid #898A8D")
const [focusRight2, setFocusRight2] = useState("")
const [focusRight3, setFocusRight3] = useState("")
const [focusRight4, setFocusRight4] = useState(".1rem solid #898A8D")
const [focusRight5, setFocusRight5] = useState("")
const [focusRight6, setFocusRight6] = useState("")
const [focusRight7, setFocusRight7] = useState("")
const [focusRight8, setFocusRight8] = useState("")
const [focusRight9, setFocusRight9] = useState("")
const [focusRight10,setFocusRight10] = useState("")
const [focusRight11,setFocusRight11] = useState("")

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
  const handleSelect = (e) => {
    console.log(e.target.value);
    setDigitalInput(e.target.value);
  };
  const handleSelect1 = (e) => {
    console.log(e.target.value);
    setPriority1(e.target.value);
  };
  const handleSelect2 = (e) => {
    console.log(e.target.value);
    setOperand1(e.target.value);
  };
  const handleSelect3 = (e) => {
    console.log(e.target.value);
    setPriority2(e.target.value);
  };
  const handleSelect4 = (e) => {
    console.log(e.target.value);
    setOperand2(e.target.value);
  };
  const handleSelect5 = (e) => {
    console.log(e.target.value);
    setPriority3(e.target.value);
  };
  const handleSelect6 = (e) => {
    console.log(e.target.value);
    setOperand3(e.target.value);
  };
  const handleSelect7 = (e) => {
    console.log(e.target.value);
    setTrackingOnDemandMode(e.target.value);
  };
  const handleSelect8 = (e) => {
    console.log(e.target.value);
    setOperand4(e.target.value);
  };
  const handleSelect9 = (e) => {
    console.log(e.target.value);
    setPriority5(e.target.value);
  };
  const handleSelect10 = (e) => {
    console.log(e.target.value);
    setOperand5(e.target.value);
  };
  const handleSelect11 = (e) => {
    console.log(e.target.value);
    setPriority6(e.target.value);
  };
  const handleSelect12 = (e) => {
    console.log(e.target.value);
    setOperand6(e.target.value);
  };
  const handleSelect13 = (e) => {
    console.log(e.target.value);
    setPriority7(e.target.value);
  };
  const handleSelect14 = (e) => {
    console.log(e.target.value);
    setOperand7(e.target.value);
  };
  const handleSelect15 = (e) => {
    console.log(e.target.value);
    setAnalogueInput(e.target.value);
  };
  const handleSelect16 = (e) => {
    console.log(e.target.value);
    setPriority8(e.target.value);
  };
  const handleSelect17 = (e) => {
    console.log(e.target.value);
    setOperand8(e.target.value);
  };
  return (
    <div className="sub1-tracking-div3" id="sec5">
      {/* main-box-left*/}
      <div className="subsub1-sub1-tracking-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-tracking-div3">
          <div
            
            className="subsub1-sub1-subsub1-sub1-tracking-div3"
            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlLeft1(left1State)}
            >Home GSM Network Settings</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
              <span
              onClick={() => handlLeft1(left1State)}
              >Data acquisition parameters for home GSM network.</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
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
                  style={{ marginLeft: ".2rem" ,cursor:"pointer" }}
                  onClick={() => handlLeft1(left1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub1-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-tracking-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
  <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
      <p>Vehicle on Stop</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusLeft1(".1rem solid #005EEC")}
                  onBlur={()=>setFocusLeft1(".1rem solid #898A8D")}
                  style={{border:focusLeft1}}>
                    <label>Data Recording Timeout</label>
                    <input type="number" />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusLeft2(".1rem solid #005EEC")}
                   onBlur={()=>setFocusLeft2(".1rem solid #898A8D")}
                   style={{border:focusLeft2}}>
                    <label>Saved Records</label>
                    <input type="number" />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusLeft3(".1rem solid #005EEC")}
                   onBlur={()=>setFocusLeft3(".1rem solid #898A8D")}
                   style={{border:focusLeft3}}>
                    <label>Send Period</label>
                    <input type="number"  />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
    </div>
    {/*  */}
    <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
      <p>Vehicle Moving</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusLeft4(".1rem solid #005EEC")}
                   onBlur={()=>setFocusLeft4(".1rem solid #898A8D")}
                   style={{border:focusLeft4}}
                  >
                    <label>Timeout</label>
                    <input type="number"  />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data by min period"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusLeft5(".1rem solid #005EEC")}
                   onBlur={()=>setFocusLeft5(".1rem solid #898A8D")}
                   style={{border:focusLeft5}}>
                    <label>Distance</label>
                    <input type="number"  />
                    <p>Meters</p>
                  </div>
                  <Try text={"Minimal distance to acquire new record, 1 - 65535 meters, 0 means disable recording data by min distance"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusLeft6(".1rem solid #005EEC")}
                   onBlur={()=>setFocusLeft6(".1rem solid #898A8D")}
                   style={{border:focusLeft6}}>
                    <label>Angle Change</label>
                    <input type="number"  />
                    <p>Degrees</p>
                  </div>
                  <Try text={"Minimal angle change to acquire new record, 1 - 180 degrees, 0 means disable recording data by min angle change. Valid only if vehicle speed is more than 10 km/h"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusLeft7(".1rem solid #005EEC")}
                   onBlur={()=>setFocusLeft7(".1rem solid #898A8D")}
                   style={{border:focusLeft7}}>
                    <label>Speed Change</label>
                    <input type="number"  />
                    <p>Km/h</p>
                  </div>
                  <Try text={"Minimal speed change to acquire new record, 1 - 255 km/h, 0 means disable recording data by speed change"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusLeft8(".1rem solid #005EEC")}
                   onBlur={()=>setFocusLeft8(".1rem solid #898A8D")}
                   style={{border:focusLeft8}}>
                    <label>Saved Records</label>
                    <input type="number"  />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusLeft9(".1rem solid #005EEC")}
                   onBlur={()=>setFocusLeft9(".1rem solid #898A8D")}
                   style={{border:focusLeft9}}>
                    <label>Send Period</label>
                    <input type="number"  />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
    </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}
        {/* sub2-main-box-left*/}
        <div className="sub2-subsub1-sub1-tracking-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-tracking-div3"
            
            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlLeft2(left2State)}
            >Trip scenario parameters</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
              {/* <span>Digital input I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
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
                  onClick={() => handlLeft2(left2State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-tracking-div3"
            style={{ display: left2 }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
              {/* <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <p>OFF</p>
                <label className="tracking-switch">
                  <input type="checkbox" />
                  <span className="tracking-slider"></span>
                </label>
                <p>ON</p>
              </div> */}

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                 onFocus={()=>setFocusLeft10(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft10(".1rem solid #898A8D")}
                 style={{border:focusLeft10}}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                    <label>Priority</label>
                    <p>{priority1}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect1(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>




 <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                {/* <p>OFF</p> */}
                <label className="tracking-switch">
                  <input type="checkbox" />
                  <span className="tracking-slider"></span>
                </label>
                <p>Eventual Records</p>
              </div>


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusLeft11(".1rem solid #005EEC")}
                  onBlur={()=>setFocusLeft11(".1rem solid #898A8D")}
                  style={{border:focusLeft11}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                    <label>Mode</label>
                    <p>{operand1}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect2(e)}>
                    <option selected></option>
                    <option>Continuous</option>
                    <option></option>
                    
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                 onFocus={()=>setFocusLeft12(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft12(".1rem solid #898A8D")}
                 style={{border:focusLeft12}}>
                  <label>Start Speed</label>
                  <input type="number"  />
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                 onFocus={()=>setFocusLeft13(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft13(".1rem solid #898A8D")}
                 style={{border:focusLeft13}}>
                  <label>Ignition Off Timeout</label>
                  <input type="number"  />
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <p>Send SMS</p>
                <label className="tracking-switch">
                  <input type="checkbox" />
                  <span className="tracking-slider"></span>
                </label>
                <p>ON</p>
              </div>
              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3 "
                
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                style={{width:"25.5rem",border:focusLeft14}}
                onFocus={()=>setFocusLeft14(".1rem solid #005EEC")}
                onBlur={()=>setFocusLeft14(".1rem solid #898A8D")}
                
                >
                  <label>Eco Score Allowed Events</label>
                  <input type="number" />
                </div>
                <input type="checkbox"/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                  {/* <p>Send SMS</p> */}
                  <label className="tracking-switch">
                    <input type="checkbox" />
                    <span className="tracking-slider"></span>
                  </label>
                  <p>Remember iButton</p>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-left*/}
        
      </div>
      {/* main-box-left*/}







      {/* main-box-mid*/}
      <div className="subsub2-sub1-tracking-div3">
        {/* sub1-main-box-mid*/}

        <div className="sub1-subsub1-sub1-tracking-div3">
          <div
            
            className="subsub1-sub1-subsub1-sub1-tracking-div3"
            style={{
              borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlMid1(mid1State)}
            >Raoming GSM Network Settings</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
              <span
              onClick={() => handlMid1(mid1State)}
              >Data acquisition parameters for roaming GSM network.</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
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
                  onClick={() => handlMid1(mid1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub1-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-tracking-div3"
            style={{ display: mid1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
  <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
      <p>Vehicle on Stop</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusMid1(".1rem solid #005EEC")}
                  onBlur={()=>setFocusMid1(".1rem solid #898A8D")}
                  style={{border:focusMid1}}
                  >
                    <label>Data Recording Timeout</label>
                    <input type="number" />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data"}/>

                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={()=>setFocusMid2(".1rem solid #005EEC")}
                    onBlur={()=>setFocusMid2(".1rem solid #898A8D")}
                    style={{border:focusMid2}}>
                    <label>Saved Records</label>
                    <input type="number"  />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={()=>setFocusMid3(".1rem solid #005EEC")}
                    onBlur={()=>setFocusMid3(".1rem solid #898A8D")}
                    style={{border:focusMid3}}>
                    <label>Send Period</label>
                    <input type="number" />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
    </div>
    {/*  */}
    <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
      <p>Vehicle Moving</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={()=>setFocusMid4(".1rem solid #005EEC")}
                    onBlur={()=>setFocusMid4(".1rem solid #898A8D")}
                    style={{border:focusMid4}}
                  >
                    <label>Timeout</label>
                    <input type="number"  />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data by min period"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusMid5(".1rem solid #005EEC")}
                   onBlur={()=>setFocusMid5(".1rem solid #898A8D")}
                   style={{border:focusMid5}}>
                    <label>Distance</label>
                    <input type="number"  />
                    <p>Meters</p>
                  </div>
                  <Try text={"Minimal distance to acquire new record, 1 - 65535 meters, 0 means disable recording data by min distance"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusMid6(".1rem solid #005EEC")}
                   onBlur={()=>setFocusMid6(".1rem solid #898A8D")}
                   style={{border:focusMid6}}>
                    <label>Angle Change</label>
                    <input type="number" />
                    <p>Degrees</p>
                  </div>
                  <Try text={"Minimal angle change to acquire new record, 1 - 180 degrees, 0 means disable recording data by min angle change. Valid only if vehicle speed is more than 10 km/h"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusMid7(".1rem solid #005EEC")}
                   onBlur={()=>setFocusMid7(".1rem solid #898A8D")}
                   style={{border:focusMid7}}>
                    <label>Speed Change</label>
                    <input type="number"  />
                    <p>Km/h</p>
                  </div>
                  <Try text={"Minimal speed change to acquire new record, 1 - 255 km/h, 0 means disable recording data by speed change"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusMid8(".1rem solid #005EEC")}
                   onBlur={()=>setFocusMid8(".1rem solid #898A8D")}
                   style={{border:focusMid8}}>
                    <label>Saved Records</label>
                    <input type="number"  />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusMid9(".1rem solid #005EEC")}
                   onBlur={()=>setFocusMid9(".1rem solid #898A8D")}
                   style={{border:focusMid9}}>
                    <label>Send Period</label>
                    <input type="number"  />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
    </div>
            </div>
          </div>
        </div>

        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub1-sub1-tracking-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-tracking-div3"
            
            style={{
              borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlMid2(mid2State)}
            >Odometer</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
              <span
              onClick={() => handlMid2(mid2State)}
              >Set odometer mode and initial value</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
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
              className="sub2-subsub1-sub2-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
                // paddingTop:".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-tracking-div3"
            style={{ display: mid2 ,height:"9rem"}}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
            

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                style={{marginBottom:"1rem",border:focusMid10}}
                onFocus={()=>setFocusMid10(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid10(".1rem solid #898A8D")}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                    <label>Calculation Source</label>
                    <p>{priority1}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect1(e)}>
                    <option selected></option>
                    <option>GNSS</option>
                    <option>OBD</option>
                    <option>LVCAN</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                   onFocus={()=>setFocusMid11(".1rem solid #005EEC")}
                   onBlur={()=>setFocusMid11(".1rem solid #898A8D")}
                   style={{border:focusMid11}}
                   >
                    <label>Initial Odometer Value</label>
                    <input type="number"  />
                    <p>Km/h</p>
                  </div>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>


 

             

              
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub1-sub1-tracking-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-tracking-div3"
            
            style={{
              borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlMid3(mid3State)}
            >Tracking on demand mode</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-tracking-div3">
              <span
              onClick={() => handlMid3(mid3State)}
              >
              Push device to start to generate high priority records and initiate data 
sending to server
</span>
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-tracking-div3">
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
              className="sub2-subsub1-sub3-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-tracking-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-tracking-div3">
              <div className="subsub1-sub1-subsub2-sub3-subsub1-sub1-tracking-div3"
               onFocus={()=>setFocusMid12(".1rem solid #005EEC")}
               onBlur={()=>setFocusMid12(".1rem solid #898A8D")}
               style={{border:focusMid12}}
              >
              <div className="sub1-subsub1-sub1-subsub2-sub3-subsub1-sub1-tracking-div3">
              <label>On demand mode Tracking</label>
              <p>{trackingOnDemandMode}</p>
              </div>
            <select value={""} onChange={(e)=>handleSelect7(e)}>
              <option selected></option>
              <option >Stop</option>
              <option>Start</option>
            </select>
             
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* sub3-main-box-mid*/}
      </div>
      {/* main-box-mid*/}







      {/* main-box-right*/}
      <div className="subsub3-sub1-tracking-div3">
        {/* sub1-main-box-right*/}
        <div className="sub1-subsub1-sub1-tracking-div3">
          <div
            
            className="subsub1-sub1-subsub1-sub1-tracking-div3"
            style={{
              borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlRight1(right1State)}
            >Unkown GSM Network Settings</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
              <span
              onClick={() => handlRight1(right1State)}
              >Data acquisition parameters for unkown GSM network.</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
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
                  onClick={() => handlRight1(right1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub1-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-tracking-div3"
            style={{ display: right1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
  <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
      <p>Vehicle on Stop</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight1(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight1(".1rem solid #898A8D")}
                  style={{border:focusRight1}}>
                    <label>Data Recording Timeout</label>
                    <input type="number"  />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data"} style={{fontSize:"1rem"}}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight2(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight2(".1rem solid #898A8D")}
                  style={{border:focusRight2}}
                  >
                    <label>Saved Records</label>
                    <input type="number" />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight3(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight3(".1rem solid #898A8D")}
                  style={{border:focusRight3}}>
                    <label>Send Period</label>
                    <input type="number" />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
    </div>
    {/*  */}
    <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
      <p>Vehicle Moving</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight4(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight4(".1rem solid #898A8D")}
                  style={{border:focusRight4}}
                  >
                    <label>Timeout</label>
                    <input type="number" />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data by min period"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight5(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight5(".1rem solid #898A8D")}
                  style={{border:focusRight5}}>
                    <label>Distance</label>
                    <input type="number"  />
                    <p>Meters</p>
                  </div>
                  <Try text={"Minimal distance to acquire new record, 1 - 65535 meters, 0 means disable recording data by min distance"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight6(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight6(".1rem solid #898A8D")}
                  style={{border:focusRight6}}>
                    <label>Angle Change</label>
                    <input type="number"  />
                    <p>Degrees</p>
                  </div>
                  <Try text={"Minimal angle change to acquire new record, 1 - 180 degrees, 0 means disable recording data by min angle change. Valid only if vehicle speed is more than 10 km/h"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight7(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight7(".1rem solid #898A8D")}
                  style={{border:focusRight7}}>
                    <label>Speed Change</label>
                    <input type="number"  />
                    <p>Km/h</p>
                  </div>
                  <Try text={"Minimal speed change to acquire new record, 1 - 255 km/h, 0 means disable recording data by speed change"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight8(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight8(".1rem solid #898A8D")}
                  style={{border:focusRight8}}>
                    <label>Saved Records</label>
                    <input type="number"/>
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems:"center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight9(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight9(".1rem solid #898A8D")}
                  style={{border:focusRight9}}>
                    <label>Send Period</label>
                    <input type="number"  />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"}/>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
    </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub1-sub1-tracking-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-tracking-div3"
            
            style={{
              borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlRight2(right2State)}
            >Tracking on demand timing</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
              <span
              onClick={() => handlRight2(right2State)}
              >Tracking on demand: period and duration parameters.</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
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
              className="sub2-subsub1-sub2-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
                // paddingTop:".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-tracking-div3"
            style={{ display: right2 ,height:"9rem"}}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
            

            <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    marginTop:"1rem"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight10(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight10(".1rem solid #898A8D")}
                  style={{border:focusRight10}}>
                    <label>Tracking Period</label>
                    <input type="number" />
                    <p>Seconds</p>
                  </div>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>

              <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={()=>setFocusRight11(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight11(".1rem solid #898A8D")}
                  style={{border:focusRight11}}
                  >
                    <label>Tracking Duration</label>
                    <input type="number" />
                    <p>Seconds</p>
                  </div>
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
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

export default Tracking;
