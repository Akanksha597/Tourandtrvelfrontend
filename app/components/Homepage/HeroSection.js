"use client";

import { useEffect, useRef } from "react";
import styles from "../../Styles/HeroSection.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const mainImgRef = useRef(null);
  const planeRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ✈️ CONTINUOUS FLOATING ANIMATION
         // SCROLL PARALLAX (container)
gsap.to(".planeWrap", {
  y: -120,
  x: 60,
  scrollTrigger: {
    trigger: sectionRef.current,
    scrub: true,
  },
});

// CONTINUOUS FLOAT (inner plane)
gsap.to(planeRef.current, {
  y: "+=15",
  x: "+=10",
  rotation: 4,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});
      // TEXT ENTRY
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // IMAGE PARALLAX
      gsap.to(mainImgRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // PLANE PARALLAX
      gsap.to(planeRef.current, {
        y: -120,
        x: 60,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className="container">

        {/* 🔥 MOBILE HEADING */}
        <div className={styles.mobileHeading}>
          <p className={styles.tag}>
          Best Monthly  <span>Travel Recommendations</span>
          </p>
          <h1 className={styles.heading}>
            Destinations Every Month
          </h1>
        </div>

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div ref={contentRef} className="col-lg-6 order-3 order-lg-1">

            {/* DESKTOP HEADING */}
            <div className={styles.desktopHeading}>
              <p className={styles.tag}>
                Best Monthly  <span>Travel Recommendations</span>
              </p>
              <h1 className={styles.heading}>
                Destinations Every Month
              </h1>
            </div>

            <p className={styles.desc}>
              Every month, Ma Pitambra Tours & Travels brings you the most beautiful and trending destinations to explore. From peaceful beaches and snowy mountains to exciting international adventures, we recommend the best places for unforgettable travel experiences with your family and friends.
            </p>

            <div className={styles.infoRow}>
              <div className={styles.supportBox}>
                <h3>24/7</h3>
                <span>Guide Support</span>
              </div>

              <div>
                <p><b>Trusted Travel Guide</b><br />Reliable travel info</p>
                <p><b>Mission & Vision</b><br />Positive experiences</p>
              </div>
            </div>

            <button className={styles.cta}>
              Discover More →
            </button>

          

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 order-2 order-lg-2 position-relative">

            <div className={styles.circleBg}></div>

            <div className={styles.circleImg}>
              <Image src="/Assests/Homepage/mountaion.png" alt="" fill />
            </div>

            <div ref={mainImgRef} className={styles.mainImg}>
              <Image src="/Assests/Homepage/travel-removebg-preview.png" alt="" fill />
            </div>
               
               <div className={styles.planeWrap}>
  <div ref={planeRef} className={styles.plane}>
    <Image src="/Assests/Homepage/airoplane.png" alt="" fill />
  </div>
</div>



          <div className={styles.exp}>
  <div className={styles.expInner}>
    <h2>25</h2>
    <span>Years Experience</span>
  </div>
</div>

          </div>

        </div>
      </div>
    </section>
  );
}