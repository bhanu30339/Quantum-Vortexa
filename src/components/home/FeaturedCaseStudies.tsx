"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Brain, Factory, ArrowRight, Activity, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cases = [
  {
    id: "finance",
    icon: ShieldCheck,
    title: "Zero Trust Transformation",
    client: "Tier-1 UAE Bank",
    desc: "Replaced a legacy perimeter-based network with a Zero Trust architecture, reducing lateral movement risk while improving employee access speed and securing core banking operations.",
    metric: "87%",
    metricLabel: "Risk Reduction",
    link: "/case-studies",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgBg: "bg-cyan-900/40",
  },
  {
    id: "retail",
    icon: Brain,
    title: "AI-Driven Personalization",
    client: "GCC Retail Group",
    desc: "Deployed a real-time recommendation engine across 120+ stores and digital channels. We unified customer data platforms to serve hyper-personalized content at scale.",
    metric: "3x",
    metricLabel: "Conversion Lift",
    link: "/case-studies",
    image: "https://images.pexels.com/photos/583166/pexels-photo-583166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgBg: "bg-purple-900/40",
  },
  {
    id: "industry",
    icon: Factory,
    title: "Smart Factory IoT",
    client: "Industrial Manufacturer",
    desc: "Connected 5,000+ IoT sensors to a cloud-native analytics platform, enabling predictive maintenance algorithms that anticipate machine failures before they occur.",
    metric: "62%",
    metricLabel: "Less Downtime",
    link: "/case-studies",
    image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgBg: "bg-amber-900/40",
  }
];

export default function FeaturedCaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % cases.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + cases.length) % cases.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeCase = cases[activeIndex];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Built for enterprise scale</h2>
      </div>

      <div 
        className="w-full bg-[#0a0a0c] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 flex flex-col lg:flex-row gap-8 shadow-2xl overflow-hidden relative min-h-[500px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          {/* Left Content Column */}
          <motion.div 
            key={`content-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full lg:w-5/12 flex flex-col justify-between py-4 pl-4 pr-4 lg:pr-12"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                <activeCase.icon className="w-5 h-5 text-gray-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{activeCase.title}</h3>
              <p className="text-sm text-primary mb-6">{activeCase.client}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                {activeCase.desc}
              </p>
              
              <div className="mb-10">
                <div className="text-5xl font-medium text-blue-400 tracking-tight mb-2">
                  {activeCase.metric}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {activeCase.metricLabel}
                </div>
              </div>
            </div>

            <div>
              <Link 
                href={activeCase.link}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all shadow-sm"
              >
                View Study
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {/* Right Image Column */}
          <motion.div 
            key={`image-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className={`w-full lg:w-7/12 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative min-h-[300px] lg:min-h-full ${activeCase.imgBg}`}
          >
            {/* Using Next Image for optimization, but treating it like a background cover */}
            <Image 
              src={activeCase.image}
              alt={activeCase.title}
              fill
              className="object-cover opacity-80 mix-blend-overlay filter hover:mix-blend-normal transition-all duration-1000 cursor-pointer"
            />
            {/* Inner glow effect simulating screen or device context */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 backdrop-blur-md" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 backdrop-blur-md" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 backdrop-blur-md" />
              </div>
              <Activity className="w-5 h-5 text-white/50" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Pill with Buttons */}
      <div className="mt-8 flex items-center gap-4">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all group overflow-hidden relative shadow-lg"
          aria-label="Previous slide"
        >
          <motion.div whileTap={{ scale: 0.9 }}>
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
          </motion.div>
        </button>

        <div className="px-2 py-1.5 rounded-full bg-[#1c1c1e] border border-white/10 flex items-center gap-1 shadow-xl">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative px-3 py-2 flex items-center justify-center cursor-pointer"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                activeIndex === i 
                  ? "w-8 bg-white" 
                  : "w-4 bg-white/20 group-hover:bg-white/40 group-hover:w-6"
              }`} />
            </button>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all group overflow-hidden relative shadow-lg"
          aria-label="Next slide"
        >
          <motion.div whileTap={{ scale: 0.9 }}>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
