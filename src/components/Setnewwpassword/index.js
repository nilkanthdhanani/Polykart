import React from "react";
import "./setnewpassword.scss";

import polykartloginlogo from "../../assets/image/polykartloginlogo.png";
import polykartloginbannerimage from "../../assets/image/polykartloginbannerimage.png";
import Eyeicon from "../../assets/icons/eye.svg";
import { NavLink } from "react-router-dom";

function Setnewpassword() {
  return (
    <section className="Setnewpassword-section">
      <div className="Polykartbanner-Setnewpassword">
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
          <h1>Set new password</h1>
          <form>
            <div className="form-input">
              <label>New Password</label>
              <div className="input-rl-main">
                <input type="number" placeholder="**************"></input>
                <div className="Eyeicon">
                  <img src={Eyeicon} alt="Eyeicon" />
                </div>
              </div>
            </div>
            <div className="form-input last">
              <label>Confirm Password</label>
              <div className="input-rl-main">
                <input type="number" placeholder="**************"></input>
                <div className="Eyeicon">
                  <img src={Eyeicon} alt="Eyeicon" />
                </div>
              </div>
            </div>

            <div className="sign-in-button-div-main">
              <NavLink to={"/"}>
                <button>Set new password</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Setnewpassword;
