import React from "react";
import "./header.scss";

import Searchicon from "../../assets/icons/searchicon.svg";
import Notification from "../../assets/icons/Notification.svg";
import menuIcon from "../../assets/icons/menuIcon.svg";
import headerLogo from "../../assets/image/headerLogo.png";
import { NavLink } from "react-router-dom";

function Header({ toggleSidebar }) {
  return (
    <div>
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
          <div className="notification-div-main">
            <div className="notification-icon-main">
              <img src={Notification} alt="Notification" />
              <div className="notification-text-main"></div>
            </div>
          </div>
          <div className="username-logo-main">
            <div className="username-logo">
              <span>RF</span>
            </div>
            <p>Robert Fox</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
