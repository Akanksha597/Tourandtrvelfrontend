"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import styles from "../Styles/cabpackage.module.css";
import { useRouter } from "next/navigation";

import {
  FaCarSide,
  FaUsers,
  FaSuitcase,
  FaMapMarkerAlt,
  FaSearch,
  FaFilter,
  FaRoad,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

export default function CabPackagesPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [vehicleType, setVehicleType] = useState("All");
  const [fromCity, setFromCity] = useState("All");
  const [toCity, setToCity] = useState("All");
  const [serviceType, setServiceType] = useState("All");

  // MOBILE FILTER
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const router = useRouter();

  // FETCH DATA
  const fetchPackages = async () => {
    try {
      const res = await axios.get(
        "https://tourapi.shreemwell.in/api/car-package/"
      );

      const data = res.data?.packages || res.data || [];

      setPackages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  // OPTIONS
  const vehicleTypes = useMemo(() => {
    return [
      "All",
      ...new Set(packages.map((i) => i.vehicleType).filter(Boolean)),
    ];
  }, [packages]);

  const fromCities = useMemo(() => {
    return [
      "All",
      ...new Set(packages.map((i) => i.from).filter(Boolean)),
    ];
  }, [packages]);

  const toCities = useMemo(() => {
    return [
      "All",
      ...new Set(packages.map((i) => i.to).filter(Boolean)),
    ];
  }, [packages]);

  // FILTER
  const filteredPackages = useMemo(() => {
    return packages.filter((item) => {
      const searchText = search.toLowerCase();

      const searchMatch =
        (item.vehicleName || "")
          .toLowerCase()
          .includes(searchText) ||
        (item.from || "")
          .toLowerCase()
          .includes(searchText) ||
        (item.to || "")
          .toLowerCase()
          .includes(searchText) ||
        (item.packageName || "")
          .toLowerCase()
          .includes(searchText);

      const vehicleMatch =
        vehicleType === "All" ||
        item.vehicleType === vehicleType;

      const fromMatch =
        fromCity === "All" ||
        item.from === fromCity;

      const toMatch =
        toCity === "All" ||
        item.to === toCity;

      const serviceMatch =
        serviceType === "All" ||
        item.serviceType === serviceType;

      return (
        searchMatch &&
        vehicleMatch &&
        fromMatch &&
        toMatch &&
        serviceMatch
      );
    });
  }, [
    packages,
    search,
    vehicleType,
    fromCity,
    toCity,
    serviceType,
  ]);

  // BOOK
  const handleBookNow = (item) => {
    router.push(`/cabbooking?id=${item._id}`);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className="container py-5">

        {/* HEADER */}
        <div className={styles.header}>
          <span>Premium Cab Booking Services</span>

          <h1>Cab Packages</h1>

          <p>
            Corporate, Airport & Outstation Cab
            Booking With Premium Vehicles
          </p>
        </div>

        {/* MOBILE FILTER BUTTON */}
        <div className={styles.mobileFilterBtnWrap}>
          <button
            className={styles.mobileFilterBtn}
            onClick={() =>
              setShowMobileFilter(true)
            }
          >
            <FaFilter />
            Filters
          </button>
        </div>

        {/* DESKTOP FILTER */}
        <div className={styles.desktopFilter}>
          <div className={styles.filterCard}>
            <div className="row g-3">

              {/* SEARCH */}
              <div className="col-lg-3">
                <div className={styles.inputBox}>
                  <FaSearch />

                  <input
                    placeholder="Search Packages..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div className="col-lg-2">
                <div className={styles.selectBox}>
                  <FaFilter />

                  <select
                    value={serviceType}
                    onChange={(e) =>
                      setServiceType(
                        e.target.value
                      )
                    }
                  >
                    <option value="All">
                      All Services
                    </option>

                    <option value="OUTSTATION">
                      Outstation
                    </option>

                    <option value="CORPORATE">
                      Corporate
                    </option>
                  </select>
                </div>
              </div>

              {/* FROM */}
              <div className="col-lg-2">
                <div className={styles.selectBox}>
                  <FaMapMarkerAlt />

                  <select
                    value={fromCity}
                    onChange={(e) =>
                      setFromCity(
                        e.target.value
                      )
                    }
                  >
                    {fromCities.map((c, i) => (
                      <option key={i}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* TO */}
              <div className="col-lg-2">
                <div className={styles.selectBox}>
                  <FaRoad />

                  <select
                    value={toCity}
                    onChange={(e) =>
                      setToCity(
                        e.target.value
                      )
                    }
                  >
                    {toCities.map((c, i) => (
                      <option key={i}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* VEHICLE */}
              <div className="col-lg-3">
                <div className={styles.selectBox}>
                  <FaCarSide />

                  <select
                    value={vehicleType}
                    onChange={(e) =>
                      setVehicleType(
                        e.target.value
                      )
                    }
                  >
                    {vehicleTypes.map((t, i) => (
                      <option key={i}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MOBILE FILTER SIDEBAR */}
        <div
          className={`${styles.mobileFilterOverlay} ${
            showMobileFilter
              ? styles.showFilter
              : ""
          }`}
          onClick={() =>
            setShowMobileFilter(false)
          }
        />

        <div
          className={`${styles.mobileFilterSidebar} ${
            showMobileFilter
              ? styles.showSidebar
              : ""
          }`}
        >

          {/* TOP */}
          <div className={styles.mobileFilterTop}>
            <h3>Filter Packages</h3>

            <button
              onClick={() =>
                setShowMobileFilter(false)
              }
            >
              <FaTimes />
            </button>
          </div>

          {/* SEARCH */}
          <div className={styles.mobileFilterItem}>
            <label>Search</label>

            <div className={styles.inputBox}>
              <FaSearch />

              <input
                placeholder="Search..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>
          </div>

          {/* SERVICE */}
          <div className={styles.mobileFilterItem}>
            <label>Service Type</label>

            <div className={styles.selectBox}>
              <FaFilter />

              <select
                value={serviceType}
                onChange={(e) =>
                  setServiceType(
                    e.target.value
                  )
                }
              >
                <option value="All">
                  All Services
                </option>

                <option value="OUTSTATION">
                  Outstation
                </option>

                <option value="CORPORATE">
                  Corporate
                </option>
              </select>
            </div>
          </div>

          {/* FROM */}
          <div className={styles.mobileFilterItem}>
            <label>From City</label>

            <div className={styles.selectBox}>
              <FaMapMarkerAlt />

              <select
                value={fromCity}
                onChange={(e) =>
                  setFromCity(
                    e.target.value
                  )
                }
              >
                {fromCities.map((c, i) => (
                  <option key={i}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* TO */}
          <div className={styles.mobileFilterItem}>
            <label>To City</label>

            <div className={styles.selectBox}>
              <FaRoad />

              <select
                value={toCity}
                onChange={(e) =>
                  setToCity(
                    e.target.value
                  )
                }
              >
                {toCities.map((c, i) => (
                  <option key={i}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* VEHICLE */}
          <div className={styles.mobileFilterItem}>
            <label>Vehicle Type</label>

            <div className={styles.selectBox}>
              <FaCarSide />

              <select
                value={vehicleType}
                onChange={(e) =>
                  setVehicleType(
                    e.target.value
                  )
                }
              >
                {vehicleTypes.map((t, i) => (
                  <option key={i}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* APPLY */}
          <button
            className={styles.applyBtn}
            onClick={() =>
              setShowMobileFilter(false)
            }
          >
            Apply Filters
          </button>

        </div>

        {/* CONTENT */}
        {loading ? (
          <div className={styles.loading}>
            Loading...
          </div>
        ) : filteredPackages.length === 0 ? (
          <div className={styles.loading}>
            No Packages Found
          </div>
        ) : (
          <div className="row g-4">

            {filteredPackages.map((item) => {

              const isOutstation =
                item.serviceType ===
                "OUTSTATION";

              let baseFare = isOutstation
                ? (item.distanceKm || 0) *
                  (item.pricePerKm || 0)
                : item.dailyRate ||
                  item.hourlyRate ||
                  0;

              const extra =
                (item.extraCharge || 0) +
                (item.driverAllowance || 0) +
                (item.tollCharge || 0) +
                (item.nightCharge || 0);

              const total =
                baseFare + extra;

              return (
                <div
                  className="col-lg-4 col-md-6"
                  key={item._id}
                >

                  <div className={styles.card}>

                    <div className={styles.badge}>
                      {item.serviceType}
                    </div>

                    <h3>
                      {item.vehicleName ||
                        "N/A"}
                    </h3>

                    <p>
                      {item.vehicleType ||
                        ""}
                    </p>

                    {/* ROUTE */}
                    <div className={styles.route}>
                      {isOutstation ? (
                        <>
                          <span>
                            {item.from || "-"}
                          </span>

                          <FaArrowRight />

                          <span>
                            {item.to || "-"}
                          </span>
                        </>
                      ) : (
                        <span>
                          {item.packageName ||
                            "Corporate Package"}
                        </span>
                      )}
                    </div>

                    {/* FEATURES */}
                    <div
                      className={
                        styles.featureGrid
                      }
                    >
                      <div>
                        <FaUsers />
                        {item.seats || 0} Seats
                      </div>

                      <div>
                        <FaSuitcase />
                        {item.luggage || 0} Bags
                      </div>

                      <div>
                        <FaCarSide />
                        AC
                      </div>

                      <div>
                        <FaRoad />
                        Ready
                      </div>
                    </div>

                    {/* PRICE */}
                    <div
                      className={
                        styles.priceBox
                      }
                    >
                      <div>
                        <small>
                          Base Fare
                        </small>

                        <h5>
                          ₹{baseFare}
                        </h5>
                      </div>

                      <div>
                        <small>
                          Total Fare
                        </small>

                        <h5>
                          ₹{total}
                        </h5>
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div
                      className={
                        styles.totalSection
                      }
                    >
                      <h2>₹{total}</h2>

                      <button
                        className={
                          styles.bookBtn
                        }
                        onClick={() =>
                          handleBookNow(
                            item
                          )
                        }
                      >
                        Book Now
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}