"use client";
import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { contact } from "../services/support.service";
import FooterNav from "../Components/FooterNav";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await contact(formData);
      console.log("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar selectedItem="Contact" />
      <div className="contact-page d-flex flex-column align-items-center">
        <div className="contact-main ">
          <div className="mb-5">
            <h1 className="text-danger">Contact Us</h1>
            <p className="">
              Reach out to us for any inquiries, feedback, or support. Our team
              is ready to assist you.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.494879913375!2d88.38571297475653!3d22.55153063374331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027691dd53e495%3A0x8e055d9074598493!2sOrion%20Garden%20View!5e1!3m2!1sen!2sin!4v1757831818549!5m2!1sen!2sin"
                className="iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
             
            </div>
            <div className="contact-form">
              <h2>Get In Touch</h2>
              <form
                className="d-flex flex-column align-items-center"
                onSubmit={handleSubmit}
              >
                <div className="contact-div row gx-0 gap-3">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact-div row gx-0 gap-3">
                  <div className="col">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact-div">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="register">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-details d-flex gap-4 justify-content-center">
          <div className="contact-detail">
            <img src="/assets/location.png"></img>
            <div>
              <h5>ADDRESS</h5>

              <p className="mb-0">E/402/0104E/402/0104</p>
              <p className="mb-0">SPANDAN NEWTOWN SP SHUKHOBRISTI AA-III</p>
              <p className="mb-0">NORTH 24 PARGANAS WEST BENGAL 700135</p>
            </div>
          </div>

          <div className="contact-detail">
            <img src="assets/mail.png"></img>
            <div>
              <h5>MAIL US</h5>
              <p style={{ wordBreak: "break-word" }}>info@aviroseinteriors.com</p>
              <p style={{ wordBreak: "break-word" }}>
                avirose.homedecor@gmail.com
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <img src="assets/call.png"></img>
            <div>
              <h5>CALL US</h5>
              <p>+91 9434386623</p>
              <p>+91 8100929525 </p>
            </div>
          </div>
        </div>
      </div>
      <FooterNav selectedItem="Menu" />
      <Footer />
    </>
  );
};

export default page;
