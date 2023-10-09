import React, { useState,useEffect } from "react";
import "./Users.css";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
const Users = () => {
  const UserData = [
    {
      id: "1",
      img: "./assets/person.png",
      name: "anderi",
      username: "aBc",
      email: "Anderi@gmail.abc",
      mobile: "+97 6730753792",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "2",
      img: "./assets/person.png",
      name: "ANderi1",
      username: "abc",
      email: "anderi@gmail.def",
      mobile: "+97 6730753792",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Deactivated",
    },
    {
      id: "3",
      img: "./assets/person.png",
      name: "AnDeri",
      username: "abc",
      email: "anderi@gmail.ghi",
      mobile: "+97 6730753792",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "4",
      img: "./assets/person.png",
      name: "aNderi1",
      username: "def",
      email: "anderi@gmail.abc",
      mobile: "+97 6730753791",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "5",
      img: "./assets/person.png",
      name: "Anderi",
      username: "def",
      email: "anderi@gmail.def",
      mobile: "+97 6730753791",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Deactivated",
    },
    {
      id: "6",
      img: "./assets/person.png",
      name: "Anderi",
      username: "def",
      email: "anderi@gmail.ghi",
      mobile: "+97 6730753791",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "1",
      img: "./assets/person.png",
      name: "Anderi",
      username: "abc",
      email: "anderi@gmail.abc",
      mobile: "+97 6730753792",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "2",
      img: "./assets/person.png",
      name: "Anderi1",
      username: "abc",
      email: "anderi@gmail.def",
      mobile: "+97 6730753792",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Deactivated",
    },
    {
      id: "3",
      img: "./assets/person.png",
      name: "Anderi",
      username: "abc",
      email: "anderi@gmail.ghi",
      mobile: "+97 6730753792",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "4",
      img: "./assets/person.png",
      name: "Anderi1",
      username: "def",
      email: "anderi@gmail.abc",
      mobile: "+97 6730753791",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "5",
      img: "./assets/person.png",
      name: "Anderi",
      username: "def",
      email: "anderi@gmail.def",
      mobile: "+97 6730753791",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Deactivated",
    },   {
      id: "1",
      img: "./assets/person.png",
      name: "Anderi",
      username: "abc",
      email: "anderi@gmail.abc",
      mobile: "+97 6730753792",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "2",
      img: "./assets/person.png",
      name: "Anderi1",
      username: "abc",
      email: "anderi@gmail.def",
      mobile: "+97 6730753792",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Deactivated",
    },
    {
      id: "3",
      img: "./assets/person.png",
      name: "Anderi",
      username: "abc",
      email: "anderi@gmail.ghi",
      mobile: "+97 6730753792",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "4",
      img: "./assets/person.png",
      name: "Anderi1",
      username: "def",
      email: "anderi@gmail.abc",
      mobile: "+97 6730753791",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "5",
      img: "./assets/person.png",
      name: "Anderi",
      username: "def",
      email: "anderi@gmail.def",
      mobile: "+97 6730753791",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Deactivated",
    },   {
      id: "1",
      img: "./assets/person.png",
      name: "Anderi",
      username: "abc",
      email: "anderi@gmail.abc",
      mobile: "+97 6730753792",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "2",
      img: "./assets/person.png",
      name: "Anderi1",
      username: "abc",
      email: "anderi@gmail.def",
      mobile: "+97 6730753792",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Deactivated",
    },
    {
      id: "3",
      img: "./assets/person.png",
      name: "Anderi",
      username: "abc",
      email: "anderi@gmail.ghi",
      mobile: "+97 6730753792",
      company: "deltas",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "4",
      img: "./assets/person.png",
      name: "Anderi1",
      username: "def",
      email: "anderi@gmail.abc",
      mobile: "+97 6730753791",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Active",
    },
    {
      id: "5",
      img: "./assets/person.png",
      name: "Anderi",
      username: "def",
      email: "anderi@gmail.def",
      mobile: "+97 6730753791",
      company: "delta",
      role: "admin",
      country: "pakistan",
      status: "Deactivated",
    },
    
  ];

  const [userStatus, setUserStatus] = useState("");
  const [stateColor, setStateColor] = useState("#7A7D8B");
  const [status, setSatus] = useState("");
  const [searchNameText, setSearchNameText] = useState("");
  
  const [searchUserNameText, setSearchUserNameText] = useState("");

  const [searchEmailText, setSearchEmailText] = useState("");
  const [searchStatusText, setSearchStatusText] = useState("");
  const [userRemove, setUserRemove] = useState("none");
  const [userRemoveId, setUserRemoveId] = useState("");

  const [data, setData] = useState(UserData);
const [dialogBoxUserState, setDialogBoxUserState] = useState("")
  const handleStateColor = (value) => {
    console.log(UserData);
    const val = value.target.value;
    console.log(value.target.value);
    if (val === "Active") {
      setStateColor("#63D16E");
      // setSatus(val);
      setSearchStatusText(val);

      // filterData(val);
    } else if (val === "Deactivated") {
      setStateColor("#FF3062");
      // setSatus(val);
      setSearchStatusText(val);

      // filterData(val);
    } else {
      setSearchStatusText(val)
      setStateColor("#7A7D8B");
      setData(UserData);
    }
  };
  const handleName = (value) => {
    const val = value.target.value;
    console.log(val)
    setSearchNameText(val);
    // filterData(val);
  };
  const handleUseName = (value) => {
    const val = value.target.value;
    console.log(val)

    setSearchUserNameText(val);
    // filterData(val);
  };
  const handleEmail = (value) => {
    const val = value.target.value;
    setSearchEmailText(val);
    // filterData(val);
  };
  useEffect(() => {
    
    setData(
      UserData.filter((item)=>{
        return (!searchNameText || item.name.toLocaleLowerCase().includes(searchNameText.toLocaleLowerCase()) ) && (!searchUserNameText || item.username.toLocaleLowerCase().includes(searchUserNameText.toLocaleLowerCase())) && (!searchEmailText || item.email.toLocaleLowerCase().includes(searchEmailText.toLocaleLowerCase())) && (searchStatusText=="Status"?item.status : (!searchStatusText || item.status===searchStatusText));
      })
    )
  }, [searchNameText,searchUserNameText,searchEmailText,searchStatusText])
 
  const navigate = useNavigate();

  const handlViewUser = (
    name,
    username,
    email,
    mobile,
    company,
    role,
    country,
    img
  ) => {
    navigate("/ViewUser", {
      state: {
        name: name,
        username: username,
        email: email,
        mobile: mobile,
        country: country,
        company: company,
        role: role,
        img: img,
      },
    });
  };
  const handlEditUser = (
    name,
    username,
    email,
    mobile,
    company,
    role,
    country,
    img
  ) => {
    navigate("/EditUser", {
      state: {
        name: name,
        username: username,
        email: email,
        mobile: mobile,
        country: country,
        company: company,
        role: role,
        img: img,
      },
    });
  };
  const handlRemoveUser = (id) => {
    console.log(id);
    setUserRemoveId(id);
    setUserRemove("block");
    setTimeout(() => {
      setUserRemoveId("");
      setUserRemove("none");
    }, 2000);
  };
  const handlUserStatus = (status) => {
    console.log(status);
    if (status == "Active") {
      setUserStatus("Deactivated");
    } else {
      setUserStatus("Activate");
    }
  };
  const handlDialogBoxUserState=(data)=>{
    console.log(data)
  }
  const handlClear=()=>{
    setSearchNameText("")
    setSearchUserNameText("")
    setSearchEmailText("")
    setSearchStatusText("")
    setStateColor("grey")
    setData(UserData);
  }
  return (
    <div className="users">
      <div className="users-left" style={{ width: "30rem", height: "93rem" }}>
        <SideBar />
      </div>
      <div className="users-right" style={{ width: "161.9rem", height: "92.9rem" }}>
        <div className="users-nav">
          <Header />
        </div>
        <div className="users-main">
          <div className="users-contaner">
            <div className="users-div1">
              <div className="sub1-users-div1">
                <p>
                  Total Users <span>35</span>
                </p>

                <div className="subsub1-sub1-users-div1">
                  <CSVLink
                    data={UserData}
                    filename="Users"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="sub1-subsub1-sub1-users-div1">
                      <img src="./assets/export.svg" alt="none" />
                      <button>Export</button>
                    </div>
                  </CSVLink>
                  <div className="sub2-subsub1-sub1-users-div1">
                    <img src="./assets/addbtn.svg" alt="none" />
                    <button onClick={() => navigate("/AddUser")}>
                      Add User
                    </button>
                  </div>
                </div>
              </div>
              <div className="sub2-users-div1">
                <div className="subsub1-sub2-users-div1">
                  <div className="sub1-subsub1-sub2-users-div1">
                    <div>
                      <img
                        src="./assets/searchwithperson.svg"
                        alt="none"
                        className="user-search-icon"
                      />
                    </div>
                    <span>Search User</span>
                  </div>
                  <div className="sub2-subsub1-sub2-users-div1">
                    <input
                      type="text"
                      placeholder="Name"
                      value={searchNameText}
                      onChange={(value) => handleName(value)}
                    />
                    <input
                      type="text"
                      placeholder="Username"
                      value={searchUserNameText}
                      onChange={(value) => handleUseName(value)}
                    />
                    <input
                      type="mail"
                      placeholder="Email"
                      value={searchEmailText}
                      onChange={(value) => handleEmail(value)}
                    />
                    <select>
                      <option disabled selected>
                        Company
                      </option>
                      <option></option>
                      <option></option>
                    </select>
                    <select
                      style={{ color: stateColor }}
                      onChange={(value) => handleStateColor(value)}
                      value={searchStatusText}
                    >
                      <option selected value="Status">
                        Status
                      </option>
                      <option style={{ color: "#63D16E" }} value="Active">
                        Active
                      </option>
                      <option style={{ color: "#FF3062" }} value="Deactivated">
                        Deactivated
                      </option>
                    </select>

                    <div className="sub1-sub2-subsub1-sub2-users-div1" 
                    style={{cursor:"pointer"}}
                    onClick={()=>handlClear()}>
                      <img src="./assets/clear.svg" alt="none" />
                      <button>Clear</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="users-div2">
              <div className="sub1-users-div2">
                <div className="subsub1-sub1-users-div2">
                  <p></p>
                  <p>Name</p>
                  <p>Username</p>
                  <p>Email</p>
                  <p>Mobile No.</p>
                  <p>Company</p>
                  <p>Role</p>
                  <p>Country</p>
                  <p>Status</p>
                  <p></p>
                </div>
              </div>
              <div className="sub2-users-div2">
                {data.map((item) => {
                  return (
                    <div id="import-user">
                      <p id="sub1-import-user">{item.id}</p>
                      <div className="subsub1-sub2-users-div2">
                        <img src={item.img} alt="none" className="person" />
                        <p>{item.name}</p>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                        <p>{item.mobile}</p>
                        <p>{item.company}</p>
                        <p>{item.role}</p>
                        <p>{item.country}</p>
                        <p
                          style={{
                            color:
                              item.status == "Active" ? "#63D16E" : "#FF3062",
                          }}
                        >
                          {item.status}
                        </p>
                      </div>

                      <div className="user-dropdown dropdown">
                        <img
                          src="./assets/Settings.svg"
                          alt="none"
                          className=" dropdown-toggle user-dropdown-img "
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => handlUserStatus(item.status)}
                        />
                        <div className="dropdown-menu user-dropdown-div">
                          <div className="sub1-user-dropdown-div">
                            <div
                              className="subsub1-sub1-user-dropdown-div"
                              onClick={() =>
                                handlViewUser(
                                  item.name,
                                  item.username,
                                  item.email,
                                  item.mobile,
                                  item.company,
                                  item.role,
                                  item.country,
                                  item.img
                                )
                              }
                            >
                              <img
                                src="./assets/view.svg"
                                alt="none"
                                style={{ width: "1.5rem", height: "2rem" }}
                              />
                              <p>View</p>
                            </div>
                            <div
                              className="subsub2-sub1-user-dropdown-div"
                              onClick={() =>
                                handlEditUser(
                                  item.name,
                                  item.username,
                                  item.email,
                                  item.mobile,
                                  item.company,
                                  item.role,
                                  item.country,
                                  item.img
                                )
                              }
                            >
                              <img
                                src="./assets/edit.svg"
                                alt="none"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                              />
                              <p>Edit</p>
                            </div>
                            <div
                              className="subsub3-sub1-user-dropdown-div"
                              onClick={() => handlRemoveUser(item.id)}
                            >
                              <img
                                src="./assets/remove.svg"
                                alt="none"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                              />
                              <p>Remove</p>
                            </div>
                            <div
                              className="subsub4-sub1-user-dropdown-div"
                              style={{
                                width:
                                  userStatus == "Active" ? "7.4rem" : "10.5rem",
                              }}
                              onClick={()=>handlDialogBoxUserState(userStatus)}
                            >
                              <img
                                src={
                                  userStatus == "Deactivated"
                                    ? "./assets/deactivate.svg"
                                    : "./assets/Activate.svg"
                                }
                                alt="none"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                              />
                              <p>{userStatus}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="user-remove" style={{ display: userRemove }}>
                <h1>Id {userRemoveId} User has been Removed</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
