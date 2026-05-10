// components/ContactForm/ContactForm.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../Styles/ContactSection.module.css";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  // ================= STATE =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    const { name, email, phone, message } = formData;

    // NAME
    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return false;
    }

    // EMAIL
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    // PHONE
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!phone.trim()) {
      toast.error("Phone number is required");
      return false;
    }

    if (!phoneRegex.test(phone)) {
      toast.error(
        "Phone number must contain 10 to 15 digits"
      );
      return false;
    }

    // MESSAGE
    if (!message.trim()) {
      toast.error("Message is required");
      return false;
    }

    if (message.trim().length < 5) {
      toast.error(
        "Message must be at least 5 characters"
      );
      return false;
    }

    return true;
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATE
    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch(
        "https://tourapi.shreemwell.in/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // RESPONSE CHECK
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      // SUCCESS
      if (data.success) {
        toast.success("Message sent successfully!");

        // RESET FORM
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(
          data.message || "Something went wrong"
        );
      }
    } catch (error) {
      console.log("CONTACT FORM ERROR:", error);

      // NETWORK ERROR
      if (error.message === "Failed to fetch") {
        toast.error(
          "Backend server not responding"
        );
      } else {
        toast.error(
          error.message || "Server Error"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactWrapper}>
            
            {/* LEFT IMAGE */}
            <div className={styles.imageBox}>
              <Image
                src="/Assests/Contactus/aboutusimage.jpg"
                alt="Contact"
                fill
                className={styles.contactImage}
              />

              <div className={styles.overlay}>
                <h2>Let’s Talk</h2>
                <p>
                  We’re here to help you with your
                  travel plans and queries.
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className={styles.formBox}>
              <div className={styles.heading}>
                <span>Contact Us</span>
                <h2>Get In Touch</h2>
                <p>
                  Fill out the form and our team
                  will contact you shortly.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className={styles.form}
              >
                {/* NAME */}
                <div className={styles.inputGroup}>
                  <FaUser className={styles.icon} />

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* EMAIL */}
                <div className={styles.inputGroup}>
                  <FaEnvelope
                    className={styles.icon}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* PHONE */}
                <div className={styles.inputGroup}>
                  <FaPhoneAlt
                    className={styles.icon}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* MESSAGE */}
                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}

                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}