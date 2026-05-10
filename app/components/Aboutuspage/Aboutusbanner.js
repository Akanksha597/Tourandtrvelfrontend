import Link from 'next/link';
import styles from '../../Styles/Aboutusbanner.module.css';

const Aboutusbanner = () => {
  return (
    <section className={styles.Aboutusbanner}>
      {/* The overlay is now trapped inside the section */}
      <div className={styles.overlay}></div>
      
      <div className={`${styles.content} container`}>
        <h1 className={styles.title}>About Page</h1>
        <div className={styles.line}></div>
        
        <nav className={styles.breadcrumb}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.activePage}>About Page</span>
        </nav>
      </div>
    </section>
  );
};

export default Aboutusbanner;