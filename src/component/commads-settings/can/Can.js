import React, { useState } from "react";
import "./Can.css";
const Can = () => {
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
    setPriority4(e.target.value);
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
    <div className="sub1-can-div3" id="sec8">
      {/* main-box-left*/}
      <div className="subsub1-sub1-can-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-can-div3">
          <div
          
            className="subsub1-sub1-subsub1-sub1-can-div3"
            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
             onClick={() => handlLeft1(left1State)}
            >CAN Parameters</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-can-div3">
              <span
               onClick={() => handlLeft1(left1State)}
              >CAN parameters setup.</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-can-div3">
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
                  onClick={() => handlLeft1(left1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub1-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-can-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-can-div3">
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-can-div3">
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Number of DTC</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Engine Load</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Coolant Temperature</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Short Fuel Trim</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Fuel Pressure</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Intake MAP</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Engine RPM</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Vehicle Speed</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Timing Advance</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Intake Air Temperature</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Mass Air Flow Rate</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Throttle Position</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Run Time Since Engine Start</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Distance Traveled Since MIL On</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Relative Fuel Rail Pressure</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Direct Fuel Rail Pressure</p>
                </div>
               
              </div>

              <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-can-div3">
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Commanded EGR</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>EGR Error</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Fuel Level</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <div style={{height:"100%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center",lineHeight:"0rem",marginTop:"-.1rem"}}>
                <p style={{height:"50%"}}>Distance Traveled Since Trouble </p>
                <p style={{height:"50%",marginTop:"-.4rem"}}> Codes Cleared</p>
                </div>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Barometric Pressure</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Control Module Voltage</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Absolute Load Value</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Ambient Air Temperature</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Time Run With MIL On</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Time Since Trouble Codes Cleared</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Absolute Fuel Rail Pressure</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Hybrid Battery Pack Remaining Life</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Engine Oil Temperature</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Fuel Injection Timing</p>
                </div>
                <div>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>Engine Fuel Rate</p>
                </div>
               
              </div>

             
            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}
     
      </div>
      {/* main-box-left*/}

      {/* main-box-mid*/}
      <div className="subsub2-sub1-can-div3">
        {/* sub1-main-box-mid*/}

        <div className="sub2-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-can-div3"
            // onClick={() => handlMid1(mid1State)}
            // style={{
            //   borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
            //   borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            // }}
          >
            <p>Toggle CAN-CONTROL to open [unlock] all doors</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-can-div3">
              {/* <span>Battery level I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
{/* ////////////////////////////// */}



               

{/* //////////////////////////// */}
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  // style={{ marginLeft: "1rem" }}
                  onClick={() => handlMid1(mid1State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-can-div3"
            style={{ display: mid1, height: "21rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-can-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority3}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect5(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand3}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect6(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
              </div>

              <div
                className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-can-div3"
            // onClick={() => handlMid2(mid2State)}
            // style={{
            //   borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
            //   borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            // }}
          >
            <p>Toggle CAN-CONTROL to open [unlock] trunk</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-can-div3">
              {/* <span>Battery voltage I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlMid2(mid2State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-can-div3"
            style={{ display: mid2, height: "24.5rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-can-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority4}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect7(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand4}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect8(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-can-div3"
            // onClick={() => handlMid3(mid3State)}
            // style={{
            //   borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
            //   borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            // }}
          >
            <p>Toggle CAN-CONTROL to block engine</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-can-div3">
              {/* <span>Axis Y parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlMid3(mid3State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-can-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-can-div3">
              <div
                className="subsub2-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <p>OFF</p>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div
                className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority5}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect9(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand5}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect10(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-mid*/}
      </div>
      {/* main-box-mid*/}







      {/* main-box-right*/}
      <div className="subsub3-sub1-can-div3">
        {/* sub1-main-box-right*/}
        <div className="sub2-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-can-div3"
            // onClick={() => handlRight1(right1State)}
            // style={{
            //   borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
            //   borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            // }}
          >
            <p>Toggle CAN-CONTROL to close [lock] all doors</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-can-div3">
              {/* <span>External voltage I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlRight1(right1State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-can-div3"
            style={{ display: right1, height: "25rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-can-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority6}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect11(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand6}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect12(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-can-div3"
            // onClick={() => handlRight2(right2State)}
            // style={{
            //   borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
            //   borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            // }}
          >
            <p>Toggle CAN-CONTROL to flash lights</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-can-div3">
              <span>One flash of all turn lights ordered trough accidental / blinking turn light switch</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlRight2(right2State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-can-div3"
            style={{ display: right2, height: "33rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-can-div3">
              <div
                className="subsub1-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ border: ".1rem solid #005EEC" }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Analogue Input Pin</label>
                  <p>{analogueInput}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect15(e)}>
                  <option selected></option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>

              <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <p>OFF</p>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority7}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect13(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand7}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect14(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />

              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-right*/}
        {/* sub3-main-box-right*/}
        <div className="sub3-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-can-div3"
            // onClick={() => handlRight3(right3State)}
            // style={{
            //   borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
            //   borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            // }}
          >
            <p>Toggle CAN-CONTROL to unblock engine</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-can-div3">
              {/* <span>Axis Z parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div  className="icon-hover">
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlRight3(right3State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: right3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-can-div3"
            style={{ display: right3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-can-div3">
              <div
                className="subsub2-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <p>OFF</p>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div
                className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority8}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect16(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand8}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect17(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-right*/}
      </div>
      {/* main-box-right*/}
    </div>
  );
};

export default Can;
