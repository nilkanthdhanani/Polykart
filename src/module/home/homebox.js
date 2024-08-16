import React, { useState } from 'react';
import './home.scss';
import { NavLink } from "react-router-dom";
import setting from "../../assets/icons/setting.svg";
import trash from "../../assets/icons/Trash.svg";
import Buyer from "../../components/modals/buyer";
import Seller from "../../components/modals/seller";
import Searchicon from "../../assets/icons/searchicon.svg";

export default function Homebox() {
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
                            <button onClick={() => openModal("buyer")}>
                                B
                            </button>
                            <button onClick={() => openModal("seller")}>
                                S
                            </button>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (modalType === "buyer" ? <Buyer closeModal={closeModal} /> : modalType === "seller" ? <Seller closeModal={closeModal} /> : null)}
        </>
    )
}
