import { useState, useEffect } from 'react';
import axios from 'axios';
import { Moon, Sun, Loader2 } from 'lucide-react';

const UploadModal = ({ closeModal, defaultCategory = '' }) => {
  const [file, setFile] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    category: defaultCategory.toLowerCase(),
    projectName: '',
    description: '',
    keywords: '',
    demoLink: '',
    sourceLink: '',
  });

  useEffect(() => {
    if (defaultCategory) {
      setFormData((prev) => ({
        ...prev,
        category: defaultCategory.toLowerCase(),
      }));
    }
  }, [defaultCategory]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) return alert('Please log in to upload.');

    const data = new FormData();
    data.append('file', file);
    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, value)
    );

    setUploading(true);
    try {
      await axios.post('http://localhost:5000/api/upload', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('✅ Project uploaded successfully!');
      closeModal();
    } catch (err) {
      console.error('❌ Upload failed:', err);
      alert('Upload failed. Check console for errors.');
    } finally {
      setUploading(false);
    }
  };

  const isDesignCategory = ['logo', 'uiux', 'graphic'].includes(
    formData.category
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        className={`relative w-[500px] max-w-full p-6 rounded-2xl shadow-xl transition-all duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
            : 'bg-gradient-to-br from-white via-gray-100 to-white text-gray-800'
        }`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Upload Project</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            disabled={!!defaultCategory}
            className={`w-full border rounded px-3 py-2 cursor-pointer appearance-none pr-8 ${
              darkMode
                ? 'bg-gray-900 text-white border-gray-600'
                : 'bg-white text-gray-800 border-gray-300'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.75rem center',
              backgroundSize: '1.5em',
            }}
          >
            <option value="">Select category</option>
            <option value="website">🌐 Website</option>
            <option value="animation">🎞️ Animation</option>
            <option value="text-effect">✨ Text Effect</option>
            <option value="uiux">🖌️ UI/UX</option>
            <option value="logo">🧩 Logo</option>
            <option value="graphic">🎨 Graphic Design</option>
          </select>

          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            className="w-full border rounded px-3 py-2 bg-transparent backdrop-blur-md"
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows={3}
            className="w-full border rounded px-3 py-2 bg-transparent backdrop-blur-md"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="keywords"
            placeholder="Comma, separated, keywords"
            className="w-full border rounded px-3 py-2 bg-transparent backdrop-blur-md"
            onChange={handleChange}
          />

          <input
            type="url"
            name="demoLink"
            placeholder={
              isDesignCategory
                ? 'Show Design (Figma/Canva Link)'
                : 'Live Demo URL'
            }
            className="w-full border rounded px-3 py-2 bg-transparent backdrop-blur-md"
            onChange={handleChange}
          />

          {!isDesignCategory && (
            <input
              type="url"
              name="sourceLink"
              placeholder="Source Code URL"
              className="w-full border rounded px-3 py-2 bg-transparent backdrop-blur-md"
              onChange={handleChange}
            />
          )}

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border rounded px-3 py-2 file:bg-blue-500 file:text-white file:rounded file:px-4 file:py-2 file:border-0"
            required
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={closeModal}
              className={`px-4 py-2 rounded ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-black'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={uploading}
              className={`${
                uploading
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-950 hover:bg-blue-700'
              } text-white px-4 py-2 rounded shadow`}
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </form>

        {uploading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center rounded-2xl z-50">
            <Loader2 className="animate-spin w-10 h-10 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadModal;