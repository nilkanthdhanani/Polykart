import React from "react";
import "./otpverify.scss";


import polykartloginlogo from "../../assets/image/polykartloginlogo.png";
import polykartloginbannerimage from "../../assets/image/polykartloginbannerimage.png";
import { NavLink } from "react-router-dom";

function Otpverify() {
  return (
    <section className="Otpverify-section">
      <div className="Polykartbanner-Otpverify">
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
          <h1>OTP Verification</h1>
          <p>Enter OTP Code sent to ju******78@gmail.com.</p>
          <div className="otp-context-main">{Array(6).fill(<input type="number"></input>)}</div>
          <div className="didnt-recive-otp-text">
            <p>Don't recieve OTP code?</p>
            <NavLink to={"/"}>Resend Code</NavLink>
          </div>
          <div className="Continue-button">
            <NavLink to={"/setnewpassword"}>
              <button>Continue</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Otpverify;
