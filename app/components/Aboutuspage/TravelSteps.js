// components/TravelSteps/TravelSteps.jsx

"use client";

import Image from "next/image";
import styles from "../../Styles/TravelSteps.module.css";
import {
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaSuitcaseRolling,
} from "react-icons/fa";

export default function TravelSteps() {
  const steps = [
    {
      id: "01",
      title: "Search Your Perfect Tour",
      description:
        "Explore exciting travel packages, destinations, and customized tours that match your budget and travel style.",
      icon: <FaPlaneDeparture />,
      image: "/Assests/Aboutus/Travelsteps1.png",
    },
    {
      id: "02",
      title: "Choose Your Dream Destination",
      description:
        "Select from beautiful beaches, mountains, adventure spots, and luxury holiday destinations around the world.",
      icon: <FaMapMarkedAlt />,
      image: "/Assests/Aboutus/travelsteps3.png",
    },
    {
      id: "03",
      title: "Book & Enjoy Your Journey",
      description:
        "Confirm your booking easily and get ready for a comfortable, memorable, and stress-free travel experience.",
      icon: <FaSuitcaseRolling />,
      image: "/Assests/Aboutus/Travelsteps2.png",
    },
  ];

  return (
    <section className={styles.processSection}>
      <div className="container">
        {/* SECTION TITLE */}
        <div className={styles.headingArea}>
          <span className={styles.subTitle}>HOW IT WORKS</span>
          <h2 className={styles.mainTitle}>
            Start Your Journey In <span>3 Easy Steps</span>
          </h2>
          <p className={styles.description}>
            Plan your perfect vacation effortlessly with our simple and smooth
            booking process designed for every traveler.
          </p>
        </div>

        <div className={styles.wrapper}>
          {/* STEP 1 */}
          <div className={`${styles.stepRow} ${styles.topRow}`}>
            <div className={styles.contentBox}>
              <div className={styles.number}>{steps[0].id}</div>

              <div className={styles.content}>
                <div className={styles.icon}>{steps[0].icon}</div>

                <div>
                  <h3>{steps[0].title}</h3>
                  <p>{steps[0].description}</p>
                </div>
              </div>
            </div>

            <div className={styles.imageWrap}>
              <Image
                src={steps[0].image}
                alt="Search Tour"
                width={260}
                height={260}
                className={styles.image}
              />
            </div>
          </div>

          {/* STEP 2 */}
          <div className={`${styles.stepRow} ${styles.middleRow}`}>
            <div className={styles.imageWrap}>
              <Image
                src={steps[1].image}
                alt="Dream Destination"
                width={260}
                height={260}
                className={styles.image}
              />
            </div>

            <div className={styles.contentBox}>
              <div className={styles.number}>{steps[1].id}</div>

              <div className={styles.content}>
                <div className={styles.icon}>{steps[1].icon}</div>

                <div>
                  <h3>{steps[1].title}</h3>
                  <p>{steps[1].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className={`${styles.stepRow} ${styles.bottomRow}`}>
            <div className={styles.contentBox}>
              <div className={styles.number}>{steps[2].id}</div>

              <div className={styles.content}>
                <div className={styles.icon}>{steps[2].icon}</div>

                <div>
                  <h3>{steps[2].title}</h3>
                  <p>{steps[2].description}</p>
                </div>
              </div>
            </div>

            <div className={styles.imageWrap}>
              <Image
                src={steps[2].image}
                alt="Book Destination"
                width={260}
                height={260}
                className={styles.image}
              />
            </div>
          </div>

          {/* SVG DASHED PATHS */}
          <svg
            className={styles.svgLines}
            viewBox="0 0 1400 900"
            preserveAspectRatio="none"
          >
            <path
              d="M540 120 C700 120, 760 240, 910 220"
              stroke="#d8d8d8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 8"
            />

            <path
              d="M760 430 C920 360, 980 300, 1080 270"
              stroke="#d8d8d8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 8"
            />

            <path
              d="M790 560 C920 650, 1000 670, 1120 720"
              stroke="#d8d8d8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 8"
            />
          </svg>

          {/* FLYING PLANES */}
          <div className={`${styles.plane} ${styles.plane1}`}>
            <FaPlaneDeparture />
          </div>

          <div className={`${styles.plane} ${styles.plane2}`}>
            <FaPlaneDeparture />
          </div>

          <div className={`${styles.plane} ${styles.plane3}`}>
            <FaPlaneDeparture />
          </div>
        </div>
      </div>
    </section>
  );
}