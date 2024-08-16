import React from "react";
import './buyerSeller.scss';
import Homebox from "../home/homebox";
import Cross from '../../assets/icons/cross.js';

export default function BuyerSeller() {

  return (
    <>
      <div className="buysell-grid">
        <Homebox />
        <div className="buysell-box">
          <div className="status-box-title">
            <h2>Buy / Sell</h2>
            <Cross />
          </div>
          <div className="buysell-box-main">
            <div className="buysell-box-main-head">
              <div className="buysell-box-head">
                <h2>BCPL WH03N</h2>
                <div className="buysell-button">
                  <button>B</button>
                  <button>S</button>
                </div>
              </div>
              <div className="buysell-grade">
                <div className="buysell-grade-text">
                  <div className="buysell-grade-text-main">
                    <h4>Grade :</h4>
                    <span>WH034N</span>
                  </div>
                  <div className="buysell-grade-text-main">
                    <h4>Sector :</h4>
                    <span>RAFFIA</span>
                  </div>
                </div>
                <div className="buysell-grade-text-main">
                  <h4>TDS Certificate :</h4>
                  <a href="/">View Certificate</a>
                </div>
              </div>
            </div>
            <div className="buysell-table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Bid Price <br /> (Incl. GST)</th>
                    <th>Qty. <br /> (In tons)</th>
                    <th>location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>₹ 520,05</td>
                    <td>150</td>
                    <td>Gujarat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>₹ 520,25</td>
                    <td>210</td>
                    <td>Rajasthan</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>₹ 520,63</td>
                    <td>111</td>
                    <td>Uttar Pradesh</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>₹ 520,30</td>
                    <td>135</td>
                    <td>Maharashtra</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>₹ 520,75</td>
                    <td>153</td>
                    <td>Telangana</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>₹ 520,44</td>
                    <td>125</td>
                    <td>Delhi</td>
                  </tr>
                  <tr className="last-empty-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <table className="sell-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Offer Price <br /> (Incl. GST)</th>
                    <th>Qty. <br /> (In tons)</th>
                    <th>location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>₹ 535.03</td>
                    <td>156</td>
                    <td>Telangana</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>₹ 535.52</td>
                    <td>211</td>
                    <td>Delhi</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>₹ 535.23</td>
                    <td>186</td>
                    <td>Gujarat</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>₹ 535.36</td>
                    <td>174</td>
                    <td>Rajasthan</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>₹ 535.41</td>
                    <td>114</td>
                    <td>Uttar Pradesh</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>₹ 535.73</td>
                    <td>141</td>
                    <td>Maharashtra</td>
                  </tr>
                  <tr className="last-empty-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
