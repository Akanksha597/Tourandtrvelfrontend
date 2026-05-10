"use client";

import React from "react";
import styles from "../../styles/TrendingHero.module.css";
import { motion } from "framer-motion";

const features = [
  "Affordable & Best Tour Packages",
  "Domestic & International Tours",
  "Comfortable Hotel Stays",
  "Customized Holiday Packages",
];

export default function TrendingHero() {
  return (
    <section className={styles.hero}>

      {/* LEFT SIDE */}
      <div className={styles.left}>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Trending</span> Destination
        </motion.h1>

        {/* MOBILE IMAGE ONLY */}
      <div className={`d-block d-md-none ${styles.mobileOnlyImage}`}>
  <div className={styles.imageWrapper}>
    <img
      src="/Assests/Homepage/hometrending.png"
      alt="Trending Destination"
      className="img-fluid"
    />
  </div>
</div>

        {/* PARAGRAPH */}
        <p>
          Explore the most popular and breathtaking destinations with Ma Pitambra Tours & Travels. From snowy mountains and peaceful beaches to international adventures and cultural escapes, we bring you the best trending travel experiences for unforgettable memories.
        </p>

        {/* FEATURE CARDS */}
        <div className={styles.features}>
          {features.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={styles.number}>{i + 1}</div>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        {/* IMAGE CARDS */}
        <div className={styles.gallery}>
          <img src="/Assests/Homepage/mahabaleshwar.png" />
          <img src="/Assests/Homepage/Ladakh.png" />
        </div>
      </div>

      {/* RIGHT SIDE IMAGE DESKTOP ONLY */}
    <div className={`d-none d-md-block ${styles.right}`}>
  <div className={styles.imageWrapper}>
    <img
      src="/Assests/Homepage/hometrending.png"
      alt="Trending Destination"
      className="img-fluid"
    />
  </div>
</div>

    </section>
  );
}