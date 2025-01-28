import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CommandMembers from './pages/CommandMembers';
import Staff from './pages/Staff';
import Guides from './pages/Guides';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/command-members" element={<CommandMembers />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;