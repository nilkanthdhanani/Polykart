import React, { useState } from "react";
import "./selectDrop.scss";
import CartUpIco from "../../../assets/icons/cartUpIco";

const dropData = [
    { list: "RAFFIA" },
    { list: "THERMOFORMING" },
    { list: "BOPP" },
    { list: "TQPP" },
    { list: "FIBER & FILAMENT" },
];

export default function SelectSector() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="select-drop">
            <div className="select-box" onClick={toggleDropdown}>
                <span>Select a Sector</span>
                <div className={`icon ${isOpen ? "rotated" : ""}`}>
                    <CartUpIco />
                </div>
            </div>

            <div className={`select-drop-box ${isOpen ? "open" : ""}`}>
                <div className="select-drop-inner">
                    <div className="select-drop-input">
                        <input type="text" placeholder="Find a Product" />
                    </div>
                    {dropData.map((item, index) => (
                        <div className="select-drop-list" key={index}>
                            <label>{item.list}</label>
                            <input type="checkbox" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}