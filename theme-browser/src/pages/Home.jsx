import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

import themelogo from "../assets/static-images/themelogo.png";
import logovid from "../assets/static-images/logovid.mp4";
import dashboardvid2 from "../assets/static-images/dashboardvid2.mp4";

import img1 from "../assets/static-images/laptopxl1.jpg";
import img3 from "../assets/static-images/laptopxl3.jpg";
import img5 from "../assets/static-images/laptopxl5.jpg";
import img6 from "../assets/static-images/laptopxl6.jpg";
import img7 from "../assets/static-images/laptopxl7.jpg";
import img8 from "../assets/static-images/laptopxl8.jpg";
import img9 from "../assets/static-images/laptopxl9.jpg";
import img11 from "../assets/static-images/laptopxl11.png";

import AuthSection from "../components/AuthSection.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      return prevIndexes.map((index) => (index + 1) % 5);
    });
  };

  const images = [img11, img6, img7, img8, img9];
  const positions = ["center", "left", "left1", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="flex justify-start gap-6 p-4 bg-transparent absolute top-0 left-0 w-full z-20 text-white">
        <Link
          to="/"
          className="hover:underline hover:text-gray-300 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="hover:underline hover:text-gray-300 transition duration-300"
        >
          About Us
        </Link>
        <Link
          to="/resources"
          className="hover:underline hover:text-gray-300 transition duration-300"
        >
          Resources
        </Link>
        <Link
          to="/terms-policy"
          className="hover:underline hover:text-gray-300 transition duration-300"
        >
          Terms Policy
        </Link>
        <Link
          to="/contact"
          className="hover:underline hover:text-gray-300 transition duration-300"
        >
          Contact Us
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={logovid}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
        <div className="relative z-20">
          <img src={themelogo} alt="Theme Browser Logo" className="h-80 w-50" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-white text-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={dashboardvid2}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 px-4">
          <h2 className="text-4xl sm:text-3xl font-semibold mb-2">
            Your creative companion for seamless projects.
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Bring your ideas to life with Theme Browser. <br />
            Explore , Customize and Create.
          </p>

          <button
            className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all mb-4"
            onClick={() => navigate("/auth")}
          >
            Start Exploring
          </button>

          <div className="flex items-center flex-col justify-center h-[400px] w-full relative overflow-hidden">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`img-${index}`}
                className="rounded-[15px]"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{
                  width: "50%",
                  position: "absolute",
                  maxWidth: "350px",
                }}
              />
            ))}
            <button
              className="text-white mt-[350px] bg-slate-700 rounded-md py-2 px-4"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={dashboardvid2}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-6 py-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold"
            >
              Know how it works
            </motion.h2>

            {["Create Your Free Account", "Explore by Category", "Access & Build Faster"].map(
              (title, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-2">
                    {i === 0 &&
                      "Unlock a curated library of tools, templates, and resources made for developers and designers."}
                    {i === 1 &&
                      "Browse through UI kits, portfolios, dev tools, and more — all smartly categorized for easy access."}
                    {i === 2 &&
                      "Pick your favorite design, access the code or live preview, and bring your ideas to life effortlessly."}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 gap-[3px]"
          >
            {[img11, img1, img5, img3].map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`collage-${index}`}
                className="w-full h-auto object-cover rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105 mx-auto"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Signup/Login Form */}
      <AuthSection />

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600 text-xs max-w-screen">
        <p>Theme Browser, All Rights Reserved, 2025</p>
        <p>
          This site is a student project and is not affiliated with any brand or entity mentioned herein.
        </p>
      </footer>
    </div>
  );
};

export default Home;