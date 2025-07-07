"use client"

import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-inner d-flex  gap-4">
          <div className="footer-1 footer-item">
            <img
              src="/assets/aviroselogo.png"
              alt="logo"
              className="img-fluid "
              style={{height:"80px", borderRadius:"4px"}}
            />
            <p className="text-white mt-4">
            We’re passionate about creating effective and gentle hygiene products that enhance your
             daily routine. Our specialty lies in offering natural, safe solutions
              that cater to diverse skin types and health needs.
             We make personal care healthier and more enjoyable for everyone.
            </p>

            <div className="social-icons d-flex gap-2 mt-4">
              <img src="/assets/facebook.png" />
              <img src="/assets/twitter.png" />
              <img src="/assets/linkedin.png" />
              <img src="/assets/instagram.png" />
              <img src="/assets/youtube.png" />
            </div>
          </div>

          <div className="footer-2 footer-item d-flex flex-column align-items-center text-center">
            <h6>Explore Links</h6>
            <hr></hr>
            <div className="footer-links">
              <Link href="/cookie-policy"> <p>Cookie Policy</p> </Link>
              {/* <p>Disclaimer</p> */}
              <Link href="/term-conditions"><p>Terms & Condition</p></Link>
              <Link href="/privacy-policy"><p>Privacy Policy</p></Link>
              <Link href="/refund-returns"><p>Refund & Returns</p> </Link>
                <Link href="/shipping-policy"> <p>Shipping Policy</p> </Link>
              <Link href="/contact">  <p>Contact Us</p></Link>
            </div>
          </div>

          <div className="footer-3 footer-item">
            <h6>Contact us</h6>
            <hr></hr>
            <p>
              PARASHURAM MD
Plot No 46, Survey No 41/A/1 Bauxite Road
Vidyagiri, Azam Nagar
Belagavi, Karnataka, 590010
India
            </p>
            <p>hyzenith24@gmail.com </p>
            <p>+91 7619564291</p>
            <p>+8313145890</p>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between mt-4 pt-4 pb-5">
          <p className="mb-0 pb-2 text-light">
            © 2024. All Rights Reserved Hyzenith®(ShriRam Enterprises)
          </p>
          <div className="d-flex gap-3">
            <img src="/assets/paypal.png" className="company-img" />
            <img src="/assets/visa.png" className="company-img" />
            <img src="/assets/mastercard.png" className="company-img" />
            <img src="/assets/discover.png" className="company-img" />
            <img src="/assets/JCB.png" className="company-img" />
          </div>
        </div>
        {/* <div className="d-flex justify-content-center mt-1">
          <p className="text-light">
            Developed by{" "}
            <span className="geent-text">
              <a href="https://dousoft.in/" target="blank">
                dousoft It Solution Pvt Ltd
              </a>
            </span>{" "}
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Footer;