import React from "react";
import "./sidebar.scss";
import Polykartlogo from "../../assets/image/polykartlogo.png";
import { NavLink } from "react-router-dom";
import Dashboardicon from "../../assets/icons/dashboardicon";
import Orderstatusicon from "../../assets/icons/orderstatusicon";
import Profileicon from "../../assets/icons/profileicon";
import WalletBallance from "../../assets/icons/walletballanceicon";

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
            <div className="sidebar-navigation-link">
              <NavLink to={"/"} onClick={toggleSidebar}>
                <div className="sidebar-navigationlinks-inner-alignment dashboard-svg">
                  <Dashboardicon />
                  <span>Dashboard</span>
                </div>
              </NavLink>
              <div className="sideborder-navlinks"></div>
            </div>
            <div className="sidebar-navigation-link wallet-svg">
              <NavLink to={"/walletBallance"} onClick={toggleSidebar}>
                <div className="sidebar-navigationlinks-inner-alignment">
                  <WalletBallance />
                  <span>Wallet Balance</span>
                </div>
              </NavLink>
              <div className="sideborder-navlinks"></div>
            </div>
            <div className="sidebar-navigation-link">
              <NavLink to={"/orderstatus"} onClick={toggleSidebar}>
                <div className="sidebar-navigationlinks-inner-alignment">
                  <Orderstatusicon />
                  <span>Order Status</span>
                </div>
              </NavLink>
              <div className="sideborder-navlinks"></div>
            </div>
            <div className="sidebar-navigation-link">
              <NavLink to={"/profile"} onClick={toggleSidebar}>
                <div className="sidebar-navigationlinks-inner-alignment">
                  <Profileicon />
                  <span>Profile</span>
                </div>
              </NavLink>
              <div className="sideborder-navlinks"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
