import React from "react";
import "./otherCatogary.scss";
import cross from "../../../assets/icons/cross.svg";
import SelectProduct from "../selectDrop/selectProduct";

export default function OtherCatogary({ closeModal }) {
  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <div className="other-modal" onClick={closeModal}>
        <div className="other-modal-box-main">
          <div className="other-modal-box-content">
            <div className="other-modal-box" onClick={handleModalContentClick}>
              <div className="other-modal-box-title">
                <img src={cross} alt="cross" onClick={closeModal} />
              </div>
              <SelectProduct />
              <div className="other-modal-drop">
                <button onClick={closeModal}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
