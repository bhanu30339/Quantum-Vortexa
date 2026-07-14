"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Cloud,
  Brain,
  Database,
  Cpu,
} from "lucide-react";

const caseStudies = [
  {
    slug: "uae-bank-zero-trust",
    title: "Zero Trust Transformation for a Leading UAE Bank",
    client: "Tier-1 UAE Bank",
    industry: "Banking & Finance",
    service: "Cybersecurity",
    icon: ShieldCheck,
    accent: "from-cyan-500 to-blue-600",
    image:
      "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Replaced a legacy perimeter-based network with a Zero Trust architecture, reducing lateral movement risk by 87% while improving employee access speed.",
    metrics: [
      { value: "87%", label: "Risk Reduction" },
      { value: "40%", label: "Faster Access" },
      { value: "100%", label: "PDPL Compliant" },
    ],
    tags: ["Zero Trust", "SOC", "PDPL", "Network Security"],
  },
  {
    slug: "retail-ai-personalization",
    title: "AI-Driven Personalization for a Regional Retail Group",
    client: "GCC Retail Chain",
    industry: "Retail & E-Commerce",
    service: "AI & ML",
    icon: Brain,
    accent: "from-violet-500 to-purple-600",
    image:
      "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Deployed a real-time recommendation engine across 120+ stores, lifting online conversion by 3x and increasing average order value by 28%.",
    metrics: [
      { value: "3x", label: "Conversion Lift" },
      { value: "28%", label: "Higher AOV" },
      { value: "120+", label: "Stores Connected" },
    ],
    tags: ["LLM", "Recommendations", "MLOps", "Real-time"],
  },
  {
    slug: "manufacturing-iot-predictive",
    title: "Predictive Maintenance for a Smart Factory",
    client: "Industrial Manufacturer",
    industry: "Manufacturing",
    service: "Cloud & IoT",
    icon: Cloud,
    accent: "from-amber-500 to-orange-600",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Connected 5,000+ IoT sensors to a cloud-native analytics platform, enabling predictive maintenance that cut unplanned downtime by 62%.",
    metrics: [
      { value: "62%", label: "Less Downtime" },
      { value: "5K+", label: "Sensors Connected" },
      { value: "$4.2M", label: "Annual Savings" },
    ],
    tags: ["IoT", "Predictive Analytics", "Cloud", "Industry 4.0"],
  },
  {
    slug: "sap-s4hana-migration",
    title: "Seamless S/4HANA Migration for a Conglomerate",
    client: "UAE Conglomerate",
    industry: "Diversified Holdings",
    service: "SAP Services",
    icon: Database,
    accent: "from-teal-500 to-emerald-600",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Migrated 12 business units to S/4HANA with zero downtime, consolidating 7 ERP instances into one and reducing TCO by 35%.",
    metrics: [
      { value: "0", label: "Downtime Hours" },
      { value: "35%", label: "Lower TCO" },
      { value: "12", label: "Units Unified" },
    ],
    tags: ["S/4HANA", "Migration", "ERP", "Cloud"],
  },
  {
    slug: "energy-scada-security",
    title: "SCADA Security Hardening for a Utility Provider",
    client: "Regional Utility",
    industry: "Energy & Utilities",
    service: "Cybersecurity",
    icon: ShieldCheck,
    accent: "from-emerald-500 to-teal-600",
    image:
      "https://images.pexels.com/photos/414553/pexels-photo-414553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Implemented OT/IT segmentation and continuous SCADA monitoring, achieving full compliance with UAE energy sector cybersecurity standards.",
    metrics: [
      { value: "100%", label: "Compliance" },
      { value: "24/7", label: "OT Monitoring" },
      { value: "0", label: "Incidents Since" },
    ],
    tags: ["SCADA", "OT Security", "Compliance", "SOC"],
  },
  {
    slug: "healthcare-telemedicine-ai",
    title: "AI-Powered Telemedicine for a Hospital Network",
    client: "Hospital Network",
    industry: "Healthcare",
    service: "AI & ML",
    icon: Brain,
    accent: "from-rose-500 to-pink-600",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Built a HIPAA-aligned telemedicine platform with AI triage, serving 50,000+ patients monthly and reducing wait times by 45%.",
    metrics: [
      { value: "50K+", label: "Patients/Month" },
      { value: "45%", label: "Less Wait Time" },
      { value: "99.9%", label: "Platform Uptime" },
    ],
    tags: ["Telemedicine", "AI Triage", "HIPAA", "Cloud"],
  },
];

const filters = ["All", "Cybersecurity", "AI & ML", "Cloud & IoT", "SAP Services"];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.service === activeFilter);

  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,.10),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Hero */}
        <section className="mx-auto max-w-5xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            <Sparkles size={16} /> Proven Results
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-white">
            Case Studies
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              That Speak for Themselves
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Real engagements. Real outcomes. Explore how we&apos;ve helped
            enterprises across the GCC secure, scale and transform with
            measurable impact.
          </p>
        </section>

        {/* Filter Bar */}
        <section className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === f
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </section>

        {/* Cards */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cs) => (
            <div
              key={cs.slug}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] to-transparent" />
                <div className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${cs.accent} px-3 py-1 text-xs font-semibold text-white`}>
                  <cs.icon className="h-3.5 w-3.5" /> {cs.service}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium text-cyan-300">{cs.industry}</span>
                <h3 className="mt-2 text-lg font-bold leading-snug text-white">{cs.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">{cs.summary}</p>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-xl font-bold text-white">{m.value}</div>
                      <div className="mt-1 text-[10px] leading-tight text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Impact band */}
        <section className="mt-24 rounded-[40px] border border-white/10 bg-white/5 p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "250+", label: "Projects Delivered" },
              { value: "15+", label: "Countries Served" },
              { value: "99.99%", label: "Avg. Uptime" },
              { value: "$50M+", label: "Value Created" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-white md:text-5xl">{s.value}</div>
                <div className="mt-2 text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">
          <h2 className="text-4xl font-bold text-white">Want to be our next success story?</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Let&apos;s architect a transformation that delivers measurable results for your enterprise.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
