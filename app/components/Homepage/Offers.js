"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../Styles/offers.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const offers = [
  {
    title: "Kashmir Paradise Trip",
    price: "₹14,999",
    old: "₹19,999",
    img: "/Assests/Homepage/offer1.png",
    color: "blue",
  },
  {
    title: "Goa Beach Vacation",
    price: "₹9,999",
    old: "₹14,999",
    img: "/Assests/Homepage/offer2.png",
    color: "orange",
  },
  {
    title: "Manali Adventure Tour",
    price: "₹11,999",
    old: "₹16,999",
    img: "/Assests/Homepage/offer3.png",
    color: "cyan",
  },
  {
    title: "Rajasthan Royal Heritage",
    price: "₹13,999",
    old: "₹18,999",
    img: "/Assests/Homepage/offer4.png",
    color: "green",
  },
];

export default function Offers() {
  const sliderRef = useRef(null);
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 300;

  // 👉 Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 👉 Slide animation
  const slideTo = (i) => {
    gsap.to(sliderRef.current, {
      x: -i * cardWidth,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  // 👉 Next / Prev
  const next = () => {
    const newIndex = (index + 1) % offers.length;
    setIndex(newIndex);
  };

  const prev = () => {
    const newIndex = (index - 1 + offers.length) % offers.length;
    setIndex(newIndex);
  };

  // 👉 AUTO SLIDE ONLY FOR MOBILE
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // 👉 Animate when index changes
  useEffect(() => {
    slideTo(index);
  }, [index]);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.tag}>Tour Packages</span>
            <h2 className={styles.title}>Exclusive Offers</h2>
          </div>

          <div className={styles.nav}>
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.slider} ref={sliderRef}>
            {offers.map((item, i) => (
              <div
                key={i}
                className={`${styles.card} ${styles[item.color]}`}
              >
                <div className={styles.content}>
                  <h4>{item.title}</h4>

                  <div className={styles.price}>
                    <span>{item.price}</span>
                    <del>{item.old}</del>
                  </div>

                  <button
                    className={styles.btn}
                    onClick={() => router.push("/Tour")}
                  >
                    Book Now
                  </button>
                </div>

                <div className={styles.image}>
  <Image
    src={item.img}
    alt="offer"
    width={500}
    height={300}
    unoptimized
  />
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}