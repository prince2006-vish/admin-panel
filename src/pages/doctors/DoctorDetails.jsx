import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDoctor,
  getDoctorDetails,
  updateDoctor,
  updateStatus,
} from "../../redux/actions/doctorAction";
import InputForm from "../../components/Forms/InputForm";
import InputSelect from "../../components/Forms/InputSelect";
import toast from "react-hot-toast";

const DoctorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDoctorDetails(id));
  }, [dispatch, id]);

  const { doctor, success, error } = useSelector((state) => state.doctor);
  const [edit, setEdit] = useState(true);

  const [name, setName] = useState(doctor?.name);
  const [email, setEmail] = useState(doctor?.email);
  const [image, setImage] = useState(doctor?.image);
  const [speciality, setSpeciality] = useState(doctor?.speciality);
  const [experience, setExperience] = useState(doctor?.experience);
  const [degree, setDegree] = useState(doctor?.degree);
  const [about, setAbout] = useState(doctor?.about);
  const [fee, setFee] = useState(doctor?.fee);
  const [address, setAddress] = useState(doctor?.address);
  const [gender, setGender] = useState(doctor?.gender);
  const [phone, setPhone] = useState(doctor?.phone);

  useEffect(() => {
    if (doctor) {
      setName(doctor?.name);
      setEmail(doctor?.email);
      setImage(doctor?.image);
      setSpeciality(doctor?.speciality);
      setExperience(doctor?.experience);
      setDegree(doctor?.degree);
      setAbout(doctor?.about);
      setAddress(doctor?.address);
      setFee(doctor?.fee);
      setGender(doctor?.gender);
      setPhone(doctor?.phone);
    }
  }, [doctor]);

  //update
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("speciality", speciality);
    formData.append("experience", experience);
    formData.append("degree", degree);
    formData.append("about", about);
    formData.append("fee", fee);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("phone", phone);
    formData.append("image", image);
    dispatch(updateDoctor({ id, formData }));
    if (success) {
      toast.success("Doctor Updated");
      navigate("/all-doctors");
    }
    if (error) {
      toast.error(error);
    }
  };

  //delete doctor
  const handleDelete = () => {
    const confirm = window.confirm("Are you sure want to delete this Doctor ?");
    if (confirm) {
      dispatch(deleteDoctor(id));
    }
    if (success) {
      toast.success("Doctor Deleted!");
      navigate("/all-doctors");
    }
    if (error) {
      toast.error(error);
    }
  };

  const handleUpdateStatus = ( id, availableStatus ) => {
    dispatch(updateStatus({ id, availableStatus }));
    if (success) {
      toast.success("Doctor Status Updeted!");
      navigate("/all-doctors");
    }
    if (error) {
      toast.error(error);
    }
  };

  return (
    <Layout>
      <div className="d-flex p-3 justify-content-between bg-light">
        <h1>Doctor Details</h1>
        <div className="ms-auto">
          <button
            className="btn btn-warning ms-3"
            onClick={() => setEdit(!edit)}
          >
            {edit ? "EDIT" : "CANCEL"}
          </button>
          <button
            className="btn btn-danger ms-3"
            onClick={() => handleDelete(doctor?._id)}
          >
            Detele
          </button>
        </div>
      </div>
      <div className="w-75">
        <img
          src={`data:image/jpeg;base64,${doctor?.image}`}
          alt="docimage"
          className="bg-info border rounded-3"
          height={150}
          width={150}
        />
        <InputForm
          lable={"Name"}
          value={name}
          setValue={setName}
          disabled={edit}
        />
        <InputForm
          lable={"Email"}
          value={email}
          setValue={setEmail}
          disabled={edit}
        />
        <InputForm
          lable={"Degree"}
          value={degree}
          setValue={setDegree}
          disabled={edit}
        />
        <InputSelect
          label={"Speciality"}
          value={speciality}
          setValue={setSpeciality}
          disabled={edit}
          options={["Select Spceciality", "Genral", "dental", "Mental", "eye"]}
        />
        <InputSelect
          label={"Gender"}
          value={gender}
          setValue={setGender}
          disabled={edit}
          options={["Select Gender", "Male", "Female"]}
        />
        <InputForm
          lable={"Experience"}
          value={experience}
          disabled={edit}
          setValue={setExperience}
        />
        <InputForm
          lable={"Fee"}
          value={fee}
          setValue={setFee}
          disabled={edit}
        />
        <InputForm
          lable={"About"}
          value={about}
          setValue={setAbout}
          disabled={edit}
        />
        <InputForm
          lable={"Phone"}
          value={phone}
          setValue={setPhone}
          disabled={edit}
        />
        <InputForm
          lable={"Address"}
          value={address}
          setValue={setAddress}
          disabled={edit}
        />
        <div className="mb-3">
          <label htmlFor="form-label">Select Image File :</label>
          <input
            type="file"
            accept="image/"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
          />
        </div>
        <div className="flex" style={{ marginBottom: "50px" }}>
          <button
            className="btn btn-primary"
            onClick={() => handleUpdate(doctor?._id)}
          >
            UPDATE DOCTOR
          </button>
          {doctor?.available ? (
            <button
              className="btn btn-danger"
              onClick={() =>
                handleUpdateStatus(doctor?._id, { availableStatus: "false" })
              }
            >
              MARK AS Un-Available
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() =>
                handleUpdateStatus(doctor?._id, { availableStatus: "true" })
              }
            >
              MARK AS Available
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DoctorDetails;
