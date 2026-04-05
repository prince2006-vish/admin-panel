import React from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slice/authSlice";

const Menus = () => {
  const navigate = useNavigate();
  const dispatch = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    localStorage.removeItem("appData");
    navigate("/");
  };
  return (
    <>
      <div className="d-flex flex-column d-none d-md-block" >
        <ul
          className="nav d-flex flex-column justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <h4 className="mb-5 text-center ">Admin Panel</h4>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/home"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/all-user"}>
              USERS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/all-doctors"}>
              DOCTORS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/all-appointments"}>
              APPOINTMENTS
            </NavLink>
          </li>
          <button className="btn btn-danger" onClick={handleLogout}>
            LOGOUT
          </button>
        </ul>
      </div>
    </>
  );
};

export default Menus;
