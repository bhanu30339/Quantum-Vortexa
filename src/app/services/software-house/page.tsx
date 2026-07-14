"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Server, Database, Braces, Blocks, Rocket, ArrowLeft, Cpu, Globe, Lock, Workflow, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Go", "Rust", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GCP", "Vercel"];

const services = [
  { icon: Globe, title: "Web Applications", desc: "Complex, high-performance web apps built with Next.js and React, featuring SSR/SSG, complex state management, and pixel-perfect UIs.", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "group-hover:border-emerald-500/50" },
  { icon: Server, title: "Backend Systems", desc: "Microservices architectures deployed on scalable cloud infrastructure, engineered in Node.js, Go, or Python to handle millions of requests.", color: "text-blue-400", bg: "bg-blue-500/10", border: "group-hover:border-blue-500/50" },
  { icon: Database, title: "Data Architecture", desc: "Optimized schema design, database clustering, caching layers, and high-availability data pipelines ensuring zero data loss.", color: "text-purple-400", bg: "bg-purple-500/10", border: "group-hover:border-purple-500/50" },
  { icon: Lock, title: "DevSecOps", desc: "Automated CI/CD pipelines with integrated security testing, container orchestration, and continuous monitoring.", color: "text-rose-400", bg: "bg-rose-500/10", border: "group-hover:border-rose-500/50" },
];

const processSteps = [
  { step: "01", title: "Architecture Design", desc: "Mapping the entire system architecture, choosing the right stack, and defining data flow and API contracts before a single line of code is written." },
  { step: "02", title: "Agile Development", desc: "Two-week sprints with continuous integration. You see progress in real-time on staging environments, ensuring alignment with your vision." },
  { step: "03", title: "Rigorous QA", desc: "Automated unit tests, integration tests, E2E testing, and manual QA to ensure bug-free, highly performant applications." },
  { step: "04", title: "Deployment & Scale", desc: "Containerized deployment using Kubernetes, auto-scaling configuration, and setting up advanced telemetry and logging." },
];

export default function SoftwareHousePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden font-sans">
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(0,255,128,0.1),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Services
        </Link>
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-sm mb-6">
              <Terminal size={16} /> ./init-software-house.sh
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
              Code that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500">Defines the Future</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              We are a premier software engineering house. We don't build generic websites; we architect high-performance, scalable enterprise applications that drive core business logic.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors">
                Start Building
              </Link>
              <a href="#tech-stack" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                View Stack
              </a>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-6 backdrop-blur-sm overflow-hidden flex flex-col">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 font-mono text-sm text-green-400/80 space-y-2">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>$ npm run build:enterprise</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>{">"} compiling scalable architectures...</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>{">"} optimizing database queries [OK]</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>{">"} deploying microservices to cluster [OK]</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} className="text-white">System is online. Listening on port 3000.</motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TECH STACK MARQUEE */}
        <section id="tech-stack" className="mb-32">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-widest uppercase text-gray-500">The Enterprise Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-sm hover:border-green-500/50 hover:text-green-400 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CORE SERVICES BENTO GRID */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Engineering <br/><span className="text-gray-500">Capabilities</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 transition-all duration-500 ${service.border} hover:shadow-[0_0_40px_rgba(0,255,128,0.05)] relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 ${service.bg} blur-[80px] rounded-full -mr-20 -mt-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DEVELOPMENT PROCESS - VERTICAL TIMELINE */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Delivery Pipeline</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">We use a strict, battle-tested methodology to ensure software is delivered on time, securely, and to specification.</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-white/10 to-transparent transform md:-translate-x-1/2" />
            
            {processSteps.map((step, i) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative flex items-center justify-between mb-16 md:mb-24 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden md:block w-5/12" />
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-black border-4 border-green-500 transform -translate-x-1/2 flex items-center justify-center font-mono font-bold text-green-400 z-10 shadow-[0_0_20px_rgba(0,255,128,0.3)]">
                  {step.step}
                </div>
                <div className="w-full md:w-5/12 pl-20 md:pl-0">
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                    <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="mb-32 bg-green-500/10 border-y border-green-500/20 py-16 px-6 relative overflow-hidden rounded-[3rem]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <div className="text-5xl font-black text-white mb-2">10M+</div>
              <div className="text-green-400 font-mono text-sm uppercase tracking-wider">Lines of Code</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">99.9%</div>
              <div className="text-green-400 font-mono text-sm uppercase tracking-wider">Crash-Free Rate</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">50+</div>
              <div className="text-green-400 font-mono text-sm uppercase tracking-wider">Enterprise Apps</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">0</div>
              <div className="text-green-400 font-mono text-sm uppercase tracking-wider">Data Breaches</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pb-20"
        >
          <Braces className="w-16 h-16 text-green-400 mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to compile your vision?</h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 text-black text-lg font-bold rounded-xl hover:bg-green-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,255,128,0.3)]">
            Initialize Project <Rocket size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
