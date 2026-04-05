import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/actions/userActions";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const { user, appointments } = useSelector((state) => state.user);
  return (
    <Layout>
      <div className="row d-flex align-items-center bg-light mt-3 p-3">
        <h3 className="text-center">User Details</h3>
        <div className="col-md-4">
          <img
            src={`data:image/jpeg;base64,${user?.image}`}
            alt="userimage"
            height={200}
            width={200}
            className="rounded-1 bg-info"
          />
        </div>
        <div className="col-md-8">
          <h5>NAME: &nbsp; &nbsp; &nbsp; <span style={{color:"green", fontSize:"18px"}}>{user?.name}</span></h5>
          <h5>EMAIL: &nbsp; &nbsp; &nbsp; <span style={{color:"green", fontSize:"18px"}}>{user?.email}</span></h5>
          <h5>PHONE: &nbsp; &nbsp;&nbsp;<span style={{color:"green", fontSize:"18px"}}>{user?.phone}</span></h5>
          <h5>ADDRESS:&nbsp;<span style={{color:"green", fontSize:"18px"}}>{user?.address || "NA"}</span></h5>
        </div>
      </div>
      <h2>All Appointments</h2>
      <table className="table mt-2">
        <thead>
          <tr>
            <th>Sn.</th>
            <th>Date</th>
            <th>Doctor Id</th>
            <th>fees</th>
            <th>Status</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((a, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{a?.slotDate}</td>
              <td>{a?.doctorId}</td>
              <td>{a?.amount}</td>
              <td>{a?.status}</td>
              <td>{a?.payment? "ONLINE":"CASH"}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default UserDetails;
