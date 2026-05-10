// components/GoogleMapSection/GoogleMapSection.jsx

"use client";

import styles from "../../Styles/GoogleMapSection.module.css";

export default function GoogleMapSection() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapWrapper}>
        
        {/* LEFT INFO CARD */}
        <div className={styles.infoCard}>
          <h3>London Eye</h3>

          <p>
            Riverside Building, County Hall,
            <br />
            Westminster Bridge Rd, London
            <br />
            SE1 7PB, UK
          </p>

          <div className={styles.rating}>
            <span>4.5 ★</span>
            <a href="#">(200,035)</a>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <iframe
          className={styles.map}
          src="https://www.google.com/maps?q=London+Eye&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </section>
  );
}