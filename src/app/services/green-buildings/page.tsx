"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Wind, Droplets, Building, ArrowRight, ArrowLeft, TreePine, BatteryCharging, Factory, Sprout } from "lucide-react";
import Link from "next/link";

const expertise = [
  { icon: Sun, title: "Passive Design Optimization", desc: "Maximizing natural light and thermal mass to drastically reduce reliance on artificial heating and cooling systems." },
  { icon: Wind, title: "Advanced HVAC & Air Quality", desc: "Designing smart ventilation architectures that ensure superior indoor air quality while minimizing energy consumption." },
  { icon: Droplets, title: "Water Conservation Systems", desc: "Integrating rainwater harvesting, greywater recycling, and smart irrigation to achieve net-zero water waste." },
  { icon: BatteryCharging, title: "Renewable Energy Integration", desc: "Seamlessly incorporating solar, wind, and geothermal technologies directly into the building's infrastructure." },
];

const journeySteps = [
  { phase: "Phase 1", title: "Feasibility & Modeling", desc: "We create digital twins of your architectural plans to simulate energy performance and ecological impact." },
  { phase: "Phase 2", title: "Material Sourcing", desc: "Selecting low-carbon, locally sourced, and recycled materials that meet strict international green standards." },
  { phase: "Phase 3", title: "Construction Oversight", desc: "Monitoring the build process to ensure zero waste and strict adherence to the sustainable blueprint." },
  { phase: "Phase 4", title: "Certification & Handoff", desc: "Finalizing LEED, BREEAM, or ESTIDAMA certifications and calibrating smart building systems." },
];

export default function GreenBuildingsPage() {
  return (
    <div className="min-h-screen bg-[#020805] text-emerald-50 pt-32 pb-24 relative overflow-hidden font-sans selection:bg-emerald-500/30">
      {/* Organic Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 90, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-[40%] bg-emerald-900/30 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, -90, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] rounded-[45%] bg-teal-900/30 blur-[150px]"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-16">
          <ArrowLeft size={16} /> Back to Services
        </Link>
        
        {/* HERO */}
        <div className="text-center max-w-5xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center justify-center p-5 rounded-full bg-emerald-950/50 border border-emerald-800/50 mb-10 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          >
            <Leaf className="w-10 h-10 text-emerald-400" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8"
          >
            Architecture that <br/>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400">Breathes.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-emerald-200/70 font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            We merge cutting-edge environmental engineering with architectural brilliance to create sustainable, net-zero habitats for the modern enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-emerald-500 text-[#020805] font-semibold text-lg hover:bg-emerald-400 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Build Sustainably <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* ECOLOGICAL IMPACT STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-40"
        >
          {[
            { icon: BatteryCharging, value: "40%", label: "Avg Energy Reduction" },
            { icon: Droplets, value: "65%", label: "Water Saved Annually" },
            { icon: Factory, value: "Net-Zero", label: "Carbon Emissions Target" },
            { icon: Sprout, value: "15+", label: "LEED Platinum Projects" }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-emerald-950/20 border border-emerald-900/30 backdrop-blur-md flex flex-col items-center text-center group hover:bg-emerald-900/20 transition-colors">
              <stat.icon className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-emerald-200/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CORE EXPERTISE */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ecological Engineering Expertise</h2>
              <p className="text-lg text-emerald-200/60 font-light leading-relaxed">
                Our consultancy bridges the gap between ambitious sustainability goals and practical, cost-effective construction reality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-emerald-900/30 hover:bg-emerald-950/40 hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-900/30 flex items-center justify-center mb-8 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-emerald-50 mb-4">{item.title}</h3>
                <p className="text-emerald-200/60 leading-relaxed font-light text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* THE CERTIFICATION JOURNEY */}
        <section className="mb-40 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent rounded-[3rem] -mx-6 md:mx-0 pointer-events-none" />
          <div className="relative z-10 p-6 md:p-16">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6">The Path to Certification</h2>
              <p className="text-lg text-emerald-200/60 font-light">Navigating global green standards (LEED, WELL, ESTIDAMA) requires a rigorous, phased approach. We guide you from concept to plaque.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {journeySteps.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">{step.phase}</div>
                  <div className="h-1 w-full bg-emerald-900/30 rounded-full mb-8 relative overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 + 0.3 }}
                      className="absolute inset-0 bg-emerald-500"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-emerald-200/60 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto pb-12"
        >
          <TreePine className="w-16 h-16 text-emerald-500/50 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-light mb-8">Ready to build a <span className="font-bold">greener future?</span></h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 rounded-full border border-emerald-500 text-emerald-400 font-semibold text-lg hover:bg-emerald-500 hover:text-[#020805] transition-all duration-300 group shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            Schedule a Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div> */}
      </div>
    </div>
  );
}
