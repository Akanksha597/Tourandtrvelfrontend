"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../Styles/serviceSlider.module.css';

const ServiceSlider = () => {
  const services = [
    { id: '03', title: 'Paragliding', active: false, icon: '🪂' },
    { id: '04', title: 'Wildlife', active: false, icon: '🦌' },
    { id: '05', title: 'Hang Gliding', active: false, icon: '⛺' },
    { id: '06', title: 'Homestay', active: false, icon: '🏠' },
    { id: '01', title: 'Adventure', active: true, icon: '🧗' },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className={styles.serviceBadge}>✈ SERVICE</span>
          <h2 className={styles.title}>Choose Our Tour Types <br/> & Enjoy Now</h2>
        </motion.div>

        {/* Slider Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            navigation={{ prevEl: '.prev-p', nextEl: '.next-p' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 5 },
            }}
            className="px-2 py-2 py-lg-5"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`${styles.tourCard} ${service.active ? styles.activeCard : ''}`}>
                    <div className={styles.numberBadge}>{service.id}</div>
                    <div className={styles.iconBox}>{service.icon}</div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="small m-0 opacity-75">Lorem Ipsum has been industry standard.</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Navigation */}
        <div className="d-flex justify-content-center gap-4 mt-2">
          <button className={`${styles.arrowBtn} prev-p`}>←</button>
          <button className={`${styles.arrowBtn} next-p`}>→</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;