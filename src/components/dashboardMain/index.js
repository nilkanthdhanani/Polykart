import React, { useState, useEffect, useRef, useCallback } from "react";
import "./dashboardMain.scss";
import SelectProduct from "../../components/modals/selectDrop/selectProduct";
import setting from "../../assets/icons/setting.svg";
import trash from "../../assets/icons/Trash.svg";
import Searchicon from "../../assets/icons/searchicon.svg";
import OtherIco from "../../assets/icons/otherIco";
import OtherCatogary from "../../components/modals/otherCatogary";
import SelectMultiple from "../../components/modals/selectMultiple";
import { NavLink } from "react-router-dom";

export default function DashboardMain() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOtherCatogaryOpen, setIsOtherCatogaryOpen] = useState(false);
    const [isSelectMultipleOpen, setIsSelectMultipleOpen] = useState(false);
    const dropdownRef = useRef(null);

    const listItems = [
        { title: "BCPL WH03N", name: "(RAFFIA)" },
        { title: "HEML R03RR", name: "(BOPP)" },
        { title: "HPL R103", name: "(TQPP)" },
        { title: "IOCL 1030RG", name: "(THERMOFORMING)" },
        { title: "MPRL HR003", name: "INJECTION MOULDING" },
        { title: "RIL H030SG SS35H", name: "(BOPP)" },
        { title: "BCPL WH040N", name: "(TQPP)" },
        { title: "IOCL P1045RG", name: "INJECTION MOULDING" },
    ];

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

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    const openOtherCatogaryModal = () => {
        setIsOtherCatogaryOpen(true);
    };

    const closeOtherCatogaryModal = () => {
        setIsOtherCatogaryOpen(false);
    };

    const openSelectMultipleModal = () => {
        setIsSelectMultipleOpen(true);
    };

    const closeSelectMultipleModal = () => {
        setIsSelectMultipleOpen(false);
    };

    useEffect(() => {
        if (isSelectMultipleOpen || isOtherCatogaryOpen) {
            document.body.classList.add("scroll-off");
        } else {
            document.body.classList.remove("scroll-off");
        }
    }, [isSelectMultipleOpen, isOtherCatogaryOpen]);

    return (
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
                    <div className="box1-list-name">
                        <h3>{item.title}</h3>
                        <span>{item.name}</span>
                    </div>
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
            {isOtherCatogaryOpen && <OtherCatogary closeModal={closeOtherCatogaryModal} />}
            {isSelectMultipleOpen && <SelectMultiple closeModal={closeSelectMultipleModal} />}
        </div>
    );
}
