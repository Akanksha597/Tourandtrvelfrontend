// components/GoogleMapSection/GoogleMapSection.jsx

"use client";

import styles from "../../Styles/GoogleMapSection.module.css";

export default function GoogleMapSection() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapWrapper}>
        
        {/* LEFT INFO CARD */}
    

        {/* GOOGLE MAP */}
        <iframe
          className={styles.map}
          src="https://www.google.com/maps?q=Pune+Maharashtra+India&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </section>
  );
}