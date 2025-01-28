import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const commandMembers = {
  gold: [
    {
      name: "[CR-1] Ross",
      role: "MPS Commissioner",
      image: "https://cdn.discordapp.com/avatars/535547040399228929/cfb203a3249a7235d2f5e2b7fe3a1900.png?size=4096"
    },
    {
      name: "[CE-125] Daniel",
      role: "LAS Chief Executive Officer",
      image: "https://cdn.discordapp.com/avatars/1209604759913504768/9aaea0ae5bd99fcafba9f2fad3d870cb.png?size=4096"
    }
  ],
  silver: [
    {
      name: "[CI-4] Elon",
      role: "MPS AFO & RTPC Chief Inspector",
      image: "https://cdn.discordapp.com/avatars/290871354520109056/8854a2fbded3b488ae17e9856b7f14d3.png?size=4096"
    },
    {
      name: "[CI-5] Jack",
      role: "MPS DSU & ERPT Chief Inspector",
      image: "https://cdn.discordapp.com/avatars/1137069657526898818/8bab1792ef7555295d1cab04e85f10b2.png?size=4096"
    },
    {
      name: "[OM-127] Blake",
      role: "LAS Clinical Operations Manager",
      image: "https://cdn.discordapp.com/avatars/883414321231708210/e32c06ccaa66c6c0a21ad9727542dcff.png?size=4096"
    }
  ],
  bronze: [
    {
      name: "[EI-8] Fin",
      role: "MPS ERPT Inspector",
      image: "https://cdn.discordapp.com/avatars/724997298169577504/7a83c9e523414546060d850338250a87.png?size=4096"
    },
    {
      name: "[DI-9] Rhys",
      role: "MPS DSU Inspector",
      image: "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    {
      name: "[TM-132] Jay",
      role: "LAS Clinical Team Manager",
      image: "https://cdn.discordapp.com/guilds/1190797643744542870/users/802990311516930098/avatars/6e0a5dd3b071bcac7744bdafbba428af.png?size=4096"
    },
    {
      name: "[85] Ludoz",
      role: "Civilian Team Leader",
      image: "https://cdn.discordapp.com/avatars/976189459152392252/a4ca98f75d94b01a858c4390175009d2.png?size=4096"
    },
    {
      name: "[86] Matt",
      role: "Civilian Team Leader",
      image: "https://cdn.discordapp.com/avatars/1209581691992023092/8b1579551bf33a96d9cd8d7758d8cca8.png?size=4096"
    }
  ]
};

const CommandMembers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Command Structure</h1>
        <p className="text-xl text-gray-300">Meet our leadership team</p>
      </motion.div>

      <div className="space-y-16">
        {/* Gold Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-yellow-400 text-center">Gold Command</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commandMembers.gold.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <div className="bg-yellow-500/20 text-yellow-300 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Gold Command
                  </div>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-400 text-center">Silver Command</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commandMembers.silver.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <div className="bg-gray-400/20 text-gray-300 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Silver Command
                  </div>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bronze Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-amber-600 text-center">Bronze Command</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commandMembers.bronze.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <div className="bg-amber-600/20 text-amber-400 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Bronze Command
                  </div>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommandMembers;