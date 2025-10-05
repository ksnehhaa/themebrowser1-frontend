import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function TermsPolicy() {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Terms Policy</h1>
          <button
            onClick={toggleTheme}
            className="text-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <p className="text-lg mb-8">
          Theme Browser respects your privacy. This policy outlines how we collect, use, and protect your information.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. What Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address (for account creation and login)</li>
            <li>Uploaded project content (e.g., links, files, titles)</li>
            <li>Basic usage data (e.g., page visits or session activity, if analytics are enabled)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To display your uploaded content on relevant dashboards</li>
            <li>To improve the overall experience of the platform</li>
            <li>To respond to user suggestions, bugs, or support requests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Third-Party Services</h2>
          <p>
            We may use services like Cloudinary (for file uploads) and Hugging Face (for AI generation). These services may temporarily store or process data as needed for functionality. We do not share your data with advertisers or external parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement basic security measures to protect your data. However, please note that no platform is entirely immune to risks, and users should avoid sharing sensitive personal details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Children's Privacy</h2>
          <p>
            Theme Browser is intended for users aged 13 and above. We do not knowingly collect data from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p>
            This privacy policy may be updated from time to time. We recommend checking this page periodically to stay informed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about your privacy, feel free to reach us at:
            <br />
            <a href="mailto:themebrowsermanagement@gmail.com" className="underline text-blue-600 dark:text-blue-400">
              themebrowsermanagement@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
