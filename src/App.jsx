import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/user/Login";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Allusers from "./pages/user/Allusers";
import AllDoctors from "./pages/doctors/AllDoctors";
import DoctorDetails from "./pages/doctors/DoctorDetails";
import AllAppointments from "./pages/appointments/AllAppointments";
import AppointmentDetails from "./pages/appointments/AppointmentDetails";
import UserDetails from "./pages/user/UserDetails";
import AddDoctor from "./pages/doctors/AddDoctor";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-user" element={<Allusers />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/all-doctors" element={<AllDoctors />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/doctor-details/:id" element={<DoctorDetails />} />
        <Route path="/all-appointments" element={<AllAppointments />} />
        <Route
          path="/appointment-details/:id"
          element={<AppointmentDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
