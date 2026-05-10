"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams, useRouter } from "next/navigation";

import {
  FaCalendarAlt,
  FaUsers,
  FaChild,
  FaMoneyBillWave,
  FaArrowRight,
  FaShieldAlt,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import styles from "../../Styles/CheckAvailability.module.css";

export default function CheckAvailabilityClient() {
  const { slug } = useParams();

  const router = useRouter();

  const [tour, setTour] = useState(null);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    travelDate: "",
    packageType: "standard",

    adult: 1,
    youth: 1,
    child: 0,
  });

  // ======================================================
  // FETCH TOUR
  // ======================================================

  useEffect(() => {
    fetchTour();
  }, []);

  const fetchTour = async () => {
    try {
      const { data } = await axios.get(
        `https://tourapi.shreemwell.in/api/v1/favorite-tour/tour-by-slug/${slug}`
      );

      if (data.success) {
        setTour(data.data);

        console.log(data.data);
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed to load tour");
    }
  };

  // ======================================================
  // HANDLE CHANGE
  // ======================================================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ======================================================
  // PRICE CALCULATION
  // ======================================================

  const adultPrice =
    tour?.pricing?.adult?.discountedPrice || 749;

  const youthPrice =
    tour?.pricing?.youth?.discountedPrice || 679;

  const childPrice =
    tour?.pricing?.child?.discountedPrice || 499;

  const adultTotal =
    adultPrice * Number(form.adult);

  const youthTotal =
    youthPrice * Number(form.youth);

  const childTotal =
    childPrice * Number(form.child);

  const totalAmount =
    adultTotal +
    youthTotal +
    childTotal;

  // ======================================================
  // VALIDATION
  // ======================================================

  const validateForm = () => {
    if (!form.travelDate) {
      toast.error("Please select travel date");
      return false;
    }

    if (
      Number(form.adult) <= 0 &&
      Number(form.youth) <= 0
    ) {
      toast.error(
        "At least 1 traveler required"
      );

      return false;
    }

    if (!tour?._id) {
      toast.error("Tour not found");

      return false;
    }

    return true;
  };

  // ======================================================
  // SUBMIT
  // ======================================================

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;

      setLoading(true);

      const payload = {
        packageId: tour._id,

        travelDate: form.travelDate,

        packageType: form.packageType,

        guests: {
          adult: Number(form.adult),

          youth: Number(form.youth),

          child: Number(form.child),
        },

        totalAmount,
      };

      console.log(payload);

      const { data } = await axios.post(
        "https://tourapi.shreemwell.in/api/v1/booking/check-availability",
        payload
      );

      if (data.success) {
        toast.success(
          "Availability Confirmed Successfully"
        );

        setTimeout(() => {
          router.push(`/billing/${data.bookingId}`);
        }, 1500);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.overlay}></div>

        <div className={styles.wrapper}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <div className={styles.imageBox}>
              <img
                src={tour?.image}
                alt={tour?.title}
              />

              <div className={styles.badge}>
                <FaStar />
                Luxury Tour
              </div>
            </div>

            <div className={styles.info}>
              <h1>{tour?.title}</h1>

              <div className={styles.location}>
                <FaMapMarkerAlt />

                <span>
                  {tour?.location}
                </span>
              </div>

              <p>
                {tour?.shortDescription}
              </p>

              <div className={styles.features}>
                <div>
                  <FaShieldAlt />
                  Instant Confirmation
                </div>

                <div>
                  <FaMoneyBillWave />
                  Best Price Guarantee
                </div>

                <div>
                  <FaCalendarAlt />
                  Flexible Dates
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            <div className={styles.card}>
              <h2>Book Your Dream Trip</h2>

              {/* DATE */}
              <div className={styles.inputGroup}>
                <label>
                  <FaCalendarAlt />
                  Travel Date
                </label>

                <input
                  type="date"
                  name="travelDate"
                  value={form.travelDate}
                  onChange={handleChange}
                />
              </div>

              {/* PACKAGE TYPE */}
              <div className={styles.inputGroup}>
                <label>
                  Package Type
                </label>

                <select
                  name="packageType"
                  value={form.packageType}
                  onChange={handleChange}
                >
                  <option value="standard">
                    Standard
                  </option>

                  <option value="premium">
                    Premium
                  </option>

                  <option value="luxury">
                    Luxury
                  </option>
                </select>
              </div>

              {/* GUESTS */}
              <div className={styles.guestGrid}>
                {/* ADULT */}
                <div className={styles.guestCard}>
                  <div className={styles.guestTop}>
                    <FaUsers />

                    <div>
                      <h4>Adult</h4>

                      <span>
                        ₹{adultPrice} / person
                      </span>
                    </div>
                  </div>

                  <input
                    type="number"
                    name="adult"
                    min="1"
                    value={form.adult}
                    onChange={handleChange}
                  />
                </div>

                {/* YOUTH */}
                <div className={styles.guestCard}>
                  <div className={styles.guestTop}>
                    <FaUsers />

                    <div>
                      <h4>Youth</h4>

                      <span>
                        ₹{youthPrice} / person
                      </span>
                    </div>
                  </div>

                  <input
                    type="number"
                    name="youth"
                    min="0"
                    value={form.youth}
                    onChange={handleChange}
                  />
                </div>

                {/* CHILD */}
                <div className={styles.guestCard}>
                  <div className={styles.guestTop}>
                    <FaChild />

                    <div>
                      <h4>Child</h4>

                      <span>
                        ₹{childPrice} / person
                      </span>
                    </div>
                  </div>

                  <input
                    type="number"
                    name="child"
                    min="0"
                    value={form.child}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* SUMMARY */}
              <div className={styles.summary}>
                <h3>Booking Summary</h3>

                <div className={styles.row}>
                  <span>
                    Adult × {form.adult}
                  </span>

                  <span>
                    ₹{adultTotal}
                  </span>
                </div>

                <div className={styles.row}>
                  <span>
                    Youth × {form.youth}
                  </span>

                  <span>
                    ₹{youthTotal}
                  </span>
                </div>

                <div className={styles.row}>
                  <span>
                    Child × {form.child}
                  </span>

                  <span>
                    ₹{childTotal}
                  </span>
                </div>

                <div className={styles.divider}></div>

                <div
                  className={`${styles.row} ${styles.total}`}
                >
                  <span>Total</span>

                  <span>
                    ₹{totalAmount}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className={styles.bookBtn}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : "Proceed To Checkout"}

                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </>
  );
}