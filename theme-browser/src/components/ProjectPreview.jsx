import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import themelogo from "../assets/static-images/themelogo.png"; 

const ProjectPreview = () => {
  const { id } = useParams(); // project ID from URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`);
        const data = await res.json();
        setProject(data.project);
      } catch (err) {
        console.error("Failed to fetch project:", err);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div className="text-center mt-10 text-white">Loading...</div>;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Live Demo */}
      <div className="w-1/2 h-full bg-gray-200 flex items-center justify-center">
        <iframe
          src={project.demoLink}
          title="Live Demo"
          className="w-full h-full border-none"
        />
      </div>

      {/* Right Side – Details */}
<div
  className="w-1/2 relative flex flex-col items-center justify-center text-white text-center p-8 bg-gradient-to-br from-[#1e1e2f] via-[#28293d] to-[#1e1e2f] animate-pulse"
>
  {/* Top-right checkbox icon */}
  <div className="absolute top-4 right-4">
    <input type="checkbox" className="w-5 h-5 accent-white" />
  </div>

  {/* Project Info */}
  <h2 className="text-xl font-bold">{project.projectName}</h2>
  <p className="text-sm text-gray-300 mb-4">@{project.uploader}</p>

  <a
    href={project.sourceCodeLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 bg-gray-200 text-black px-6 py-2 rounded-full hover:bg-white transition"
  >
    Source Code
  </a>

  {/* Description box */}
  <div className="mt-4 bg-gray-200 text-black p-4 rounded-lg w-3/4">
    <p className="font-semibold">Description by the uploader</p>
    <p className="text-sm mt-1">{project.description}</p>
  </div>

  {/* App Logo at bottom */}
  <div className="absolute bottom-4">
    <img src={themelogo} alt="App Logo" className="h-8 w-auto opacity-80" />
  </div>
</div>
    </div>
  );
};

export default ProjectPreview;