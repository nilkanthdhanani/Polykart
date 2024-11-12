import React, { useState } from 'react';
import './notification.scss';
import trash from "../../assets/icons/Trash.svg";
import Cross from '../../assets/icons/cross.js';

export default function Notification() {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index) => {
        setClickedIndex(clickedIndex === index ? null : index);
    };

    const notifications = [
        {
            initials: "RF",
            message: "Meeting at 07:30 AM.",
            detail: "You have an upcoming meeting with Alex regarding digital marketing.",
            time: "5 Hours Ago"
        },
        {
            initials: "LG",
            message: "You have a new message from Luke.",
            detail: "You have an upcoming meeting with Alex regarding digital marketing.",
            time: "10 Hours Ago"
        },
        {
            initials: "SQ",
            message: "Congratulations! Your profile is 100% complete",
            detail: "You have an upcoming meeting with Alex regarding digital marketing.",
            time: "13/06/2024"
        },
        {
            initials: "YU",
            message: "Error processing payment!",
            detail: "You have an upcoming meeting with Alex regarding digital marketing.",
            time: "23/05/2024"
        },
        {
            initials: "OP",
            message: "Add your education and experience",
            detail: "You have an upcoming meeting with Alex regarding digital marketing.",
            time: "20/03/2024"
        },
        {
            initials: "AM",
            message: "New Session booked by Anthony M.",
            detail: "You have an upcoming meeting with Alex regarding digital marketing.",
            time: "14/02/2024"
        }
    ];

    return (
        <div className="notification-box">
            <h2>Notification</h2>
            <div className="notification-box-title">
                <h2>Notification</h2>
                <Cross />
            </div>
            <div className="notification-inner-box">
                {notifications.map((notif, index) => (
                    <div
                        key={index}
                        className={`notification-box-main ${clickedIndex === index ? 'expanded' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <div className="notification-logo-main">
                            <div className="notification-logo">
                                <span>{notif.initials}</span>
                            </div>
                            <div className="notification-text">
                                <p>{notif.message}</p>
                                <span>{notif.detail}</span>
                                <span>{notif.time}</span>
                            </div>
                        </div>
                        <div className="notification-trash">
                            <h3>{notif.time}</h3>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
