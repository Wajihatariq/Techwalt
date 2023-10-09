import React,{useState,useEffect} from 'react';
import "./Ticket.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { CSVLink } from "react-csv";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Outlet, useNavigate } from "react-router-dom";
const Ticket = () => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
    const ticketsData = [
        {
          id: "1",
          reference: "24235843981",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Ayaz",
          company: "delta",
          status:"Resolved"
        },
        {
          id: "2",
          reference: "24235843982",
          subject:"Teltonikas",
          date: "14/04/2023 12.56 PM ",
          user:"Alex",
          company: "deltas",
          status:"Pending"
        },
        {
          id: "3",
          reference: "24235843983",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Andrei",
          company: "deltass",
          status:"Resolved"
        },
        {
          id: "1",
          reference: "24235843981",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Ayaz",
          company: "delta",
          status:"Resolved"
        },
        {
          id: "2",
          reference: "24235843982",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Alex",
          company: "deltas",
          status:"Pending"
        },
        {
          id: "3",
          reference: "24235843983",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Andrei",
          company: "deltass",
          status:"Resolved"
        },
        {
          id: "1",
          reference: "24235843981",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Ayaz",
          company: "delta",
          status:"Resolved"
        },
        {
          id: "2",
          reference: "24235843982",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Alex",
          company: "deltas",
          status:"Pending"
        },
        {
          id: "3",
          reference: "24235843983",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Andrei",
          company: "deltass",
          status:"Resolved"
        },
        {
          id: "1",
          reference: "24235843981",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Ayaz",
          company: "delta",
          status:"Resolved"
        },
        {
          id: "2",
          reference: "24235843982",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Alex",
          company: "deltas",
          status:"Pending"
        },
        {
          id: "3",
          reference: "24235843983",
          subject:"Teltonika",
          date: "14/04/2023 12.56 PM ",
          user:"Andrei",
          company: "deltass",
          status:"Resolved"
        },

      ];
      const [data, setData] = useState(ticketsData);
      const [searchRefText, setSearchRefText] = useState("");
      const [searchSubjectText, setSearchSubjectText] = useState("");
      const [searchUserText, setSearchUserText] = useState("User");
      const [searchCompanyText, setSearchCompanyText] = useState("Company");
      const [ticketStatus, setTicketStatus] = useState("");
      const [ticketRemove, setTicketRemove] = useState("none");
      const [ticketRemoveId, setTicketRemoveId] = useState("");
      const handleRef = (value) => {
        const val = value.target.value;
        setSearchRefText(val);
        // filterData(val);
      }; 
      const handleSubject = (value) => {
        const val = value.target.value;
        setSearchSubjectText(val);
        // filterData(val);
      }; 
      const handleUser = (value) => {
        const val = value.target.value;
        setSearchUserText(val);
        // filterData(val);
      }; 
      const handleCompany = (value) => {
        const val = value.target.value;
        setSearchCompanyText(val);
        // filterData(val);
      };
      useEffect(() => {
        setData(
          ticketsData.filter((item)=>{
            return (!searchRefText || item.reference.toLocaleLowerCase().includes(searchRefText.toLocaleLowerCase())) && (!searchSubjectText || item.subject.toLocaleLowerCase().includes(searchSubjectText.toLocaleLowerCase()))  && (searchUserText=="User"?item.user : (!searchUserText || item.user===searchUserText))&& (searchCompanyText=="Company"?item.company : (!searchCompanyText || item.company===searchCompanyText));
          })
        )
      }, [searchRefText,searchSubjectText,searchUserText,searchCompanyText]) 
      const handlClear=()=>{
        setSearchRefText("")
        setSearchSubjectText("")
        setSearchUserText("User")
        setSearchCompanyText("Company")
        setData(ticketsData);
      }
      const handlDialogBoxTicketState=(data)=>{
        console.log(data)
      };
      const handlTicketStatus = (status) => {
        console.log(status);
        if (status == "Resolved") {
          setTicketStatus("Pending");
        } else {
          setTicketStatus("Resolved");
        }
      };
      const handlRemoveTicket = (id) => {
        console.log(id);
        setTicketRemoveId(id);
        setTicketRemove("block");
        setTimeout(() => {
          setTicketRemoveId("");
          setTicketRemove("none");
        }, 2000);
      };
       const handleChange=(e)=>{

    const {name,checked}=e.target;
    console.log(name)
    if(name==="allSelect"){
    let tewmpUser=data.map((da)=>{return{...da,isChecked:checked}});
    setData(tewmpUser)
    
    }else{
      let tewmpUser = data.map((da)=>da.reference===name?{...da,isChecked:checked}:da);
      setData(tewmpUser)
    }
    
      }
  return (
    <div className="ticket">
    <div className="ticket-left" style={{width:"30rem",height:"93rem" }}>
      <SideBar />
    </div>
    <div
      className="ticket-right"
      style={{ width:"161.9rem",height:"92.9rem"}}
    >
      <div className="ticket-nav">
        <Header />
      </div>
      <div className="ticket-main">
        <div className="ticket-contaner">

        <div className="ticket-div1">
              <div className="sub1-ticket-div1">
                <div className="all-ticket-div1">
                <div className="subsub1-sub1-ticket-div1" >
                <p>
                Total tickets   <span>35</span>
                </p>
                </div>
                <div className="subsub2-sub1-ticket-div1">
                <p>
                Pending   <span>15</span>
                </p>
                </div>
                <div className="subsub3-sub1-ticket-div1">
                <p>
                Resolved   <span>20</span>
                </p>
                </div>
                </div>
                
                <div className="subsub4-sub1-ticket-div1">
                {/* <CSVLink
                    data={ticketsData}
                    filename="Ticket"
                    style={{ textDecoration: "none" }}
                    > */}
                  <div className="sub1-subsub4-sub1-ticket-div1" onClick={()=>navigate("/NewTicket")} style={{cursor:"pointer"}}>
                    <img src="./assets/Ticket.svg" alt="none"/>
                    <button>Create</button>
                  </div>
                  {/* </CSVLink> */}
                  <div className="sub2-subsub4-sub1-ticket-div1"
                   style={{cursor:"pointer"}}
                  >
                    <img src="./assets/delete.svg" alt="none"/>
                    <button >Delete</button>
                  </div>
                   
                </div>
                <div className="Tstart"> <DatePicker
        selected={startDate}
        calendarClassName="rasta-stripes"

        placeholderText="From"
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      //   timeInputLabel="Time:"
      // dateFormat="dd/MM/yyyy h:mm aa"
      // showTimeInput
      />
     </div>
    <div className="Tend">
    <DatePicker
      calendarClassName="rasta-stripes"
      selected={endDate}
    placeholderText="To"
    onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        // timeInputLabel="Time:"
        // dateFormat="dd/MM/yyyy h:mm aa"
        // showTimeInput
      />
    </div>
              </div>
              <div className="sub2-ticket-div1">
              <div className="subsub1-sub2-ticket-div1">
                <div className="sub1-subsub1-sub2-ticket-div1">
                <div ><img src="./assets/searchwithperson.svg" alt="none" className="ticket-search-icon"/></div><span>Search ticket</span>
                </div>
               <div className="sub2-subsub1-sub2-ticket-div1">
    <input placeholder='Ref No.'
    type="text"
    value={searchRefText}
    onChange={(value) => handleRef(value)}
    />
    <input placeholder='Subject'
      type="text"
      value={searchSubjectText}
      onChange={(value) => handleSubject(value)}
    />
    <select
      type="text"
      value={searchUserText}
      onChange={(value) => handleUser(value)}
      style={{color:searchUserText=="User"?"#7A7D8B":"black"}}

    >
        <option>User</option>
        <option style={{color:"black"}}>Alex</option>
        <option style={{color:"black"}}>Ayaz</option>
        <option style={{color:"black"}}>Andrei</option>
    </select>
    <select
      type="text"
      value={searchCompanyText}
      onChange={(value) => handleCompany(value)}
      style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}

    >
        <option>Company</option>
        <option style={{color:"black"}}>delta</option>
        <option style={{color:"black"}}>deltas</option>
        <option style={{color:"black"}}>deltass</option>
    </select>
    <input disabled/>
    <input  disabled/>
    <div className="sub1-sub2-subsub1-sub2-ticket-div1"
    onClick={()=>handlClear()}
    style={{cursor:"pointer"}}
    >
    <img src="./assets/clear.svg" alt="none"/>
    <button>Clear</button>
    </div>
              </div>

              </div>
              </div>
             
            </div>


            <div className="ticket-div2">
            <div className="sub1-ticket-div2">
              <div className="subsub1-sub1-ticket-div2">
              <input type='checkbox'
                onChange={handleChange} name='allSelect'checked={data.filter(da=>da?.isChecked !== true).length < 1}

              />
              {/* <p><input type='checkbox' style={{width:"1.5rem",height:"1.5rem",accentColor:"#AD0606"}}/></p> */}
                <p>Reference No.</p>
                <p>Subject</p>
                <p>Date Time</p>
                <p>User</p>
                <p>Company</p>
                <p>Status</p>
                <p></p>
              </div>
              </div>
            <div className="sub2-ticket-div2">
            {data.map((item)=>{
              return(
                <div id="import-ticket">
                <p id="sub1-import-ticket">{item.id}</p>
                <div className="subsub1-sub2-ticket-div2">
                <input type='checkbox'
                name={item.reference} onChange={handleChange} checked={item?.isChecked || false}
                />
                {/* <p><input type='checkbox' style={{width:"1.5rem",height:"1.5rem",accentColor:"#AD0606"}}/></p> */}
                <p>{item.reference}</p>
                <p>{item.subject}</p>
                <p>{item.date}</p>
                <p>{item.user}</p>
                <p>{item.company}</p>
                <p style={{color:item.status=="Resolved" ? "#63D16E" : "#FF3062"}}>{item.status}</p>
              {/* <p> <img src="./assets/settings.png" alt="none"/>    </p>  */}
                 </div>
                 <div className="ticket-dropdown">
  <img src="./assets/Settings.svg" alt="none"  className=" dropdown-toggle ticket-dropdown-img " href="#"  data-bs-toggle="dropdown" aria-expanded="false"
  onClick={() => handlTicketStatus(item.status)}
  />  
  <div className="dropdown-menu ticket-dropdown-div">
   
<div className="sub1-ticket-dropdown-div">
<div className="subsub1-sub1-ticket-dropdown-div"
style={{
  width:
    ticketStatus == "Pending" ? "9.5rem" : "10rem",
    cursor:"pointer"
}}
onClick={()=>handlDialogBoxTicketState(ticketStatus)}
>
  <img src={
  ticketStatus == "Resolved"
  ? "./assets/Add.svg"
  : "./assets/deactivate.svg"
  } alt="none" style={{width:"1.5rem",height:"1.5rem"}}/>
  <p>{ticketStatus}</p>
</div>
<div className="subsub2-sub1-ticket-dropdown-div"
onClick={() => handlRemoveTicket(item.id)}
style={{cursor:"pointer"}}
>
  <img src="./assets/remove.svg" alt="none" style={{width:"1.5rem",height:"1.5rem"}}/>
  <p>Delete</p>
</div>
</div>
  </div>
</div>
                 </div>
              );
            })}
            </div>
            <div className="ticket-remove" style={{ display: ticketRemove }}>
                <h1>Id {ticketRemoveId} User has been Removed</h1>
              </div>
            </div>
           




        </div>
      </div>
    </div>
   
    <Outlet />
  </div>
  )
}

export default Ticket