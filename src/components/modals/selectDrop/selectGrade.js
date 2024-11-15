import React, { useEffect, useState } from 'react';
import './selectDrop.scss';
import CartUpIco from '../../../assets/icons/cartUpIco';

export default function SelectGrade() {
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
                <span>Select a Grade</span>
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
                        <label>WH034N</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>R03RR</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>R103</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>1030RG</label>
                        <input type="checkbox" />
                    </div>
                    <div className="select-drop-list">
                        <label>HR003</label>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    );
}
