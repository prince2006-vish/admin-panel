import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux"; //hand make
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addDoctor } from "../../redux/actions/doctorAction";
import InputForm from "../../components/Forms/InputForm";
import InputSelect from "../../components/Forms/InputSelect";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [speciality, setSpeciality] = useState("");
  const [experience, setExperience] = useState("");
  const [degree, setDegree] = useState("");
  const [about, setAbout] = useState("");
  const [fee, setFee] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddDoctor = () => {
    if (
      !name ||
      !email ||
      !speciality ||
      !experience ||
      !degree ||
      !about ||
      !fee ||
      !address ||
      !gender ||
      !phone ||
      !image
    ) {
      return toast.error("Please provide all fields");
    }
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

    dispatch(addDoctor(formData));
    if (success) {
      toast.success("Doctor Created!");
      navigate("/all-doctors");
    }
    if (error) {
      toast.error(error);
    }
  };
  const { success, error } = useSelector((state) => state.doctor);

  return (
    <Layout>
      <div className="d-flex p-3 justify-content-between bg-light">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/all-doctors")}
        >
          Go Back
        </button>
      </div>
      <div className="w-75">
        <InputForm lable={"Name"} value={name} setValue={setName} />
        <InputForm lable={"Email"} value={email} setValue={setEmail} />
        <InputForm lable={"Degree"} value={degree} setValue={setDegree} />
        <InputSelect
          label={"Speciality"}
          value={speciality}
          setValue={setSpeciality}
          options={["Select Spceciality", "Genral", "dental", "Mental", "eye"]}
        />
        <InputSelect
          label={"Gender"}
          value={gender}
          setValue={setGender}
          options={["Select Gender", "Male", "Female"]}
        />
        <InputForm
          lable={"Experience"}
          value={experience}
          setValue={setExperience}
        />
        <InputForm lable={"Fee"} value={fee} setValue={setFee} />
        <InputForm lable={"About"} value={about} setValue={setAbout} />
        <InputForm lable={"Phone"} value={phone} setValue={setPhone} />
        <InputForm lable={"Address"} value={address} setValue={setAddress} />
        <div className="mb-3">
          <label htmlFor="form-label">Select Image File :</label>
          <input
            type="file"
            accept="image/"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddDoctor}>
          ADD NEW DOCTOR
        </button>
      </div>
    </Layout>
  );
};

export default AddDoctor;
