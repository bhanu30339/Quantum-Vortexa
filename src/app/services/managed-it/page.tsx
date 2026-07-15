"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Headphones, HardDrive, MonitorSmartphone, Wifi, ShieldAlert, ArrowRight } from "lucide-react";

export default function ManagedITPage() {
  const services = [
    { title: "24/7 Service Desk", desc: "Round-the-clock IT support resolving L1 to L3 issues swiftly.", icon: Headphones },
    { title: "Infrastructure Management", desc: "Proactive monitoring of servers, storage, and cloud environments.", icon: HardDrive },
    { title: "Endpoint Management", desc: "Patching, securing, and managing corporate devices globally.", icon: MonitorSmartphone },
    { title: "Network Operations", desc: "Ensuring high availability and optimal performance of enterprise networks.", icon: Wifi },
  ];

  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Managed IT <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Focus on your core business. Let our certified engineers manage, monitor, and optimize your IT infrastructure around the clock.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition-all">
              Outsource Your IT <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {[
            { v: "15 min", l: "Avg. Response Time" },
            { v: "99%", l: "First Call Resolution" },
            { v: "24/7", l: "Active Monitoring" },
            { v: "ITIL", l: "Aligned Processes" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-3xl font-black text-amber-400 mb-1">{stat.v}</div>
              <div className="text-sm font-medium text-gray-400">{stat.l}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive IT Operations</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We act as a seamless extension of your organization. From answering simple helpdesk queries to managing complex disaster recovery procedures, we ensure your technology enables growth rather than hindering it.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s, idx) => (
                <div key={idx} className="bg-black/40 p-5 rounded-2xl border border-white/5">
                  <s.icon className="text-amber-500 mb-4 h-8 w-8" />
                  <h4 className="text-white font-bold mb-2">{s.title}</h4>
                  <p className="text-xs text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[40px] overflow-hidden border border-white/10"
          >
            <img src="https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="IT Support Team" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-black/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-amber-500/10 backdrop-blur-md border border-amber-500/30">
              <div className="flex items-center gap-4">
                <ShieldAlert className="text-amber-400 h-10 w-10 shrink-0" />
                <div>
                  <h4 className="text-white font-bold">Proactive Issue Resolution</h4>
                  <p className="text-sm text-gray-300">We fix problems before your users even notice them.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
