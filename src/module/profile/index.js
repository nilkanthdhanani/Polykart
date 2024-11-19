import React from 'react';
import './profile.scss';
import editIcon from '../../assets/icons/editIcon.svg';
import Cross from '../../assets/icons/cross.js';
import calendar from "../../assets/icons/calendar.svg";

export default function Profile() {
    return (
        <>
            <div className="profile-box">
                <h2>Profile</h2>
                <div className="profile-box-title">
                    <h2>Edit Your Profile</h2>
                    <Cross />
                </div>
                <div className="profile-first-box">
                    <div className="username-logo-main">
                        <div className="username-logo">
                            <span>RF</span>
                        </div>
                        <div className="username-text">
                            <p>Robert Fox</p>
                            <span>robert78@gmail.com</span>
                        </div>
                    </div>
                    <div className="edit-profile-box">
                        <img src={editIcon} alt="editIcon" /><span>Edit</span>
                    </div>
                </div>
                <div className="profile-inner-box">
                    <div className="edit-profile">
                        <h3>Edit Your Profile</h3>
                        <div className="edit-profile-box">
                            <img src={editIcon} alt="editIcon" /><span>Edit</span>
                        </div>
                    </div>
                    <div className="profile-input">
                        <div className="profile-input-box">
                            <label>Full Name</label>
                            <input type="text" placeholder='Robert Fox' />
                            <label>Phone Number</label>
                            <input type="number" placeholder='+1 (119) 297-9543' />
                            <label>Company Name</label>
                            <input type="text" placeholder='Biffco Enterprises Ltd.' />
                            <div className="modal-box-input-date1">
                                <label>Date of Birth</label>
                                <input type="date" />
                                <img src={calendar} alt="calendar" />
                            </div>
                        </div>
                        <div className="profile-input-box">
                            <div className="edit-box"></div>
                            <label>Email Address</label>
                            <input type="email" placeholder='robert78@gmail.com' />
                            {/* <label>Address</label>
                            <input type="text" placeholder='G-1, Swarg Avenue, Panchmukhi Nr Jubliee Baug' /> */}
                            <label>Billing Address</label>
                            <input type="text" placeholder='Akshya Nagar 1st Block 1st Cross, Rammurthy , Bangalore' />
                            <label>Pan card No.</label>
                            <input type="text" placeholder='KPL1552WC' />
                        </div>
                        <div className="profile-box-button">
                            <button>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
