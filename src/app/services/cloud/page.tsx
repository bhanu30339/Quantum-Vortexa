"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cloud, ArrowRight, Server, Shield, Globe, RefreshCcw, LayoutTemplate } from "lucide-react";

export default function CloudPage() {
  const services = [
    {
      title: "Cloud Migration Strategy",
      desc: "Seamless lift-and-shift or comprehensive re-architecting of your legacy applications to AWS, Azure, or GCP.",
      icon: RefreshCcw
    },
    {
      title: "Cloud-Native Development",
      desc: "Build highly scalable, resilient applications using microservices, containers (Docker/Kubernetes), and serverless architectures.",
      icon: LayoutTemplate
    },
    {
      title: "Multi-Cloud & Hybrid",
      desc: "Avoid vendor lock-in and optimize costs by distributing workloads across optimal public and private cloud environments.",
      icon: Globe
    },
    {
      title: "Cloud Security & FinOps",
      desc: "Enforce strict IAM policies, encrypt data at rest/transit, and continuously optimize cloud spend to maximize ROI.",
      icon: Shield
    }
  ];

  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-cyan-400 mb-8 text-sm font-semibold">
              <Cloud size={16} /> Enterprise Cloud Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Scale Without <br className="hidden md:block" /> Limits.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Future-proof your infrastructure with highly available, secure, and cost-optimized cloud environments tailored for enterprise demands.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              Plan Your Migration
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative h-[400px] rounded-3xl overflow-hidden group"
          >
            <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Data Center" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bold text-white mb-2">Modern Infrastructure</h3>
              <p className="text-gray-300">Transition from rigid legacy servers to elastic, on-demand compute resources.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />
            <Server className="w-12 h-12 text-cyan-400 mb-6" />
            <h3 className="text-4xl font-black text-white mb-2">99.99%</h3>
            <p className="text-gray-400 font-medium">Guaranteed Uptime SLA for critical cloud workloads.</p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Cloud Services Architecture</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((srv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <srv.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
