import React from "react";
import "./modal.scss";
import cross from "../../assets/icons/cross.svg";

export default function AddWallet({ closeModal }) {
  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-box-main">
        <div className="modal-box-content">
          <div className="modal-box" onClick={handleModalContentClick}>
            <div className="modal-box-title">
              <h2>Add Wallet</h2>
              <img src={cross} alt="cross" onClick={closeModal} />
            </div>
            <div className="modal-box-input">
              <div className="modal-box-input-amount">
                <label>Transaction Amount</label>
                <input type="number" placeholder="15200" />
                <div className="ruppe-div">₹</div>
              </div>
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
