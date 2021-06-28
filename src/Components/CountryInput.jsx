import { useState } from "react";
import { countryList } from "../utils";

export const CountryInput = ({ value, setValue }) => {
  const [showList, setShowList] = useState(false);
  const [country, setCountry] = useState("Country");

  const toggleShowList = () => {
    setShowList((showList) => !showList);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
    setValue(country);
    setShowList(false);
  };
  return (
    <div className="sign-form-input">
      <div className="position-relative">
        <div onClick={toggleShowList} className="sign-form-drop-box">
          <a id="signupCountry" className="sign-form-droplist">
            {country}
          </a>
        </div>
        <div
          id="sign-form-DropdownList"
          className={`${
            showList ? "sign-form-content show" : "sign-form-content"
          }`}
        >
          <ul className="sign-form-drop-scrollable">
            {countryList.map((country, key) => {
              return (
                <li onClick={() => handleCountryChange(country)} key={key}>
                  {country}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
