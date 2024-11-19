import React from "react";
import "./modal.scss";
import cross from "../../assets/icons/cross.svg";

export default function Buyer({ closeModal }) {
  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
      <div className="modal" onClick={closeModal}>
        <div className="modal-box-main">
          <div className="modal-box-content">
            <div className="modal-box" onClick={handleModalContentClick}>
              <div className="modal-box-title">
                <h2>
                  BCPL WH03N<span>(PP, Raffia)</span>
                </h2>
                <img src={cross} alt="cross" onClick={closeModal} />
              </div>
              <div className="modal-box-input">
                <label>Quantity</label>
                <input type="number" placeholder="135" />
                <div className="modal-box-input-amount">
                  <label>Price Per Unit</label>
                  <input type="number" placeholder="521,30" />
                  <div className="ruppe-div">₹</div>
                </div>
                <label>Location</label>
                <input type="text" placeholder="G-1, Swarg Avenue, Panchmukhi Nr Jubliee Baug" />
                <button>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
