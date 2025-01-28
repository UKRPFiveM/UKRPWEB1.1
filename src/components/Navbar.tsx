import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Users, UserCog, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - changes based on screen size */}
          <NavLink to="/" className="flex items-center">
            <span className="text-xl font-bold">
              <span className="sm:hidden">UKRP</span>
              <span className="hidden sm:inline">United Kingdom Roleplay FiveM</span>
            </span>
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-600/50 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden sm:flex space-x-4">
            <NavLink 
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'}`
              }
            >
              <span>Home</span>
            </NavLink>
            
            <NavLink 
              to="/command-members"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'}`
              }
            >
              <Users className="w-4 h-4" />
              <span>Command</span>
            </NavLink>
            
            <NavLink 
              to="/staff"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'}`
              }
            >
              <UserCog className="w-4 h-4" />
              <span>Staff</span>
            </NavLink>
            
            <NavLink 
              to="/guides"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'}`
              }
            >
              <BookOpen className="w-4 h-4" />
              <span>Apply</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.2 }}
        className="sm:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 backdrop-blur-lg">
          <NavLink 
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium transition-colors
              ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'}`
            }
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/command-members"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium transition-colors
              ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'}`
            }
          >
            Command
          </NavLink>
          
          <NavLink 
            to="/staff"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium transition-colors
              ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'}`
            }
          >
            Staff
          </NavLink>
          
          <NavLink 
            to="/guides"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium transition-colors
              ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/50 hover:text-white'}`
            }
          >
            Apply
          </NavLink>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;