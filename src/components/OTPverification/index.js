import React, { useState } from "react";
import "./otpverify.scss";

import polykartloginlogo from "../../assets/image/polykartloginlogo.png";
import polykartloginbannerimage from "../../assets/image/polykartloginbannerimage.png";
import { NavLink } from "react-router-dom";

function Otpverify() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (value, index) => {
    if (!isNaN(value) && value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

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
          <div className="otp-context-main">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={value}
                maxLength="1"
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <div className="didnt-recive-otp-text">
            <p>Don't receive OTP code?</p>
            <NavLink>Resend Code</NavLink>
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
