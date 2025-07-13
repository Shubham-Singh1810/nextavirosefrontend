"use client";

import React from "react";
import Link from "next/link";

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
              style={{ height: "80px", borderRadius: "4px" }}
            />
            <p className="text-white mt-4">
              It is here that I found my adopted mother Meera Tamang, under
              whose loving care my twin boys grew up. My project AVIROSE is my
              tribute to her and all the people of the North-East, the people
              who are as beautiful and pure-hearted as nature’s bounty of this
              region.
            </p>

            <div className="social-icons d-flex gap-2 mt-4">
              <a href="https://www.instagram.com/avirose_in?igsh=MTdlamVtMmpucWVodg==" target="_blank" className="twitter">
                <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"/>
              </a>
              <a href="https://www.instagram.com/avirose_in?igsh=MTdlamVtMmpucWVodg=="  target="_blank" className="facebook">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"/>
              </a>
              <a href="https://www.instagram.com/avirose_in?igsh=MTdlamVtMmpucWVodg==" target="_blank" className="instagram">
                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"/>
              </a>
              <a href="https://www.instagram.com/avirose_in?igsh=MTdlamVtMmpucWVodg==" target="_blank" className="linkedin">
                <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png"/>
              </a>
            </div>
          </div>

          <div className="footer-2 footer-item d-flex flex-column align-items-center text-center">
            <h6>Explore Links</h6>
            <hr></hr>
            <div className="footer-links">
              <Link href="/cookie-policy">
                {" "}
                <p>Cookie Policy</p>{" "}
              </Link>
              {/* <p>Disclaimer</p> */}
              <Link href="/term-conditions">
                <p>Terms & Condition</p>
              </Link>
              <Link href="/privacy-policy">
                <p>Privacy Policy</p>
              </Link>
              <Link href="/refund-returns">
                <p>Refund & Returns</p>{" "}
              </Link>
              <Link href="/shipping-policy">
                {" "}
                <p>Shipping Policy</p>{" "}
              </Link>
              <Link href="/contact">
                {" "}
                <p>Contact Us</p>
              </Link>
            </div>
          </div>

          <div className="footer-3 footer-item">
            <h6>Contact us</h6>
            <hr></hr>
            <p>
              Office 1C/2 Fourth floor, Chowbaga Road ,Kolkata 700039 Residence
              : 5B/ 12 Ballygunge Circular Road ,
            </p>
            <p>contact@avirose.in</p>
            <p>+91 9434386623</p>
            <p>+91 8100929525</p>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between mt-4 pt-4 pb-5">
          <p className="mb-0 pb-2 text-light">
            © 2024. All Rights Reserved Avirose
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
                avirosedecor.com
              </a>
            </span>{" "}
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
