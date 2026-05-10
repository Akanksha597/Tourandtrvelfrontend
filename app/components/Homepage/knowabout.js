import React from 'react';
import Image from 'next/image';
import styles from '../../Styles/AboutSection.module.css';
import Link from 'next/link';
export default function KnowaboutSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        <div className="row align-items-center">

  {/* LEFT SIDE CONTENT */}
  <div className="col-lg-6 col-12 order-2 order-lg-1">

    {/* Top Sub-badge */}
    <div className={styles.badgeCustom}>
      <span>✈</span> GET TO KNOW US
    </div>

    {/* Main Title */}
    <h1 className={styles.mainHeading}>
      Welcome to Ma Pitambra<br />
      Tours & Travels
    </h1>

    {/* MOBILE IMAGE SECTION */}
    <div className={`${styles.mobileImageWrapper} d-block d-lg-none`}>
      <div className={styles.imageGrid}>
        
        {/* Hot Air Balloon Stamp Sticker */}
        <div className={styles.balloonBadge}>
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
            <path d="M50 15 C33 15 25 28 25 43 C25 55 35 63 43 72 L43 78 L57 78 L57 72 C65 63 75 55 75 43 C75 28 67 15 50 15 Z" fill="#0056b3" />
            <path d="M50 15 C42 15 37 28 37 43 C37 55 44 63 47 72" stroke="#ffffff" strokeWidth="2" fill="none" />
            <path d="M50 15 C58 15 63 28 63 43 C63 55 56 63 53 72" stroke="#ffffff" strokeWidth="2" fill="none" />
            <rect x="46" y="81" width="8" height="6" fill="#ff9f43" rx="1" />
            <circle cx="50" cy="50" r="45" stroke="#ff9f43" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          </svg>
        </div>

        <div className={styles.topImgCard}>
          <div className={styles.topImgContainer}>
            <Image
              src="/Assests/Homepage/aboutsectionimage.png"
              alt="Travel"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className={styles.orangeBadge}>
              Beautiful Places
            </div>
          </div>
        </div>

        <div className={styles.bottomImgCard}>
          <div className={styles.bottomImgContainer}>
            <Image
              src="/Assests/Homepage/Aboutsectionimage1.png"
              alt="Resort"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </div>

    {/* Subtext */}
    <p className={styles.subText}>
      At Ma Pitambra Tours & Travels, we believe every journey should be comfortable, memorable, and full of beautiful experiences.
    </p>

    {/* Consultation Box */}
    <div className={styles.consultationBox}>
      <div className={styles.avatarWrapper}>
        <Image
          src="/Assests/Homepage/consultent.png"
          alt="Consultant"
          fill
          className={styles.avatarImg}
        />
      </div>

      <div>
        <h4 className={styles.consultationTitle}>Free Consultation</h4>
        <p className={styles.consultationDesc}>
          With a customer-first approach, we focus on delivering:
        </p>
      </div>
    </div>

    {/* Checklist */}
    <ul className={styles.checklist}>
      <li className={styles.checklistItem}>
        <span className={styles.checkIcon}>✓</span>
        Affordable and customized tour packages
      </li>

      <li className={styles.checklistItem}>
        <span className={styles.checkIcon}>✓</span>
        Comfortable hotel and transport arrangements
      </li>

      <li className={styles.checklistItem}>
        <span className={styles.checkIcon}>✓</span>
        Trusted and secure travel planning
      </li>
    </ul>

    <div className="d-flex align-items-center flex-wrap gap-3">
      <Link href= "/Aboutus">
      <button className={styles.exploreBtn}>Explore More</button>
      </Link>

      <div className={styles.flightPathContainer}>
        {/* SVG */}
      </div>
    </div>
  </div>

  {/* RIGHT SIDE GRAPHICS DESKTOP ONLY */}
  <div className="col-lg-6 d-none d-lg-block order-lg-2">
    <div className={styles.imageGrid}>

      <div className={styles.balloonBadge}>
        {/* SVG */}
      </div>

      <div className={styles.topImgCard}>
        <div className={styles.topImgContainer}>
          <Image
            src="/Assests/Homepage/aboutsectionimage.png"
            alt="Travel"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.orangeBadge}>
            Beautiful Places
          </div>
        </div>
      </div>

      <div className={styles.bottomImgCard}>
        <div className={styles.bottomImgContainer}>
          <Image
            src="/Assests/Homepage/Aboutsectionimage1.png"
            alt="Resort"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

    </div>
  </div>

</div>
      </div>
    </section>
  );
}