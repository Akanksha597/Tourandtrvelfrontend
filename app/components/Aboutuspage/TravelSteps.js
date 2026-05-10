// components/TravelSteps/TravelSteps.jsx

"use client";

import Image from "next/image";
import styles from "../../Styles/TravelSteps.module.css";
import {
  FaPlane,
  FaMapMarkedAlt,
  FaSuitcaseRolling,
} from "react-icons/fa";

export default function TravelSteps() {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* TOP STEP */}
          <div className={`${styles.stepRow} ${styles.topRow}`}>
            <div className={styles.contentBox}>
              <div className={styles.number}>01</div>

              <div className={styles.content}>
                <div className={styles.icon}>
                  <FaPlane />
                </div>

                <div>
                  <h3>Search Expected Tour</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.imageWrap}>
              <Image
                src="/Assests/Aboutus/Travelsteps1.png"
                alt="Travel"
                width={250}
                height={250}
                className={styles.image}
              />
            </div>
          </div>

       

          {/* MIDDLE STEP */}
          <div className={`${styles.stepRow} ${styles.middleRow}`}>
            <div className={styles.imageWrap}>
              <Image
                src="/Assests/Aboutus/travelsteps3.png"
                alt="Travel"
                width={250}
                height={250}
                className={styles.image}
              />
            </div>

            <div className={styles.contentBox}>
              <div className={styles.number}>02</div>

              <div className={styles.content}>
                <div className={styles.icon}>
                  <FaMapMarkedAlt />
                </div>

                <div>
                  <h3>Select Dream Place</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM STEP */}
          <div className={`${styles.stepRow} ${styles.bottomRow}`}>
            <div className={styles.contentBox}>
              <div className={styles.number}>03</div>

              <div className={styles.content}>
                <div className={styles.icon}>
                  <FaSuitcaseRolling />
                </div>

                <div>
                  <h3>Book the Destination</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.imageWrap}>
              <Image
                src="/Assests/Aboutus/Travelsteps2.png"
                alt="Travel"
                width={250}
                height={250}
                className={styles.image}
              />
            </div>
          </div>

          {/* SVG PATHS */}
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
              strokeDasharray="6 6"
            />

            <path
              d="M760 430 C920 360, 980 300, 1080 270"
              stroke="#d8d8d8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M790 560 C920 650, 1000 670, 1120 720"
              stroke="#d8d8d8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
            />
          </svg>

          {/* PLANES */}
          <div className={`${styles.plane} ${styles.plane1}`}>
            <FaPlane />
          </div>

          <div className={`${styles.plane} ${styles.plane2}`}>
            <FaPlane />
          </div>

          <div className={`${styles.plane} ${styles.plane3}`}>
            <FaPlane />
          </div>
        </div>
      </div>
    </section>
  );
}