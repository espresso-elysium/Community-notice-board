import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Events from './pages/Events';
import BuySell from './pages/BuySell';
import Contacts from './pages/Contacts';
import PostNotice from './pages/PostNotice';
import Admin from './pages/Admin';
import Feedback from './pages/Feedback';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full max-w-3xl mx-auto px-2 sm:px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/buy-sell" element={<BuySell />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/post" element={<PostNotice />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
