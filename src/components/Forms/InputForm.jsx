import React from "react";

const InputForm = ({ lable, inputType, value, setValue, disabled }) => {
  return (
    <div className="mb-3">
      <label htmlFor="" className="form-label">
        {lable}
      </label>
      <input
        type={inputType || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
        disabled={disabled}
      />
    </div>
  );
};

export default InputForm;
