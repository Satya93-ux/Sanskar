import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Messages from './pages/Messages';
import Toppers from './pages/Toppers';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Apply from './pages/Apply';
import PrintApplication from './pages/PrintApplication';
import Downloads from './pages/Downloads';
import Gallery from './pages/Gallery';
import Results from './pages/Results';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/sanskar-valley-school">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
        
        {/* Sticky Header / Navbar with dropdowns */}
        <Navbar />

        {/* Main Content Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About routes */}
            <Route path="/about" element={<About />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/toppers" element={<Toppers />} />
            
            {/* Academics & Facilities */}
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            
            {/* Apply Online routes */}
            <Route path="/apply" element={<Apply />} />
            <Route path="/print-application" element={<PrintApplication />} />
            
            {/* Resources & Records */}
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/results" element={<Results />} />
            <Route path="/alumni" element={<Alumni />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Default fallback redirects to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer with custom forms & branches links */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
