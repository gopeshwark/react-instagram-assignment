import React from "react";

const LoginInput = ({ label, type, value, onChange }) => {
  return (
    <div className="login__left1FormInput">
      <div className="form__input">
        <div className="login__left1FormLabel">
          <input
            value={value}
            onChange={onChange}
            className="login__left1FormLabelInput"
            type={type}
            placeholder=""
            required
          />
          <label className="login__left1FormLabelText">{label}</label>
        </div>
      </div>
    </div>
  );
};

export default LoginInput;
