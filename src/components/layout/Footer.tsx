import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#020306] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="flex items-center group">
                <div className="relative w-[180px] h-[40px]">
                  <Image 
                    src="/logo.png" 
                    alt="Quantum Vortexa Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Enterprise-grade technology solutions for the UAE and GCC. Specializing in Cybersecurity, AI, Cloud Architecture, and SAP Services.
            </p>
            <div className="flex gap-4">
              <Link href="https://wa.me/971544566332" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary transition-all">
                WA
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><Link href="/services/cybersecurity" className="text-gray-400 hover:text-primary text-sm transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/ai-ml" className="text-gray-400 hover:text-primary text-sm transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/services/cloud" className="text-gray-400 hover:text-primary text-sm transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/sap" className="text-gray-400 hover:text-primary text-sm transition-colors">SAP Services</Link></li>
              <li><Link href="/services/managed-it" className="text-gray-400 hover:text-primary text-sm transition-colors">Managed IT</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-primary text-sm transition-colors">Case Studies</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-primary text-sm transition-colors">Industries</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact & Legal</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>CWS-1V-223327, 26th Floor, Amber Gem Tower, Ajman Free Zone, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+971544566332" className="hover:text-white transition-colors">+971 54 456 6332</a>
                  <a href="tel:+971581037096" className="hover:text-white transition-colors">+971 58 103 7096</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Quantum Vortexa FZE LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-center md:text-right">
            <span>Trade License No: 262528109888</span>
            <span className="hidden md:inline text-white/20">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy (UAE PDPL)</Link>
            <span className="hidden md:inline text-white/20">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
