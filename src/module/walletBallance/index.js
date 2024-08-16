import React, { useState } from 'react';
import './walletBallance.scss';
import Add from "../../assets/icons/add";
import Transaction from "../../assets/icons/transaction";
import Wallet from "../../assets/icons/wallet";
import AddWallet from "../../components/modals/addWallet";
import { NavLink } from 'react-router-dom';

export default function WalletBallance() {
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
            <div className="wallet-box">
                <div className="dashboard">
                    <div className="wallet-section-title">
                        <div className="wallet-balance">
                            <Wallet />
                            ₹2501,01
                        </div>
                        <h4>Wallet Balance</h4>
                    </div>
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
            {isModalOpen && (modalType === "add" ? <AddWallet closeModal={closeModal} /> : null)}
        </>
    )
}
