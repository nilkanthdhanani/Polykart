import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./header.scss";

import Searchicon from "../../assets/icons/searchicon.svg";
import Notification from "../../assets/icons/Notification.svg";
import themeIco from "../../assets/icons/themeIco.svg";
import menuIcon from "../../assets/icons/menuIcon.svg";
import headerLogo from "../../assets/image/headerLogo.png";

function Header({ toggleSidebar }) {
  const location = useLocation();

  return (
    <header>
      <div className="search-input-main">
        <input placeholder="Search eg; (BCPL, HMEL, HPL etc)" />
        <div className="searchicon-main">
          <img src={Searchicon} alt="Searchicon" />
        </div>
      </div>
      <div className="header-menubar">
        <img src={menuIcon} alt="menuIcon" className="header-menu" onClick={toggleSidebar} />
        <NavLink to={"/"}>
          <img src={headerLogo} alt="headerLogo" />
        </NavLink>
      </div>
      <div className="user-details-header">
        {(location.pathname === "/buyerseller" || location.pathname === "/transaction") && (
          <div className="theme-div-main">
            <div className="theme-icon-main">
              <img src={themeIco} alt="themeIco" />
            </div>
          </div>
        )}
        <NavLink to={"/notification"}>
          <div className="notification-div-main">
            <div className="notification-icon-main">
              <img src={Notification} alt="Notification" />
              <div className="notification-text-main"></div>
            </div>
          </div>
        </NavLink>
        <div className="username-logo-main">
          <NavLink to={"/signin"}>
            <div className="username-logo">
              <span>RF</span>
            </div>
          </NavLink>
          <p>Robert Fox</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
