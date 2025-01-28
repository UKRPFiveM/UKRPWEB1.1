import React from 'react';
import { motion } from 'framer-motion';
import { Disc as Discord, GamepadIcon, Heart, ChevronDown } from 'lucide-react';

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Updated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Animated particles/lines effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl font-black mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                UKRP
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
              Experience the most immersive British roleplay server
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <button 
              onClick={() => window.open('https://discord.gg/MdNEKgQjsG', '_blank')}
              className="px-12 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-bold text-lg 
                transform hover:scale-105 transition-all duration-300 
                shadow-[0_0_20px_rgba(88,101,242,0.3)] 
                hover:shadow-[0_0_30px_rgba(88,101,242,0.5)]
                flex items-center gap-2"
            >
              <Discord className="w-5 h-5" />
              Join our Discord
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToContent}
        >
          <ChevronDown className="w-8 h-8 text-white/50 hover:text-white transition-colors" />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-2xl border border-white/5 backdrop-blur-xl"
            >
              <GamepadIcon className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Immersive Roleplay</h2>
              <p className="text-gray-400 mb-6">Experience realistic roleplay scenarios with our custom made scripts and our in house made vehicles</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-2xl border border-white/5 backdrop-blur-xl"
            >
              <Discord className="w-12 h-12 text-[#5865F2] mb-6" />
              <h2 className="text-2xl font-bold mb-4">Active Community</h2>
              <p className="text-gray-400 mb-6">Join our friendly community of roleplayers and participate in regular events.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-2xl border border-white/5 backdrop-blur-xl"
            >
              <Heart className="w-12 h-12 text-pink-400 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Support Us</h2>
              <p className="text-gray-400 mb-6">Help us grow and improve with new features, vehicles, and content.</p>
              <button 
                onClick={() => window.open('https://ukrp.sell.app/', '_blank')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 
                  text-white px-6 py-3 rounded-xl transition-all duration-300"
              >
                Donate
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;