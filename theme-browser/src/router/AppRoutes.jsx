import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; 
import AuthSection from '../components/AuthSection';
import Dashboard from '../pages/Dashboard'; 
import Website_dashboard from '../pages/Website_dashboard'; 
import YourUploads from '../pages/YourUploads';
import Uiux_dashboard from '../pages/Uiux_dashboard'; 
import Animation_dashboard from '../pages/Animation_dashboard'; 
import TextEffect_dashboard from '../pages/TextEffect_dashboard'; 
import Logo_dashboard from '../pages/Logo_dashboard'; 
import GraphicDesign_dashboard from '../pages/GraphicDesign_dashboard';
import AboutUs from '../pages/AboutUs';
import Resources from '../pages/Resources';
import TermsPolicy from '../pages/TermsPolicy';
import ProjectPreview from '../components/ProjectPreview';
import ContactUs from '../pages/ContactUs';
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthSection />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/dashboard/website" element={<Website_dashboard />} /> 
        <Route path="/dashboard/your-uploads" element={<YourUploads />} /> 
        <Route path="/dashboard/animations" element={<Animation_dashboard />} /> 
        <Route path="/dashboard/text-effects" element={<TextEffect_dashboard />} />
        <Route path="/dashboard/uiux" element={<Uiux_dashboard />} /> 
        <Route path="/dashboard/logos" element={<Logo_dashboard />} /> 
        <Route path="/dashboard/graphic" element={<GraphicDesign_dashboard />} /> 
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-policy" element={<TermsPolicy />} />
        <Route path="/dashboard/your-uploads" element={<YourUploads />} /> 
        <Route path="/project" element={<ProjectPreview />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
// Note: Make sure the paths to your components match your folder structure.
