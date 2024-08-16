import React from 'react';
import './notification.scss';
import trash from "../../assets/icons/Trash.svg";
import Cross from '../../assets/icons/cross.js';

export default function Notification() {
    return (
        <>
            <div className="notification-box">
                <h2>Notification</h2>
                <div className="notification-box-title">
                    <h2>Notification</h2>
                    <Cross />
                </div>
                <div className="notification-inner-box">
                    <div className="notification-box-main">
                        <div className="notification-logo-main">
                            <div className="notification-logo">
                                <span>RF</span>
                            </div>
                            <div className="notification-text">
                                <p>Meeting at 07:30 OM.</p>
                                <span>You have an upcoming meeting with Alex regarding digital marketing.</span>
                                <span>5 Hours Ago</span>
                            </div>
                        </div>
                        <div className="notification-trash">
                            <h3>5 Hours Ago</h3>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                    <div className="notification-box-main">
                        <div className="notification-logo-main">
                            <div className="notification-logo">
                                <span>LG</span>
                            </div>
                            <div className="notification-text">
                                <p>You have a new message from Luke.</p>
                                <span>You have an upcoming meeting with Alex regarding digital marketing.</span>
                                <span>10 Hours Ago</span>
                            </div>
                        </div>
                        <div className="notification-trash">
                            <h3>10 Hours Ago</h3>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                    <div className="notification-box-main">
                        <div className="notification-logo-main">
                            <div className="notification-logo">
                                <span>SQ</span>
                            </div>
                            <div className="notification-text">
                                <p>Congratulations! Your profile is 100% complete</p>
                                <span>You have an upcoming meeting with Alex regarding digital marketing.</span>
                                <span>13/06/2024</span>
                            </div>
                        </div>
                        <div className="notification-trash">
                            <h3>13/06/2024</h3>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                    <div className="notification-box-main">
                        <div className="notification-logo-main">
                            <div className="notification-logo">
                                <span>YU</span>
                            </div>
                            <div className="notification-text">
                                <p>Error processing payment!</p>
                                <span>You have an upcoming meeting with Alex regarding digital marketing.</span>
                                <span>23/05/2024</span>
                            </div>
                        </div>
                        <div className="notification-trash">
                            <h3>23/05/2024</h3>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                    <div className="notification-box-main">
                        <div className="notification-logo-main">
                            <div className="notification-logo">
                                <span>OP</span>
                            </div>
                            <div className="notification-text">
                                <p>Add your education and experience</p>
                                <span>You have an upcoming meeting with Alex regarding digital marketing.</span>
                                <span>20/03/2024</span>
                            </div>
                        </div>
                        <div className="notification-trash">
                            <h3>20/03/2024</h3>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                    <div className="notification-box-main">
                        <div className="notification-logo-main">
                            <div className="notification-logo">
                                <span>AM</span>
                            </div>
                            <div className="notification-text">
                                <p>New Session booked by Anthony M.</p>
                                <span>You have an upcoming meeting with Alex regarding digital marketing.</span>
                                <span>14/02/2024</span>
                            </div>
                        </div>
                        <div className="notification-trash">
                            <h3>14/02/2024</h3>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
