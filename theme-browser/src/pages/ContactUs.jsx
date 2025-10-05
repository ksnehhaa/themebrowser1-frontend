import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactUs() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 transition duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <button
            onClick={toggleTheme}
            className="text-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <p className="text-lg mb-6">
          We'd love to hear from you! Whether it's feedback, questions, or collaboration ideas — feel free to reach out.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl text-blue-500" />
            <span className="text-lg">themebrowsermanagement@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl text-green-500" />
            <span className="text-lg">ksnehaswn@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-xl text-blue-700" />
            <a
              href="https://www.linkedin.com/in/kumari-sneha-68760627a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:text-blue-400"
            >
              linkedin.com/in/kumari-sneha-68760627a
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaGithub className="text-xl text-gray-700 dark:text-gray-300" />
            <a
              href="https://github.com/ksnehhaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:text-gray-400"
            >
              github.com/ksnehhaa (@ksnehhaa)
            </a>
          </div>
        </div>

        <p className="mt-16 text-sm text-gray-500 dark:text-gray-400 text-center">
          — Made with ♥ by Kumari Sneha for Theme Browser.
        </p>
      </div>
    </div>
  );
}
