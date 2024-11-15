import React from "react";
import "./selectMultiple.scss";
import cross from "../../../assets/icons/cross.svg";
import SelectSector from "../selectDrop/selectSector";
import SelectCompany from "../selectDrop/selectCompany";
import SelectGrade from "../selectDrop/selectGrade";
import SelectProduct from "../selectDrop/selectProduct";

export default function SelectMultiple({ closeModal }) {
  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <div className="select-modal" onClick={closeModal}>
        <div className="select-modal-box-main">
          <div className="select-modal-box-content">
            <div className="select-modal-box" onClick={handleModalContentClick}>
              <div className="select-modal-box-title">
                <img src={cross} alt="cross" onClick={closeModal} />
              </div>
              <div className="select-grid">
                <SelectProduct />
                <SelectSector />
                <SelectCompany />
                <SelectGrade />
              </div>
              <div className="select-box-footer">
                <div className="select-apply-button" onClick={closeModal}>
                  <button type="button">Apply</button>
                </div>
                <div className="select-reset-button">
                  <button type="button">Reset Filter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
