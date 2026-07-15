"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network, ArrowRight, Zap, LineChart, Sparkles } from "lucide-react";

export default function AIMLPage() {
  const capabilities = [
    {
      title: "Generative AI Integration",
      description: "Harness LLMs and foundation models to automate content creation, customer support, and complex data synthesis.",
      icon: Brain,
    },
    {
      title: "Predictive Analytics",
      description: "Forecast market trends, anticipate customer behavior, and optimize inventory with highly accurate machine learning models.",
      icon: LineChart,
    },
    {
      title: "Computer Vision",
      description: "Automate quality control, enhance security, and extract meaningful data from images and video feeds in real-time.",
      icon: Sparkles,
    },
    {
      title: "NLP & Conversational AI",
      description: "Deploy intelligent virtual assistants capable of understanding context, sentiment, and intent across multiple languages.",
      icon: Network,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="absolute -left-[20%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-6">
        
        {/* Hero Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors mb-6 text-sm font-semibold tracking-wider uppercase">
              <ArrowRight className="w-4 h-4 rotate-180" /> Our Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Intelligence, <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Artificialized.
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
              Transform your raw data into decisive competitive advantages. We build, deploy, and scale enterprise-grade AI models that redefine operational efficiency and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                Start an AI Pilot <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI Technology" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent" />
            
            {/* Floating Glass Element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <Cpu className="text-violet-300" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Model Accuracy</h4>
                  <p className="text-violet-300 text-sm">Consistently >98% in production</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Engineering Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From conceptualization to production deployment, our end-to-end AI capabilities ensure seamless integration into your existing workflows.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{cap.title}</h3>
                <p className="text-gray-400 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-violet-500/20 bg-gradient-to-br from-violet-900/20 to-black p-10 md:p-16"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The MLOps Lifecycle</h2>
              <p className="text-gray-400 mb-8">We don't just build models; we operationalize them. Our robust MLOps pipeline ensures your AI investments remain accurate, scalable, and secure over time.</p>
              
              <ul className="space-y-6">
                {[
                  "Data Engineering & Feature Extraction",
                  "Model Training & Validation",
                  "Continuous Deployment (CI/CD for ML)",
                  "Performance Monitoring & Retraining"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-medium">
                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                      <Zap size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 w-full h-[400px] rounded-3xl overflow-hidden relative">
              <img src="https://images.pexels.com/photos/17483874/pexels-photo-17483874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="MLOps Data" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 border-2 border-violet-500/30 rounded-3xl" />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
