"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp, ShieldCheck, Briefcase, ChevronRight, ArrowLeft, BarChart3, LineChart, PieChart, Users2, Building2, Workflow } from "lucide-react";
import Link from "next/link";

const pillars = [
  { icon: BarChart3, title: "Digital Transformation", desc: "Modernizing legacy systems and workflows to make your enterprise agile, data-driven, and ready for future market shifts." },
  { icon: ShieldCheck, title: "Risk & Compliance", desc: "Navigating complex UAE and global regulatory landscapes, ensuring your IT infrastructure is both secure and fully compliant." },
  { icon: Workflow, title: "Process Optimization", desc: "Identifying operational bottlenecks and deploying automation strategies that significantly reduce overhead and manual errors." },
  { icon: Target, title: "IT Strategy & Roadmapping", desc: "Aligning your technology investments with your overarching business goals to ensure maximum ROI and long-term sustainability." },
];

const steps = [
  { step: "Discovery", desc: "Deep-dive analysis of your current IT ecosystem and business objectives.", delay: 0 },
  { step: "Assessment", desc: "Identifying gaps, risks, and opportunities for immediate and long-term improvement.", delay: 0.2 },
  { step: "Strategy formulation", desc: "Drafting a comprehensive, actionable technology roadmap tailored to your enterprise.", delay: 0.4 },
  { step: "Execution & Oversight", desc: "Guiding implementation partners and ensuring flawless deployment of the strategy.", delay: 0.6 },
];

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 pt-32 pb-24 relative overflow-hidden font-sans">
      {/* Complex Glassmorphic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-sky-500/5 blur-[150px] pointer-events-none rounded-full transform rotate-45" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-16">
          <ArrowLeft size={16} /> Back to Services
        </Link>
        
        {/* HERO */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wide uppercase mb-8 backdrop-blur-md">
              <Briefcase size={16} /> Enterprise Consulting
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Navigate Complexity with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Absolute Clarity</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              Transform your IT operations from a cost center into a strategic driver of enterprise growth. We provide the vision, the blueprint, and the oversight to succeed.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                Book a Consultation
              </Link>
              <div className="flex items-center gap-4 ml-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#020617]" />
                  <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-[#020617]" />
                  <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-[#020617] flex items-center justify-center text-xs font-bold">+50</div>
                </div>
                <span className="text-sm text-slate-400 font-medium">Enterprise Clients</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Abstract */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="flex-1 relative hidden lg:flex justify-center items-center h-[500px]"
          >
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              {/* Outer Ring */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-blue-500/20" />
              {/* Middle Ring */}
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border border-indigo-500/30 border-dashed" />
              {/* Inner Core */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 animate-pulse mix-blend-overlay" />
                <Target className="w-24 h-24 text-blue-300 opacity-80 drop-shadow-[0_0_15px_rgba(147,197,253,0.5)]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* IMPACT METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-40">
          {[
            { label: "Cost Reduction", value: "30%" },
            { label: "Efficiency Gain", value: "2.5x" },
            { label: "Compliance Rate", value: "100%" },
            { label: "ROI Realized", value: "< 1 Yr" }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-center hover:bg-white/[0.05] transition-colors"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* STRATEGIC PILLARS */}
        <section className="mb-40">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Consulting Pillars</h2>
            <p className="text-lg text-slate-400">We don't just advise; we engineer structural business transformations across four critical domains.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-blue-600/20 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-950 flex items-center justify-center mb-8 border border-blue-900">
                    <pillar.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="mb-40 relative">
          <div className="absolute inset-0 bg-slate-900/50 rounded-[4rem] border border-white/5 backdrop-blur-3xl -mx-6 md:mx-0" />
          <div className="relative z-10 p-10 md:p-20">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Methodology</h2>
              <p className="text-slate-400 max-w-2xl">A systematic, phased approach to de-risk digital transformation and guarantee measurable outcomes.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -z-10" />
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className="relative"
                >
                  <div className="w-24 h-24 rounded-full bg-[#020617] border-4 border-slate-800 flex items-center justify-center text-2xl font-bold text-blue-400 mb-8 shadow-xl">
                    0{i + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.step}</h4>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto pb-10"
        >
          <Building2 className="w-16 h-16 text-blue-400 mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to redefine your IT strategy?</h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#020617] text-lg font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Schedule a Strategy Call <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
