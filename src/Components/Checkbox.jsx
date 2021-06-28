import React from "react";

export const Checkbox = ({ text, privacy }) => {
  return (
    <div>
      {!privacy ? (
        <label className="signcheckbox-container">
          {text}
          <input type="checkbox" />
          <span className="signcontactcheckmark" />
        </label>
      ) : (
        <label className="signcheckbox-container">
          I agree to the <a href="#">Privacy &amp; Terms of service</a> and{" "}
          <a href="#">fee</a>
          <input type="checkbox" />
          <span className="signcontactcheckmark" />
        </label>
      )}
    </div>
  );
};
