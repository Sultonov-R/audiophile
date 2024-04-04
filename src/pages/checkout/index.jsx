import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import OrderModal from "../../components/modalThanks";
import "./index.css";

function Checkout() {
  const [isOrderModal, setIsOrderModal] = useState(false);

  function handleClick() {
    setIsOrderModal(true);
    // document.body.style.overflow = "hidden";
    document.body.style.backdropFilter="blur(10px)";

  }
  function handleCloseModal() {
    setIsOrderModal(false);
    document.body.style.overflow = "";
  }

  return (
    <div className="checkout">
      <Header />

      <div className="container">
        <div className="go_back">
          <p>Go Back</p>
        </div>

        <div className="checkout-class">
          <div className="checkout-section">
            <h1>Checkout</h1>

            <div className="input_check">
              <h3>Billing details</h3>
              <form className="formClass">
                <div className="label_input">
                  <label>Name</label>
                  <input type="text" placeholder="Alexei Ward" />
                </div>
                <div className="label_input">
                  <label>Email Address</label>
                  <input type="email" placeholder="alexei@mail.com" />
                </div>
                <div className="label_input">
                  <label>Phone Number</label>
                  <input type="text" placeholder="+1 202-555-0136" />
                </div>
              </form>
            </div>
            <div className="input_check">
              <h3>shipping info</h3>
              <form className="formClass">
                <div className="addressLabel">
                  <label>Address</label>
                  <input type="text" placeholder="1137 Williams Avenue" />
                </div>
                <div className="label_input">
                  <label>ZIP Code</label>
                  <input type="text" placeholder="10001 " />
                </div>
                <div className="label_input">
                  <label>City</label>
                  <input type="email" placeholder="New York" />
                </div>
                <div className="label_input">
                  <label>Country</label>
                  <input type="text" placeholder="United States" />
                </div>
              </form>
            </div>
            <div className="payment-section">
              <h3>payment details</h3>

              <div className="payment-method">
                <div>
                  <p>Payment Method</p>
                </div>
                <div className="radio-input">
                  <div className="radio-inp">
                    <input type="radio" placeholder="e-Money" />
                  </div>
                  <div className="radio-inp">
                    <input type="radio" placeholder="Cash on Delivery" />
                  </div>
                </div>
                <div className="label_input">
                  <label>e-Money Number</label>
                  <input type="text" placeholder="238521993" />
                </div>
                <div className="label_input">
                  <label>e-Money PIN</label>
                  <input type="text" placeholder="6891" />
                </div>
              </div>
            </div>
          </div>
          <div className="summary-section">
            <div className="summary-class">
              <h2>Summary</h2>

              <div className="item-sold">
                <div className="items-class">
                  <img width={64} src="./src/images/earphones.png" alt="pro" />
                  <div>
                    <p>XX99</p>
                    <span>$1750</span>
                  </div>
                </div>
                <span>x3</span>
              </div>
              <div className="price-total">
                <h3>TOTAL</h3>
                <span>$ 5396</span>
              </div>
              <div className="price-total">
                <h3>SHIPPING</h3>
                <span>$ 50</span>
              </div>
              <div className="price-total">
                <h3>VAT (INCLUDED)</h3>
                <span>$ 1,079</span>
              </div>
              <div className="price-total">
                <h3>GRAND TOTAL</h3>
                <span className="overall-price">$ 5,446</span>
              </div>
              <button onClick={handleClick} className="pay-btn">
                CONTINUE & PAY
              </button>
              {isOrderModal && <OrderModal handleClose={handleCloseModal} />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
