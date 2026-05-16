"use client";

import React, { useEffect, useState } from "react";
import styles from "../../Styles/HeroBanner.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/Assests/Homebanner/Homebanner1.jpeg",
    title: "Explore The World With Us",
    subtitle: "Luxury Travel & Adventure Experience",
  },
  {
    image: "/Assests/Homebanner/Homebaneer6.png",
    title: "Discover Beautiful Places",
    subtitle: "Create Unforgettable Memories With Us",
  },
  {
    image: "/Assests/Homebanner/Homebanner7.png",
    title: "Your Trusted Travel Partner",
    subtitle: "Travel Smart, Travel Happy",
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className={styles.hero}>
      {/* IMAGE SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[index].image}
            alt="banner"
            fill
            priority
            className={styles.image}
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className={styles.overlay}></div>

      {/* CONTENT */}
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
            className={styles.textBox}
          >
            <span className={styles.topText}>
              BEST TRAVEL AGENCY
            </span>

            <h1>{slides[index].title}</h1>

            <p>{slides[index].subtitle}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={i === index ? styles.activeDot : ""}
          />
        ))}
      </div>
    </section>
  );
}