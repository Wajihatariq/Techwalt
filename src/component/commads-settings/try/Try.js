import React  from 'react'
import "./Try.css";
const Try = ({text}) => {
  return (
    <div className="try-dropdown dropdown">
    <img
    src="./assets/blueQuestion.svg" 

      alt="none"
      className=" dropdown-toggle try-dropdown-img "
      href="#"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    />
    <div className="dropdown-menu try-dropdown-div">
        <p style={{color:"white"}}>{text}</p>
    </div>
  </div>
  )
}

export default Try