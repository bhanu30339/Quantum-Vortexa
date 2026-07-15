"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Database, CheckCircle2, ArrowRight, Settings, Box, BarChart3 } from "lucide-react";

export default function SAPPage() {
  const modules = [
    { name: "SAP S/4HANA", desc: "Intelligent ERP for real-time analytics and simplified data models." },
    { name: "SAP SuccessFactors", desc: "Human experience management for the modern workforce." },
    { name: "SAP Ariba", desc: "Digital procurement and supply chain optimization." },
    { name: "SAP BTP", desc: "Business Technology Platform for integration and extensions." }
  ];

  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_40%)]" />
      
      <div className="container relative z-10 mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-8 backdrop-blur-md"
          >
            <Database className="w-10 h-10 text-emerald-400" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            SAP Implementation <br /> & Consulting
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
          >
            Accelerate your digital transformation with our certified SAP experts. From blueprinting to go-live, we deliver seamless implementations tailored to your industry.
          </motion.p>
        </div>

        {/* Feature Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[40px] overflow-hidden"
          >
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="SAP Consulting Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[40px]" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">End-to-End Excellence</h2>
            <div className="space-y-8">
              {[
                { title: "Greenfield & Brownfield Deployments", icon: Settings },
                { title: "Custom ABAP/Fiori Development", icon: Box },
                { title: "Data Migration & Landscape Transformation", icon: BarChart3 }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">Leverage our proven methodologies to ensure a smooth transition with minimal disruption to your daily operations.</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Modules Grid */}
        <div className="bg-white/5 rounded-[40px] border border-white/10 p-8 md:p-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px]" />
          
          <h2 className="text-3xl font-bold text-white mb-12 text-center relative z-10">SAP Ecosystem Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {modules.map((mod, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#070B14] p-6 rounded-3xl border border-white/5 hover:border-emerald-500/50 transition-colors"
              >
                <CheckCircle2 className="text-emerald-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{mod.name}</h4>
                <p className="text-sm text-gray-400">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
