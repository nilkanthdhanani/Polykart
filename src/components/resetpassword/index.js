import React from "react";
import "./resetpassword.scss";
import { NavLink } from "react-router-dom";

import polykartloginlogo from "../../assets/image/polykartloginlogo.png";
import polykartloginbannerimage from "../../assets/image/polykartloginbannerimage.png";

function Resetpassword() {
  return (
    <section className="resetpassword-section">
      <div className="Polykartbanner-resetpassword">
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
          <h1>Reset Your Password</h1>
          <p>We’ll send you an email to reset your password.</p>
          <form>
            <div>
              <label>Email Address</label>
              <input type="text" placeholder="daphneSmith@gmail.com"></input>
            </div>
            <div className="continue-button-div-main">
              <NavLink to={"/otpverify"}>
                <button>Continue</button>
              </NavLink>
              <span>
                Back to <NavLink to={"/signup"}>Sing In</NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Resetpassword;
