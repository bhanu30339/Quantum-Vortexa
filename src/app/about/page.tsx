import Image from "next/image";
import { CheckCircle, Target, Shield, Users, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Architecting the Digital Future of the Middle East</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Quantum Vortexa FZE LLC is a premier technology solutions provider based in the UAE. We bridge the gap between complex enterprise challenges and next-generation technologies.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Target className="w-10 h-10 text-primary mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To empower GCC enterprises with secure, scalable, and intelligent technology infrastructures that drive sustainable growth, operational excellence, and competitive advantage in a digital-first economy.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Shield className="w-10 h-10 text-accent mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To be the most trusted technology partner for the region's largest enterprises and government entities, setting the standard for cybersecurity resilience, AI innovation, and cloud architecture.
            </p>
          </div>
        </div>

        {/* UAE Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Deep Roots in the UAE</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Headquartered in the Ajman Free Zone, Quantum Vortexa operates at the strategic crossroads of global technology and regional business dynamics. We understand the unique regulatory, cultural, and operational landscape of the GCC.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our solutions are designed from the ground up to comply with local data sovereignty laws, including the UAE Personal Data Protection Law (PDPL) and critical infrastructure regulations.
            </p>
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Ajman Free Zone</h4>
                <p className="text-sm text-gray-400">Amber Gem Tower, 26th Floor</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
             {/* Placeholder for real office or Dubai/Ajman skyline image */}
             <div className="text-center p-8">
                <p className="text-primary font-mono text-sm mb-2">IMAGE_PLACEHOLDER</p>
                <p className="text-gray-500">Ajman / Dubai Skyline or Office Interior</p>
             </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Uncompromising Security", desc: "Security is built-in, never bolted on." },
              { title: "Engineering Excellence", desc: "We deploy architectures that perform at scale." },
              { title: "Local Compliance", desc: "Strict adherence to UAE and global frameworks." },
              { title: "Client Partnership", desc: "Your strategic goals drive our technical solutions." }
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
