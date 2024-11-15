import React from "react";
import './transaction.scss';
import sellArrow from "../../assets/icons/sellArrow.svg";
import buyArrow from "../../assets/icons/buyArrow.svg";
import backtoIcon from "../../assets/icons/backtoIcon.svg";
import Cross from '../../assets/icons/cross.js';
import { NavLink } from "react-router-dom";
import DashboardMain from "../../components/dashboardMain/index.js";

export default function Transaction() {
  return (
    <>
      <div className="transaction-grid">
        <DashboardMain />
        <div className="transaction-box">
          <div className="status-box-title">
            <h2>Transaction</h2>
            <Cross />
          </div>
          <div className="transaction-box-main">
            <div className="transaction-box-head">
              <h2>Transaction</h2>
              <NavLink to={"/dashboard"}>
                <div className="dashboard-box">
                  <img src={backtoIcon} alt="backtoIcon" /><span>Dashboard</span>
                </div>
              </NavLink>
            </div>
            <div className="transaction-table">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Price</th>
                      <th>Date, Time</th>
                      <th>Buy / Sell</th>
                      <th>Qty. (In tons)</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="sell-data"><img src={sellArrow} alt="sellArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="sell-data">Sell</td>
                      <td>150</td>
                      <td>WH034N</td>
                    </tr>
                    <tr>
                      <td className="buy-data"><img src={buyArrow} alt="buyArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="buy-data">Buy</td>
                      <td>150</td>
                      <td>R03RR</td>
                    </tr>
                    <tr>
                      <td className="sell-data"><img src={sellArrow} alt="sellArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="sell-data">Sell</td>
                      <td>150</td>
                      <td>R103</td>
                    </tr>
                    <tr>
                      <td className="buy-data"><img src={buyArrow} alt="buyArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="buy-data">Buy</td>
                      <td>150</td>
                      <td>1030RG</td>
                    </tr>
                    <tr>
                      <td className="sell-data"><img src={sellArrow} alt="sellArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="sell-data">Sell</td>
                      <td>150</td>
                      <td>HR003</td>
                    </tr>
                    <tr>
                      <td className="buy-data"><img src={buyArrow} alt="buyArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="buy-data">Buy</td>
                      <td>150</td>
                      <td>RH03</td>
                    </tr>
                    <tr>
                      <td className="sell-data"><img src={sellArrow} alt="sellArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="sell-data">Sell</td>
                      <td>150</td>
                      <td>H030SG</td>
                    </tr>
                    <tr>
                      <td className="buy-data"><img src={buyArrow} alt="buyArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="buy-data">Buy</td>
                      <td>150</td>
                      <td>SS35N</td>
                    </tr>
                    <tr>
                      <td className="sell-data"><img src={sellArrow} alt="sellArrow" /></td>
                      <td>₹50,036</td>
                      <td>25 April, 2024 <span>04:34:45 AM</span> </td>
                      <td className="sell-data">Sell</td>
                      <td>150</td>
                      <td>WH040N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
