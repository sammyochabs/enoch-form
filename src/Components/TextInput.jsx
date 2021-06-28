import React, { useState } from "react";

const TextInput = ({ type, placeholder, setValue, value }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="sign-form-input">
      <input
        value={value}
        onChange={handleChange}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
      />

      {type === "password" ? (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={`${
            showPassword
              ? "field-icon toggle-password eye-slash"
              : "field-icon toggle-password"
          }`}
        >
          <img src="images/eye.png" alt="eye" className="img-fluid eye1" />
          <img src="images/eye2.png" alt="eye" className="img-fluid eye2" />
        </span>
      ) : (
        ""
      )}
      {placeholder === "Date of Birth" ? (
        <span>
          <img src="images/Calendar.png" alt="Calendar" className="img-fluid" />
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextInput;
