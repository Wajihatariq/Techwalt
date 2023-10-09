import React, { useState } from "react";
import "./InputOutput.css";
import Try from "../try/Try"
import { Alert } from "bootstrap";
const InputOutput = () => {
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
  
  const [ignore1, setIgnore1] = useState("")
  const [ignore2, setIgnore2] = useState("")
  const [ignore3, setIgnore3] = useState("")

// //////////////////////////////////////////////
const [focusLeft1, setFocusLeft1] = useState("")
const [focusLeft2, setFocusLeft2] = useState("")
const [focusLeft3, setFocusLeft3] = useState("")
const [focusLeft4, setFocusLeft4] = useState("")
const [focusLeft5, setFocusLeft5] = useState("")
const [focusLeft6, setFocusLeft6] = useState("")
const [focusLeft7, setFocusLeft7] = useState("")
const [focusLeft8, setFocusLeft8] = useState("")
const [focusLeft9, setFocusLeft9] = useState("")
const [focusLeft10,setFocusLeft10] = useState("")
const [focusLeft11,setFocusLeft11] = useState("")
const [focusLeft12,setFocusLeft12] = useState("")

const [focusMid1, setFocusMid1] = useState("")
const [focusMid2, setFocusMid2] = useState("")
const [focusMid3, setFocusMid3] = useState("")
const [focusMid4, setFocusMid4] = useState("")
const [focusMid5, setFocusMid5] = useState("")
const [focusMid6, setFocusMid6] = useState("")
const [focusMid7, setFocusMid7] = useState("")
const [focusMid8, setFocusMid8] = useState("")
const [focusMid9, setFocusMid9] = useState("")
const [focusMid10,setFocusMid10] = useState("")
const [focusMid11,setFocusMid11] = useState("")
const [focusMid12,setFocusMid12] = useState("")
const [focusMid13,setFocusMid13] = useState("")
const [focusMid14,setFocusMid14] = useState("")
const [focusMid15,setFocusMid15] = useState("")
const [focusMid16,setFocusMid16] = useState("")
const [focusMid17,setFocusMid17] = useState("")
const [focusMid18,setFocusMid18] = useState("")
const [focusMid19,setFocusMid19] = useState("")
const [focusMid20,setFocusMid20] = useState("")
const [focusMid21,setFocusMid21] = useState("")

const [focusRight1, setFocusRight1] = useState("")
const [focusRight2, setFocusRight2] = useState("")
const [focusRight3, setFocusRight3] = useState("")
const [focusRight4, setFocusRight4] = useState("")
const [focusRight5, setFocusRight5] = useState("")
const [focusRight6, setFocusRight6] = useState("")
const [focusRight7, setFocusRight7] = useState("")
const [focusRight8, setFocusRight8] = useState("")
const [focusRight9, setFocusRight9] = useState("")
const [focusRight10,setFocusRight10] = useState("")
const [focusRight11,setFocusRight11] = useState("")
const [focusRight12,setFocusRight12] = useState("")
const [focusRight13,setFocusRight13] = useState("")
const [focusRight14,setFocusRight14] = useState("")
const [focusRight15,setFocusRight15] = useState("")
const [focusRight16,setFocusRight16] = useState("")
const [focusRight17,setFocusRight17] = useState("")

// /////////////////////////////////////////////
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
const handleIgnore1=(e)=>{
setIgnore1(e.target.value)
}
const handleIgnore2=(e)=>{
  setIgnore2(e.target.value)
  }
  const handleIgnore3=(e)=>{
    setIgnore3(e.target.value)
    }
  const handlFocus=(e)=>{
    console.log(e)
  }
  const handlsend=()=>{
    alert("helo")

  }
  return (
    <div className="sub1-input-output-div3" id="sec1">
      {/* main-box-left*/}
      <div className="subsub1-sub1-input-output-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-input-output-div3">
          <div className="subsub1-sub1-subsub1-sub1-input-output-div3"
            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlLeft1(left1State)}
            >Digital Outputs</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-input-output-div3">
              <span
              onClick={() => handlLeft1(left1State)}
              >Change state of digital outputs</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-input-output-div3">
                <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" onClick={()=>handlsend()} style={{cursor:"pointer"}}>
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
              className="sub2-subsub1-sub1-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-input-output-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>Output-1</p>
                <div className="sub1-subsub2-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                  <input type="number" placeholder="Ignore" onChange={(e)=>handleIgnore1(e)}/>
                  <p style={{display:ignore1.length>0 ? "block":"none"}}>SEC</p>
                </div>
              </div>

              <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>Output-2</p>
                <div className="sub1-subsub2-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                  <input type="number" placeholder="Ignore" onChange={(e)=>handleIgnore2(e)}/>
                  <p style={{display:ignore2.length>0 ? "block":"none"}}>SEC</p>
                </div>
              </div>

              <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>Output-3</p>
                <div className="sub1-subsub2-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                  <input type="number" placeholder="Ignore" onChange={(e)=>handleIgnore3(e)}/>
                  <p style={{display:ignore3.length>0 ? "block":"none"}}>SEC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}
        {/* sub2-main-box-left*/}
        <div className="sub2-subsub1-sub1-input-output-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-input-output-div3"
          
            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft2(left2State)}
            >Digital Input</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <span
                onClick={() => handlLeft2(left2State)}
              >Digital input I/O parameters settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" style={{cursor:"pointer"}}>
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
              className="sub2-subsub1-sub2-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
                paddingTop:".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-input-output-div3"
            style={{ display: left2 }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
              <div className="subsub1-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusLeft1(".1rem solid #FF0000")}
                onBlur={()=>setFocusLeft1(".1rem solid #898A8D")}
              style={{border:focusLeft1}}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <label>Digital Input Pin</label>
                  <p>{digitalInput}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect(e)}>
                  <option selected></option>
                  <option>DIN1</option>
                  <option></option>
                </select>
              </div>

              <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <p>OFF</p>
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusLeft2(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft2(".1rem solid #898A8D")}
               style={{border:focusLeft2}}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Priority of digital input I/O element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusLeft3(".1rem solid #005EEC")}
                  onBlur={()=>setFocusLeft3(".1rem solid #898A8D")}
                style={{border:focusLeft3}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                    <label>Operand</label>
                    <p>{operand1}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect2(e)}>
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
                <Try text={"Operand of digital input I/O element"}/>

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusLeft4(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft4(".1rem solid #898A8D")}
               style={{border:focusLeft4}}
                >
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <Try text={"High level of digital input value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusLeft5(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft5(".1rem solid #898A8D")}
               style={{border:focusLeft5}}
                >
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <Try text={"Low level of digital input value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
                <Try text={"Send digital input I/O element either when event happens or in each record"}/>
              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusLeft6(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft6(".1rem solid #898A8D")}
               style={{border:focusLeft6}}
                >
                  <label>Average</label>
                  <input type="number" />
                </div>
                <Try text={"Digital Input 1 sample length to average"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <p>Send SMS</p>
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of digital input event"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-left*/}
        {/* sub3-main-box-left*/}
        {/* <div className="sub3-subsub1-sub1-input-output-div3"> */}
        <div className="sub3-subsub1-sub1-input-output-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-input-output-div3"
            
            style={{
              borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlLeft3(left3State)}
            >Axis X</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-input-output-div3">
              <span
              onClick={() => handlLeft3(left3State)}
              >Axis X parameters settings</span>
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-input-output-div3">
              <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" style={{cursor:"pointer"}}>
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
                  onClick={() => handlLeft3(left3State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-input-output-div3"
            style={{ display: left3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-input-output-div3">
              <div
                className="subsub2-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <p>OFF</p>
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div
                className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusLeft7(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft7(".1rem solid #898A8D")}
               style={{border:focusLeft7}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                    <label>Priority</label>
                    <p>{priority2}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect3(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <Try text={"Priority of Axis X element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusLeft8(".1rem solid #005EEC")}
                  onBlur={()=>setFocusLeft8(".1rem solid #898A8D")}
                style={{border:focusLeft8}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                    <label>Operand</label>
                    <p>{operand2}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect4(e)}>
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
                <Try text={"Operand of Axis X element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusLeft9(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft9(".1rem solid #898A8D")}
               style={{border:focusLeft9}}
                >
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <Try text={"High level of Axis X value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusLeft10(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft10(".1rem solid #898A8D")}
               style={{border:focusLeft10}}
                >
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <Try text={"Low level of Axis X value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusLeft11(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft11(".1rem solid #898A8D")}
               style={{border:focusLeft11}}
                >
                  <label>Event Only</label>
                  <input type="number" />
                </div>
                <Try text={"Send Axis X element either when event happens or in each record"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusLeft12(".1rem solid #005EEC")}
                onBlur={()=>setFocusLeft12(".1rem solid #898A8D")}
              style={{border:focusLeft12}}
                >
                  <label>Average</label>
                  <input type="number" />
                </div>
                <Try text={"Axis X average"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <p>Send SMS</p>
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of Axis X event"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-left*/}
      </div>
      {/* main-box-left*/}





      {/* main-box-mid*/}
      <div className="subsub2-sub1-input-output-div3">
        {/* sub1-main-box-mid*/}

        <div className="sub2-subsub1-sub1-input-output-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-input-output-div3"
            
            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlMid1(mid1State)}
            >Battery Level</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <span
              onClick={() => handlMid1(mid1State)}
              >Battery level I/O parameters settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" style={{cursor:"pointer"}}>
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
                  onClick={() => handlMid1(mid1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
              }}
            >
              <span style={{paddingTop:".2rem"}}>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-input-output-div3"
            style={{ display: mid1, height: "21rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                 onFocus={()=>setFocusMid1(".1rem solid #005EEC")}
                 onBlur={()=>setFocusMid1(".1rem solid #898A8D")}
               style={{border:focusMid1}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Priority of Battery level I/O element"}/>

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusMid2(".1rem solid #005EEC")}
                  onBlur={()=>setFocusMid2(".1rem solid #898A8D")}
                style={{border:focusMid2}}                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Operand of Battery level I/O element"}/>

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid3(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid3(".1rem solid #898A8D")}
              style={{border:focusMid3}}
                >
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <Try text={"High level of Battery level value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid4(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid4(".1rem solid #898A8D")}
              style={{border:focusMid4}}
                >
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <Try text={"Low level of Battery level value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
                <Try text={"Send Battery level I/O element either when event happens or in each record"}/>
              </div>

              <div
                className="subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <p>Send SMS</p>
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of Battery level event"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub1-sub1-input-output-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-input-output-div3"
           
            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
             onClick={() => handlMid2(mid2State)}
            >Battery Voltage</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <span
               onClick={() => handlMid2(mid2State)}
              >Battery voltage I/O parameters settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" style={{cursor:"pointer"}}>
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
              className="sub2-subsub1-sub2-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
                paddingTop:".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-input-output-div3"
            style={{ display: mid2, height: "24.5rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid5(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid5(".1rem solid #898A8D")}
              style={{border:focusMid5}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Priority of Battery voltage I/O element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusMid6(".1rem solid #005EEC")}
                  onBlur={()=>setFocusMid6(".1rem solid #898A8D")}
                style={{border:focusMid6}}                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Operand of Battery voltage I/O element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid7(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid7(".1rem solid #898A8D")}
              style={{border:focusMid7}}
                >
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <Try text={"High level of Battery voltage value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid8(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid8(".1rem solid #898A8D")}
              style={{border:focusMid8}}
                >
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <Try text={"Low level of Battery voltage value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
                <Try text={"Send Battery voltage I/O element either when event happens or in each record"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid9(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid9(".1rem solid #898A8D")}
              style={{border:focusMid9}}
                >
                  <label>Average</label>
                  <input type="number" />
                </div>
                <Try text={"Battery voltage sample length to average"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <p>Send SMS</p>
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of Battery voltage event"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub1-sub1-input-output-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-input-output-div3"
            
            style={{
              borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlMid3(mid3State)}
            >Axis Y</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-input-output-div3">
              <span
              onClick={() => handlMid3(mid3State)}
              >Axis Y parameters settings</span>
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-input-output-div3">
              <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img
                  src="./assets/S.svg"
                  alt="none"
                 
                  style={{ marginLeft: ".3rem" }}
                />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem",cursor:"pointer"}}
                  onClick={() => handlMid3(mid3State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-input-output-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-input-output-div3">
              <div
                className="subsub2-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <p>OFF</p>
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div
                className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid10(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid10(".1rem solid #898A8D")}
              style={{border:focusMid10}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Priority of Axis Y element"}/>

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusMid11(".1rem solid #005EEC")}
                  onBlur={()=>setFocusMid11(".1rem solid #898A8D")}
                style={{border:focusMid11}}                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Operand of Axis Y element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid12(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid12(".1rem solid #898A8D")}
              style={{border:focusMid12}}
                >
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <Try text={"High level of Axis Y value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid13(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid13(".1rem solid #898A8D")}
              style={{border:focusMid13}}
                >
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <Try text={"Low level of Axis Y value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusMid14(".1rem solid #005EEC")}
                onBlur={()=>setFocusMid14(".1rem solid #898A8D")}
              style={{border:focusMid14}}
                >
                  <label>Event Only</label>
                  <input type="number" />
                </div>
                <Try text={"Send Axis Y element either when event happens or in each record"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                
                onFocus={()=>setFocusMid15(".1rem solid #005EEC")}
                    onBlur={()=>setFocusMid15(".1rem solid #898A8D")}
                  style={{border:focusMid15}}>
                  <label>Average</label>
                  <input type="number" />
                </div>
                <Try text={"Axis Y average"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <p>Send SMS</p>
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of Axis Y event"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-mid*/}
      </div>
      {/* main-box-mid*/}




      {/* main-box-right*/}
      <div className="subsub3-sub1-input-output-div3">
        {/* sub1-main-box-right*/}
        <div className="sub2-subsub1-sub1-input-output-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-input-output-div3"
            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
             onClick={() => handlRight1(right1State)}
            >External Voltage</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <span
              onClick={() => handlRight1(right1State)}
              >External voltage I/O parameters settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" style={{cursor:"pointer"}}>
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
              className="sub2-subsub1-sub2-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              }}
            >
              <span style={{paddingTop:".2rem"}}>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-input-output-div3"
            style={{ display: right1, height: "25rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusRight1(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight1(".1rem solid #898A8D")}
                style={{border:focusRight1}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Priority of External voltage I/O element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusRight2(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight2(".1rem solid #898A8D")}
                style={{border:focusRight2}}                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Operand of External voltage I/O element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight3(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight3(".1rem solid #898A8D")}
              style={{border:focusRight3}}>
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <Try text={"High level of External voltage value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight4(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight4(".1rem solid #898A8D")}
              style={{border:focusRight4}}
                >
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <Try text={"Low level of External voltage value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
                <Try text={"Send External voltage I/O element either when event happens or in each record"}/>
              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight5(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight5(".1rem solid #898A8D")}
              style={{border:focusRight5}}
                >
                  <label>Average</label>
                  <input type="number" />
                </div>
                <Try text={"External voltage sample length to average"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <p>Send SMS</p>
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of External voltage event"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub1-sub1-input-output-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-input-output-div3"
            
            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlRight2(right2State)}
            >Analogue Input</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <span
              onClick={() => handlRight2(right2State)}
              >Analogue input I/O parameters settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-input-output-div3">
              <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" style={{cursor:"pointer"}}>
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
              className="sub2-subsub1-sub2-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
                paddingTop:".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-input-output-div3"
            style={{ display: right2, height: "33rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
              <div
                className="subsub1-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight6(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight6(".1rem solid #898A8D")}
              style={{border:focusRight6}}              >
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <label>Analogue Input Pin</label>
                  <p>{analogueInput}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect15(e)}>
                  <option selected></option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>

              <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <p>OFF</p>
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight7(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight7(".1rem solid #898A8D")}
              style={{border:focusRight7}}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Priority of analog input I/O element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusRight8(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight8(".1rem solid #898A8D")}
                style={{border:focusRight8}}                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Operand of analog input I/O element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight9(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight9(".1rem solid #898A8D")}
              style={{border:focusRight9}}
                >
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <Try text={"High level of analog input value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight10(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight10(".1rem solid #898A8D")}
              style={{border:focusRight10}}>
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <Try text={"Low level of analog input value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
                <Try text={"Send analog input I/O element either when event happens or in each record"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}

              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight11(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight11(".1rem solid #898A8D")}
              style={{border:focusRight11}}>
                  <label>Average</label>
                  <input type="number" />
                </div>
                <Try text={"Analog Input 1 sample length to average"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <p>Send SMS</p>
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of analog input event"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-right*/}
        {/* sub3-main-box-right*/}
        <div className="sub3-subsub1-sub1-input-output-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-input-output-div3"
            
            style={{
              borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            }}
          >
            <p
            onClick={() => handlRight3(right3State)}
            >Axis Z</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-input-output-div3">
              <span
              onClick={() => handlRight3(right3State)}
              >Axis Z parameters settings</span>
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-input-output-div3">
              <div  className="icon-hover" style={{cursor:"pointer"}}>
                <img src="./assets/refresh.svg" alt="none" 
                style={{ marginLeft: ".1rem" }}
                />
                </div>
                <div  className="icon-hover" style={{cursor:"pointer"}}>
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
                  onClick={() => handlRight3(right3State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: right3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-input-output-div3"
            style={{ display: right3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-input-output-div3">
              <div
                className="subsub2-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <p>OFF</p>
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div
                className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight12(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight12(".1rem solid #898A8D")}
              style={{border:focusRight12}}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Priority of Axis Z element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={()=>setFocusRight13(".1rem solid #005EEC")}
                  onBlur={()=>setFocusRight13(".1rem solid #898A8D")}
                style={{border:focusRight13}}                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                <Try text={"Operand of Axis Z element"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight14(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight14(".1rem solid #898A8D")}
              style={{border:focusRight14}}>
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <Try text={"High level of Axis Z value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight15(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight15(".1rem solid #898A8D")}
              style={{border:focusRight15}}>
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <Try text={"Low level of Axis Z value range"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight16(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight16(".1rem solid #898A8D")}
              style={{border:focusRight16}}>
                  <label>Event Only</label>
                  <input type="number" />
                </div>
                <Try text={"Send Axis Z element either when event happens or in each record"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                onFocus={()=>setFocusRight17(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight17(".1rem solid #898A8D")}
              style={{border:focusRight17}}>
                  <label>Average</label>
                  <input type="number" />
                </div>
                <Try text={"Axis X average"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                  <p>Send SMS</p>
                  <label className="input-output-switch">
                    <input type="checkbox" />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of Axis Z event"}/>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
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

export default InputOutput;
