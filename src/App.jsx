import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';

function App() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  return (
    <Router>
      <div className={`flex flex-col max-h-[100vh] bg-white
        ${isSidebarHidden ? 'md:pl-[52px]  md:pr-[52px]' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex overflow-y-auto">
          {!isSidebarHidden && (
            <div className="md:hidden md:opacity-0 md:pointer-events-none" onClick={toggleSidebar}></div>
          )}
          <Sidebar isSidebarHidden={isSidebarHidden} toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch" element={<VideoPage />} />
            <Route path="/account" element={<div className="p-4">Account Page</div>} /> {/* Placeholder */}
            <Route path="/shorts" element={<div className="p-4">Shorts Page</div>} />
            <Route path="/subscriptions" element={<div className="p-4">Subscriptions Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;