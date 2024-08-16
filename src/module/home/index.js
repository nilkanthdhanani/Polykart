import React, { useState } from "react";
import "./home.scss";
import Add from "../../assets/icons/add";
import Transaction from "../../assets/icons/transaction";
import Wallet from "../../assets/icons/wallet";
import AddWallet from "../../components/modals/addWallet";
import setting from "../../assets/icons/setting.svg";
import trash from "../../assets/icons/Trash.svg";
import Searchicon from "../../assets/icons/searchicon.svg";
import { NavLink } from "react-router-dom";

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

  const listItems = [
    { title: "BCPL WH03N" },
    { title: "BCPL WH040N" },
    { title: "BCP" },
    { title: "MPRL HR003" },
    { title: "HEML R03RR" },
    { title: "HPL R103" },
    { title: "IOCL 1030RG" },
    { title: "MPRL HR003" },
    { title: "RIL H030SG SS35H" },
    { title: "BCPL WH040N" },
    { title: "IOCL P1045RG" },
  ];

  return (
    <>
      <div className="home-grid">
        <div className="home-box">
          <div className="search-input-main">
            <input placeholder="Search eg; (BCPL, HMEL, HPL etc)" />
            <div className="searchicon-main">
              <img src={Searchicon} alt="Searchicon" />
            </div>
          </div>
          <div className="box1-list">
            <div className="box1-list-link">
              <NavLink>PP</NavLink>
              <NavLink>LLDPE</NavLink>
              <NavLink>LD</NavLink>
              <NavLink>HDPE</NavLink>
            </div>
            <div className="box1-list-menu">
              <button>Others</button>
              <div className="box1-list-menu-line"></div>
              <img src={setting} alt="setting" />
            </div>
          </div>
          {listItems.map((item, index) => (
            <div className="box1-list-main" key={index}>
              <h3>{item.title}</h3>
              <div className="box1-list-main-bin">
                <NavLink to={"/buyerseller"}>
                  <button>B</button>
                </NavLink>
                <NavLink to={"/buyerseller"}>
                  <button>S</button>
                </NavLink>
                <img src={trash} alt="trash" />
              </div>
            </div>
          ))}
        </div>
        <div className="wallet-box-home">
          <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="dashboard-button">
              <button onClick={() => openModal("add")}>
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
        {isModalOpen && (modalType === "add" ? <AddWallet closeModal={closeModal} /> : null)}
      </div>
    </>
  );
}
