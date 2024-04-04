import React from "react";
import "./index.css";

function OrderModal({ handleClose }) {
  return (
    <div className="modalU">
      <div className="modalT">
        <div className="done">
          <img src="src/images/done.png" alt="done" />
        </div>
        <div className="modal_title">
          <h1>THANK YOU <br /> FOR YOUR ORDER</h1>
        </div>
        <div className="modal_info">
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div className="modal_items">
          <div className="modal_items_info">
            <div className="detailed-modal">
              <div className="detailed_info">
                <img src="./src/images/headphones.png" alt="pro" />
                <div className="modal-price">
                  <h4>XX99 MK II</h4>
                  <span>$ 2,999</span>
                </div>
                <span>x1</span>
              </div>
              <div className="other-items">
                <p>and 2 other item(s)</p>
              </div>
            </div>
            <div className="all-costs">
                <h4>GRAND TOTAL</h4>
                <span>$ 5,446</span>
            </div>
          </div>
        </div>
        <button className="btn-back">BACK TO HOME</button>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

export default OrderModal;
