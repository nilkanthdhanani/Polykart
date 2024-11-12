import React from "react";
import "./sidebar.scss";
import Polykartlogo from "../../assets/image/polykartlogo.png";
import { NavLink } from "react-router-dom";
import Dashboardicon from "../../assets/icons/dashboardicon";
import Orderstatusicon from "../../assets/icons/orderstatusicon";
import Profileicon from "../../assets/icons/profileicon";
import WalletBallance from "../../assets/icons/walletballanceicon";
import HomeIco from "../../assets/icons/homeIco";

function Sidebar({ isOpen, toggleSidebar }) {
  const handleSidebarClick = (event) => {
    if (event.target.classList.contains('sidebar')) {
      toggleSidebar();
    }
  };

  return (
    <nav>
      <div className={`sidebar ${isOpen ? "open" : ""}`} onClick={handleSidebarClick}>
        <div className="sidebarmain">
          <div className="sidebar-top-logo">
            <NavLink to={"/"} onClick={toggleSidebar}>
              <img src={Polykartlogo} alt="Polykartlogo" />
            </NavLink>
          </div>
          <div className="sidenavigation-main-content">
            <NavLink to={"/"} onClick={toggleSidebar}>
              <div className="sidebar-navigation">
                <HomeIco />
                <span>Home</span>
              </div>
              <div className="sideborder-navlinks"></div>
            </NavLink>
            <NavLink to={"/dashboard"} onClick={toggleSidebar}>
              <div className="sidebar-navigation dashboard-svg">
                <Dashboardicon />
                <span>Dashboard</span>
              </div>
              <div className="sideborder-navlinks"></div>
            </NavLink>
            <NavLink className="wallet-svg" to={"/walletBallance"} onClick={toggleSidebar}>
              <div className="sidebar-navigation">
                <WalletBallance />
                <span>Wallet Balance</span>
              </div>
              <div className="sideborder-navlinks"></div>
            </NavLink>
            <NavLink to={"/orderstatus"} onClick={toggleSidebar}>
              <div className="sidebar-navigation">
                <Orderstatusicon />
                <span>Order Status</span>
              </div>
              <div className="sideborder-navlinks"></div>
            </NavLink>
            <NavLink to={"/profile"} onClick={toggleSidebar}>
              <div className="sidebar-navigation">
                <Profileicon />
                <span>Profile</span>
              </div>
              <div className="sideborder-navlinks"></div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
