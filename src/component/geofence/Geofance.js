import React,{useState,useEffect,useRef} from 'react'
import "./Geofance.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet } from "react-router-dom";
const Geofance = () => {
  // const [state, settSate] = useState(true)
  
  //   setTimeout(() => {
  //     window.location.reload(false);
  //     settSate(false)
  //   }, 1000);
  
  
  const [zone1, setZone1] = useState(".1rem solid red");
  const [zone1State, setZone1State] = useState("");
  const [zone2, setZone2] = useState(".1rem solid grey");
  const [zone2State, setZone2State] = useState("");
  const [zone3, setZone3] = useState(".1rem solid grey");
  const [zone3State, setZone3State] = useState("");
  const handleZone = (val, state) => {
    // console.log(val);
    // console.log(state);
    if (val == "zone1") {
      setZone1State(false);
      setZone1(".1rem solid red");
      setZone2(".1rem solid grey");
      setZone3(".1rem solid grey");
    } else if (val == "zone2") {
      setZone2State(false);
      setZone2(".1rem solid red");
      setZone1(".1rem solid grey");
      setZone3(".1rem solid grey");
    } else {
      setZone3State(false);
      setZone3(".1rem solid red");
      setZone2(".1rem solid grey");
      setZone1(".1rem solid grey");
    }
  };
  const Data=[
    {
      name:"abc1"
  },
  {
    name:"abc2"
},
{
  name:"abc3"
},
{
  name:"abc4"
}
]
  const States=[
    {
      name:"AUH Y12331"
    },
    {
      name:"FUJ L22145"
    },
    
  ]
const [users, setUsers] = useState([])
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false)
  const dropdownRef =useRef(null);
  useEffect(() => {
    setUsers(States)
    const onClick=(e)=>{
if(e.target !==dropdownRef.current ){
setIsDropdownDisplayed(false)
}
    };
    document.addEventListener('click',onClick);
    return()=>{
      document.removeEventListener('click',onClick);
    }
  }, [])

  const handleChange=(e)=>{

const {name,checked}=e.target;
if(name==="allSelect"){
let tewmpUser=users.map((user)=>{return{...user,isChecked:checked}});
setUsers(tewmpUser)

}else{
  let tewmpUser = users.map((user)=>user.name===name?{...user,isChecked:checked}:user);
  setUsers(tewmpUser)
}

  }
  return (
    <div className="geofence">
      <div
        className="geofence-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="geofence-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="geofence-nav">
          <Header />
        </div>
        <div className="geofence-main">
          <div className="geofence-contaner">
            <div className="geofence-div1">
              <div className="sub1-geofence-div1">
                <div className="subsub1-sub1-geofence-div1">
                  <label>Select or Create Zone</label>
                  <select>
                    <option
                      disabled
                      selected
                      style={{ fontSize: "1.6rem", color: "#7A7D8B" }}
                    >
                      Geozone
                    </option>
                    <option style={{color:"black"}}>hjksh</option>
                    <option style={{color:"black"}}>ljb</option>
                    <option style={{color:"black"}}>lkh</option>
                  </select>
                </div>
                <div className="subsub2-sub1-geofence-div1"></div>
                <div className="subsub3-sub1-geofence-div1">
                  <label style={{ color: "#D01400" }}>
                    Select Vehicle or Company
                  </label>
                  
                   <button className='state-dropdown'
      onClick={(e)=>{
        e.stopPropagation();
        setIsDropdownDisplayed((prevState)=>!prevState)}}
      >Plate No.</button>
      {isDropdownDisplayed && <div className='panel'  onClick={(e)=>{e.stopPropagation()}} ref={dropdownRef}>
      <div className='fieldAll' > 
        <input  type='checkbox'
        onChange={handleChange} name='allSelect'checked={users.filter(user=>user?.isChecked !== true).length < 1}
        />
        <span >All Vehicles</span>
        </div>
        {users.map((user)=>(
        <div className='field' > 
        <input  type='checkbox'
        name={user.name} onChange={handleChange} checked={user?.isChecked || false}
        />
        <label >{user.name}</label>
        </div>))}
        </div>}
                </div>
               
              </div>
              <div className="sub2-geofence-div1">
                <div className="subsub1-sub2-geofence-div1"
                
                style={{cursor:"pointer"}}>
                  <img src="./assets/Save.svg" alt="none" />
                  <button>Save</button>
                </div>
                <div className="subsub2-sub2-geofence-div1"
                style={{cursor:"pointer"}}
                >
                  <img src="./assets/Delete.svg" alt="none" />
                  <button>Delete</button>
                </div>
              </div>
            </div>
            <div className="geofence-div2">
              <div
                className="sub1-geofence-div2"
                style={{ border: zone1 }}
                onClick={() => handleZone("zone1", true)}
              >
                <img src="./assets/img1.png" alt="none" />
              </div>
              <div
                className="sub2-geofence-div2"
                style={{ border: zone2 }}
                onClick={() => handleZone("zone2", true)}
              >
                <img src="./assets/img2.png" alt="none" />
              </div>
              <div className="sub3-geofence-div2">
                <img
                  src="./assets/img3.png"
                  alt="none"
                  style={{ border: zone3 }}
                  onClick={() => handleZone("zone3", true)}
                />
              </div>
              <div className="sub4-geofence-div2">
                <img src="./assets/map.png" alt="none" className="map" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Geofance;
