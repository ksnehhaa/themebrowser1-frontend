import React, { useEffect, useState } from "react";
import themelogo from "../assets/static-images/themelogo.png";
import dashboardvid4 from "../assets/static-images/dashboardvid4.mp4";
import { FaUserAstronaut } from "react-icons/fa";
import {
  IconBooks,
  IconStack,
  IconEditCircle,
  IconPalette,
  IconTypography,
  IconCircuitResistor,
  IconTools,
  IconUpload,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const dashboardItems = [
  { id: 1, name: "Website", path: "website", icon: <IconBooks size={60} color="#5087f1" /> },
  { id: 2, name: "Animations", path: "animations", icon: <IconStack size={60} color="#f35487" /> },
  { id: 3, name: "Logos", path: "logos", icon: <IconEditCircle size={60} color="#8050f1" /> },
  { id: 4, name: "Graphic Design", path: "graphic", icon: <IconPalette size={60} color="#f26e5c" /> },
  { id: 5, name: "Text Effects", path: "text-effects", icon: <IconTypography size={60} color="#fb7e7c" /> },
  { id: 6, name: "Ui/Ux", path: "uiux", icon: <IconCircuitResistor size={60} color="#8050f1" /> },
  { id: 7, name: "Generate With AI (Feature will be available soon)", path: "GenerateWithAI", icon: <IconTools size={60} color="#8050f1" /> },
  { id: 8, name: "Upload", path: "your-uploads", icon: <IconUpload size={60} color="#23a121" /> },
];

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found.");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok && data?.user?.username) {
          setUsername(data.user.username);
        } else {
          console.error("Auth failed:", data?.message || data);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  const handleCardClick = (path) => {
    navigate(`/dashboard/${path}`);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={dashboardvid4}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🔲 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

      {/* 🔲 Main Content */}
      <div className="relative z-20 flex flex-col min-h-screen p-6 md:p-12">
        {/* Header with Username */}
        <header className="flex items-center mb-10 space-x-4 text-white">
          <FaUserAstronaut size={32} className="text-pink-400 drop-shadow-lg animate-pulse" />
          <span className="text-lg font-medium border-b border-white border-opacity-40 select-none">
            {username || <span className="italic text-gray-300">Loading...</span>}
          </span>
        </header>

        {/* Dashboard Grid */}
        <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {dashboardItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.path)}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl aspect-square flex items-center justify-center cursor-pointer overflow-hidden group transform transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              style={{
                minWidth: "120px",
                minHeight: "120px",
                maxWidth: "150px",
                maxHeight: "150px",
              }}
            >
              {item.icon}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center rounded-2xl transition duration-300">
                <span className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 select-none">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-auto flex justify-center py-10">
          <img
            src={themelogo}
            alt="Theme Browser logo"
            className="h-32 w-auto object-contain"
          />
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;