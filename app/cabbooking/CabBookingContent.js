"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Styles/cabbooking.module.css";
import { useSearchParams } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaCarSide,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

export default function CabBookingContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    email: "",
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: "",
    carPackageId: "",
  });


  const calculatePrice = (pkg) => {
  if (!pkg) return 0;

  let base = 0;

  // OUTSTATION
  if (pkg.serviceType === "OUTSTATION") {
    base = (pkg.distanceKm || 0) * (pkg.pricePerKm || 0);
  }

  // CORPORATE
  if (pkg.serviceType === "CORPORATE") {
    base = pkg.dailyRate || pkg.hourlyRate || 0;
  }

  const extras =
    (pkg.driverAllowance || 0) +
    (pkg.tollCharge || 0) +
    (pkg.extraCharge || 0) +
    (pkg.nightCharge || 0);

  return base + extras;
};

  // FETCH PACKAGE
  useEffect(() => {
    const fetchPackage = async () => {
      if (!id) return;

      try {
        const res = await axios.get(
          `https://tourapi.shreemwell.in/api/car-package/${id}`
        );

        const pkg = res.data?.data;

        setSelectedPackage(pkg);

        // ✅ AUTO FILL FIX
        setForm((prev) => ({
          ...prev,
          carPackageId: pkg._id,
          pickupLocation: pkg.from || "",
          dropLocation: pkg.to || "",
        }));
      } catch (err) {
        toast.error("Failed to load package");
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validateForm = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.customerName) return "Enter name";

    if (!form.phone || !phoneRegex.test(form.phone)) {
      return "Enter valid mobile number";
    }

    if (form.email && !emailRegex.test(form.email)) {
      return "Enter valid email";
    }

    if (!form.pickupLocation) return "Pickup required";
    if (!form.dropLocation) return "Drop required";
    if (!form.pickupDate) return "Date required";
    if (!form.pickupTime) return "Time required";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      await axios.post(
        "https://tourapi.shreemwell.in/api/car-booking/create",
        form
      );

      toast.success("Booking Confirmed 🚖");
      setSuccess(true);
    } catch (err) {
      toast.error("Booking Failed");
    }
  };

  // THANK YOU PAGE
  if (success) {
    return (
      <div className={styles.thankYouWrapper}>
        <ToastContainer />

        <div className={styles.thankYouCard}>
          <h1>🎉 Thank You!</h1>
          <p>Your cab booking is confirmed</p>

          <button
            className={styles.btn}
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <ToastContainer />

      <div className="container py-5">

        <div className={styles.header}>
          <h1>Confirm Your Ride</h1>
          <p>Fast & Safe Cab Booking</p>
        </div>

        <div className="row g-4">

          {/* FORM */}
          <div className="col-lg-7">

            <div className={styles.formCard}>

              <form onSubmit={handleSubmit}>

                <h4>Passenger Details</h4>

                <div className={styles.grid}>

                  <div className={styles.inputBox}>
                    <FaUser />
                    <input
                      name="customerName"
                      placeholder="Full Name"
                      value={form.customerName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputBox}>
                    <FaPhone />
                    <input
                      name="phone"
                      placeholder="Mobile"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <h4>Trip Details</h4>

                <div className={styles.grid}>

                  {/* ✅ FIXED VALUE BINDING */}
                  <div className={styles.inputBox}>
                    <FaMapMarkerAlt />
                    <input
                      name="pickupLocation"
                      placeholder="Pickup"
                      value={form.pickupLocation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputBox}>
                    <FaMapMarkerAlt />
                    <input
                      name="dropLocation"
                      placeholder="Drop"
                      value={form.dropLocation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputBox}>
                    <FaCalendarAlt />
                    <input
                      type="date"
                      name="pickupDate"
                      value={form.pickupDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputBox}>
                    <FaClock />
                    <input
                      type="time"
                      name="pickupTime"
                      value={form.pickupTime}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <button className={styles.btn}>
                  Confirm Booking
                </button>

              </form>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="col-lg-5">

            <div className={styles.summaryCard}>

              <h3>Selected Cab</h3>

              {loading ? (
                <p>Loading...</p>
              ) : selectedPackage ? (
                <>
                  <div className={styles.carBox}>
                    <FaCarSide />
                    <div>
                      <h4>{selectedPackage.vehicleName}</h4>
                      <p>{selectedPackage.vehicleType}</p>
                    </div>
                  </div>

                  <div className={styles.route}>
                    <span>{selectedPackage.from}</span>
                    <span>→</span>
                    <span>{selectedPackage.to}</span>
                  </div>

                  <div className={styles.features}>
                    <div>Seats: {selectedPackage.seats}</div>
                    <div>Luggage: {selectedPackage.luggage}</div>
                    <div>AC: {selectedPackage.airCondition ? "Yes" : "No"}</div>
                  </div>

                   <div className={styles.priceBox}>
        <h2>₹{calculatePrice(selectedPackage)}</h2>
        <small>Total Estimated Fare</small>
      </div>

                </>
              ) : (
                <p>No package selected</p>
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}