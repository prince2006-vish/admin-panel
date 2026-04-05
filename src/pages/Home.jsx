import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/actions/authActions";
import { getStats } from "../redux/actions/userActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
    dispatch(getStats());
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);
  const { stats } = useSelector((state) => state.user);

  return (
    <>
      <Layout>
        <div className="d-flex flex-column my-3 border bg-light rounded-3 text-center">
          <h1 className="pt-3">DASHBOARD</h1>
          <p>Doctor Appointment App</p>
          <p className="text-success">
            Welcome :- {user?.name} || Email: {user?.email}
            {""}
          </p>
        </div>
        <div className="d-flex flex-wrap flex-row justify-content-center align-items-center my-3 ">
          <div className="card m-3 bg-success text-white w-40">
            <div className="card-body d-flex flex-column align-items-center p-4">
              <h1>{stats?.totalUsers}</h1>
              <h2>Total Users</h2>
            </div>
          </div>
          <div className="card m-3 bg-warning text-white w-40">
            <div className="card-body d-flex flex-column align-items-center p-4">
              <h1>{stats?.totalDoctors}</h1>
              <h2>Total Doctors</h2>
            </div>
          </div>
          <div className="card m-3 bg-info text-white w-50">
            <div className="card-body d-flex flex-column align-items-center p-4">
              <h1>{stats?.totalErning}</h1>
              <h2>Total Earnings</h2>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
