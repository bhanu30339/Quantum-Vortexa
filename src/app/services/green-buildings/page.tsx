"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Wind, Droplets, Building, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const highlights = [
  { icon: Sun, title: "Energy Optimization", desc: "Advanced modeling to maximize natural light and minimize HVAC dependency." },
  { icon: Wind, title: "Air Quality Control", desc: "Smart ventilation systems ensuring healthy, productive indoor environments." },
  { icon: Droplets, title: "Water Conservation", desc: "Implementation of greywater recycling and smart irrigation solutions." },
  { icon: Building, title: "LEED Certification", desc: "End-to-end consultancy to achieve top-tier sustainability certifications." },
];

export default function GreenBuildingsPage() {
  return (
    <div className="min-h-screen bg-[#020b08] text-emerald-50 pt-32 pb-24 relative overflow-hidden">
      {/* Organic Background Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-emerald-900/20 blur-[150px] pointer-events-none"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Services
        </Link>
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center justify-center p-4 rounded-full bg-emerald-500/10 mb-8"
          >
            <Leaf className="w-12 h-12 text-emerald-400" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-wide mb-6"
          >
            Sustainable <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Architecture</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-emerald-200/60 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Designing the habitats of tomorrow. We merge architectural brilliance with ecological responsibility to create buildings that breathe.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-[2rem] bg-white/[0.02] border border-emerald-500/10 hover:bg-emerald-500/5 transition-colors"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-100 mb-2">{item.title}</h3>
                <p className="text-emerald-200/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 text-center"
        >
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-[#020b08] transition-all duration-500 group">
            Start Your Green Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
