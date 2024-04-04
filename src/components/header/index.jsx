import React, { useState } from "react";
import image1 from "../../images/audiophile.png";
import image2 from "../../images/cart.png";
import Modal from "../modal";
import "./index.css";
import { signOut, getAuth } from "firebase/auth";
import logout from '../../images/logout.png'

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const auth = getAuth();
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header>
      <div className="container">
        <div className="header_info">
          <div className="header_img">
            <a href="/">
              <img src={image1} alt="sss" />
            </a>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/headphones">HEADPHONES</a>
              </li>
              <li>
                <a href="/speakers">SPEAKERS</a>
              </li>
              <li>
                <a href="/earphones">EARPHONES</a>
              </li>
            </ul>
          </div>
          <div className="log-cart">
            <span onClick={openModal} className="cart-span">
              <img src={image2} alt="cart" />
            </span>
            <span onClick={() => {handleSignOut()}}>
              <img width={20}  src={logout} alt="logout" />
            </span>
            {isModalOpen && <Modal onClose={closeModal} />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
