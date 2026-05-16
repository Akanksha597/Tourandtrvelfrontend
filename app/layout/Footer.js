// components/Footer/Footer.jsx
"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "../Styles/Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* VIDEO BACKGROUND */}
      <video
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Assests/Homepage/PinDown.io_@ChengYiUniverse888_1778164295.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className={styles.overlay}></div>

      {/* GRADIENT BLUR SHAPES */}
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>

      {/* MOUNTAIN SHAPE */}
      <div className={styles.bottomShape}></div>

      <div className="container position-relative">
        <div className="row gy-4">
          {/* LEFT */}
          <div className="col-lg-5">
            <div className={styles.logoWrap}>
             

              <div className={styles.logoWrapper}>
  {/* LOGO IMAGE */}
  <Image
    src="/Assests/logo/logo.png"
    alt="Ma Pitambra Tours Travel"
    width={80}
    height={80}
    className={styles.logoImage}
  />

  {/* LOGO TEXT */}
 
</div>
</div>

           <p className={`${styles.desc} d-none d-lg-block`}>
  Discover the most beautiful destinations with Ma Pitambra Tours & Travels. From mountains and beaches to international adventures,
</p>

            {/* SOCIAL */}
           <div className={`${styles.socials} d-none d-lg-flex`}>
  <a href="#">
    <FaFacebookF />
  </a>

  <a href="#">
    <FaTwitter />
  </a>

  <a href="#">
    <FaInstagram />
  </a>

  <a href="#">
    <FaYoutube />
  </a>
</div>
          </div>

          {/* DESTINATIONS */}
        

          {/* QUICK LINKS */}
          <div className="col-lg-3 col-md-6 col-6">
            <h4 className={styles.heading}>Quick Links</h4>

            <ul className={styles.links}>
              <Link href="/" >
              <li>
                <FaArrowRight /> Home 
              </li>
              </Link>
           
              <Link href="/Aboutus" >
              <li>
                <FaArrowRight /> About us 
              </li>
              </Link>
               <Link href="/Tour" >     
              <li>
                <FaArrowRight /> Tour 
              </li>
              </Link>
            <Link href="/cabpackages" >
              <li>
                <FaArrowRight />Cab Services 
              </li>
              </Link>
              <Link href="/Contactus" >
              <li>
                <FaArrowRight /> Contact Us
              </li>
              </Link>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-4">
            <h4 className={styles.heading}>Contact Us</h4>

            <div className={styles.contactCard}>
              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <FaPhoneAlt />
                </div>

                <div>
                  <span>Call Anytime</span>
                  <h5>+91 8565978569</h5>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email Address</span>
                  <h5>travel@example.com</h5>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Office Location</span>
                  <h5>Pune, Maharashtra, India</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

                   <div className={`${styles.socials} d-lg-none d-flex  mt-4`}>
  <a href="#">
    <FaFacebookF />
  </a>

  <a href="#">
    <FaTwitter />
  </a>

  <a href="#">
    <FaInstagram />
  </a>

  <a href="#">
    <FaYoutube />
  </a>
</div>

        {/* COPYRIGHT */}
        <div className={styles.bottomBar}>
          
          <p> 
            Designed and Developed by © 2026 Shreem Ai © Ma Pitambra Tours Travel. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;