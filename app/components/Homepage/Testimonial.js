"use client";

import { useEffect, useState } from "react";
import styles from "../../Styles/testimonial.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Amazing Travel Experience",
    role: "Tourist",
    img: "/assets/user1.jpg",
    text: "Ma Pitambra Tours & Travels planned our family vacation perfectly. Hotels, transport, and sightseeing were all excellent. Highly recommended!",
  },
  {
    id: 2,
    name: "Best Tour Service",
    role: "Tourist",
    img: "/assets/user2.jpg",
    text: "Very professional team with affordable packages. Our trip was smooth, comfortable, and full of unforgettable memories.",
  },
  {
    id: 3,
    name: "Safe & Hassle-Free Journey",
    role: "Tourist",
    img: "/assets/user3.jpg",
    text: "The support team was available throughout the trip. We enjoyed stress-free travel with great hotel and transport services.",
  },

  {
    id: 4,
    name: "Highly Recommended Travel Company",
    role: "Tourist",
    img: "/assets/user3.jpg",
    text: "Excellent customer service, customized planning, and beautiful destinations. One of the best travel experiences we’ve had",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(1);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const getPosition = (i) => {
    if (i === index) return "active";
    if (i === (index - 1 + data.length) % data.length) return "prev";
    if (i === (index + 1) % data.length) return "next";
    return "hidden";
  };

  return (
    <section className={`container ${styles.wrapper}`}>
      <div className="text-center mb-5">
        <span className={styles.tag}>✈ TESTIMONIAL</span>
        <h2 className={styles.title}>
          See what they are <br /> talking about?
        </h2>
      </div>

      <div className={styles.slider}>
        {data.map((item, i) => {
          const position = getPosition(i);

          return (
            <div key={item.id} className={`${styles.card} ${styles[position]}`}>
              <div className={styles.header}>
                {/* <div className={styles.imageWrap}>
                  <Image src={item.img} alt="" fill />
                </div> */}

                <div>
                  <div className={styles.stars}>★★★★★</div>
                  <h5>{item.name}</h5>
                  <span>{item.role}</span>
                </div>
              </div>

              <p className={styles.text}>{item.text}</p>

              <div className={styles.quote}>“</div>
            </div>
          );
        })}
      </div>

      {/* dots */}
      <div className={styles.dots}>
        {data.map((_, i) => (
          <span
            key={i}
            className={i === index ? styles.activeDot : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}