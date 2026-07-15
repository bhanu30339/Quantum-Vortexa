"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-[112px] flex items-center justify-between">
        <Link href="/" className="flex items-center group md:-ml-2 lg:-ml-2 shrink-0">
          <div className="relative w-[180px] sm:w-[220px] md:w-[260px] h-[70px] sm:h-[80px] md:h-[100px]">
            <Image 
              src="/images/logo.png" 
              alt="Quantum Vortexa Logo" 
              fill 
              className="object-contain object-left drop-shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-base font-semibold text-gray-300 hover:text-white transition-colors relative group tracking-wide"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-base font-semibold transition-all hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="mt-4 text-center py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
