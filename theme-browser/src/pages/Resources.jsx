import React, { useState, useEffect } from "react";
import { FaCode, FaPalette, FaTools, FaFont, FaPlug, FaIcons, FaSun, FaMoon } from "react-icons/fa";

const resources = [
  {
    category: "UI Kits",
    icon: <FaPalette />,
    items: [
      { title: "Flowbite", link: "https://flowbite.com", description: "Tailwind-based UI components." },
      { title: "Untitled UI", link: "https://www.untitledui.com", description: "Modern Figma UI kit." },
    ],
  },
  {
    category: "Developer Tools",
    icon: <FaCode />,
    items: [
      { title: "CodeSandbox", link: "https://codesandbox.io", description: "Online code editor for web apps." },
      { title: "StackBlitz", link: "https://stackblitz.com", description: "Instant dev environment in browser." },
    ],
  },
  {
    category: "Design Inspiration",
    icon: <FaTools />,
    items: [
      { title: "Figma", link: "https://figma.com", description: "Collaborative interface design tool." },
      { title: "Dribbble", link: "https://dribbble.com", description: "Showcase creative design portfolios." },
    ],
  },
  {
    category: "Fonts",
    icon: <FaFont />,
    items: [
      { title: "Google Fonts", link: "https://fonts.google.com", description: "Free and open-source fonts." },
    ],
  },
  {
    category: "Free APIs",
    icon: <FaPlug />,
    items: [
      { title: "Public APIs", link: "https://public-apis.io", description: "Open APIs for learning & projects." },
    ],
  },
  {
    category: "Icons",
    icon: <FaIcons />,
    items: [
      { title: "Remixicon", link: "https://remixicon.com", description: "Open-source icon set for web apps." },
      { title: "Tabler Icons", link: "https://tabler-icons.io", description: "Simple, consistent SVG icons." },
    ],
  },
];

export default function Resources() {
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
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Explore Free Resources</h1>
          <button
            onClick={toggleTheme}
            className="text-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <p className="text-lg mb-12 text-center">Your all-in-one toolkit to build faster, design better, and stay inspired — all curated by Theme Browser.</p>

        <div className="grid gap-12 md:grid-cols-2">
          {resources.map((section, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{section.icon}</div>
                <h2 className="text-xl font-semibold">{section.category}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((res, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b pb-2 border-gray-300 dark:border-gray-700">
                    <div>
                      <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        {res.title}
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{res.description}</p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">↗</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          Want to suggest a resource? Email us at <a href="mailto:themebrowsermanagement@gmail.com" className="underline">themebrowsermanagement@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
