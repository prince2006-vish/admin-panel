import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
import "../doctors/AllDoctor.css";

const Allusers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.user);

  return (
    <Layout>
      <div>
        <h4 className="text-center my-3  p-3  bg-light">All User</h4>
      </div>
      
      <div className="table-container">
        <table className="table table-bordered table-hover text-center align-middle mb-5 bg-light rounded shadow">
          <thead className="table-dark sticky-top">
            <tr>
              <th>S.No.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, i) => (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone || "NA"}</td>
                  <td>
                    <Link to={`/user-details/${user?._id}`}>MORE DETAILS</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Allusers;
