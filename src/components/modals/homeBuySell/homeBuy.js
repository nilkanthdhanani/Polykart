import React from "react";
import "./homeBuySell.scss";
import cross from "../../../assets/icons/cross.svg";

const buyData = [
  { number: 1, grade: "WH034N", price: "₹ 550,05", qty: 156 },
  { number: 2, grade: "R03RR", price: "₹ 540,25", qty: 211 },
  { number: 3, grade: "R103", price: "₹ 542,63", qty: 186 },
  { number: 4, grade: "HR003", price: "₹ 533,75", qty: 174 },
  { number: 5, grade: "RH03", price: "₹ 485,44", qty: 114 },
  { number: 6, grade: "H030SG", price: "₹ 100,44", qty: 142 },
  { number: 7, grade: "SS35N", price: "₹ 305,44", qty: 115 },
  { number: 8, grade: "WH040N", price: "₹ 106,44", qty: 520 },
  { number: 9, grade: "P1045RG", price: "₹ 620,44", qty: 320 },
  { number: 10, grade: "HR005T", price: "₹ 530,44", qty: 121 },
  { number: 11, grade: "1030RGw", price: "₹ 530,30", qty: 236 },
]

export default function HomeBuy({ closeModal }) {
  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
      <div className="home-modal" onClick={closeModal}>
        <div className="home-modal-box-main">
          <div className="home-modal-box-content">
            <div className="home-modal-box" onClick={handleModalContentClick}>
              <div className="home-modal-box-title">
                <div>
                  <h2>Raffia</h2>
                  <span>Sep 05 16:11</span>
                </div>
                <img src={cross} alt="cross" onClick={closeModal} />
              </div>
              <div className="home-modal-table">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Grades</th>
                      <th><span>Price</span><span>Heighest Price</span></th>
                      <th>Qty.(In tons)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyData.map((data, index) => (
                      <tr key={index}>
                        <td><span className="qty-main">{data.number}</span></td>
                        <td><span className="grade-main">{data.grade}</span></td>
                        <td><span className="price-main">{data.price}</span></td>
                        <td><span className="qty-main">{data.qty}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
