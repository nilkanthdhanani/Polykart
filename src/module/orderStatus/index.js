import React from 'react';
import './orderStatus.scss';
import chevronLeft from '../../assets/icons/chevronLeft.svg';
import chevronRight from '../../assets/icons/chevronRight.svg';
import Cross from '../../assets/icons/cross.js';
import chevronDown from '../../assets/icons/chevronDown.svg';
import Nodatacomponent from '../../components/Nodatacomponent/index.js';

export default function OrderStatus() {
    return (
        <>
            <>
                <div className="status-box">
                    <h2>Order Status</h2>
                    <div className="status-box-title">
                        <h2>Order Status</h2>
                        <Cross />
                    </div>
                    <div className="status-inner-box">
                        <div className="status-inner-box-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Sector</th>
                                        <th>Status</th>
                                        <th>Buy / Sell</th>
                                        <th>Cancel Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>09/08/2024</td>
                                        <td>PP</td>
                                        <td>BCPL WH03N</td>
                                        <td>RAFFIA</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot transported'></div>Transported
                                            </div>
                                        </td>
                                        <td className='byy-text'>Buy</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>07/08/2024</td>
                                        <td>PP</td>
                                        <td>HEML R03RR</td>
                                        <td>THERMOFORMING</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot approved'></div>Approved
                                            </div>
                                        </td>
                                        <td className='sell-text'>Sell</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>06/08/2024</td>
                                        <td>PP</td>
                                        <td>HPL R103</td>
                                        <td>BOPP</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot order-placed'></div>Order Placed
                                            </div>
                                        </td>
                                        <td className='byy-text'>Buy</td>
                                        <td className='cancel-button'><button>Cancel</button></td>
                                    </tr>
                                    <tr>
                                        <td>05/08/2024</td>
                                        <td>PE</td>
                                        <td>IOCL 1030RG</td>
                                        <td>TQPP</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot rejected'></div>Rejected
                                            </div>
                                        </td>
                                        <td className='sell-text'>Sell</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>10/07/2024</td>
                                        <td>PP</td>
                                        <td>MPRL HR003</td>
                                        <td>INJECTION MOULDING</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot delivered'></div>Delivered
                                            </div>
                                        </td>
                                        <td className='sell-text'>Sell</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>08/07/2024</td>
                                        <td>PP</td>
                                        <td>BCPL WH03N</td>
                                        <td>FIBER & FILAMENT</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot approved'></div>Approved
                                            </div>
                                        </td>
                                        <td className='byy-text'>Buy</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>02/04/2024</td>
                                        <td>PE</td>
                                        <td>HPL R103</td>
                                        <td>EXTRUSION COATING</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot order-placed'></div>Order Placed
                                            </div>
                                        </td>
                                        <td className='byy-text'>Buy</td>
                                        <td className='cancel-button'><button>Cancel</button></td>
                                    </tr>
                                    <tr>
                                        <td>01/04/2024</td>
                                        <td>PE</td>
                                        <td>IOCL 1030RG</td>
                                        <td>BLOW MOULDING</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot rejected'></div>Rejected
                                            </div>
                                        </td>
                                        <td className='sell-text'>Sell</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>02/03/2024</td>
                                        <td>PE</td>
                                        <td>MPRL HR003</td>
                                        <td>EXTRUSION</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot order-placed'></div>Order Placed
                                            </div>
                                        </td>
                                        <td className='byy-text'>Buy</td>
                                        <td className='cancel-button'><button>Cancel</button></td>
                                    </tr>
                                    <tr>
                                        <td>05/02/2024</td>
                                        <td>PP</td>
                                        <td>HEML R03RR</td>
                                        <td>PPR PIPE</td>
                                        <td>
                                            <div className='status-dot-box'>
                                                <div className='status-dot approved'></div>Approved
                                            </div>
                                        </td>
                                        <td className='sell-text'>Sell</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="page-number">
                            <div className="chevron-left">
                                <img src={chevronLeft} alt="chevronLeft" />
                            </div>
                            <div className="page-number-list">1</div>
                            <div className="page-number-list">2</div>
                            <div className="page-number-list">3</div>
                            <div className="page-number-list respo-hide">4</div>
                            <div className="chevron-right">
                                <img src={chevronRight} alt="chevronRight" />
                            </div>
                            <div className="page-number-select">
                                <select>
                                    <option>10</option>
                                </select>
                                <img src={chevronDown} alt="chevronDown" />
                                <span>/Page</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Nodatacomponent />
        </>
    );
}
