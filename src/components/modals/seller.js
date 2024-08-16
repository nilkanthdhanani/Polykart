import React from "react";
import "./modal.scss";
import cross from "../../assets/icons/cross.svg";
import calendar from "../../assets/icons/calendar.svg";

export default function Seller({ closeModal }) {
  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
      <div className="modal" onClick={closeModal}>
        <div className="modal-box-main">
          <div className="modal-box" onClick={handleModalContentClick}>
            <div className="modal-box-content">
              <div className="modal-box-title">
                <h2>
                  BCPL WH03N<span>(PP, Raffia)</span>
                </h2>
                <img src={cross} alt="cross" onClick={closeModal} />
              </div>
              <div className="modal-box-input">
                <label>Quantity</label>
                <input type="number" placeholder="144" />
                <label>Price</label>
                <input type="text" placeholder="₹ | 535,41" />
                <label>Location</label>
                <input type="text" placeholder="G-1, Swarg Avenue, Panchmukhi Nr Jubliee Baug" />
                <div className="modal-box-input-date">
                  <div className="modal-box-input-date1">
                    <label>Today</label>
                    <input type="date" />
                    <img src={calendar} alt="calendar" />
                  </div>
                  <div className="modal-box-input-date1">
                    <label>Till</label>
                    <input type="date" />
                    <img src={calendar} alt="calendar" />
                  </div>
                </div>
                <button>Sell</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
