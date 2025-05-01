import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Import Common Components
import Navbar from './components/CommonComponents/Navbar';
import Footer from './components/CommonComponents/Footer';
import AboutUs from './components/CommonComponents/AboutUs';

// Import Pages
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      
      <ToastContainer />
    </div>
  );
}

export default App;
