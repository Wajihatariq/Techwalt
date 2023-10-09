import React from "react";
import "./AddRule.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
const AddRule = () => {
  return (
    <div className="add-rule">
      <div
        className="add-rule-left"
        style={{ width:"30rem",height:"93rem"}}
      >
        <SideBar />
      </div>
      <div
        className="add-rule-right"
        style={{ width:"161.9rem",height:"92.9rem"}}
      >
        <div className="add-rule-nav">
          <Header />
        </div>
        <div className="add-rule-main">
          <div className="add-rule-contaner">
            <div className="add-rule-div1">
              <p>
                Add Rule:&nbsp;&nbsp; <span>Engine ON</span>
              </p>
            </div>
            <div className="add-rule-div2">
              <div className="sub1-add-rule-div2">
                {/* ////////////////////////// */}
                <div className="subsub1-sub1-add-rule-div2">
                  <input placeholder="Rule Name" />
                  <select>
                    <option disabled selected>
                      I/O Pin
                    </option>
                    <option></option>
                    <option></option>
                  </select>
                  <div className="sub1-subsub1-sub1-add-rule-div2">
                    <p>Alert Notifications:</p>
                    <div className="subsub1-sub1-subsub1-sub1-add-rule-div2">
                      <div className="sub1-subsub1-sub1-subsub1-sub1-add-rule-div2">
                        <input type="checkbox" />
                        <span>Notification</span>
                      </div>
                      <div className="sub2-subsub1-sub1-subsub1-sub1-add-rule-div2">
                        <input type="checkbox" />
                        <span>Email</span>
                      </div>
                      <div className="sub3-subsub1-sub1-subsub1-sub1-add-rule-div2">
                        <input type="checkbox" />
                        <span>SMS</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //////////////////////// */}
                <div className="subsub2-sub1-add-rule-div2"> 
                  <select>
                    <option disabled selected>Device Brand</option>
                    <option></option>
                    <option></option>
                  </select>
                  <input placeholder="I/O Status"/>
                  <div className="sub1-subsub2-sub1-add-rule-div2">
                    <div className="subsub1-sub1-subsub2-sub1-add-rule-div2">
                    <div className="sub1-subsub1-sub1-subsub2-sub1-add-rule-div2">
                        <input type="radio" />
                        <p>HIGH</p>
                    </div>
                    <div  className="sub2-subsub1-sub1-subsub2-sub1-add-rule-div2">
                        <input type="radio"/>
                        <p>LOW</p>
                    </div>
                    <div className="sub3-subsub1-sub1-subsub2-sub1-add-rule-div2">
                        <input type="radio"/>
                        <p>Greater Than</p>
                    </div>
                    <div className="sub4-subsub1-sub1-subsub2-sub1-add-rule-div2">
                        <input type="radio"/>
                        <p>Less Than</p>
                    </div>
                    <div className="sub5-subsub1-sub1-subsub2-sub1-add-rule-div2">
                        <div className="sub1-sub5-subsub1-sub1-subsub2-sub1-add-rule-div2">
                        <span>12.5</span>
                        </div>
                        <div className="sub2-sub5-subsub1-sub1-subsub2-sub1-add-rule-div2">
                        <span>Value</span>
                        </div>
                    </div>
                  </div>
                  </div>
                </div>
                {/* ///////////////////////// */}
                <div className="subsub3-sub1-add-rule-div2">
                  <select>
                    <option disabled selected>Device Model</option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
                {/* ///////////////////////// */}
              </div>
            </div>
            <div className="add-rule-div3">
            <div className="sub1-add-rule-div3"
            style={{cursor:"pointer"}}
            >
                    <img src="./assets/Save.svg" alt="none"/>
                    <button>Save</button>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AddRule;
