import React, { useState } from "react";
import "./TicketId.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import CountryData from "../../CountryData.json";
import { Outlet, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const TicketId = () => {
  const [formData, setFormData] = useState({
    subject: "FMC130 Output Issue",
    text: "This text is not editable as its the ticket raised by client.",
    text1:"This text is editable as its reply from admin or manager to client"
  });
  const handlData = (e) => {
    console.log({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const DATA = [
    {
      subject: "mypic.jpeg",
    },
    {
      subject: "Testfile.pdf",
    },
    {
      subject: "myvideo.mp4",
    },
    {
      subject: "1234435345.png",
    },
    {
      subject: "Test.mp4",
    },
  ];
  const DATAS = [
    {
      subject: "mypic.jpeg",
    }
    
  ];
  const handlSubmit = () => {
    if (formData.text.length === 0) {
      alert("sorry n");
    } else if (formData.subject.length === 0) {
      alert("sorry u");
    }
    final();
  };
  const final = () => {
    const sendData = {
      subject: formData.subject,
      text: formData.text,
    };
    console.log(sendData);
  };
  return (
    <div className="ticket-id">
      <div
        className="ticket-id-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="ticket-id-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="ticket-id-nav">
          <Header />
        </div>
        <div className="ticket-id-main">
          <div className="ticket-id-contaner">
            <p>Ticket:  20220414001</p>
            <div className="ticket-id-div1">
              <div className="sub1-ticket-id-div1">
                <div className="subsub1-sub1-ticket-id-div1">
                  <div className="sub1-subsub1-sub1-ticket-id-div1">
                    <label>Subject</label>
                    <input
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handlData}
                      required
                    />
                  </div>
                  <div className="sub2-subsub1-sub1-ticket-id-div1">
                    <label>Text</label>
                    <textarea
                      name="text"
                      type="text"
                      value={formData.text}
                      onChange={handlData}
                      required
                    />
                  </div>
                </div>
                <div className="subsub2-sub1-ticket-id-div1">
                  <div className="left-subsub2-sub1-ticket-id-div1">
                    {DATA.map((item) => {
                      return (
                        <div className="sub1-left-subsub2-sub1-ticket-id-div1">
                          <span className="card-p">{item.subject}</span>
                          {/* <img src="./assets/redCross.svg" alt="none" /> */}
                        </div>
                      );
                    })}
                  </div>


                </div>


<div className="subsub3-sub1-ticket-id-div1">
<div className="sub1-subsub3-sub1-ticket-id-div1">
                    <label>Text</label>
                    <textarea
                      name="text"
                      type="text"
                      value={formData.text1}
                      onChange={handlData}
                      required
                    />
                  </div>
</div>












                <div className="subsub4-sub1-ticket-id-div1">
                  <div className="left-subsub4-sub1-ticket-id-div1">
                    {DATAS.map((item) => {
                      return (
                        <div className="sub1-left-subsub4-sub1-ticket-id-div1">
                          <span className="card-p">{item.subject}</span>
                          <img src="./assets/redCross.svg" alt="none" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="right-subsub4-sub1-ticket-id-div1">
                    <div className="sub1-right-subsub4-sub1-ticket-id-div1">
                    <img src="./assets/file.svg" alt="none" />
                    <input type="file"/>
                    </div>
                  </div>
                </div>

                <div
                  className="subsub5-sub1-ticket-id-div1"
                  onClick={() => handlSubmit()}
                >
                  <div className="sub2-subsub1-sub1-users-div1">
                    <img src="./assets/whiteSend.svg" alt="none" />
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default TicketId;
