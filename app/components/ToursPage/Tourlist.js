"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../../Styles/Tourtravel.module.css";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaThLarge,
  FaList,
  FaCamera,
  FaFilter,
  FaTimes,
} from "react-icons/fa";

export default function TourList() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewMode, setViewMode] = useState("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // FILTER STATES
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [maxPrice, setMaxPrice] = useState(50000);
  const [search, setSearch] = useState("");

  // FETCH TOURS
  const fetchTours = async () => {
    try {
      const { data } = await axios.get(
        "https://tourapi.shreemwell.in/api/v1/favorite-tour/all-tours"
        // "http://localhost:5016/api/v1/favorite-tour/all-tours"
      );

      if (data?.success) {
        setTours(data.data);
        setFilteredTours(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // DYNAMIC FILTERS
  const countries = useMemo(() => {
    const counts = {};

    tours.forEach((tour) => {
      if (tour.country) {
        counts[tour.country] = (counts[tour.country] || 0) + 1;
      }
    });

    return Object.entries(counts);
  }, [tours]);

  const activities = useMemo(() => {
    const counts = {};

    tours.forEach((tour) => {
      tour.highlights?.forEach((item) => {
        counts[item] = (counts[item] || 0) + 1;
      });
    });

    return Object.entries(counts);
  }, [tours]);

  // CLEAR FILTERS
  const clearFilters = () => {
    setSelectedCountries([]);
    setSelectedActivities([]);
    setSelectedTypes([]);
    setSelectedTags([]);
    setMaxPrice(50000);
    setSearch("");
  };

  // FILTER HANDLERS
  const handleCountryChange = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((item) => item !== country)
        : [...prev, country]
    );
  };

  const handleActivityChange = (activity) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((item) => item !== activity)
        : [...prev, activity]
    );
  };

  // FILTER LOGIC
  useEffect(() => {
    let updatedTours = [...tours];

    if (search) {
      updatedTours = updatedTours.filter((tour) =>
        tour.title?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCountries.length > 0) {
      updatedTours = updatedTours.filter((tour) =>
        selectedCountries.includes(tour.country)
      );
    }

    if (selectedActivities.length > 0) {
      updatedTours = updatedTours.filter((tour) =>
        tour.highlights?.some((item) =>
          selectedActivities.includes(item)
        )
      );
    }

    updatedTours = updatedTours.filter(
      (tour) =>
        tour.pricing?.adult?.discountedPrice <= maxPrice
    );

    setFilteredTours(updatedTours);
  }, [
    tours,
    search,
    selectedCountries,
    selectedActivities,
    selectedTypes,
    selectedTags,
    maxPrice,
  ]);

  return (
    <div className={styles.pageWrapper}>

      {/* MOBILE FILTER BUTTON */}
      <div className={styles.mobileFilterBar}>
        <button onClick={() => setMobileFilterOpen(true)}>
          <FaFilter />
          Filters
        </button>
      </div>

      {/* MOBILE FILTER DRAWER */}
      <div
        className={`${styles.mobileOverlay} ${
          mobileFilterOpen ? styles.showOverlay : ""
        }`}
      >
        <div
          className={`${styles.mobileDrawer} ${
            mobileFilterOpen ? styles.showDrawer : ""
          }`}
        >
          <div className={styles.mobileTop}>
            <h4>Filters</h4>

            <button
              className={styles.closeBtn}
              onClick={() => setMobileFilterOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          <button
            className={styles.clearFilterBtn}
            onClick={clearFilters}
          >
            Clear All Filters
          </button>

          {/* DESTINATION */}
          <div className={styles.filterSection}>
            <h5>Destination</h5>

            {countries.map(([country, count]) => (
              <label key={country} className={styles.checkboxItem}>
                <div>
                  <input
                    type="checkbox"
                    checked={selectedCountries.includes(country)}
                    onChange={() => handleCountryChange(country)}
                  />

                  <span>{country}</span>
                </div>

                <small>{count}</small>
              </label>
            ))}
          </div>

          {/* PRICE */}
          <div className={styles.filterSection}>
            <h5>Price Range</h5>

            <input
              type="range"
              min="0"
              max="50000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className={styles.rangeSlider}
            />

            <div className={styles.rangeText}>
              <span>₹0</span>
              <span>₹{maxPrice}</span>
            </div>
          </div>

          {/* ACTIVITIES */}
          <div className={styles.filterSection}>
            <h5>Activities</h5>

            {activities.map(([activity, count]) => (
              <label key={activity} className={styles.checkboxItem}>
                <div>
                  <input
                    type="checkbox"
                    checked={selectedActivities.includes(activity)}
                    onChange={() => handleActivityChange(activity)}
                  />

                  <span>{activity}</span>
                </div>

                <small>{count}</small>
              </label>
            ))}
          </div>

          <button
            className={styles.applyBtn}
            onClick={() => setMobileFilterOpen(false)}
          >
            Apply Filters
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">

          {/* DESKTOP SIDEBAR */}
          <div className="col-xl-3 col-lg-4 d-none d-lg-block">
            <div className={styles.sidebarCard}>

              <div className={styles.sidebarTop}>
                <h4>Filters</h4>

                <button
                  className={styles.clearBtn}
                  onClick={clearFilters}
                >
                  Clear
                </button>
              </div>

              {/* DESTINATION */}
              <div className={styles.filterSection}>
                <h5>Destination</h5>

                {countries.map(([country, count]) => (
                  <label key={country} className={styles.checkboxItem}>
                    <div>
                      <input
                        type="checkbox"
                        checked={selectedCountries.includes(country)}
                        onChange={() => handleCountryChange(country)}
                      />

                      <span>{country}</span>
                    </div>

                    <small>{count}</small>
                  </label>
                ))}
              </div>

              {/* PRICE */}
              <div className={styles.filterSection}>
                <h5>Price Range</h5>

                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className={styles.rangeSlider}
                />

                <div className={styles.rangeText}>
                  <span>₹0</span>
                  <span>₹{maxPrice}</span>
                </div>
              </div>

              {/* ACTIVITIES */}
              <div className={styles.filterSection}>
                <h5>Activities</h5>

                {activities.map(([activity, count]) => (
                  <label key={activity} className={styles.checkboxItem}>
                    <div>
                      <input
                        type="checkbox"
                        checked={selectedActivities.includes(activity)}
                        onChange={() => handleActivityChange(activity)}
                      />

                      <span>{activity}</span>
                    </div>

                    <small>{count}</small>
                  </label>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-9 col-lg-8">

            {/* TOP BAR */}
            <div className={styles.topBar}>

              <div className={styles.searchBox}>
                <FaSearch />

                <input
                  type="text"
                  placeholder="Search tours..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className={styles.viewBtns}>
                <button
                  className={
                    viewMode === "grid"
                      ? styles.activeView
                      : ""
                  }
                  onClick={() => setViewMode("grid")}
                >
                  <FaThLarge />
                </button>

                <button
                  className={
                    viewMode === "list"
                      ? styles.activeView
                      : ""
                  }
                  onClick={() => setViewMode("list")}
                >
                  <FaList />
                </button>
              </div>

            </div>

            {/* TOURS */}
            <div className="row">

              {loading ? (
                <div className={styles.loader}>
                  Loading Tours...
                </div>
              ) : filteredTours.length === 0 ? (
                <div className={styles.noData}>
                  No Tours Found
                </div>
              ) : (
                filteredTours.map((tour) => (
                  <div
                    key={tour._id}
                    className={
                      viewMode === "grid"
                        ? "col-xl-4 col-md-6 mb-4"
                        : "col-12 mb-4"
                    }
                  >

                    <div className={styles.tourCard}>

                      <div className={styles.imageWrapper}>
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className={styles.tourImage}
                        />

                        <div className={styles.priceBadge}>
                          ₹
                          {tour.pricing?.adult?.discountedPrice}
                        </div>
                      </div>

                      <div className={styles.cardBody}>

                        <div className={styles.location}>
                          <FaMapMarkerAlt />
                          {tour.country}
                        </div>

                        <h3>{tour.title}</h3>

                        <div className={styles.metaRow}>
                          <span>
                            <FaClock />
                            5 Days
                          </span>

                          <span>
                            <FaUsers />
                            2-8 Guests
                          </span>

                          <span>
                            <FaStar />
                            4.9
                          </span>
                        </div>

                        <div className={styles.cardBottom}>
                          <div>
                            <small>Starting From</small>

                            <h4>
                              ₹
                              {tour.pricing?.adult?.discountedPrice}
                            </h4>
                          </div>

                          <Link
                            href={`/TourDetails/${tour.slug}`}
                          >
                            <button className={styles.bookBtn}>
                              Book Now
                            </button>
                          </Link>
                        </div>

                      </div>

                    </div>

                  </div>
                ))
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}