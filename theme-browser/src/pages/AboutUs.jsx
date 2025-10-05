import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function AboutUs() {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 md:p-12 lg:p-20 font-sans transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center w-full">
            About Us
          </h1>
          <button
            onClick={toggleTheme}
            className="ml-auto text-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <p className="text-xl text-center mb-12 italic">
          Your friendly companion to bring your dream projects to life.
        </p>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What is Theme Browser?</h2>
          <p className="text-lg leading-relaxed">
            Theme Browser is a platform built to empower students, developers, and creatives
            by offering easy access to project ideas, design inspiration, and free tools.
            Whether you're a beginner or an enthusiast, you’ll find a space here to build,
            share, and grow.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Why It Was Created</h2>
          <p className="text-lg leading-relaxed">
            I’m a student myself. While trying to build my own projects, I often found it
            difficult to access small features or get simple ideas implemented easily. That
            struggle made me think: what if there’s a platform where students can discover,
            upload, and generate creative projects effortlessly? Theme Browser was born
            from that need — to make project-building simpler and inspiring.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What You Can Do Here</h2>
          <ul className="list-disc pl-6 text-lg space-y-3">
            <li>
              <strong>Discover Real Projects:</strong> Browse live demos and designs in
              categories like Websites, Animations, Text Effects, UI/UX, Logos, and Graphic Design.
            </li>
            <li>
              <strong>Upload Your Work:</strong> Share GitHub links, live sites, Canva or
              Figma files, or upload your own assets.
            </li>
            <li>
              <strong>Access Free Tools:</strong> Curated resources for developers and designers,
              from open-source editors to animation libraries.
            </li>
            <li>
              <strong>Generate with AI (Coming Soon):</strong> Automatically create logos,
              illustrations, and images based on your prompt.
            </li>
            <li>
              <strong>More Features Coming:</strong> Performance testing, responsiveness checks,
              and real-time feedback tools are in the pipeline.
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What We Stand For</h2>
          <ul className="list-disc pl-6 text-lg space-y-3">
            <li><strong>Accessibility:</strong> Everything is free, forever.</li>
            <li><strong>Creativity:</strong> This is your space to explore and build fearlessly.</li>
            <li><strong>Student-Focused:</strong> Built by a student, with students in mind.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">
            Have questions or suggestions? Reach out to us at:<br />
            <a
              href="mailto:themebrowsermanagement@gmail.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              themebrowsermanagement@gmail.com
            </a>
          </p>
        </section>

        <p className="mt-20 text-sm text-center text-gray-500 dark:text-gray-400">
          — Made with dedication by a fellow student.
        </p>
      </div>
    </div>
  );
}
