import React, { useState, useEffect } from 'react';
import './selectDrop.scss';
import CartUpIco from '../../../assets/icons/cartUpIco';

export default function SelectProduct() {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsOpen(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="select-drop">
            <div className="select-box" onClick={toggleDropdown}>
                <span>Select a Product</span>
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
                        <label>PP</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>LLDPE</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>HDPE</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>LDPE</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>LD</label>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    );
}
