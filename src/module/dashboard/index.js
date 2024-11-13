import React, { useState, useEffect, useRef, useCallback } from "react";
import "./dashboard.scss";
import Add from "../../assets/icons/add";
import Transaction from "../../assets/icons/transaction";
import Wallet from "../../assets/icons/wallet";
import AddWallet from "../../components/modals/addWallet";
import setting from "../../assets/icons/setting.svg";
import trash from "../../assets/icons/Trash.svg";
import Searchicon from "../../assets/icons/searchicon.svg";
import { NavLink } from "react-router-dom";
import SelectMultiple from "../../components/modals/selectMultiple";
import SelectProduct from "../../components/modals/selectDrop/selectProduct";
import OtherIco from "../../assets/icons/otherIco";
import OtherCatogary from "../../components/modals/otherCatogary";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSelectMultipleOpen, setIsSelectMultipleOpen] = useState(false);
  const [isOtherCatogaryOpen, setIsOtherCatogaryOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleApplyClick = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }, []);

  const openSelectMultipleModal = () => {
    setIsSelectMultipleOpen(true);
  };

  const closeSelectMultipleModal = () => {
    setIsSelectMultipleOpen(false);
  };

  const openOtherCatogaryModal = () => {
    setIsOtherCatogaryOpen(true);
  };

  const closeOtherCatogaryModal = () => {
    setIsOtherCatogaryOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (isModalOpen || isSelectMultipleOpen || isOtherCatogaryOpen) {
      document.body.classList.add("scroll-off");
    } else {
      document.body.classList.remove("scroll-off");
    }
  }, [isModalOpen, isSelectMultipleOpen, isOtherCatogaryOpen]);

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
      <div className="dashboard-grid">
        <div className="dashboard-box">
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
              <div className="other-category" ref={dropdownRef}>
                <div className="other-category-button">
                  <button onClick={handleToggleDropdown}>Others</button>
                </div>
                <div className="other-category-modal" onClick={openOtherCatogaryModal}>
                  <OtherIco />
                </div>
                {isDropdownOpen && (
                  <div className="other-category-drop">
                    <SelectProduct />
                    <button onClick={handleApplyClick}>Apply</button>
                  </div>
                )}
              </div>
              <div className="box1-list-menu-line"></div>
              <div className="fillter-div" onClick={openSelectMultipleModal}>
                <img src={setting} alt="setting" />
              </div>
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
        <div className="wallet-box-dashboard">
          <div className="dashboard">
            <h2>Wallet</h2>
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

        {isOtherCatogaryOpen && <OtherCatogary closeModal={closeOtherCatogaryModal} />}
        {isModalOpen && modalType === "add" && <AddWallet closeModal={closeModal} />}
        {isSelectMultipleOpen && <SelectMultiple closeModal={closeSelectMultipleModal} />}
      </div>
    </>
  );
}
