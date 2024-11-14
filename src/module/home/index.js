import React, { useState, useEffect } from "react";
import "./home.scss";
import HomeBuy from "../../components/modals/homeBuySell/homeBuy";
import HomeSell from "../../components/modals/homeBuySell/homeSell";
import Searchicon from "../../assets/icons/searchicon.svg";

import Nodatacomponent from "../../components/Nodatacomponent";

const data1 = [
  {
    commodity: "Raffia",
    date: "Sep 05",
    time: "16:11",
    qty: 156,
    price: "₹ 550,05",
  },
  {
    commodity: "Mould Basell",
    date: "Sep 05",
    time: "16:11",
    qty: 211,
    price: "₹ 540,25",
  },
  {
    commodity: "Raffia Opal",
    date: "Sep 05",
    time: "16:11",
    qty: 186,
    price: "₹ 542,63",
  },
  {
    commodity: "Raffia Ril",
    date: "Sep 05",
    time: "16:11",
    qty: 174,
    price: "₹ 533,75",
  },
  {
    commodity: "PP THERMO",
    date: "Sep 05",
    time: "16:11",
    qty: 114,
    price: "₹ 485,44",
  },
  {
    commodity: "Thermo Ril",
    date: "Sep 05",
    time: "16:11",
    qty: 142,
    price: "₹ 100,44",
  },
  {
    commodity: "Thermo Mrpl",
    date: "Sep 05",
    time: "16:11",
    qty: 115,
    price: "₹ 305,44",
  },
  {
    commodity: "PP TQ",
    date: "Sep 05",
    time: "16:11",
    qty: 520,
    price: "₹ 106,44",
  },
  {
    commodity: "Tq Iocl",
    date: "Sep 05",
    time: "16:11",
    qty: 320,
    price: "₹ 620,44",
  },
  {
    commodity: "Tq Bcpl",
    date: "Sep 05",
    time: "16:11",
    qty: 121,
    price: "₹ 530,44",
  },
];

const data2 = [
  {
    price: "₹ 402,05",
    qty: 156,
    commodity: "Raffia",
    date: "Sep 05",
    time: "16:11",
  },
  {
    price: "₹ 340,25",
    qty: 211,
    commodity: "Mould Basell",
    date: "Sep 05",
    time: "16:11",
  },
  {
    price: "₹ 133,75",
    qty: 174,
    commodity: "Raffia Ril",
    date: "Sep 05",
    time: "16:11",
  },
  {
    price: "₹ 185,44",
    qty: 114,
    commodity: "PP THERMO",
    date: "Sep 05",
    time: "16:11",
  },
  {
    price: "₹ 100,14",
    qty: 142,
    commodity: "Thermo Ril",
    date: "Sep 05",
    time: "16:11",
  },
  {
    price: "₹ 205,44",
    qty: 115,
    commodity: "Thermo Mrpl",
    date: "Sep 05",
    time: "16:11",
  },
  {
    price: "₹ 102,44",
    qty: 520,
    commodity: "PP TQ",
    date: "Sep 05",
    time: "16:11",
  },
  {
    price: "₹ 320,44",
    qty: 320,
    commodity: "Tq Iocl",
    date: "Sep 05",
    time: "16:11",
  },
  {
    price: "₹ 230,44",
    qty: 121,
    commodity: "Tq Bcpl",
    date: "Sep 05",
    time: "16:11",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("scroll-off");
    } else {
      document.body.classList.remove("scroll-off");
    }

    return () => {
      document.body.classList.remove("scroll-off");
    };
  }, [isModalOpen]);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  return (
    <>
      <>
        <div className="home-page">
          <div className="search-input-main">
            <input placeholder="Search eg; (BCPL, HMEL, HPL etc)" />
            <div className="searchicon-main">
              <img src={Searchicon} alt="Searchicon" />
            </div>
          </div>
          <div className="home-grid">
            <div className="home-table1">
              <table>
                <thead>
                  <tr>
                    <th>Commodity</th>
                    <th>
                      Qty.<span>(In tons)</span>
                    </th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data1.map((item, index) => (
                    <tr key={index} onClick={() => openModal("buy")}>
                      <td>
                        <div className="commodity-name">
                          <h2>{item.commodity}</h2>
                          <span>{item.date}</span>
                          <span>{item.time}</span>
                        </div>
                      </td>
                      <td>
                        <span className="qty-main">{item.qty}</span>
                        <div className="qty-ammount-tooltip">Quantity: {item.qty}</div>
                      </td>

                      <td>
                        <span className="prz-main">{item.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="home-table2">
              <table>
                <thead>
                  <tr>
                    <th>Price</th>
                    <th>
                      Qty.<span>(In tons)</span>
                    </th>
                    <th>Commodity</th>
                  </tr>
                </thead>
                <tbody>
                  {data2.map((item, index) => (
                    <tr key={index} onClick={() => openModal("sell")}>
                      <td>
                        <span className="prz-main">{item.price}</span>
                      </td>
                      <td>
                        <span className="qty-main">{item.qty}</span>
                        <div className="qty-ammount-tooltip">Quantity: {item.qty}</div>
                      </td>
                      <td>
                        <div className="commodity-name">
                          <h2>{item.commodity}</h2>
                          <span>{item.date}</span>
                          <span>{item.time}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="home-table2 respo">
              <table>
                <thead>
                  <tr>
                    <th>Commodity</th>
                    <th>
                      Qty.<span>(In tons)</span>
                    </th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data2.map((item, index) => (
                    <tr key={index} onClick={() => openModal("sell")}>
                      <td>
                        <div className="commodity-name">
                          <h2>{item.commodity}</h2>
                          <span>{item.date}</span>
                          <span>{item.time}</span>
                        </div>
                      </td>
                      <td><
                        span className="qty-main">{item.qty}</span>
                        <div className="qty-ammount-tooltip">Quantity: {item.qty}</div>
                      </td>
                      <td>
                        <span className="prz-main">{item.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {isModalOpen && modalType === "buy" && (
              <HomeBuy closeModal={closeModal} />
            )}
            {isModalOpen && modalType === "sell" && (
              <HomeSell closeModal={closeModal} />
            )}
          </div>
        </div>
      </>
      <Nodatacomponent />
    </>
  );
}