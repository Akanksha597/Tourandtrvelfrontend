"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "../../Styles/TourDetails.module.css";

import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaPlane,
  FaHotel,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TourDetailsClient() {
  const params = useParams();
const router = useRouter();
  const slug = params.slug;

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTour = async () => {
    try {
      const { data } = await axios.get(
        "https://tourapi.shreemwell.in/api/v1/favorite-tour/all-tours"
        // "http://localhost:5016/api/v1/favorite-tour/all-tours"
      );

      if (data?.success) {
        const singleTour = data.data.find(
          (item) => item.slug === slug
        );

        setTour(singleTour);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchTour();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="container py-5 text-center">
        <h2>Tour Not Found</h2>
      </div>
    );
  }

  return (
    <div className={styles.detailsPage}>
      {/* GALLERY */}

      <div className={styles.gallerySection}>
        <div className="container-fluid">
          <Swiper
            modules={[
              Pagination,
              Navigation,
              Autoplay,
            ]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
            className={styles.gallerySwiper}
          >
            <SwiperSlide>
              <img
                src={tour.image}
                alt={tour.title}
                className={styles.sliderImage}
              />
            </SwiperSlide>

            {tour.gallery?.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`gallery-₹{index}`}
                  className={styles.sliderImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CONTENT */}

      <div className="container py-5">
        <div className="row g-4">
          {/* LEFT */}

          <div className="col-lg-8">
            <h1 className={styles.title}>
              {tour.title}
            </h1>

            <p className={styles.shortDesc}>
              {tour.shortDescription}
            </p>

            {/* META */}

            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <FaMapMarkerAlt />
                <span>
                  {tour.location}, {tour.city},{" "}
                  {tour.country}
                </span>
              </div>

              <div className={styles.metaItem}>
                <FaClock />
                <span>{tour.duration}</span>
              </div>

              <div className={styles.metaItem}>
                <FaUsers />
                <span>
                  {tour.groupSize} Guests
                </span>
              </div>

              <div className={styles.metaItem}>
                <FaStar />
                <span>
                  {tour.rating} (
                  {tour.totalReviews} Reviews)
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className={styles.cardBox}>
              <h4>Description</h4>

              <p>{tour.description}</p>
            </div>

            {/* CATEGORY */}

            <div className={styles.cardBox}>
              <h4>Tour Category</h4>

              <p>{tour.category}</p>
            </div>

            {/* INCLUDED */}

            <div className={styles.cardBox}>
              <div className="row">
                <div className="col-md-6">
                  <h4>Included</h4>

                  {tour.included?.map(
                    (item, index) => (
                      <div
                        key={index}
                        className={styles.listItem}
                      >
                        <FaCheckCircle
                          className={
                            styles.green
                          }
                        />

                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>

                <div className="col-md-6 mt-4 mt-md-0">
                  <h4>Excluded</h4>

                  {tour.excluded?.map(
                    (item, index) => (
                      <div
                        key={index}
                        className={styles.listItem}
                      >
                        <FaTimesCircle
                          className={
                            styles.red
                          }
                        />

                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* HIGHLIGHTS */}

            <div className={styles.cardBox}>
              <h4>Trip Highlights</h4>

              <div className="row g-3">
                {tour.highlights?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="col-md-4 col-6"
                    >
                      <div
                        className={
                          styles.highlightBox
                        }
                      >
                        <FaPlane />

                        <span>{item}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* LANGUAGES */}

            {/* <div className={styles.cardBox}>
              <h4>Languages</h4>

              <div className="d-flex flex-wrap gap-2">
                {tour.languages?.map(
                  (lang, index) => (
                    <span
                      key={index}
                      className={
                        styles.languageBadge
                      }
                    >
                      {lang}
                    </span>
                  )
                )}
              </div>
            </div> */}

            {/* ITINERARY */}

            <div className={styles.cardBox}>
              <h4>Tour Plan</h4>

              {tour.itinerary?.map(
                (day, index) => (
                  <div
                    key={index}
                    className={styles.dayBox}
                  >
                    <div
                      className={
                        styles.dayNumber
                      }
                    >
                      Day {day.day}
                    </div>

                    <div
                      className={
                        styles.dayContent
                      }
                    >
                      <h5>{day.title}</h5>

                      <p>
                        {day.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT */}

          <div className="col-lg-4">
            <div className={styles.bookingCard}>
              <div className={styles.priceRow}>
                <div>
                  <h2>
                    ₹
                    {
                      tour.pricing?.adult
                        ?.discountedPrice
                    }
                  </h2>

                  <span
                    className={styles.oldPrice}
                  >
                    ₹
                    {
                      tour.pricing?.adult
                        ?.originalPrice
                    }
                  </span>
                </div>

                <div className={styles.offerBadge}>
                  {
                    tour.pricing?.adult
                      ?.discountPercentage
                  }
                  % OFF
                </div>
              </div>
<button
  className={styles.bookBtn}
  onClick={() =>
    router.push(`/checkavailability/₹{tour.slug}`)
  }
>
  Check Availability
</button>

              {/* FEATURES */}

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <FaHotel />
                  <span>Hotel Included</span>
                </div>

                <div className={styles.featureItem}>
                  <FaUtensils />
                  <span>
                    Breakfast Included
                  </span>
                </div>

                <div className={styles.featureItem}>
                  <FaWifi />
                  <span>Free Wifi</span>
                </div>
              </div>

              {/* PRICING */}

              <div className={styles.infoBox}>
                <h5>Pricing Details</h5>

                <div
                  className={
                    styles.priceDetail
                  }
                >
                  <span>Adult</span>

                  <strong>
                   ₹
                    {
                      tour.pricing?.adult
                        ?.discountedPrice
                    }
                  </strong>
                </div>

                <div
                  className={
                    styles.priceDetail
                  }
                >
                  <span>Child</span>

                  <strong>
                    ₹
                    {
                      tour.pricing?.child
                        ?.discountedPrice
                    }
                  </strong>
                </div>

                <div
                  className={
                    styles.priceDetail
                  }
                >
                  <span>Youth</span>

                  <strong>
                    ₹
                    {
                      tour.pricing?.youth
                        ?.discountedPrice
                    }
                  </strong>
                </div>
              </div>

              {/* DATES */}

              <div className={styles.infoBox}>
                <h5>Available Dates</h5>

                {tour.availableDates?.map(
                  (date, index) => (
                    <div
                      key={index}
                      className={
                        styles.dateItem
                      }
                    >
                      {new Date(
                        date
                      ).toLocaleDateString()}
                    </div>
                  )
                )}
              </div>

              {/* TAGS */}

              <div className={styles.infoBox}>
                <h5>Special Tags</h5>

                <div className="d-flex gap-2 flex-wrap">
                  {tour.isFeatured && (
                    <span className="badge bg-warning text-dark">
                      Featured
                    </span>
                  )}

                  {tour.isPopular && (
                    <span className="badge bg-danger">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
