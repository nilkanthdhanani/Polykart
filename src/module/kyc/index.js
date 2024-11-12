import React from 'react';
import './kyc.scss';
import fileAdd from '../../assets/icons/fileAdd.svg';
import Cross from '../../assets/icons/cross.js';

export default function Kyc() {
    // Function to trigger file input click
    const handleUploadClick = (id) => {
        document.getElementById(id).click();
    };

    return (
        <>
            <div className="kyc-box">
                <div className="kyc-box-title">
                    <h2>Fill The KYC Details</h2>
                    <Cross />
                </div>
                <div className="kyc-inner-box">
                    <div className="kyc-inner-box1">
                        <label>Company Name</label>
                        <input type="text" placeholder="Biffco Enterprises Ltd." />
                        <label>Company Email</label>
                        <input type="email" placeholder="alexander.foley@mail.com" />
                        <label>Company Address</label>
                        <textarea placeholder="G-1, Swarg Avenue, Panchmukhi Nr Jubliee Baug"></textarea>
                    </div>
                    <div className="kyc-inner-box2">
                        <label>Upload The GST Certificate</label>
                        <div
                            className="upload-box"
                            onClick={() => handleUploadClick('file-upload-gst')}
                        >
                            <input type="file" id="file-upload-gst" style={{ display: 'none' }} />
                            <label>
                                <img src={fileAdd} alt="fileAdd" />
                                <div>Click to upload</div>
                            </label>
                        </div>
                        <label>Upload The Pan card</label>
                        <div
                            className="upload-box"
                            onClick={() => handleUploadClick('file-upload-pan')}
                        >
                            <input type="file" id="file-upload-pan" style={{ display: 'none' }} />
                            <label>
                                <img src={fileAdd} alt="fileAdd" />
                                <div>Click to upload</div>
                            </label>
                        </div>
                    </div>
                    <div className="kyc-inner-box-button">
                        <button>Done</button>
                    </div>
                </div>
            </div>
        </>
    );
}
