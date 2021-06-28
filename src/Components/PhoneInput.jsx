import { useState } from "react";
import { setConstantValue } from "typescript";
import { phoneCodes } from "../utils";

export const PhoneInput = ({ value, setValue }) => {
  const [showCodes, setShowCodes] = useState(false);
  const [code, setCode] = useState("+00");

  const toggleShowCodes = () => {
    setShowCodes((showCodes) => !showCodes);
  };

  const handleCodeChange = (code) => {
    setCode(code);
    setShowCodes(false);
  };
  const handleNumberChange = (e) => {
    setValue(`${code} ${e.target.value}`);
  };
  return (
    <div className="sign-form-input d-flex">
      <div className="position-relative signup-phn">
        <div onClick={toggleShowCodes} className="sign-form-drop-box2">
          <a
            id="selectphone"
            className="sign-form-droplist sign-form-droplist-phn"
          >
            {code}
          </a>
        </div>
        <div
          id="selectphone-form-DropdownList"
          className={`${
            showCodes
              ? "sign-form-content signup-poohe-content show"
              : "sign-form-content signup-poohe-content"
          }`}
        >
          <ul className="sign-form-drop-scrollable">
            {phoneCodes.map((code, key) => {
              return (
                <li onClick={() => handleCodeChange(code)} key={key}>
                  <div className="contact-inner">{code}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="signup-number">
        <input
          onChange={handleNumberChange}
          type="text"
          placeholder="Phone number"
        />
      </div>
    </div>
  );
};
