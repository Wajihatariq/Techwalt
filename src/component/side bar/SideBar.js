import React, { useState,useEffect } from "react";
import "./SideBar.css";
import { Space, Switch } from "antd";
import { Outlet ,useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate= useNavigate();
  const [btn, setBtn] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [carPortal, setCarPortal] = useState("none");
  const [truckPortal, setTruckPortal] = useState("none");
  const [engineState, setEngineState] = useState(true);
  const [simState, setSimState] = useState("block ")
  const [simCardState, setCardSimState] = useState("none ")
  const [boardColor, setBoardColor] = useState(".1rem solid rgb(158, 154, 154, 50%)");
  const [uploadImg, setUploadImg] = useState("./assets/Pic11.svg");
  const [uploadText, setUploadText] = useState("Upload Config");
  const [enginebtn, setEnginebtn] = useState(true);
  const [onlineBg, setOnlineBg] = useState("");
  const [onlineBgPos, setOnlineBgPos] = useState(true);
  const [offlineBg, setOfflineBg] = useState("");
  const [offlineBgPos, setOfflineBgPos] = useState(true);
  const [idleBg, setIdleBg] = useState("");
  const [idleBgPos, setIdleBgPos] = useState(true);
  const [carBg, setCarBg] = useState("");
  const [carBgPos, setCarBgPos] = useState(true);
  const [truckBg, setTruckBg] = useState("");
  const [truckBgPos, setTruckBgPos] = useState(true);
  const [searchText, setSearchText] = useState("")
  const handle1 = (type,id) => {
setBoardColor(id);
    if(type=="car"){
      setTruckPortal("none")
      setCarPortal("block")
    }
    else{
      setCarPortal("none")
      setTruckPortal("block")
    }
  };
  const handleClose = () => {
    setBoardColor(".1rem solid rgb(158, 154, 154, 50%)");
    setCarPortal("none");
    setTruckPortal("none")
  };
  
  const handleEngine = (e) => {
    console.log("get"+e.target.checked);
    let state = e.target.checked;
    if (state === false) {
      // state=false;
      // console.log(state);
      setEnginebtn(true);
    } else {
      // state=true;
      // console.log(state);
      setEnginebtn(false);
    }
  };
  const handlSimCard=()=>{
setSimState("none");
setCardSimState("block")
  };
  const closeSimCard=()=>{
    setSimState("block");
    setCardSimState("none")
      };
      const handlUpload=()=>{
        setUploadImg("./assets/Pic12.svg");
        setUploadText("Update In Progres")
        setTimeout(() => {
          setUploadImg("./assets/Pic11.svg");
          setUploadText("Upload Config")
        }, 2000);
       
      }
  const CarData = [
    {
      id: "1",
      img: "./assets/Car.svg",
      btn: "Not Connected",
      col: "red",
      carN: "DUX U16771",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"car"
    },
    {
      id: "2",
      img: "./assets/Car.svg",
      btn: "Connected",
      col: "green",
      carN: "DUX U16772",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"car"
    },
    {
      id: "3",
      img: "./assets/Truck.svg",
      btn: "Idle",
      col: "orange",
      carN: "DUX U16773",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"truck"
    },
    {
      id: "4",
      img: "./assets/Car.svg",
      btn: "Not Connected",
      col: "red",
      carN: "DUX U16771",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"car"
    },
    {
      id: "5",
      img: "./assets/Car.svg",
      btn: "Connected",
      col: "green",
      carN: "DUX U16772",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"car"
    },
    {
      id: "6",
      img: "./assets/Truck.svg",
      btn: "Idle",
      col: "orange",
      carN: "DUX U16773",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"truck"
    },
    {
      id: "7",
      img: "./assets/Car.svg",
      btn: "Not Connected",
      col: "red",
      carN: "DUX U16771",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"car"
    },
    {
      id: "8",
      img: "./assets/Car.svg",
      btn: "Connected",
      col: "green",
      carN: "DUX U16772",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"car"
    },
    {
      id: "9",
      img: "./assets/Truck.svg",
      btn: "Idle",
      col: "orange",
      carN: "DUX U16773",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"truck"
    },
    {
      id: "10",
      img: "./assets/Car.svg",
      btn: "Not Connected",
      col: "red",
      carN: "DUX U16771",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"car"
    },
    {
      id: "11",
      img: "./assets/Car.svg",
      btn: "Connected",
      col: "green",
      carN: "DUX U16771",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"car"
    },
    {
      id: "12",
      img: "./assets/Truck.svg",
      btn: "Idle",
      col: "orange",
      carN: "DUX U16773",
      date: "09/03/2023",
      time: "08:55 AM",
      type:"truck"
    },
  ];
  const handleColor = (status) => {
    if (status === "Connected") {
      return "#28A745";
    } else if (status === "Not Connected") {
      return "#FF0000";
    } else {
      return "#F89823";
    }
  };
  const handlOnline=(data)=>{
    console.log(data)
    if(data==true){
      // setOnlineBg(false)
    }
    else{
      // setOnlineBg(true)

    }

  }
  const handlBtn=(data,pos)=>{
    setBtn(data)
    if(data=="Connected"){
      if(pos===true ){
        setOnlineBg("rgb(122,125,139,20%)")
        setOfflineBg("rgb(0,0,0,0%)")
        setIdleBg("rgb(0,0,0,0%)")
        setOnlineBgPos(false)  
      }
      else{
        setBtn("")
        setOnlineBg("rgb(0,0,0,0%)")
        setOnlineBgPos(true)
      }
    }
    
    else if(data=="Not Connected"){
      if(pos===true){
        setOfflineBg("rgb(122,125,139,20%)")
        setIdleBg("rgb(0,0,0,0%)")
        setOnlineBg("rgb(0,0,0,0%)")  
        setOfflineBgPos(false)
      }
      else{
        setBtn("")
        setOfflineBg("rgb(0,0,0,0%)")
        setOfflineBgPos(true)
      }
      

    }
    else if(data=="Idle"){
      if(pos===true){
        setIdleBg("rgb(122,125,139,20%)")
        setOnlineBg("rgb(0,0,0,0%)")
        setOfflineBg("rgb(0,0,0,0%)")
        setIdleBgPos(false)
      }
      else{
        setBtn("")
        setIdleBg("rgb(0,0,0,0%)")
        setIdleBgPos(true)
      }


    }
  };
  const [totalCar, setTotalCar] = useState(CarData);
useEffect(() => {
  setTotalCar(
    CarData.filter((item)=>{
      return (!btn || item.btn=== btn) && (!vehicle || item.type===vehicle) &&(!searchText || item.carN.toLocaleLowerCase().includes(searchText));
    })
  )
}, [btn,vehicle,searchText])

  // const filterData=(data)=>{
  //   setTotalCar(
  //     CarData.filter((item)=>{
  //       return item.carN===data;
  //     })
  //   )
  // }

  const filterData=(val)=>{
    const lowerCaseValue=val.toLowerCase();
    if(!lowerCaseValue){
      setTotalCar(CarData);
    }
    else{
      const filteredData=CarData.filter((item)=>{
        return Object.keys(item).some((key)=>{
    return item[key].toString().toLowerCase().includes(lowerCaseValue);
        })
      })
      setTotalCar(filteredData)
    }
      };
      const handlVehicle=(data,pos)=>{
        setVehicle(data)
        if(data=="car"){
          if(pos===true){
            setCarBg("rgb(122,125,139,20%)")
            setTruckBg("rgb(0,0,0,0%)")
            setCarBgPos(false)
          }
         else{
          setVehicle("")
          setCarBg("rgb(0,0,0,0%)")
          setCarBgPos(true)

         }
        }
        else if(data=="truck"){
          if(pos===true){
            setTruckBg("rgb(122,125,139,20%)")
            setCarBg("rgb(0,0,0,0%)")
            setTruckBgPos(false)
          }
          else{
            setVehicle("")
            setTruckBg("rgb(0,0,0,0%)")
            setTruckBgPos(true)
          }
        
    
    
        }
      };
      const handleText=(data)=>{
        const val=data.target.value;
        // setText(val);
        setSearchText(val);     
            //  filterData(val)
      }
  return (
    <div className="dashboard-side-main">
      <div className="div1">
        <div className="sub-div1">
          <img src="./assets/logo.png" alt="none" className="logo" />
          <p>TECHWELT</p>
        </div>
      </div>

      <div className="div3">
        <div className="sub1-div3">
          {/* <div style={{backgroundColor:onlineBg,width:"4rem"}}> */}
          <div className="subsub1-sub1-div3" onClick={()=>handlBtn("Connected",onlineBgPos)}  >
            <img src="./assets/Online.svg" alt="none" style={{width:"3rem",height:"2.5rem",marginLeft:"2rem",marginTop:"1.3rem"}} />
            <p >Online</p>
            <div style={{backgroundColor:onlineBg ,width:"6.2rem",height:"5.7rem",position:"absolute",top:"0",left:"0",borderRadius:"1rem"}}>

          </div>
          </div>
          {/* <div style={{backgroundColor:offlineBg,width:"4rem"}}> */}
          <div className="subsub2-sub1-div3" onClick={()=>handlBtn("Not Connected",offlineBgPos)} >
            <img src="./assets/Offline.svg" alt="none" style={{width:"3rem",height:"3rem",marginRight:"1rem",marginTop:"1.3rem"}} />
            <p>Offline</p>
            <div style={{backgroundColor:offlineBg ,width:"6.2rem",height:"5.7rem",position:"absolute",top:"0",right:"10.5rem",borderRadius:"1rem"}}>
          </div>
          </div>
          
          <div className="subsub3-sub1-div3" onClick={()=>handlBtn("Idle",idleBgPos)} >
            <img src="./assets/Idle.svg" alt="none" style={{width:"3rem",height:"2.5rem",marginRight:"3rem",marginTop:"1.3rem"}} />
            <p>Idle</p>
            <div style={{backgroundColor:idleBg ,width:"6.2rem",height:"5.7rem",position:"absolute",top:"0",right:"0rem",borderRadius:"1rem"}}>
          </div>
          </div>
        </div>
      </div> 
      <div className="div4">
        <div className="sub-div4">
          <div className="sub1-div4" onClick={()=>handlVehicle("car",carBgPos)}>
            <img src="./assets/Car.svg" alt="none" className="car-logo" />
            <span>Car</span>
            <div style={{backgroundColor:carBg ,width:"6.2rem",height:"5.7rem",position:"absolute",top:"0",left:"-.2rem",borderRadius:"1rem"}}>
</div>
          </div>
          <div className="sub2-div4" onClick={()=>handlVehicle("truck",truckBgPos)}>
            <img src="./assets/Truck.svg" alt="none" className="truck-logo" />
            <span>Truck</span>
            <div style={{backgroundColor:truckBg ,width:"6.2rem",height:"5.7rem",position:"absolute",top:"0",left:"10.4rem",borderRadius:"1rem"}}>
</div>
          </div>
        </div>
      </div>
      <div className="div5">
        <div className="sub1-div5">
          <p>Total Vehicles: &nbsp; 03</p>
        </div>
        <div className="sub2-div5">
          <div className="subsub1-sub2-div5">
            <img src="./assets/user2.svg" alt="none" />
            <select placeholder="Owner Name">
              <option>Owner Name</option>
              <option></option>
              <option></option>
            </select>
          </div>
          <input placeholder="Search" value={searchText} onChange={(value)=>handleText(value)}/>
        </div>
        <div className="sub3-div5">
        <hr />
      </div>
      </div>
      <div className="div6">
        {totalCar.map((item) => {
          return (
            <div
              className="sub1-div6"
              style={{ border: boardColor==item.id ? ".1rem solid red" :".1rem solid rgb(158, 154, 154, 50%)"}}
              onClick={() => {
                handle1(item.type,item.id);
              }}
              key={item.id}
            >
              <div className="left-sub1-div6">
                <div className="sub1-left-sub1-div6">
                  <img src={item.img} alt="none" className="card-car-logo" />
                  <span style={{ backgroundColor: handleColor(item.btn) }}>
                    {item.btn}
                  </span>
                </div>
                <div className="sub2-left-sub1-div6"></div>
              </div>
              <div className="right-sub1-div6">
                <span>{item.carN}</span>
                <div className="right-sub1-div6-sub1">
                  <img src="./assets/calender.png" alt="none" />
                  <p>{item.date}</p>
                  <p>{item.time}</p>
                </div>

                <div className="right-sub1-div6-sub2">
                  <img src="./assets/I.svg" alt="none" style={{cursor:"pointer"}}/>
                  <img src="./assets/Pointer.svg" alt="none" style={{cursor:"pointer"}} />
                  <img src="./assets/Location.svg" alt="none" style={{cursor:"pointer"}} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="div7"></div> */}

      <div className="main-car-portal-side-bar" style={{ display:carPortal }}>
        <div className="car-close-portal-side-bar" style={{cursor:"pointer"}}>
          <img
            src="./assets/Close.svg"
            alt="none"
            onClick={() => handleClose()}
          />
        </div>
        <div className="car-portal-side-bar">
          <div className="sub1-car-portal-side-bar">
            <div className="subsub1-sub1-car-portal-side-bar">
              <img src="./assets/uber.png" alt="none" />
              <p>UBER</p>
            </div>
            <div className="subsub2-sub1-car-portal-side-bar">
              <img src="./assets/Car.svg" alt="none" />
              <p>DXB U16779</p>
            </div>
            <div className="subsub3-sub1-car-portal-side-bar">
              <div className="sub1-subsub3-sub1-car-portal-side-bar">
                <img src="./assets/arrow.png" alt="none" />
                <p>Connected</p>
              </div>
              <div className="sub2-subsub3-sub1-car-portal-side-bar">
                <p>09/03/2023</p>
                <p>08:55 AM</p>
              </div>
            </div>
            <div className="subsub4-sub1-car-portal-side-bar">
              <div className="sub1-subsub4-sub1-car-portal-side-bar">
                <img src="./assets/gps.svg" alt="none" />
                <p>Not Fixed</p>
              </div>

              <div className="sub2-subsub4-sub1-car-portal-side-bar">
                <p>09/03/2023</p>
                <p>08:55 AM</p>
              </div>
            </div>
            <div className="subsub5-sub1-car-portal-side-bar">
              <img src="./assets/eng.jpeg" alt="none" />
            </div>
            <div className="subsub6-sub1-car-portal-side-bar">
              <p>IMEI: 862341235670123</p>
            </div>
          </div>
          {/* ////////////////////////////// */}

          <div className="sub2-car-portal-side-bar">
            <div className="subsub1-sub2-car-portal-side-bar">
              <div className="sub1-subsub1-sub2-car-portal-side-bar">
                <img src="./assets/Pic1.svg" alt="none" />
                <p>120 KM/HR</p>
              </div>
              <div className="sub2-subsub1-sub2-car-portal-side-bar">
              <img src={engineState==true ?"./assets/Pic2.svg" :"./assets/Pic13.svg"} alt="none" />
                <p>Engine ON</p>
              </div>
              <div className="sub3-subsub1-sub2-car-portal-side-bar">
                <img src="./assets/Pic3.svg" alt="none" />
                <p>20.5L</p>
              </div>
            </div>
            <div
              style={{
                width: "48.2rem",
                backgroundColor: "grey",
                height: ".1rem",
              }}
            >
              <hr />
            </div>
            {/* ////////////////////////// */}
            <div className="subsub2-sub2-car-portal-side-bar">
              <div className="sub1-subsub2-sub2-car-portal-side-bar">
                <img src="./assets/Pic4.svg" alt="none" />
                <p>45 C</p>
              </div>
      
              <div className="sub2-subsub2-sub2-car-portal-side-bar" style={{cursor:"pointer"}}>
                <img src="./assets/Pic5.svg" alt="none" style={{display:simState}}/>
                <div style={{width:"13.5rem",height:"6.7rem",position:"relative",marginLeft:"1rem",marginTop:"-1rem",display:simCardState}}>
                  <img src="./assets/close.svg" alt="none" style={{width:"1.5rem",height:"1.5rem",position:"absolute",right:"-2.3rem"}} onClick={()=>closeSimCard()}/>
<div style={{width:"15.2rem",height:"6.2rem",backgroundColor:"white",marginTop:".8rem",borderRadius:".8rem",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
<p style={{width:"13.4rem",height:"1.2rem",fontSize:"1.2rem"}}>SIM No. +971501234567</p>
<p style={{width:"13.4rem",height:"1.2rem",fontSize:"1.2rem"}}>ICCID 863456789123456</p>
</div>
                </div>
                <img src="./assets/Group.svg" alt="none" onClick={()=>handlSimCard()}/>
              </div>
              
              <div className="sub3-subsub2-sub2-car-portal-side-bar">
                <img src="./assets/Pic6.svg" alt="none" />
                <p>12.6V</p>
              </div>
              <div className="sub4-subsub2-sub2-car-portal-side-bar">
                <img src="./assets/Pic7.svg" alt="none" />
                <img src="./assets/Group.svg" alt="none" />
              </div>
              <div className="sub5-subsub2-sub2-car-portal-side-bar">
                <img src="./assets/Pic8.svg" alt="none" />
                <img src="./assets/Group.svg" alt="none" />
              </div>
            </div>
            <div
              style={{
                width: "48.2rem",
                backgroundColor: "grey",
                height: ".1rem",
              }}
            >
              <hr />
            </div>
            {/* ///////////////////// */}
            <div className="subsub3-sub2-car-portal-side-bar">
              <div className="sub1-subsub3-sub2-car-portal-side-bar">
                <img src={enginebtn==false?"./assets/Pic13.svg":"./assets/Pic2.svg"} alt="none" />
                <label className="car-switch">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      handleEngine(e);
                    }}
                   
                  />
                  <span className="car-slider">
                    <div className="car-on-off">
                      <p className="car-p">ON</p>
                      <p className="car-p" style={{marginRight:".5rem"}}>OFF</p>
                    </div>
                  </span>
                </label>
              </div>
              <div className="sub2-subsub3-sub2-car-portal-side-bar" onClick={()=>navigate("/History")} style={{cursor:"pointer"}}>
                <img src="./assets/Pic9.svg" alt="none" />
                <p>History</p>
              </div>
              <div className="sub3-subsub3-sub2-car-portal-side-bar"
              onClick={()=>navigate("/CommandsSettings")}
              style={{cursor:"pointer"}}
              >
                <img src="./assets/Pic10.svg" alt="none" />
                <div className="sub1-sub3-subsub3-sub2-car-portal-side-bar" 
                
                >
                  <p>Commands</p>
                  <p>Setting</p>
                </div>
              </div>
              <div className="sub4-subsub3-sub2-car-portal-side-bar" onClick={()=>handlUpload()} style={{cursor:"pointer"}}>
                <img src={uploadImg} alt="none" />
                <p style={{color:uploadText=="Upload Config" ? "white" : "#F89823"}}>{uploadText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="main-truck-portal-side-bar" style={{ display: truckPortal }}>
        <div className="truck-close-portal-side-bar" style={{cursor:"pointer"}}>
          <img
            src="./assets/Close.svg"
            alt="none"
            onClick={() => handleClose()}
          />
        </div>
        <div className="truck-portal-side-bar">
          <div className="sub1-truck-portal-side-bar">
            <div className="subsub1-sub1-truck-portal-side-bar">
              <img src="./assets/uber.png" alt="none" />
              <p>UBER</p>
            </div>
            <div className="subsub2-sub1-truck-portal-side-bar">
              <img src="./assets/truck.svg" alt="none" />
              <p>DXB U16779</p>
            </div>
            <div className="subsub3-sub1-truck-portal-side-bar">
              <div className="sub1-subsub3-sub1-truck-portal-side-bar">
                <img src="./assets/arrow.png" alt="none" />
                <p>Connected</p>
              </div>
              <div className="sub2-subsub3-sub1-truck-portal-side-bar">
                <p>09/03/2023</p>
                <p>08:55 AM</p>
              </div>
            </div>
            <div className="subsub4-sub1-truck-portal-side-bar">
              <div className="sub1-subsub4-sub1-truck-portal-side-bar">
                <img src="./assets/gps.svg" alt="none" />
                <p>Not Fixed</p>
              </div>

              <div className="sub2-subsub4-sub1-truck-portal-side-bar">
                <p>09/03/2023</p>
                <p>08:55 AM</p>
              </div>
            </div>
            <div className="subsub5-sub1-truck-portal-side-bar">
              <img src="./assets/eng.jpeg" alt="none" />
            </div>
            <div className="subsub6-sub1-truck-portal-side-bar">
              <p>IMEI: 862341235670123</p>
            </div>
          </div>
          {/* ////////////////////////////// */}

          <div className="sub2-truck-portal-side-bar">
            <div className="subsub1-sub2-truck-portal-side-bar">
              <div className="sub1-subsub1-sub2-truck-portal-side-bar">
                <img src="./assets/Pic1.svg" alt="none" />
                <p>120 KM/HR</p>
              </div>
              <div className="sub2-subsub1-sub2-truck-portal-side-bar">
                <img src={engineState==true ?"./assets/Pic2.svg" :"./assets/Pic13.svg"} alt="none" />
                <p>Engine OFF</p>
              </div>
              <div className="sub3-subsub1-sub2-truck-portal-side-bar">
                <img src="./assets/Pic3.svg" alt="none" />
                <p>20.5L</p>
              </div>
              <div className="sub4-subsub1-sub2-truck-portal-side-bar">
                <img src="./assets/Pic3.svg" alt="none" />
                <p>50L</p>
              </div>
              <div className="sub5-subsub1-sub2-truck-portal-side-bar">
                <img src="./assets/Pic3.svg" alt="none" />
                <p>50L</p>
              </div>
            </div>
            <div
              style={{
                width: "48.2rem",
                backgroundColor: "grey",
                height: ".1rem",
              }}
            >
              <hr />
            </div>
            {/* ////////////////////////// */}
            <div className="subsub2-sub2-truck-portal-side-bar">
              <div className="sub1-subsub2-sub2-truck-portal-side-bar">
                <img src="./assets/Pic4.svg" alt="none" />
                <p>45 C</p>
              </div>
              <div className="sub2-subsub2-sub2-truck-portal-side-bar" style={{cursor:"pointer"}}>
                <img src="./assets/Pic5.svg" alt="none" style={{display:simState}}/>
                <div style={{width:"13.5rem",height:"6.7rem",position:"relative",marginLeft:"1rem",marginTop:"-1rem",display:simCardState,cursor:"pointer"}}>
                  <img src="./assets/close.svg" alt="none" style={{width:"1.5rem",height:"1.5rem",position:"absolute",right:"-2.3rem"}} onClick={()=>closeSimCard()}/>
<div style={{width:"15.2rem",height:"6.2rem",backgroundColor:"white",marginTop:".8rem",borderRadius:".8rem",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
<p style={{width:"13.4rem",height:"1.2rem",fontSize:"1.2rem"}}>SIM No. +971501234567</p>
<p style={{width:"13.4rem",height:"1.2rem",fontSize:"1.2rem"}}>ICCID 863456789123456</p>
</div>
                </div>
                <img src="./assets/Group.svg" alt="none" onClick={()=>handlSimCard()} style={{cursor:"pointer"}}/>
              </div>
              <div className="sub3-subsub2-sub2-truck-portal-side-bar">
                <img src="./assets/Pic6.svg" alt="none" />
                <p>12.6V</p>
              </div>
              <div className="sub4-subsub2-sub2-truck-portal-side-bar">
                <img src="./assets/Pic7.svg" alt="none" />
                <img src="./assets/Group.svg" alt="none" />
              </div>
              <div className="sub5-subsub2-sub2-truck-portal-side-bar">
                <img src="./assets/Pic8.svg" alt="none" />
                <img src="./assets/Group.svg" alt="none" />
              </div>
            </div>
            <div
              style={{
                width: "48.2rem",
                backgroundColor: "grey",
                height: ".1rem",
              }}
            >
              <hr />
            </div>
            {/* ///////////////////// */}
            <div className="subsub3-sub2-truck-portal-side-bar">
              <div className="sub1-subsub3-sub2-truck-portal-side-bar">
              <img src={enginebtn==false?"./assets/Pic13.svg":"./assets/Pic2.svg"} alt="none" />
                <label className="truck-switch">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      handleEngine(e);
                    }}
                  />
                  <span className="truck-slider">
                    <div className="truck-on-off">
                      <p className="truck-p">ON</p>
                      <p className="truck-p" style={{marginRight:".5rem"}}>OFF</p>
                    </div>
                  </span>
                </label>
              </div>
              <div className="sub2-subsub3-sub2-truck-portal-side-bar" onClick={()=>navigate("/History")} style={{cursor:"pointer"}}>
                <img src="./assets/Pic9.svg" alt="none" />
                <p>History</p>
              </div>
              <div className="sub3-subsub3-sub2-truck-portal-side-bar"
              onClick={()=>navigate("/CommandsSettings")}
              style={{cursor:"pointer"}}
              >
                <img src="./assets/Pic10.svg" alt="none" />
                <div className="sub1-sub3-subsub3-sub2-truck-portal-side-bar" 
                
                >
                  <p>Commands</p>
                  <p>Setting</p>
                </div>
              </div>
              <div className="sub4-subsub3-sub2-truck-portal-side-bar" onClick={()=>handlUpload()} style={{cursor:"pointer"}}>
              <img src={uploadImg} alt="none" />
                <p style={{color:uploadText=="Upload Config" ? "white" : "#F89823"}}>{uploadText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
