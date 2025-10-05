# Copilot Instructions for Theme Browser

## Project Overview
Theme Browser is a full-stack MERN platform for uploading, exploring, and sharing creative projects (websites, logos, UI/UX, animations). It is designed for open collaboration and live previews.

## Architecture
- **Frontend:** React.js (Vite), Tailwind CSS, Axios
  - Located in `theme-browser/src/` and `src/`
  - Components: `components/`, pages: `pages/`, routing: `router/`, features: `features/`
- **Backend:** Node.js, Express.js, MongoDB
  - Located in `server/`
  - Structure: `controllers/`, `models/`, `routes/`, `middleware/`, `utils/`, `config/`
  - Auth, file upload, password reset, and email utilities are modularized

## Developer Workflows
- **Install dependencies:**
  - Frontend: `npm install` in `theme-browser/` and/or root
  - Backend: `npm install` in `server/`
- **Run frontend:**
  - `npm run dev` (Vite) in `theme-browser/` or root
- **Run backend:**
  - `node server.js` in `server/`
- **Environment setup:**
  - Create `.env` in `server/` (see `README.md` for required variables)
- **Build:**
  - Frontend: `npm run build` (Vite)
- **Testing:**
  - No standard test suite detected; check for scripts in `package.json`

## Conventions & Patterns
- **MERN separation:** Keep API logic in `server/`, UI logic in `theme-browser/` and/or `src/`
- **Controllers** handle business logic, **routes** define API endpoints
- **Middleware** for auth and uploads
- **Models** use Mongoose for MongoDB
- **Frontend** uses React functional components, Tailwind for styling
- **Axios** for API calls (see `services/axiosInstance.js`)
- **File uploads** use Cloudinary (see `config/cloudinary.js`)
- **Auth** uses JWT and custom middleware

## Integration Points
- **API endpoints:** Defined in `server/routes/`
- **Frontend-backend communication:** via Axios, endpoints in `.env` or constants
- **Cloudinary:** for media uploads
- **Firebase:** for some upload features (see `features/auth/firebaseConfig.js`)

## Examples
- To add a new API route: create controller in `server/controllers/`, add route in `server/routes/`, update frontend API call in `services/axiosInstance.js`
- To add a new page: create React component in `pages/`, add route in `router/AppRoutes.jsx`

## Contribution
- Fork, branch, PR workflow
- See `README.md` for more details

---
For questions about conventions or missing documentation, check `README.md` in both root and `server/`.
