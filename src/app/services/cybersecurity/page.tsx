"use client";

import Link from "next/link";
import { Shield, CheckCircle, ArrowRight, Lock, Activity, FileKey } from "lucide-react";

export default function CybersecurityServicePage() {
  const capabilities = [
    {
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      description: "Rigorous testing of your infrastructure, applications, and APIs to identify and remediate security flaws before they can be exploited.",
      icon: Shield
    },
    {
      title: "SOC-as-a-Service",
      description: "24/7/365 continuous monitoring, threat detection, and incident response managed by our elite cybersecurity experts.",
      icon: Activity
    },
    {
      title: "Zero Trust Architecture",
      description: "Implementation of comprehensive identity-first security models, ensuring strict access controls across your hybrid environments.",
      icon: Lock
    },
    {
      title: "GRC & Compliance Advisory",
      description: "Expert guidance for achieving and maintaining ISO 27001, SOC 2, PCI-DSS, and UAE NESA/SIA compliance requirements.",
      icon: FileKey
    }
  ];

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
          </Link>
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Enterprise Cybersecurity</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            In an era of sophisticated threats, perimeter defense is not enough. We deliver military-grade, intelligence-driven security operations to protect your most critical assets.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group backdrop-blur-md">
                <cap.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{cap.title}</h3>
                <p className="text-gray-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">The Quantum Vortexa Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-8 h-8 text-accent mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Local Threat Intelligence</h4>
              <p className="text-gray-400 text-sm">Deep understanding of GCC-specific cyber threat landscapes and TTPs.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-8 h-8 text-accent mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Automated Remediation</h4>
              <p className="text-gray-400 text-sm">AI-driven playbooks that isolate threats in milliseconds, not hours.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-8 h-8 text-accent mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Data Sovereignty</h4>
              <p className="text-gray-400 text-sm">All logs and analysis stored locally within the UAE in compliance with PDPL.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center bg-primary/10 rounded-3xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Infrastructure Today</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Schedule a confidential briefing with our security architects to assess your current posture and design a resilient defense strategy.
          </p>
          <Link
            href="/contact?service=cybersecurity"
            className="inline-flex px-8 py-4 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 transition-colors"
          >
            Request Security Assessment
          </Link>
        </div> */}
      </div>
    </div>
  );
}
