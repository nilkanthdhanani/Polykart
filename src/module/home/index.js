import React, { useState } from "react";
import "./home.scss";
import Homebox from "./homebox";
import Add from "../../assets/icons/add";
import Transaction from "../../assets/icons/transaction";
import Wallet from "../../assets/icons/wallet";
import AddWallet from "../../components/modals/addWallet";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <>
      <div className="home-grid">
        <Homebox />
        <div className="wallet-box-home">
          <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="dashboard-button">
              <button onClick={() => openModal("add")}>
                <Add /> <span>Add Balance</span>
              </button>
              <button>
                <Transaction /> <span>Transaction</span>
              </button>
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
        {isModalOpen && (modalType === "add" ? <AddWallet closeModal={closeModal} /> : null)}
      </div>
    </>
  );
}
