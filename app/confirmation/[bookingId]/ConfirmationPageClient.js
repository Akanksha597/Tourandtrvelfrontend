"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams, useRouter } from "next/navigation";

import {
  FaCheckCircle,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaMoneyBillWave,
  FaArrowLeft,
  FaGlobe,
} from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import styles from "../../Styles/ConfirmationPage.module.css";

import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

export default function ConfirmationPageClient() {
  const { bookingId } = useParams();

  const router = useRouter();

  const [booking, setBooking] = useState(null);

  const [loading, setLoading] = useState(true);

  // ======================================================
  // FETCH BOOKING
  // ======================================================

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const { data } = await axios.get(
        `https://tourapi.shreemwell.in/api/v1/booking/single/${bookingId}`
      );

      if (data.success) {
        setBooking(data.data);
      }
    } catch (error) {
      console.log(error);

      toast.error("Booking not found");
    } finally {
      setLoading(false);
    }
  };

  // ======================================================
  // PRICE CALCULATION
  // ======================================================

  const adultPrice =
    booking?.packageId?.pricing?.adult
      ?.discountedPrice || 749;

  const youthPrice =
    booking?.packageId?.pricing?.youth
      ?.discountedPrice || 679;

  const childPrice =
    booking?.packageId?.pricing?.child
      ?.discountedPrice || 499;

  const adultCount =
    booking?.guests?.adult || 0;

  const youthCount =
    booking?.guests?.youth || 0;

  const childCount =
    booking?.guests?.child || 0;

  const adultTotal =
    adultPrice * adultCount;

  const youthTotal =
    youthPrice * youthCount;

  const childTotal =
    childPrice * childCount;

  // ======================================================
  // DOWNLOAD PDF BILL
  // ======================================================

const downloadBill = () => {
  const doc = new jsPDF();

  // =====================================================
  // COLORS
  // =====================================================

  const primary = [13, 110, 253];
  const dark = [33, 37, 41];
  const gray = [108, 117, 125];
  const light = [248, 249, 250];

  // =====================================================
  // HEADER
  // =====================================================

  doc.setFillColor(...primary);

  doc.rect(0, 0, 210, 45, "F");

  doc.setTextColor(255, 255, 255);

  doc.setFontSize(26);

  doc.setFont("helvetica", "bold");

  doc.text("TRAVEL INVOICE", 65, 22);

  doc.setFontSize(12);

  doc.setFont("helvetica", "normal");

  doc.text(
    "Luxury Travel Booking Confirmation",
    58,
    32
  );

  // =====================================================
  // BOOKING INFO
  // =====================================================

  doc.setTextColor(...dark);

  doc.setFontSize(18);

  doc.setFont("helvetica", "bold");

  doc.text("Invoice Details", 14, 60);

  doc.setDrawColor(230);

  doc.line(14, 64, 196, 64);

  doc.setFontSize(12);

  doc.setFont("helvetica", "normal");

  doc.text(
    `Invoice ID : ${booking?._id}`,
    14,
    75
  );

  doc.text(
    `Booking Date : ${new Date().toLocaleDateString()}`,
    14,
    83
  );

  doc.text(
    `Travel Date : ${new Date(
      booking?.travelDate
    ).toLocaleDateString()}`,
    14,
    91
  );

  doc.text(
    `Package Type : ${booking?.packageType}`,
    14,
    99
  );

  // =====================================================
  // CUSTOMER INFO
  // =====================================================

  doc.setFontSize(18);

  doc.setFont("helvetica", "bold");

  doc.text("Customer Information", 14, 118);

  doc.line(14, 122, 196, 122);

  doc.setFontSize(12);

  doc.setFont("helvetica", "normal");

  doc.text(
    `Name : ${booking?.firstName} ${booking?.lastName}`,
    14,
    134
  );

  doc.text(
    `Email : ${booking?.email}`,
    14,
    142
  );

  doc.text(
    `Address : ${booking?.address}`,
    14,
    150
  );

  doc.text(
    `Payment Mode : ${booking?.paymentMode}`,
    14,
    158
  );

  // =====================================================
  // PRICE VALUES
  // =====================================================

  const adultQty =
    booking?.guests?.adult || 0;

  const youthQty =
    booking?.guests?.youth || 0;

  const childQty =
    booking?.guests?.child || 0;

  const adultPrice =
    booking?.packageId?.pricing?.adult
      ?.discountedPrice || 749;

  const youthPrice =
    booking?.packageId?.pricing?.youth
      ?.discountedPrice || 679;

  const childPrice =
    booking?.packageId?.pricing?.child
      ?.discountedPrice || 499;

  // =====================================================
  // TABLE
  // =====================================================

  autoTable(doc, {
    startY: 175,

    theme: "plain",

    head: [
      [
        "Traveler Type",
        "Qty",
        "Price",
        "Total",
      ],
    ],

    body: [
      [
        "Adult Travelers",

        adultQty,

        `Rs. ${adultPrice}`,

        `Rs. ${
          adultQty * adultPrice
        }`,
      ],

      [
        "Youth Travelers",

        youthQty,

        `Rs. ${youthPrice}`,

        `Rs. ${
          youthQty * youthPrice
        }`,
      ],

      [
        "Child Travelers",

        childQty,

        `Rs. ${childPrice}`,

        `Rs. ${
          childQty * childPrice
        }`,
      ],
    ],

    styles: {
      fontSize: 12,

      cellPadding: 10,

      valign: "middle",

      textColor: dark,
    },

    headStyles: {
      fillColor: primary,

      textColor: [255, 255, 255],

      fontStyle: "bold",

      halign: "center",

      fontSize: 13,
    },

    bodyStyles: {
      fillColor: [255, 255, 255],
    },

    alternateRowStyles: {
      fillColor: light,
    },

    columnStyles: {
      0: {
        halign: "left",
      },

      1: {
        halign: "center",
      },

      2: {
        halign: "center",
      },

      3: {
        halign: "center",
      },
    },

    margin: {
      left: 14,
      right: 14,
    },
  });

  // =====================================================
  // GRAND TOTAL BOX
  // =====================================================

  const finalY =
    doc.lastAutoTable.finalY + 18;

  doc.setFillColor(245, 247, 250);

  doc.roundedRect(
    110,
    finalY,
    86,
    24,
    4,
    4,
    "F"
  );

  doc.setFontSize(14);

  doc.setFont("helvetica", "bold");

  doc.setTextColor(...dark);

  doc.text(
    "Grand Total",
    120,
    finalY + 15
  );

  doc.setTextColor(...primary);

  doc.text(
    `Rs. ${booking?.totalAmount}`,
    160,
    finalY + 15
  );

  // =====================================================
  // THANK YOU BOX
  // =====================================================

  doc.setFillColor(240, 248, 255);

  doc.roundedRect(
    14,
    finalY + 40,
    182,
    28,
    4,
    4,
    "F"
  );

  doc.setTextColor(...gray);

  doc.setFontSize(11);

  doc.setFont("helvetica", "italic");

  doc.text(
    "Thank you for booking with us. Have a safe and memorable journey.",
    22,
    finalY + 57
  );

  // =====================================================
  // FOOTER
  // =====================================================

  doc.setFontSize(10);

  doc.setTextColor(150);

  doc.text(
    "This is a computer generated invoice.",
    14,
    287
  );

  // =====================================================
  // SAVE PDF
  // =====================================================

  doc.save(
    `Travel-Invoice-${booking?._id}.pdf`
  );
};

  // ======================================================
  // LOADER
  // ======================================================

  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  // ======================================================
  // UI
  // ======================================================

  return (
    <>
      <div className={styles.page}>
        <div className={styles.overlay}></div>

        <div className={styles.container}>
          {/* SUCCESS CARD */}

          <div className={styles.successCard}>
            <div className={styles.checkIcon}>
              <FaCheckCircle />
            </div>

            <h1>Booking Confirmed 🎉</h1>

            <p>
              Thank you for choosing our
              luxury travel experience.
              Your booking has been
              successfully confirmed.
            </p>

            <div className={styles.bookingId}>
              Booking ID :
              <span>{booking?._id}</span>
            </div>
          </div>

          {/* DETAILS CARD */}

          <div className={styles.detailsCard}>
            <div className={styles.header}>
              <h2>Booking Details</h2>

              <button
                onClick={downloadBill}
                className={styles.downloadBtn}
              >
                <FaDownload />
                Download Invoice
              </button>
            </div>

            <div className={styles.grid}>
              {/* CUSTOMER INFO */}

              <div className={styles.infoBox}>
                <h3>Customer Info</h3>

                <div className={styles.item}>
                  <FaEnvelope />

                  <div>
                    <span>Email</span>

                    <p>{booking?.email}</p>
                  </div>
                </div>

                <div className={styles.item}>
                  <FaMapMarkerAlt />

                  <div>
                    <span>Address</span>

                    <p>{booking?.address}</p>
                  </div>
                </div>

                <div className={styles.item}>
                  <FaMoneyBillWave />

                  <div>
                    <span>Payment Mode</span>

                    <p>
                      {booking?.paymentMode}
                    </p>
                  </div>
                </div>
              </div>

              {/* TRAVEL INFO */}

              <div className={styles.infoBox}>
                <h3>Travel Info</h3>

                <div className={styles.item}>
                  <FaGlobe />

                  <div>
                    <span>Tour Package</span>

                    <p>
                      {
                        booking?.packageId
                          ?.title
                      }
                    </p>
                  </div>
                </div>

                <div className={styles.item}>
                  <FaCalendarAlt />

                  <div>
                    <span>Travel Date</span>

                    <p>
                      {new Date(
                        booking?.travelDate
                      ).toDateString()}
                    </p>
                  </div>
                </div>

                <div className={styles.item}>
                  <FaUsers />

                  <div>
                    <span>Guests</span>

                    <p>
                      Adult :{" "}
                      {
                        booking?.guests
                          ?.adult
                      }
                      {" | "}
                      Youth :{" "}
                      {
                        booking?.guests
                          ?.youth
                      }
                      {" | "}
                      Child :{" "}
                      {
                        booking?.guests
                          ?.child
                      }
                    </p>
                  </div>
                </div>

                <div className={styles.item}>
                  <FaMoneyBillWave />

                  <div>
                    <span>Total Amount</span>

                    <p>
                      ₹
                      {booking?.totalAmount}
                    </p>
                  </div>
                </div>
              </div>
            </div>

       

            {/* THANK YOU */}

            <div className={styles.thankYou}>
              ✨ Thank you for booking
              with us. Have a safe,
              luxurious and memorable
              journey.
            </div>

            {/* HOME BUTTON */}

            <button
              className={styles.homeBtn}
              onClick={() =>
                router.push("/")
              }
            >
              <FaArrowLeft />
              Back To Home
            </button>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" />
    </>
  );
}