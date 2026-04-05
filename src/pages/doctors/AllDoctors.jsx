import React, { useEffect } from "react";
import "./AllDoctor.css";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllDoctor } from "../../redux/actions/doctorAction";
import { reset } from "../../redux/slice/authSlice";

const AllDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllDoctor());
    dispatch(reset());
  }, [dispatch]);

  const { doctors } = useSelector((state) => state.doctor);
  return (
    <Layout>
      <div className="d-flex p-3 justify-content-between bg-light ">
        <h1>All Doctors List</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-doctor")}
        >
          +ADD DOCTOR
        </button>
      </div>

      <div className="table-container ">
        <table className="table table-bordered table-hover text-center align-middle mb-5 bg-light rounded shadow">
          <thead className="table-dark sticky-top">
            <tr>
              <th>S.No.</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>SPECIALITY</th>
              <th>FEES</th>
              <th>AVAILABLE</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((d, i) => (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={`data:image/jpeg;base64,${d?.image}`}
                    alt="docimage"
                    className="bg-info"
                    height={50}
                    width={50}
                  />
                </td>
                <td>{d?.name}</td>
                <td>{d?.speciality}</td>
                <td>{d?.fee}</td>
                <td>{d?.available ? "Available" : "Not Available"}</td>
                <td>
                  <Link to={`/doctor-details/${d?._id}`}>MORE DETAILS</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AllDoctors;
