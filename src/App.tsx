import React from "react";
import { Form } from "./Components/Form";

const App = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="sign-up-form">
              <div className="signup-head">
                <div className="dapp-header-logo">
                  <img
                    src="images/logo-big.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </div>
                <h2>Sign Up Now</h2>
              </div>
              <div className="account-cat">
                I am a
                <div className="dAppp-account-group">
                  <span className="mr-4">
                    <input
                      id="Personal-acount"
                      name="b-plan"
                      type="radio"
                      className="signuptablinks"
                      defaultChecked
                    />
                    <label htmlFor="Personal-acount">Personal</label>
                  </span>
                  <span>
                    <input
                      id="business-acount"
                      name="b-plan"
                      type="radio"
                      className="signuptablinks"
                    />
                    <label htmlFor="business-acount">Business</label>
                  </span>
                </div>
              </div>
              <div className="tab-content">
                <div
                  id="Personal"
                  className="tab-pane contacttabcontent active"
                >
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="sign-up-bg-image">
              <div className="twitwr-img">
                <a href="#">
                  <img
                    src="images/twitter.png"
                    alt="twitter"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div>
                <img
                  src="images/signup.png"
                  alt="signup"
                  className="img-fluid"
                />
              </div>
              <div className="top-corner">
                <img src="images/img1.png" alt="signup" className="img-fluid" />
              </div>
              <div className="bottom-corner">
                <img src="images/img2.png" alt="signup" className="img-fluid" />
              </div>
              <div className="linkedin-img">
                <a href="#">
                  <img
                    src="images/linkedin.png"
                    alt="linkedin"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
