"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Server, Database, Braces, Blocks, Rocket, ArrowLeft } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Code2, title: "Custom Enterprise Apps", desc: "Tailor-made web and mobile applications engineered for high performance and scalability." },
  { icon: Database, title: "Database Architecture", desc: "Robust data modeling, migration, and optimization using PostgreSQL, MongoDB, and Redis." },
  { icon: Server, title: "Cloud-Native Backend", desc: "Microservices architectures deployed on AWS, Azure, or GCP for maximum reliability." },
  { icon: Blocks, title: "API Development", desc: "Secure, RESTful, and GraphQL APIs to seamlessly connect your ecosystem." },
];

export default function SoftwareHousePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Services
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-sm mb-6">
            <Terminal size={16} /> ./init-software-house.sh
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Digital Backbone</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl">
            We don't just write code; we build robust, scalable, and secure digital architectures that power modern enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-green-900/40 to-black border border-green-500/20 text-center"
        >
          <Braces className="w-12 h-12 text-green-400 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to compile your vision?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors">
            Start a Project <Rocket size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
