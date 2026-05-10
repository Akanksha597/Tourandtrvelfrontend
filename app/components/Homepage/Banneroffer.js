import React from 'react';
import styles from '../../Styles/Sofferbanner.module.css';
import Link from 'next/link';

const Banneroffer = () => {
  return (
    <div className="w-100">
      <section className={styles.trv_hero_wrapper}>
        <div className="container position-relative h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6">
              <span className={styles.trv_accent_text}>Special Offer For You</span>
              <h1 className={styles.trv_main_heading}>
             Exclusive Travel Deals  
                Just for You
              </h1>
              <p className={styles.trv_description}>
                Book your dream holiday with Ma Pitambra Tours & Travels and get the best travel deals for family vacations, honeymoon trips, and group tours.
              </p>
              <Link href="/Tour">
              <button className={styles.trv_btn_white}>Start Booking</button>
              </Link>
            </div>
          </div>

          {/* Asset placement from image_92af7b.jpg */}
          <img src="/Assests/Homepage/offerbannerimg1.png" className={styles.trv_traveler_layer} alt="Traveler" />
          <img src="/Assests/Homepage/banneroffimage.png" className={styles.trv_props_layer} alt="Hat and Passport" />
        </div>
      </section>

      {/* Floating Section */}
      <div className={styles.trv_stats_container}>
        <div className={styles.trv_stats_card}>
          <div className={styles.trv_stat_unit}>
            <span className={styles.trv_stat_val}>30.3k</span>
            <p className={styles.trv_stat_label}>Happy Traveler</p>
          </div>
          <div className={styles.trv_stat_unit}>
            <span className={styles.trv_stat_val}>40.5k</span>
            <p className={styles.trv_stat_label}>Tent Sites</p>
          </div>
          <div className={styles.trv_stat_unit}>
            <span className={styles.trv_stat_val}>88.9%</span>
            <p className={styles.trv_stat_label}>Satisfaction Rate</p>
          </div>
          <div className={styles.trv_stat_unit}>
            <span className={styles.trv_stat_val}>6.30+</span>
            <p className={styles.trv_stat_label}>Year of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banneroffer;