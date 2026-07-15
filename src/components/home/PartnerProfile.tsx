"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, User } from "lucide-react";
import React from "react";

export interface PartnerProfileProps {
  name: string;
  title: string;
  imageSrc: string;
  content: React.ReactNode;
  linkedinUrl: string;
}

export default function PartnerProfile({ name, title, imageSrc, content, linkedinUrl }: PartnerProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="relative group cursor-pointer w-72 h-96 rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10" />
        
        <Image 
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
        />
        
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex shrink-0 items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-500">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="overflow-hidden">
                <p className="text-primary text-sm font-semibold uppercase tracking-wider translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                  {title}
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1 tracking-wide group-hover:text-primary transition-colors duration-300">{name}</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-4 opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-500 delay-200" />
          </div>
        </div>
        
        {/* Hover overlay hint */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            View Profile
          </div>
        </div>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 sm:p-6" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ 
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.5 
                }}
                className="relative w-full max-w-3xl max-h-[90vh] sm:max-h-[85vh] bg-black border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10 flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
  
                {/* Image Section */}
                <div className="w-full md:w-2/5 h-48 sm:h-64 md:h-auto shrink-0 relative bg-zinc-900 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 mix-blend-overlay" />
                  <Image 
                    src={imageSrc}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top filter contrast-125 saturate-50"
                  />
                </div>
  
                {/* Content Section */}
                <div className="w-full md:w-3/5 flex-1 p-6 md:p-8 lg:p-10 bg-gradient-to-b from-zinc-900 to-black relative overflow-y-auto">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{name}</h2>
                    <p className="text-lg text-primary font-medium mb-6">{title}</p>
                    
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mb-6 rounded-full" />
                    
                    <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                      {content}
                    </div>
  
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      <Link 
                        href={linkedinUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-white font-medium transition-all group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        Connect on LinkedIn
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
