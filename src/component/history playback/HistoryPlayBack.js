import React, { useState } from "react";
import "./HistoryPlayBack.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet ,useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faForward,
  faPause,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
const HistoryPlayBack = () => {
  const getData=useLocation();
  const [playState, setPlayState] = useState(false);
  const [cross, setCross] = useState(false);
const data={
  start:getData.state.startDate,
  end:getData.state.endDate,
}
console.log(data)
  const handlPlay = (state) => {
    if (state == true) {
      setPlayState(false);
    } else {
      setPlayState(true);
    }
  };
  const handlCross = (state) => {
    if (state == true) {
      setCross(false);
    } else {
      setCross(true);
    }
  };
  return (
    <div className="history-pb">
      <div
        className="history-pb-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="history-pb-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="history-pb-nav">
          <Header />
        </div>
        <div className="history-pb-main">
          <div className="history-pb-contaner">
            <div className="history-pb-div1">
              <div className="sub1-history-pb-div1">
                <p>History Playback</p>
                <p>DXB U12345</p>
                <p>02/12/2023 09:00AM - 02/12/2023 09:00AM</p>
              </div>
            </div>
            <div className="history-pb-div2">
              <img
                src="./assets/map.png"
                alt="none"
                className="history-pb-map"
              />
            </div>

            <div className="player-main">
              <div className="left-player-main">
                {/* Left */}
                <div className="sub1-player-main-div1">
                  <div className="subsub1-sub1-player-main-div1">
                    <FontAwesomeIcon icon={faBackward} />
                  </div>
                  <div
                    className="subsub2-sub1-player-main-div1"
                    onClick={() => handlPlay(playState)}
                  >
                    <FontAwesomeIcon
                      icon={playState === true ? faPlay : faPause}
                    />
                  </div>
                  <div className="subsub3-sub1-player-main-div1">
                    <FontAwesomeIcon icon={faForward} />
                  </div>
                </div>
                <div className="sub2-player-main-div1">
                  <p onClick={()=>handlCross(cross)}>{cross===false?"1x":"2x"}</p>
                </div>
              </div>

              <div className="right-player-main">
                <div className="sub1-right-player-main">
                  <div className="subsub1-sub1-right-player-main">
                    <span>0:10 / 2:10</span>
                  </div>
                  <div className="subsub2-sub1-right-player-main">
                    <input type="range" className="range" />
                  </div>
                </div>
                <div className="sub2-right-player-main">
                  <p>02/12/2023 09:00AM</p>

                  <span>
                    <FontAwesomeIcon icon={faMinus} />
                  </span>

                  <p>02/12/2023 09:00AM</p>
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

export default HistoryPlayBack;
