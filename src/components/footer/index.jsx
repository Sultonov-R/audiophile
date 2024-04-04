import React from "react";
import audiophile from "../../images/audiophile.png";
import path from "../../images/Path.png";
import path1 from "../../images/Path1.png";
import shape from "../../images/Shape.png";
import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_info">
          <div className="footer-top">
            <a href="/">
              <img src={audiophile} alt="music" />
            </a>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>

            <h4>Copyright 2021. All Rights Reserved</h4>
          </div>
          <div className="footer-bottom">
            <div className="footer-nav">
              <ul>
                <li>
                  <a href="/">HOME</a>
                  <a href="/headphones">HEADPHONES</a>
                  <a href="/speakers">SPEAKERS</a>
                  <a href="/earphones">EARPHONES</a>
                </li>
              </ul>
            </div>
            <div className="social_group">
              <a href="https://www.facebook.com/">
                <img src={path} alt="insta" />
              </a>
              <a href="https://twitter.com/">
                <img src={path1} alt="insta" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={shape} alt="insta" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
