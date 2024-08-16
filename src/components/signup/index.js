import React from "react";
import "./signup.scss";
import { NavLink } from "react-router-dom";

import polykartloginlogo from "../../assets/image/polykartloginlogo.png";
import polykartloginbannerimage from "../../assets/image/polykartloginbannerimage.png";
import Eyeicon from "../../assets/icons/eye.svg";

function Signup() {
  return (
    <section className="signup-section">
      <div className="Polykartbanner-signup">
        <div className="polykartloginlogo-image">
          <NavLink to={"/"}>
            <img src={polykartloginlogo} alt="polykartloginlogo" />
          </NavLink>
        </div>
        <div className="polykartloginbannerimage">
          <img src={polykartloginbannerimage} alt="polykartloginbannerimage" />
        </div>
      </div>
      <div className="Polykartlogindetails-main">
        <div>
          <h1>Welcome to Polykart 👋</h1>
          <p>Sign up to enjoy the feature of Revolutie</p>
          <form>
            <div className="form-input">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name"></input>
            </div>
            <div className="form-input">
              <label>Email Address</label>
              <div className="input-rl-main">
                <input type="number" placeholder="Enter your email address"></input>
              </div>
            </div>
            <div className="form-input last">
              <label>Password</label>
              <div className="input-rl-main">
                <input type="number" placeholder="**************"></input>
                <div className="Eyeicon">
                  <img src={Eyeicon} alt="Eyeicon" />
                </div>
              </div>
            </div>

            <div className="terms-and-condition-text-main">
              <input type="checkbox"></input>
              <span>
                I have read and agree to the website{" "}
                <NavLink to={"/"}>
                  Privacy Policy and <br /> Terms & Conditions.
                </NavLink>
              </span>
            </div>

            <div className="sign-in-button-div-main">
              <NavLink to={"/"}>
                <button>Sign up</button>
              </NavLink>
              <span>
                Don’t have an account? <NavLink to={"/signin"}>Sign in</NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
