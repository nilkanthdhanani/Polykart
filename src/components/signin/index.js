import React from "react";
import "./signin.scss";
import {  NavLink } from "react-router-dom";

import polykartloginlogo from "../../assets/image/polykartloginlogo.png";
import polykartloginbannerimage from "../../assets/image/polykartloginbannerimage.png";
import Eyeicon from "../../assets/icons/eye.svg";

function Signin() {
  return (
    <section className="signin-section">
      <div className="Polykartbanner-signin">
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
          <p>Please login to continue to your account.</p>
          <form>
            <div className="form-input">
              <label>Email Address</label>
              <input type="text" placeholder="Enter your email address"></input>
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
            <div className="fogot-password-link">
              <NavLink to={"/Resetpassword"}>Forgot password?</NavLink>
            </div>

            <div className="sign-in-button-div-main">
              <NavLink to={"/"}>
                <button>Sign in</button>
              </NavLink>
              <span>
                Don’t have an account? <NavLink to={"/signup"}>Sign up</NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signin;
