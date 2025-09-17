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
        `I’m Ritu Gupta — a nature enthusiast, a Doctorate in Botany, and the proud founder of Avirose. The idea for Avirose took root in the serene hills of the North-Eastern Himalayas, where my research journeys into the forests of Jalpaiguri, Siliguri, Kalimpong, and Darjeeling opened my eyes to the vibrant natural world. These landscapes weren’t just picturesque—they were deeply inspiring. Their textures, colors, and quiet elegance continue to flow through every Avirose creation. `,
        "Avirose is also a tribute to the women who shaped me. Watching my grandmother and aunt create intricate hand embroidery instilled in me a love for art that endures to this day. Later, while living in the North-East, I met Meera Tamang, who became a mother figure to me. Her love and care while raising my twin sons taught me the power of simplicity, grace, and resilience. Avirose reflects both these legacies—an ode to tradition, nature, and the women who nurture beauty in everyday life.",
      ],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/33/33308.png",
      title: "ABOUT THE BRAND",
      subtitle: [
        "Avirose—meaning a strong woman leader—is rooted in the belief that every woman has the power to transform her home into a sanctuary of peace, happiness, and positivity. Our tagline, “Simply Sophisticated,” captures our design philosophy: elegance with subtlety, beauty that whispers rather than shouts.",
        "We work closely with skilled women artisans—many from rural backgrounds—who bring their expertise in embroidery, weaving, and handcrafting to every product. Each creation is designed to be simple, nature-inspired, and soulfully elegant. From home linens and cushion covers to eco-friendly bags, embroidered stoles, wall décor, and handcrafted treasures, every item is handmade with love and guided by thoughtful design.",
        "Avirose celebrates women’s creativity as an asset, not a liability, honoring their ability to create peaceful, positive environments for families and society. Each product is not just handmade—it’s heart-made.",
      ],
    },
    {
      img: " https://cdn-icons-png.flaticon.com/128/2006/2006789.png",
      title: "MISSION STATEMENT",
      subtitle: [
        "At Avirose, our mission is to foster sustainable lifestyles through beautifully crafted home furnishings and décor. We design spaces that are clean, inviting, and serene—an oasis where people can relax, rejuvenate, and reconnect with themselves after the day’s challenges.",
        "Inspired by the rich artistry of Bengal and the natural beauty of the Eastern Himalayas, we proudly collaborate with artisans to preserve traditional embroidery and weaving techniques while presenting them to global markets.",
        "We are committed to:",
        "Empowering women artisans through sustainable livelihoods",
        "Celebrating craftsmanship and traditions rooted in nature",
        "Creating elegant, eco-conscious designs that bring beauty and tranquility to everyday spaces",
        "Avirose is more than a brand—it is a movement of love, nature, and empowerment, where every creation tells a story of simplicity, elegance, and resilience.",
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
            <h1>
              <b>Discover the Story Behind Avirose!</b>
            </h1>
            <p className="pe-md-3 pe-0">
              Avirose is more than just a brand—it is a journey rooted in heritage, nature, and the power of women’s creativity. <br/>

The inspiration began in founder Ritu Gupta’s childhood, watching her grandmother and aunt create intricate hand-embroidered art. Their delicate work was admired as a symbol of elegance, leaving a lasting impression on her. Years later, during a visit to her ancestral home in Delhi, she felt a deep connection to their legacy and the desire to bring their artistry back to life. This moment sowed the seeds of Avirose. <br/>

Before launching the brand in 2022, Ritu spent several years living across the North-Eastern region of India—Jalpaiguri, Siliguri, Kalimpong, and Darjeeling. The untouched natural beauty and the warmth of the people shaped her worldview and continue to influence her designs. It was here that she met Meera Tamang, who became a mother figure and lovingly helped raise her twin boys. Avirose stands as a heartfelt tribute to her, and to the people of the North-East, whose purity, grace, and simplicity embody the spirit of the brand. <br/>

The name Avirose means a strong woman leader. True to its meaning, the brand empowers women to create peaceful, positive environments in their homes. It honors all women who use their skills to nurture families and transform ordinary spaces into sanctuaries of peace and happiness. <br/>

Avirose’s tagline—“Simply Sophisticated”—captures its design philosophy: elegant yet subtle furnishings that make a house feel like home. Working with a team of skilled women artisans, many from rural backgrounds, Avirose creates delicate embroidery and handcrafted products that reflect calm, comfort, and a deep connection to nature. <br/>

Each creation—whether home linens, décor, accessories, or thoughtful gifts—is inspired by Bengal’s rich art forms and the vibrant flora of the Eastern Himalayas. Every piece is not just handmade—it is heart-made. <br/>

At its core, Avirose is a story of heritage revived, nature reimagined, and women empowered.
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
                <div
                  className="aboutMissionCard border p-md-4 p-2   shadow mb-2 h-100"
                  style={{ background: "#FFFFF0" }}
                >
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
                dependable supplier? Reach out to Avirose Team for wholesale
                inquiries, sample requests, custom formulations, or
                collaborative opportunities.
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
                    <img
                      className="img-fluid"
                      style={{ height: "320px", width: "100%" }}
                      src={v?.image}
                    />
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
