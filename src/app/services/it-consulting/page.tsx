"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp, ShieldCheck, Briefcase, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const steps = [
  { icon: Target, title: "Strategic Audit", desc: "Comprehensive evaluation of your existing IT infrastructure and digital workflows." },
  { icon: Lightbulb, title: "Solution Design", desc: "Crafting a bespoke roadmap aligned with your long-term business objectives." },
  { icon: TrendingUp, title: "Implementation Oversight", desc: "Guiding the execution phase to ensure flawless deployment and minimal disruption." },
  { icon: ShieldCheck, title: "Risk Mitigation", desc: "Identifying and neutralizing potential security and compliance bottlenecks." },
];

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pt-32 pb-24 relative overflow-hidden">
      {/* Glassmorphic Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Services
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Navigate Complexity with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Clarity</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Transform your IT operations from a cost center into a strategic driver of enterprise growth. Our expert consultants provide the vision and blueprint to succeed.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Book a Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex-1 relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center relative shadow-2xl">
              <Briefcase className="w-32 h-32 text-blue-400 opacity-80" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-500/50"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
              }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors"
            >
              <step.icon className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
