import React, { useState } from 'react';
import './selectDrop.scss';
import CartUpIco from '../../../assets/icons/cartUpIco';

export default function SelectSector() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="select-drop">
            <div className="select-box" onClick={toggleDropdown}>
                <span>Select a Sector</span>
                <div className={`icon ${isOpen ? 'rotated' : ''}`}>
                    <CartUpIco />
                </div>
            </div>

            <div className={`select-drop-box ${isOpen ? 'open' : ''}`}>
                <div className="select-drop-inner">
                    <div className="select-drop-input">
                        <input type="text" placeholder='Find a Product' />
                    </div>
                    <div className="select-drop-list">
                        <label>RAFFIA</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>THERMOFORMING</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>BOPP</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>TQPP</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>FIBER & FILAMENT</label>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    );
}
