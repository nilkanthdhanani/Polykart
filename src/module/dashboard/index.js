import React, { useState } from "react";
import "./dashboard.scss";
import Add from "../../assets/icons/add";
import Transaction from "../../assets/icons/transaction";
import Wallet from "../../assets/icons/wallet";
import AddWallet from "../../components/modals/addWallet";
import { NavLink } from "react-router-dom";
import Closeiconticket from "../../assets/icons/closeicon";
import DashboardMain from "../../components/dashboardMain";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("scroll-off");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("scroll-off");
  };

  return (
    <>
      <div className="kyc-tickets-main">
        <div className="kyc-ticket-approved">
          <div></div>
          <p>Your KYC Application has been provisionally approved.</p>
          <div className="close-icon">
            <Closeiconticket />
          </div>
        </div>
        <div className="kyc-ticket-pending">
          <div></div>
          <p>Your KYC Application has been provisionally pending.</p>
          <div className="close-icon">
            <Closeiconticket />
          </div>
        </div>
        <div className="kyc-ticket-rejected">
          <div></div>
          <p>Your KYC Application has been cancelled.</p>
          <div className="close-icon">
            <Closeiconticket />
          </div>
        </div>
      </div>
      <div className="dashboard-grid">
        <DashboardMain />

        <div className="wallet-box-dashboard">
          <div className="dashboard">
            <h2>Wallet</h2>
            <div className="dashboard-button">
              <button onClick={openModal}>
                <Add /> <span>Add Balance</span>
              </button>
              <NavLink to={"/transaction"}>
                <button>
                  <Transaction /> <span>Transaction</span>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="wallet-section">
            <div className="wallet-section-title">
              <div className="wallet-balance">
                <Wallet />
                Wallet Balance
              </div>
              <h4>₹201,01</h4>
            </div>
            <div className="wallet-section-boxes">
              <div className="wallet-section-list">
                <div className="wallet-balance">
                  <Wallet />
                  Total Buy
                </div>
                <h5>₹201,01</h5>
              </div>
              <div className="wallet-section-list yellow">
                <div className="wallet-balance">
                  <Wallet />
                  Total Sell
                </div>
                <h5>₹201,01</h5>
              </div>
              <div className="wallet-section-list green">
                <div className="wallet-balance">
                  <Wallet />
                  All time Trades
                </div>
                <h5>₹201,01</h5>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && <AddWallet closeModal={closeModal} />}
      </div>
    </>
  );
}
