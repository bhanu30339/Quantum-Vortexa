"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Brain, Cloud, Database, Cpu, ArrowRight, ShieldCheck, Zap, Code, MonitorSmartphone, Leaf } from "lucide-react";
import SvgSliceText from "@/components/home/SvgSliceText";
import CodeInterfaceSection from "@/components/home/CodeInterfaceSection";
import PartnerProfile from "@/components/home/PartnerProfile";

// Dynamically import 3D component with no SSR to prevent hydration errors and improve initial load
const Hero3D = dynamic(() => import("@/components/home/Hero3D"), { ssr: false });

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
        <Hero3D />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-0 mt-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Empowering UAE Enterprises</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-4 w-full flex justify-center">
              <SvgSliceText />
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              Advanced technology solutions for the Middle East. We specialize in Cybersecurity, AI/ML, Cloud Architecture, and Enterprise SAP integration.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Solutions
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors text-center backdrop-blur-md flex items-center justify-center gap-2 group"
              >
                Request Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Trust Marquee */}
      <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex gap-12 items-center justify-between opacity-50 whitespace-nowrap animate-marquee w-max">
            <span className="text-xl font-bold font-mono">ISO 27001</span>
            <span className="text-xl font-bold font-mono">SOC 2 COMPLIANT</span>
            <span className="text-xl font-bold font-mono">UAE PDPL READY</span>
            <span className="text-xl font-bold font-mono">AWS ADVANCED PARTNER</span>
            <span className="text-xl font-bold font-mono">SAP SILVER PARTNER</span>
            {/* Duplicate for infinite scroll effect */}
            <span className="text-xl font-bold font-mono">ISO 27001</span>
            <span className="text-xl font-bold font-mono">SOC 2 COMPLIANT</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Enterprise Capabilities</h2>
            <p className="text-gray-400 text-lg">Comprehensive technology solutions designed for scale, security, and performance across GCC markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Software House",
                description: "Custom software development, enterprise applications, and scalable digital solutions.",
                icon: Code,
                link: "/services/software-house"
              },
              {
                title: "IT Consultant",
                description: "Strategic IT consulting, digital transformation, and robust infrastructure planning.",
                icon: MonitorSmartphone,
                link: "/services/it-consulting"
              },
              {
                title: "Green Buildings",
                description: "Sustainable building design, LEED certification, and energy-efficient architecture.",
                icon: Leaf,
                link: "/services/green-buildings"
              }
            ].map((service, index) => (
              <Link key={index} href={service.link}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all group h-full backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Code Architecture UI Section */}
      <CodeInterfaceSection />

      {/* Stats Band */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.99%</div>
              <div className="text-gray-400 font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400 font-medium">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">&lt;15m</div>
              <div className="text-gray-400 font-medium">Response Time</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 font-medium">SOC Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 relative overflow-hidden bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Leadership</h2>
            <p className="text-gray-400 text-lg">Guided by visionaries dedicated to building a sustainable and secure future.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <PartnerProfile 
              name="Manish Sonkar"
              title="Sr. Partner"
              imageSrc="/images/manish_sonkar.jpeg"
              linkedinUrl="https://www.linkedin.com/in/manishsonkar/"
              content={
                <>
                  <p>
                    Manish Sonkar is CEO and co-founder of <strong className="text-white font-semibold">NEOENRG</strong>, a deep-tech clean energy conglomerate operating across seven countries.
                  </p>
                  <p>
                    A serial entrepreneur since 2009, he has built ventures spanning AI, medical devices, semiconductors, and inventory systems for UCIL under India's Department of Atomic Energy.
                  </p>
                  <p>
                    A futurist and three-time UNFCCC COP speaker, he specialises in vertically integrated, first-principles engineering for moonshot ventures with large-scale societal impact across energy, defence, and advanced computing.
                  </p>
                </>
              }
            />
            
            <PartnerProfile 
              name="Pradeep Panwar"
              title="Sr. Partner"
              imageSrc="/images/pradeep_panwar.jpeg"
              linkedinUrl="https://www.linkedin.com/in/pradeep-panwar-b881b24/"
              content={
                <>
                  <p>
                    Visionary Entrepreneur with legacy of large infrastructure planning & development. 
                  </p>
                  <p>
                    With 25+ years in managing complex projects in number of Infrastructure sectors for multi-laterals, governments and private sector. A PPP expert having served multiple govt. across geographies, BIG 4 and UN & Asian Development Bank funded projects. 
                  </p>
                  <p>
                    He has a BE in Mechanical and Management from Uni Raj.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to transform your enterprise?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Book a free consultation with our solutions architects to discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all scale-100 hover:scale-105"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
