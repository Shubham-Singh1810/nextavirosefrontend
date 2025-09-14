"use client";

import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import { getBanners } from "../services/banner.service";
import FooterNav from "../Components/FooterNav";
const page = () => {
  const infoArr = [
    {
      img: " https://cdn-icons-png.flaticon.com/128/11495/11495248.png",
      title: "ABOUT THE FOUNDER",
      subtitle: [
        "Myself, Ritu Gupta, a nature lover, am a Doctorate in Botany and during the excursions related to my research work, have closely observed the flora of the North- Eastern Himalayas. The designs created by me reflect a strong influence of the North-Eastern Himalayan landscape,as well as its rich variety of flora and fauna. Before I started my entrepreneurial journey in 2022, I had spent a significant part of my life in the North-Eastern region of India, moving from Jalpaiguri, Siliguri, Kalimpong, and Darjeeling. The pristine mountains and the smiling happy people of the region left an unforgettable imprint on my mind . It is here that I found my adopted mother Meera Tamang, under whose loving care my twin boys grew up. My project AVIROSE is my tribute to her and all the people of the North-East, the people who are as beautiful and pure-hearted as nature’s bounty of this region.",
      ],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/33/33308.png",
      title: "ABOUT THE BRAND",
      subtitle: [
        "The brand AVIROSE can best be described by the tagline, ‘Simply Sophisticated’. We do not use complicated motifs, strong colors or rough fabrics. Our products are in harmony with peaceful happy surroundings. We believe that true elegance lies in simplicity ,and quality should always triumph over quantity..Our philosophy emphasizes clean lines,uncluttered spaces and a neutral colour palette,allowing the inherent beauty of materials and design to shine through .Nature forms the core of all our products, designed with the aim of making our home and office spaces feel inviting and harmonious.",
      ],
    },
    {
      img: " https://cdn-icons-png.flaticon.com/128/2006/2006789.png",
      title: "MISSION STATEMENT",
      subtitle: [
        "At Avirose, our mission is to foster sustainable lifestyles through beautifully crafted home furnishings and décor. We design spaces that are clean, inviting, and visually pleasing, creating environments that promote tranquility and well-being. Our goal is to design homes that homeowners eagerly return to after a long day of work—an oasis where they can relax, rejuvenate, and prepare for the challenges ahead. Bengal, with its rich tapestry of diverse art forms, is a constant source of inspiration for us. Our team at Avirose works closely with skilled artisans, harnessing their expertise in weaving and embroidery to create exquisite home furnishings and décor. We proudly showcase these creations in international markets, celebrating the craftsmanship and traditions of the region. Beyond home interiors, we also design for office spaces and caravans, offering a wide range of products including wall art, room dividers, eco-friendly bags, caps, knitted woolens for infants and toddlers, silk-embroidered stoles and scarves, decorative boxes, and thoughtful return gifts. At Avirose, we are dedicated to making every space beautiful, functional, and sustainable.",
      ],
    },
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description:
        "Assurance of a robust quality management system—yielding consistent products, optimized processes, and continuous improvement.",
    },
    {
      title: "IndiaMART Trust Seal",
      description:
        "Verified supplier credentials that ensure secure and trustworthy transactions.",
    },
    {
      title: "GeM Registered",
      description:
        "Authorized to seamlessly serve government and public-sector clients via the e-Marketplace.",
    },
    {
      title: "MSME Registered",
      description:
        "Recognition as a micro/small enterprise—making us eligible for government benefits and support.",
    },
  ];

  const [slides, setSlides] = useState([]);
  const [showloader, setShowLoader] = useState(false);
  useEffect(() => {
    const fetchBanners = async () => {
      setShowLoader(true);
      try {
        const response = await getBanners();
        if (response?.data?.length > 0) {
          setSlides(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
      setShowLoader(false);
    };

    fetchBanners();
  }, []);
  return (
    <>
      <Navbar selectedItem="About" />
      <HeroSection category="About" />
      <div className="container aboutMain">
        <div className="row my-md-5 my-4 mx-0 mx-md-2">
          <div className="col-md-6 my-auto col-12 px-0 px-md-2 ">
            <h1><b>Discover the Story Behind Avirose!</b></h1>
            <p className="pe-md-3 pe-0">
             It is here, amidst the serene hills of Darjeeling and Kalimpong, that I found my true inspiration. My project AVIROSE is my tribute to this land and its people — as beautiful and pure-hearted as the natural bounty of the North-East.
            </p>
          </div>
          <div className="col-md-6  col-12 px-0 px-md-2">
            <img
              src={
                slides?.find((v) => v?.category === "About Hero Image")?.image
              }
              className="img-fluid w-100"
            />
          </div>
        </div>
        <div className="row">
          {infoArr?.map((v, i) => {
            return (
              <div className=" col-12 px-0 px-md-2 mb-4" key={i}>
                <div className="aboutMissionCard border p-md-4 p-2   shadow mb-2 h-100" style={{background:"#FFFFF0"}}>
                  <img src={v?.img} className="img-fluid" />
                  <h3>{v?.title}</h3>
                  {v.subtitle.map((text, i) => (
                    <p className="mb-1" key={i}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

       

        <div className="container py-5">
          <h2 className="text-center mb-4">
            {" "}
            Certifications That Define Our Standard
          </h2>
          <div className="row g-4">
            {certifications.map((cert, idx) => (
              <div className="col-md-6" key={idx}>
                <div
                  className="p-sm-5 p-2 shadow-sm border-0 h-100"
                  style={{ backgroundColor: "#fffafa", borderRadius: "7px" }}
                >
                  <div className="pb-md-5 pb-1">
                    <h5 className=" fw-bold">{cert.title}</h5>
                    <p className=" text-muted">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-5">
          <h2 className="text-center mb-5"> Quality, Innovation & Capacity</h2>

          <h5 className="text-danger">Advanced Manufacturing Facility</h5>
          <p>
            Located in Belagavi, our facility supports end-to-end
            production—from R&D and formulation to blending, filling, and strict
            quality testing.
          </p>

          <div className="row g-4">
            <h5 className="text-danger">Comprehensive Product Portfolio</h5>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Household Cleaners:</span>{" "}
                All‑purpose, kitchen, bathroom, and glass cleaners.
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Auto Care:</span> Car
                shampoo, tire care, interior cleaning products.
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Laundry Care:</span>{" "}
                Detergents, fabric softeners, stain removers.
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Air Fresheners:</span>{" "}
                Sprays, gels, and diffusers.
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Industrial Chemicals:</span>{" "}
                Degreasers, disinfectants, and specialty formulations.
              </p>
            </div>
          </div>
        </div>

        <div className="row my-5 ">
          <div className="col-md-6 col-12 p-2">
            <div
              className="p-3 h-100 py-5 "
              style={{ borderRadius: "8px", backgroundColor: "#f9e4e6" }}
            >
              <h5 className="fw-bold mb-3">
                Wholesale Excellence & Custom Solutions
              </h5>
              <p className="" style={{ color: "#484646" }}>
                Flexible Packaging: Options from 250 ml bottles to 200 kg drums
              </p>
              <p className="" style={{ color: "#484646" }}>
                Pan‑India Reach: Reliable logistics ensure on-time delivery
                across Bharat
              </p>
              <p className="" style={{ color: "#484646" }}>
                Custom Formulations: Designed to meet the needs of institutions,
                commercial operations, and industrial clients.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-12 p-2">
            <div
              className="p-3 h-100 py-5 "
              style={{ borderRadius: "8px", backgroundColor: "#f9e4e6" }}
            >
              <h5 className="fw-bold mb-3">
                Sustainability & Community Commitment
              </h5>
              <p className="" style={{ color: "#484646" }}>
                We prioritize biodegradable formulations and eco-friendly
                packaging.
              </p>
              <p className="" style={{ color: "#484646" }}>
                Rooted in Belagavi, we support local employment, vocational
                training, and collaboration with green vendors.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h2 className="text-center mb-5">Our Clients</h2>

          <h5 className="text-danger mb-4">We proudly cater to:</h5>

          <div className="row g-4">
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  Distributors & retail chains
                </span>
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  Hotels, restaurants, hostels
                </span>
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  Schools, hospitals, and office complexes
                </span>
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  AIndustrial cleaning and janitorial services
                </span>
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  Partners trust us for certified quality, regulatory
                  compliance, reliable supply, and custom-tailored solutions.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h2 className="text-center mb-4">Let’s Work Together</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-8  col-12 d-flex flex-column align-items-center">
              <p className="mb-4">
                Looking for certified, high-quality hand crafted products from a
                dependable supplier? Reach out to Avirose Team
                for wholesale inquiries, sample requests, custom formulations,
                or collaborative opportunities.
              </p>

              <button className="btn btn-danger" style={{ width: "200px" }}>
                <a
                  href="/contact"
                  className=" border-0 text-white"
                  style={{ textDecoration: "none" }}
                >
                  Contact us
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h4 className="text-center mb-4 text-secondary">
            <u>Our Gallery</u>
          </h4>
          <div className="row">
            {slides
              ?.filter((v, i) => {
                return v?.category == "Gallery";
              })
              .map((v, i) => {
                return (
                  <div className="col-md-4 col-12 mb-md-4 mb-2 px-0 px-md-2">
                    <img className="img-fluid" style={{height:"320px", width:"100%"}} src={v?.image} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <FooterNav selectedItem="Menu" />
      <Footer />
    </>
  );
};

export default page;
