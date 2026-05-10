"use client";

import React, { useEffect, useState } from "react";
import styles from "../../Styles/HeroBanner.module.css";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/Assests/Homepage/Homepagebanner.jpg",
    text: "Explore The World With Us ",
  },
  {
    image: "/Assests/Homepage/Homepagebanner1.jpg",
    text: "Discover Beautiful Destinations ",
  },
  {
    image: "/Assests/Homepage/Homepagebanner2.jpg",
    text: "Your Trusted Travel Partner",
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const current = slides[index];

  // 🎞️ Auto Slide (Smooth timing)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ⌨️ Typing Animation (stable)
  useEffect(() => {
    let i = 0;
    setDisplayText("");

    const typing = setInterval(() => {
      setDisplayText((prev) => prev + current.text.charAt(i));
      i++;

      if (i >= current.text.length) clearInterval(typing);
    }, 60);

    return () => clearInterval(typing);
  }, [index]);

  // 🎯 Parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className={styles.hero}>
      {/* 🎥 VIDEO (ALL DEVICES) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className={styles.video}
      >
        <source src="/Assests/Homepage/bannervideo.mp4" type="video/mp4" />
      </video>

      {/* 🖼️ IMAGE SLIDER */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={current.image}
          className={styles.image}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ y }}
        />
      </AnimatePresence>

      {/* 🌫️ OVERLAY */}
      <div className={styles.overlay}></div>

      {/* 📝 CONTENT */}
      <div className={styles.content}>
        <h1 className={styles.typing}>{displayText}</h1>
        <p>Explore More, Worry Less</p>
        {/* <button className={styles.btn}>Explore Now</button> */}
      </div>

      {/* 🔘 DOTS */}
      {/* <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? styles.activeDot : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div> */}

      {/* ⬅️➡️ ARROWS */}
      <div className={styles.arrows}>
        <button onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}