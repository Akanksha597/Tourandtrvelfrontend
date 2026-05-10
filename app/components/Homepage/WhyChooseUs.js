import React from 'react';
import styles from '../../Styles/WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={`container ${styles.heroContainer}`}>
      <div className="row align-items-center g-5">
        {/* Left Content Side */}
        <div className="col-lg-6">
          <span className={`badge rounded-pill px-3 py-2 mb-3 shadow-sm ${styles.badgeCustom}`}>
            <i className="bi bi-airplane-fill me-2"></i> ARE YOU READY TO TRAVEL
          </span>
          
          <h1 className={`display-4 fw-bold mb-4 ${styles.textNavy}`}>
          Why Choose Ma Pitambra Tours & Travels
          </h1>

          {/* IMAGE SECTION ONLY FOR SMALL SCREEN */}
<div className="col-lg-6 d-block d-lg-none">

  <div className={styles.imageGrid}>

    <img
      src="/Assests/Homepage/whychoose1.png"
      className={`${styles.imgItem} ${styles.imgTopLeft}`}
      alt="Resort"
    />

    <img
      src="/Assests/Homepage/image1.png"
      className={`${styles.imgItem} ${styles.imgBottomLeft}`}
      alt="Mountain Adventure"
    />

    <img
      src="/Assests/Homepage/whyshouldimage1.png"
      className={`${styles.imgItem} ${styles.imgRight}`}
      alt="Happy Travelers"
    />

    <div className={styles.discountBadge}>
      <span className="fs-3 fw-bold mb-0">50%</span>
      <small>Discount</small>
    </div>

    <div className={styles.centerLogo}>
      <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
    </div>

  </div>

</div>
          
          <p className="text-muted mb-5">
            At Ma Pitambra Tours & Travels, we focus on providing comfortable, affordable, and unforgettable travel experiences. With customized tour packages, professional support, and trusted travel services, we make every journey smooth, safe, and memorable for our customers.
          </p>

          <div className="row mb-5">
            <div className="col-sm-6 d-flex align-items-center mb-3">
              <div className={`${styles.iconBox} me-3`}>
                <i className="bi bi-percent fs-4"></i>
              </div>
              <h6 className="fw-bold mb-0">Low Price Friendly</h6>
            </div>
            <div className="col-sm-6 d-flex align-items-center mb-3">
              <div className={`${styles.iconBox} me-3`}>
                <i className="bi bi-shield-check fs-4"></i>
              </div>
              <h6 className="fw-bold mb-0">Safety First Always</h6>
            </div>
          </div>

          <div className={`p-4 rounded-4 shadow-sm border mb-4 ${styles.featureCard}`}>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i> 
               Affordable & Budget-Friendly Tour Packages
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i> 
                Trusted & Professional Travel Services
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-primary me-2"></i> 
               24/7 Customer Support Assistance
              </li>
            </ul>
            
            <div className={`${styles.videoTrigger} d-none d-md-flex shadow-sm`}>
               <div className={`bg-primary text-white shadow-sm ${styles.playBtn}`}>
                  <i className="bi bi-play-fill fs-3"></i>
               </div>
            </div>
          </div>

         
        </div>

        {/* Right Image Layout */}
       {/* IMAGE SECTION ONLY FOR LARGE SCREEN */}
<div className="col-lg-6 d-none d-lg-block">

  <div className={styles.imageGrid}>

    <img
      src="/Assests/Homepage/whychoose1.png"
      className={`${styles.imgItem} ${styles.imgTopLeft}`}
      alt="Resort"
    />

    <img
      src="/Assests/Homepage/image1.png"
      className={`${styles.imgItem} ${styles.imgBottomLeft}`}
      alt="Mountain Adventure"
    />

    <img
      src="/Assests/Homepage/whyshouldimage1.png"
      className={`${styles.imgItem} ${styles.imgRight}`}
      alt="Happy Travelers"
    />

    <div className={styles.discountBadge}>
      <span className="fs-3 fw-bold mb-0">50%</span>
      <small>Discount</small>
    </div>

    <div className={styles.centerLogo}>
      <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
    </div>

  </div>

</div>
      </div>
    </section>
  );
};

export default WhyChooseUs;