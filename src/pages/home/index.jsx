import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/buttons";
import { useNavigate, useParams } from "react-router-dom";
import Shopping from "../../components/shopping";
import BestAudioInfo from "../../components/bestAudiosInfo";
import "./index.css";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


 

  function handleButtonClick(event) {
    const className = event.target.className;

    if (className == "product-btn") {
      navigate("/products/3");
    }
    if (className == "product-btn_black") {
      navigate("/products/5");
    }
    if (className == "btn-zxs") {
      navigate("/products/4");
    }
    if (className == "btn-yx") {
      navigate("/products/0");
    }
  }

 


  return (
    <div className="wrapper">
      <div className="wrapper_main_page">
        <Header />
        <div className="container">
          <div className="hero_section">
            <div className="hero_section_wrapper">
              <h4>NEW PRODUCT</h4>
              <h1>XX99 MARK II HEADPHONES</h1>
              <p>
                Experience natural, lifelike audio and exceptional <br /> build
                quality made for the passionate music <br />
                enthusiast.
              </p>

              <Button onClick={handleButtonClick} className="product-btn" />
            </div>
          </div>
        </div>
      </div>

      <div className="main_page_shop">
        <div className="container">
          <div className="main_shopping_page">
            <Shopping
              title="HEADPHONES"
              image_src_a="./src/images/headphones.png"
            />
            <Shopping
              title="SPEAKERS"
              image_src_a="./src/images/speakerImg.png"
            />
            <Shopping
              title="EARPHONES"
              image_src_a="./src/images/earphones.png"
            />
          </div>
        </div>
      </div>
      {/* ZX9 SPEAKER Start */}

      <div className="speaker_info_section">
        <div className="container">
          <div className="speaker_zx">
            <div className="speaker-zs-image">
              <img src="./src/images/speakerImg.png" alt="imgd" />
            </div>
            <div className="speaker-zs-info">
              <h2>ZX9 SPEAKER</h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button
                onClick={handleButtonClick}
                className="product-btn_black"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ZX9 Speaker finish */}

      {/* ZX7 speaker start */}

      <div className="speaker_zxs">
        <div className="container">
          <div className="zxs-info">
            <div className="zxs-text-info">
              <h2>ZX7 SPEAKER</h2>
              <button onClick={handleButtonClick} className="btn-zxs">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ZX7 speaker finish */}

      {/* earphones section start */}

      <div className="earphone_section">
        <div className="container">
          <div className="earphone-info">
            <div>
              <img src="./src/images/bitmapA.png" alt="earphone" />
            </div>
            <div className="earphone-info_text">
              <h2>YX1 EARPHONES</h2>
              <button onClick={handleButtonClick} className="btn-yx">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* earphone section finished */}

      {/* best audio section start */}

      <div className="best_section">
        <div className="container">
          <BestAudioInfo />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
