// import React from 'react';
// import Image from 'next/image';
// import styles from '../../Styles/AboutSection.module.css';

// export default function AboutSection() {
//   return (
//     <section className={styles.sectionWrapper}>
//       <div className="container">
//         <div className="row align-items-center">
          
//           {/* LEFT SIDE CONTENT */}
//           <div className="col-lg-6 col-12">
            
//             {/* Top Sub-badge */}
//             <div className={styles.badgeCustom}>
//               <span>✈</span> GET TO KNOW US
//             </div>

//             {/* Main Title */}
//             <h1 className={styles.mainHeading}>
//               Experience the<br />
//               World with Our<br />
//               Company
//             </h1>

//             {/* Subtext */}
//             <p className={styles.subText}>
//               There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
//             </p>

//             {/* Free Consultation Box */}
//             <div className={styles.consultationBox}>
//               <div className={styles.avatarWrapper}>
//                 <Image 
//                   src="/Assests/Homepage/consultent.png" // Add your local path here
//                   alt="Consultant profile"
//                   fill
//                   className={styles.avatarImg}
//                 />
//               </div>
//               <div>
//                 <h4 className={styles.consultationTitle}>Free Consultation</h4>
//                 <p className={styles.consultationDesc}>
//                   There are many variations of passages of Lorem Ipsum available.
//                 </p>
//               </div>
//             </div>

//             {/* Checklist */}
//             <ul className={styles.checklist}>
//               <li className={styles.checklistItem}>
//                 <span className={styles.checkIcon}>✓</span> Many variations of passages of lorem
//               </li>
//               <li className={styles.checklistItem}>
//                 <span className={styles.checkIcon}>✓</span> Many variations of passages of lorem
//               </li>
//               <li className={styles.checklistItem}>
//                 <span className={styles.checkIcon}>✓</span> Expert many variations teacher
//               </li>
//             </ul>

//             {/* Action Button & Flight Path Decorator */}
//             <div className="d-flex align-items-center flex-wrap gap-3">
              
              
//               {/* Airplane Flight Path SVG */}
          
//             </div>

//           </div>

//           {/* RIGHT SIDE GRAPHICS */}
//           <div className="col-lg-6 col-12">
//             <div className={styles.imageGrid}>
              
//               {/* Hot Air Balloon Stamp Sticker */}
//               <div className={styles.balloonBadge}>
//                 {/* Embedded Stamp SVG */}
//                 <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   {/* Balloon */}
//                   <path d="M50 15 C33 15 25 28 25 43 C25 55 35 63 43 72 L43 78 L57 78 L57 72 C65 63 75 55 75 43 C75 28 67 15 50 15 Z" fill="#0056b3" />
//                   {/* Balloon Stripes */}
//                   <path d="M50 15 C42 15 37 28 37 43 C37 55 44 63 47 72" stroke="#ffffff" strokeWidth="2" fill="none" />
//                   <path d="M50 15 C58 15 63 28 63 43 C63 55 56 63 53 72" stroke="#ffffff" strokeWidth="2" fill="none" />
//                   {/* Basket */}
//                   <rect x="46" y="81" width="8" height="6" fill="#ff9f43" rx="1" />
//                   <line x1="45" y1="78" x2="47" y2="81" stroke="#333" strokeWidth="1" />
//                   <line x1="55" y1="78" x2="53" y2="81" stroke="#333" strokeWidth="1" />
//                   {/* Outer Circular text placeholder / Badge effect */}
//                   <circle cx="50" cy="50" r="45" stroke="#ff9f43" strokeWidth="1" strokeDasharray="3 3" fill="none" />
//                 </svg>
//               </div>

//               {/* Main Top Left Image Block */}
//               <div className={styles.topImgCard}>
//                 <div className={styles.topImgContainer}>
//                   <Image 
//                     src="/Assests/Aboutus/aboutimage.png" // Add your local path here
//                     alt="Two girls traveling looking at a map"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     priority
//                   />
//                   {/* Bottom Rounded Tag */}
//                   <div className={styles.orangeBadge}>
//                     Beautiful Places
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Right Overlapping Image Block */}
//               <div className={styles.bottomImgCard}>
//                 <div className={styles.bottomImgContainer}>
//                   <Image 
//                     src="/Assests/Aboutus/aboutimage1.png" // Add your local path here
//                     alt="Tropical luxury resort over-water villas"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import Image from 'next/image';
import styles from '../../Styles/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        <div className="row align-items-center">

  {/* LEFT SIDE CONTENT */}
  <div className="col-lg-6 col-12 order-2 order-lg-1">

    {/* Top Sub-badge */}
    <div className={styles.badgeCustom}>
      <span>✈</span> GET TO KNOW US
    </div>

    {/* Main Title */}
    <h1 className={styles.mainHeading}>
      Discover the World with Ma Pitambra Tours & Travels
      
    </h1>

    {/* MOBILE IMAGE SECTION */}
    <div className={`${styles.mobileImageWrapper} d-block d-lg-none`}>
      <div className={styles.imageGrid}>
        
        {/* Hot Air Balloon Stamp Sticker */}
        <div className={styles.balloonBadge}>
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
            <path d="M50 15 C33 15 25 28 25 43 C25 55 35 63 43 72 L43 78 L57 78 L57 72 C65 63 75 55 75 43 C75 28 67 15 50 15 Z" fill="#0056b3" />
            <path d="M50 15 C42 15 37 28 37 43 C37 55 44 63 47 72" stroke="#ffffff" strokeWidth="2" fill="none" />
            <path d="M50 15 C58 15 63 28 63 43 C63 55 56 63 53 72" stroke="#ffffff" strokeWidth="2" fill="none" />
            <rect x="46" y="81" width="8" height="6" fill="#ff9f43" rx="1" />
            <circle cx="50" cy="50" r="45" stroke="#ff9f43" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          </svg>
        </div>

        <div className={styles.topImgCard}>
          <div className={styles.topImgContainer}>
            <Image
              src="/Assests/Homepage/aboutsectionimage.png"
              alt="Travel"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className={styles.orangeBadge}>
              Beautiful Places
            </div>
          </div>
        </div>

        <div className={styles.bottomImgCard}>
          <div className={styles.bottomImgContainer}>
            <Image
              src="/Assests/Aboutus/aboutimage1.png"
              alt="Resort"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </div>

    {/* Subtext */}
    <p className={styles.subText}>
     Ma Pitambra Tours & Travels is a professional travel company dedicated to creating amazing travel experiences for customers across India and beyond. We specialize in domestic and international tour packages, hotel bookings, transportation services, flight bookings, and customized holiday planning
    </p>

    {/* Consultation Box */}
    <div className={styles.consultationBox}>
      <div className={styles.avatarWrapper}>
        <Image
          src="/Assests/Homepage/consultent.png"
          alt="Consultant"
          fill
          className={styles.avatarImg}
        />
      </div>

      <div>
        <h4 className={styles.consultationTitle}>Free Consultation</h4>
        <p className={styles.consultationDesc}>
          Trusted and secure travel planning
        </p>
      </div>
    </div>

    {/* Checklist */}
    <ul className={styles.checklist}>
      <li className={styles.checklistItem}>
        <span className={styles.checkIcon}>✓</span>
        Affordable and customized tour packages
      </li>

      <li className={styles.checklistItem}>
        <span className={styles.checkIcon}>✓</span>
        Comfortable hotel and transport arrangements
      </li>

      <li className={styles.checklistItem}>
        <span className={styles.checkIcon}>✓</span>
        Trusted and secure travel planning
      </li>
      <li className={styles.checklistItem}>
        <span className={styles.checkIcon}>✓</span>
     Professional travel guidance and support

      </li>
      <li className={styles.checklistItem}>
        <span className={styles.checkIcon}>✓</span>
        Unforgettable travel experiences
      </li>
    </ul>
    <p className={styles.subText}>Our experienced team works hard to ensure every trip is perfectly planned so that our customers can travel stress-free and enjoy every moment of their journey.</p>
  
    
  </div>

  {/* RIGHT SIDE GRAPHICS DESKTOP ONLY */}
  <div className="col-lg-6 d-none d-lg-block order-lg-2">
    <div className={styles.imageGrid}>

      <div className={styles.balloonBadge}>
        {/* SVG */}
      </div>

      <div className={styles.topImgCard}>
        <div className={styles.topImgContainer}>
          <Image
            src="/Assests/Aboutus/aboutimage.png"
            alt="Travel"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.orangeBadge}>
            Beautiful Places
          </div>
        </div>
      </div>

      <div className={styles.bottomImgCard}>
        <div className={styles.bottomImgContainer}>
          <Image
            src="/Assests/Aboutus/aboutimage1.png"
            alt="Resort"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

    </div>
  </div>

</div>
      </div>
    </section>
  );
}