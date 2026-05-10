"use client";

import React, { useState } from "react";

import axios from "axios";

import { useParams, useRouter } from "next/navigation";

import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStickyNote,
  FaCreditCard,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import styles from "../../Styles/BillingPage.module.css";

export default function BillingPageClient() {
  const { bookingId } = useParams();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    additionalNote: "",
    paymentMode: "cod",
  });

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
  // VALIDATION
  // ======================================================

  const validateForm = () => {
    if (!form.firstName.trim()) {
      toast.error("First name is required");
      return false;
    }

    if (!form.lastName.trim()) {
      toast.error("Last name is required");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Enter valid email address");
      return false;
    }

    if (!form.address.trim()) {
      toast.error("Address is required");
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

      const { data } = await axios.put(
        `https://tourapi.shreemwell.in/api/v1/booking/billing/${bookingId}`,
        form
      );

      if (data.success) {
        toast.success(
          "Billing Details Added Successfully"
        );

        setTimeout(() => {
          router.push(
            `/confirmation/${bookingId}`
          );
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
            <div className={styles.leftContent}>
              <span className={styles.tag}>
                Secure Checkout
              </span>

              <h1>
                Complete Your
                <br />
                Billing Details
              </h1>

              <p>
                Enter your billing information
                to securely confirm your luxury
                travel booking experience.
              </p>

              <div className={styles.featureBox}>
                <div>
                  <FaShieldAlt />
                  <span>
                    100% Secure Payment
                  </span>
                </div>

                <div>
                  <FaCreditCard />
                  <span>
                    Multiple Payment Methods
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            <div className={styles.card}>
              <h2>Billing Information</h2>

              {/* NAME */}
              <div className={styles.grid}>
                <div className={styles.inputGroup}>
                  <label>
                    <FaUser />
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>
                    <FaUser />
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className={styles.inputGroup}>
                <label>
                  <FaEnvelope />
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {/* ADDRESS */}
              <div className={styles.inputGroup}>
                <label>
                  <FaMapMarkerAlt />
                  Address
                </label>

                <textarea
                  rows="4"
                  name="address"
                  placeholder="Enter full address"
                  value={form.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* NOTE */}
              <div className={styles.inputGroup}>
                <label>
                  <FaStickyNote />
                  Additional Note
                </label>

                <textarea
                  rows="3"
                  name="additionalNote"
                  placeholder="Optional note..."
                  value={form.additionalNote}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* PAYMENT */}
              <div className={styles.inputGroup}>
                <label>
                  <FaCreditCard />
                  Payment Method
                </label>

                <select
                  name="paymentMode"
                  value={form.paymentMode}
                  onChange={handleChange}
                >
                  <option value="cod">
                    Cash On Delivery
                  </option>

                  <option value="upi">
                    UPI Payment
                  </option>

                  <option value="card">
                    Debit / Credit Card
                  </option>

                  <option value="online">
                    Online Banking
                  </option>
                </select>
              </div>

              {/* BUTTON */}
              <button
                className={styles.submitBtn}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : "Continue To Confirmation"}

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