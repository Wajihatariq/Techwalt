import React, { useState } from "react";
import "./CommandsQueue.css";
const CommandsQueue = () => {
    const [portal, setPortal] = useState("none")
    const [portalState, setPortalState] = useState(true)
    const AlertData = [
        {
          id: "1",
          command: "setdigout 1,1,1",
          time: "12/04/2023 12:45 PM",
          status:"Sent",
          response: "ACB sdsd",
        },
        {
            id: "1",
            command: "setdigout 1,1,1",
            time: "12/04/2023 12:45 PM",
            status:"Failed",
            response: "ACB sdsd",
          },
         
          {
            id: "1",
            command: "setdigout 1,1,1",
            time: "12/04/2023 12:45 PM",
            status:"Sent",
            response: "ACB sdsd",
          },
         
          {
            id: "1",
            command: "setdigout 1,1,1",
            time: "12/04/2023 12:45 PM",
            status:"Failed",
            response: "ACB sdsd",
          },
         
       
      ];
      const [data, setData] = useState(AlertData);
      const handlPortal =(state)=>{
        console.log(state)
        if(state===true){
            setPortal("block")
            setPortalState(false)
        }
        else{
            setPortal("none")
            setPortalState(true)
        }
      
      }

  return (
    <div className="commands-queue-div1" id="sec11">
      <div className="sub1-commands-queue-div1" 
      onClick={()=>handlPortal(portalState)}
      >
        <p>
          <img src="./assets/Wadd.svg" alt="none" />
          New Command
        </p>
      </div>
      <div className="commands-queue-div2">
            <div className="sub1-commands-queue-div2">
              <div className="subsub1-sub1-commands-queue-div2">
                <div><p>Command</p><img src="./assets/upRed.svg" alt="none" style={{marginLeft:"1rem",marginTop:"-1rem"}}/></div>
                <p>Time</p>
                <p>Status</p> 
                <div><p>Response</p><img src="./assets/downGreen.svg" alt="none" style={{marginLeft:"1rem",marginTop:"-1rem"}}/></div>
              </div>
              </div>
            <div className="sub2-commands-queue-div2">
            {data.map((item)=>{
              return(
                <div className="subsub1-sub2-commands-queue-div2">
                <p>{item.command}</p>
                <p>{item.time}</p>
                <p style={{color:item.status=="Sent"?"#63D16E":"#F90A86"}}>{item.status}</p>
                <p>{item.response}</p>
                 </div>
              );
            })}
            </div>
            </div>
            {/*  */}
            <div style={{position:"absolute",top:"17rem",left:"55rem",display:portal}}>
            <div style={{position:"relative"}}>
            <img src="./assets/Close.svg" alt="none" className="commands-queue-portal-close"
            onClick={() => handlPortal(portalState)}
          />
            <div className="commands-queue-portal">
           
            <div className="sub1-commands-queue-portal">
                <label>Type Command</label>
                <input type="text" />
              </div>
              <img src="./assets/send.svg" alt="none"/>
            </div>
            </div>
            </div>
          
           {/*  */}
    </div>
  );
};

export default CommandsQueue;
