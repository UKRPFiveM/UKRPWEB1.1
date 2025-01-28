import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const staffMembers = [
  {
    name: "Ross",
    role: "Founder",
    image: "https://cdn.discordapp.com/avatars/535547040399228929/cfb203a3249a7235d2f5e2b7fe3a1900.png?size=4096"
  },
  {
    name: "Jay",
    role: "Founder",
    image: "https://cdn.discordapp.com/avatars/1137069657526898818/8bab1792ef7555295d1cab04e85f10b2.png?size=4096"
  },
  {
    name: "Elon",
    role: "Events Coordinator",
    image: "https://cdn.discordapp.com/avatars/290871354520109056/8854a2fbded3b488ae17e9856b7f14d3.png?size=4096"
  }
];

const Staff = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Our Staff Team</h1>
        <p className="text-xl text-gray-300">The people who keep UKRP running smoothly</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {staffMembers.map((staff, index) => (
          <motion.div
            key={staff.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700"
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{staff.name}</h3>
              <div className="bg-blue-600/20 text-blue-400 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                {staff.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Staff;