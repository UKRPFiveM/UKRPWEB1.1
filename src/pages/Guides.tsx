import React from 'react';
import { motion } from 'framer-motion';
import { Ambulance, Slice as Police, BookOpen } from 'lucide-react';

const Guides = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Training Information</h1>
        <p className="text-xl text-gray-300">Join our emergency services</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
        >
          <div className="flex items-center mb-6">
            <Police className="w-10 h-10 text-blue-400 mr-4" />
            <h2 className="text-2xl font-bold">Metropolitan Police Service (MPS ERPT)</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Self-Learning Process</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-1">
                <li>Review the training Google Slides</li>
                <li>Complete the assessment quiz</li>
                <li>Use the <code>/check-assessment</code> command in Discord</li>
                <li>ERPT roles will be automatically assigned upon passing</li>
              </ol>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://docs.google.com/presentation/d/1J6lBgBYWil5EOU4meapVokOoYiIl3xiQyAEYAC3FA50/edit?usp=sharing', '_blank')}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                View Training Google Slides
              </button>
              <button 
                onClick={() => window.open('https://forms.gle/1VsQ7Xs5DTyD9zJAA', '_blank')}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Take Assessment Quiz
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
        >
          <div className="flex items-center mb-6">
            <Ambulance className="w-10 h-10 text-red-400 mr-4" />
            <h2 className="text-2xl font-bold">London Ambulance Service (LAS)</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Good level of English</li>
                <li>Working microphone and headset</li>
                <li>Positive attitude and willingness to learn</li>
              </ul>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How to apply for training</h3>
              <p className="text-gray-300">Click the button below to join the LAS training thread in our Discord server. You'll be notified when the next training session is available.</p>
            </div>

            <button 
              onClick={() => window.open('https://discord.com/channels/1190797643744542870/1310734062263992380', '_blank')}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Join LAS Training Thread
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guides;