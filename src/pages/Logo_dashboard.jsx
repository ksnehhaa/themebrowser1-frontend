import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UploadModal from '../components/UploadModal';

const Logo_dashboard = () => {
  const [showUploads, setShowUploads] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleUploads = () => setShowUploads(!showUploads);

  const fetchProjects = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/category/logo");
    setProjects(res.data.uploads || []);
  } catch (error) {
    console.error("❌ Failed to fetch Logo projects:", error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProjects();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-y-auto">
      {/* ✅ Upload Modal */}
      {showUploadModal && (
        <UploadModal
          closeModal={() => {
            setShowUploadModal(false);
            fetchProjects(); // Refresh data after upload
          }}
          defaultCategory="logo"
        />
      )}

      {/* ✅ Top Bar */}
      <div className="flex items-center justify-between px-6 pt-6 sticky top-0 bg-gray-900 z-30 gap-4 flex-wrap md:flex-nowrap">
        <div className="flex-1 flex justify-center">
          <div className="flex items-center bg-gray-800 text-white rounded-full overflow-hidden shadow-md w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-full rounded-l-full outline-none bg-gray-800 text-white placeholder-gray-400 hover:bg-gray-700 transition duration-200"
            />
            <button
              className="px-6 py-2 border-l border-gray-700 text-sm font-semibold text-gray-300 hover:text-white transition duration-200"
              onClick={() => setShowUploadModal(true)}
            >
              Upload Your Work
            </button>
          </div>
        </div>

        {/* ☰ Dropdown */}
        <div className="relative ml-4 cursor-pointer">
          <div
            className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition duration-200"
            onClick={toggleUploads}
          >
            ☰
          </div>
          {showUploads && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg z-10">
              <p className="p-3 hover:bg-gray-700 cursor-pointer">Home</p>
              <p className="p-3 hover:bg-gray-700 cursor-pointer">Dashboard</p>
              <p
                className="p-3 hover:bg-gray-700 cursor-pointer"
                onClick={() => setShowUploadModal(true)}
              >
                Upload Your Work
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Project Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-6 pb-32 max-w-screen-xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-400 col-span-full">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No Logo projects found.
          </p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="bg-gray-800 rounded-lg mb-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300 break-inside-avoid overflow-hidden"
            >
              {/* ✅ Image Preview */}
              {project.fileUrl ? (
                <img
                  src={project.fileUrl}
                  alt={project.projectName}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
                  No Image Available
                </div>
              )}

              {/* ✅ Project Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.projectName}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.description}</p>

                {project.keywords?.length > 0 && (
                  <div className="text-xs text-gray-500 mb-2 italic">
                    Keywords: {project.keywords.join(', ')}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm"
                    >
                      🔗 View Demo
                    </a>
                  )}
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline text-sm"
                    >
                      🧠 Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Logo_dashboard;