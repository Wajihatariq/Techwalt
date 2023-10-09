import React, { useState } from "react";
import "./NewTicket.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import CountryData from "../../CountryData.json";
import { Outlet, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const NewTicket = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subject: "FMC130 Output Issue",
    text: "This text is not editable as its the ticket raised by client.",
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
    navigate("/TicketId")
  };
  return (
    <div className="new-ticket">
      <div
        className="new-ticket-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="new-ticket-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="new-ticket-nav">
          <Header />
        </div>
        <div className="new-ticket-main">
          <div className="new-ticket-contaner">
            <p>New Ticket</p>
            <div className="new-ticket-div1">
              <div className="sub1-new-ticket-div1">
                <div className="subsub1-sub1-new-ticket-div1">
                  <div className="sub1-subsub1-sub1-new-ticket-div1">
                    <label>Subject</label>
                    <input
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handlData}
                      required
                    />
                  </div>
                  <div className="sub2-subsub1-sub1-new-ticket-div1">
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
                <div className="subsub2-sub1-new-ticket-div1">
                  <div className="left-subsub2-sub1-new-ticket-div1">
                    {DATA.map((item) => {
                      return (
                        <div className="sub1-left-subsub2-sub1-new-ticket-div1">
                          <span className="card-p">{item.subject}</span>
                          <img src="./assets/redCross.svg" alt="none" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="right-subsub2-sub1-new-ticket-div1">
                    <span>Each file should Not be more than 20MB</span>
                    <div className="sub1-right-subsub2-sub1-new-ticket-div1">
                    <img src="./assets/file.svg" alt="none" />
                    <input type="file"/>
                    </div>
                  </div>
                </div>

                <div
                  className="subsub5-sub1-new-ticket-div1"
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

export default NewTicket;
