// YourUploads.jsx
import React, { useState, useEffect } from 'react';
import { FaUpload } from 'react-icons/fa';
import axios from 'axios';
import UploadModal from '../components/UploadModal'; //  Make sure the path is correct

const YourUploads = () => {
  const [showUploads, setShowUploads] = useState(false);
  const [showUploadBox, setShowUploadBox] = useState(false);
  const [uploads, setUploads] = useState([]); // Stores user uploads

  const toggleUploads = () => {
    setShowUploads(!showUploads);
  };

  const toggleUploadBox = () => {
    setShowUploadBox(!showUploadBox);
  };

  //  Fetch user's uploaded projects
  const fetchUserUploads = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:5000/api/user/uploads', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUploads(res.data.uploads || []);
  } catch (error) {
    console.error('❌ Failed to fetch uploads:', error);
  }
};

  //  Add new upload at top after success
  const addNewUpload = (newUpload) => {
    setUploads((prev) => [newUpload, ...prev]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUserUploads();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-y-auto">
      {/* Top bar */}
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
              onClick={toggleUploads}
            >
              Your Uploads
            </button>
          </div>
        </div>

        <div className="relative ml-4 cursor-pointer">
          <div
            className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition duration-200"
            onClick={toggleUploads}
          >
            ☰
          </div>
          {showUploads && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg z-10">
              {['Home', 'Dashboard', 'Website', 'Logo', 'Graphic Designs', 'Text Effects', 'Animations', 'Create with AI'].map((item) => (
                <p key={item} className="p-3 hover:bg-gray-700 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Heading and Upload Button */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Uploads</h2>
        <button
          onClick={toggleUploadBox}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200"
        >
          <FaUpload /> Upload Your Work
        </button>
      </div>

      {/* Upload Modal */}
      {showUploadBox && (
        <UploadModal
          closeModal={toggleUploadBox}
          onUploadSuccess={addNewUpload}
        />
      )}

      {/* Display User Uploads */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-6 pb-32 max-w-screen-xl mx-auto">
        {uploads.length > 0 ? (
          uploads.map((item, index) => (
            <div
              key={item._id || index}
              className="bg-gray-800 rounded-lg mb-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300 break-inside-avoid"
            >
              {item.fileUrl && (
                <img
                  src={item.fileUrl}
                  alt={item.projectName}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{item.projectName}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                {item.demoLink && (
                  <a
                    href={item.demoLink}
                    className="text-blue-400 text-sm hover:underline block mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-sm col-span-full mt-10">
            No uploads yet. Click "Upload Your Work" to get started.
          </p>
        )}
      </div>
    </div>
  );
};

export default YourUploads;