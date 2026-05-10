"use client";

import React, { useEffect, useState } from "react";
import styles from "../Styles/Navbar.module.css";
import Link from "next/link";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(false);

  useEffect(() => {
    const scroll = () => setSticky(window.scrollY > 50);

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className={styles.topbar}>
        <div className={styles.topbarContent}>
          
          {/* LEFT */}
          <div className={styles.topLeft}>
            <div className={styles.topItem}>
              <FaEnvelope /> contact@example.com
            </div>

            <div className={styles.topItem}>
              <FaPhone /> (69)-868 1689
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.topRight}>
            <div className={styles.socialIcons}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <div
        className={`${styles.navbarWrapper} ${
          sticky ? styles.sticky : ""
        }`}
      >
        <div className={styles.navbar}>

          {/* LOGO */}
          <Link href="/" className={styles.logo}>
            Ma Pitambra Tours Travel
          </Link>

          {/* DESKTOP MENU */}
          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/Aboutus">About Us</Link>
            </li>

            <li>
              <Link href="/Tour">Tours</Link>
            </li>

            <li>
              <Link href="/cabpackages">Cab Services</Link>
            </li>

            <li>
              <Link href="/Contactus">Contact Us</Link>
            </li>
          </ul>

          {/* RIGHT */}
          <div className={styles.right}>
            <Link href="/Tour">
              <button className={styles.btn}>
                Start Booking
              </button>
            </Link>

            {/* HAMBURGER */}
            <div
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <div
          style={{
            textAlign: "right",
            fontSize: "26px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </div>

        <li onClick={() => setMenuOpen(false)}>
          <Link href="/">Home</Link>
        </li>

        <li  onClick={() => setMenuOpen(false)}>
              <Link href="/Aboutus">About Us</Link>
            </li>

        

        <li onClick={() => setMenuOpen(false)}>
              <Link href="/Tour">Tours</Link>
            </li>
        
            <li onClick={() => setMenuOpen(false)}>
              <Link href="/cabpackages">Cab Services</Link>
            </li>


        <li onClick={() => setMenuOpen(false)}>
          <Link href="/Contactus">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}