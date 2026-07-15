"use client";

import { useState, useEffect } from "react";
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
  X,
  Target,
  Lightbulb,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    challenge: "The bank's legacy perimeter-based security model was struggling to cope with modern remote work and advanced persistent threats, exposing them to high risks of lateral movement.",
    solution: "We engineered a comprehensive Zero Trust Architecture, enforcing strict identity verification, micro-segmentation, and continuous monitoring across all endpoints.",
    impact: "Achieved full PDPL compliance within 6 months, drastically reduced the attack surface, and surprisingly improved employee access speeds by removing legacy VPN bottlenecks.",
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
    challenge: "A massive regional retail chain suffered from low online engagement and flat average order values due to a static, one-size-fits-all e-commerce experience.",
    solution: "Deployed a real-time recommendation engine powered by advanced ML models, unifying online and offline customer data to deliver hyper-personalized product feeds.",
    impact: "Sales conversions tripled almost instantly. The unified data approach also allowed for better inventory forecasting across their 120+ physical stores.",
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
    challenge: "Unplanned equipment failures were costing millions annually and causing massive supply chain disruptions for a major industrial manufacturer.",
    solution: "Connected over 5,000 legacy and modern IoT sensors to a secure, cloud-native analytics platform featuring predictive failure models.",
    impact: "Maintenance teams now receive alerts days before potential failures, slashing unplanned downtime by 62% and saving over $4.2M in the first year alone.",
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
    challenge: "Operating on 7 disparate, aging ERP instances, the conglomerate suffered from severe data silos and agonizingly slow financial reporting.",
    solution: "Executed a phased, zero-downtime migration of 12 distinct business units onto a single, unified SAP S/4HANA cloud environment.",
    impact: "Achieved real-time financial consolidation, reduced Total Cost of Ownership by 35%, and established a scalable digital core for future acquisitions.",
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
    challenge: "The utility provider faced mounting regulatory pressure and increasing cyber threats targeting their highly vulnerable legacy SCADA systems.",
    solution: "Engineered strict OT/IT network segmentation and deployed passive continuous monitoring tools tailored for industrial control systems.",
    impact: "Secured critical infrastructure with zero operational disruption, achieving 100% compliance with stringent national cybersecurity standards.",
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
    challenge: "Overwhelmed emergency rooms and outpatient clinics were leading to dangerous patient wait times and severe doctor burnout.",
    solution: "Built a fully HIPAA-aligned, cloud-based telemedicine platform featuring an intelligent AI triage assistant to pre-screen and route patients.",
    impact: "The platform now successfully serves 50,000+ patients monthly, effectively cutting physical wait times by 45% and drastically improving patient satisfaction.",
  },
];

const filters = ["All", "Cybersecurity", "AI & ML", "Cloud & IoT", "SAP Services"];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<any | null>(null);

  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStudy]);

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
              onClick={() => setSelectedStudy(cs)}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
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

      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 z-[110] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6"
            >
              <div className="relative flex max-h-[90vh] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#070B14] shadow-2xl">
                
                {/* Modal Header Image */}
                <div className="relative h-48 sm:h-64 shrink-0 overflow-hidden">
                  <img
                    src={selectedStudy.image}
                    alt={selectedStudy.title}
                    className="h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/60 to-transparent" />
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <X size={20} />
                  </button>
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10">
                    <div className={`mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${selectedStudy.accent} px-3 py-1 text-xs font-semibold text-white shadow-lg`}>
                      <selectedStudy.icon className="h-3.5 w-3.5" /> {selectedStudy.service}
                    </div>
                    <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl">{selectedStudy.title}</h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="overflow-y-auto p-6 sm:p-10">
                  {/* Highlights */}
                  <div className="mb-10 grid gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 sm:grid-cols-3">
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-500">Client</div>
                      <div className="mt-1 text-sm font-bold text-white">{selectedStudy.client}</div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-500">Industry</div>
                      <div className="mt-1 text-sm font-bold text-white">{selectedStudy.industry}</div>
                    </div>
                    <div className="col-span-1 flex flex-wrap gap-2">
                      {selectedStudy.tags.map((t: string) => (
                        <span key={t} className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Story */}
                  <div className="grid gap-10 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <div className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                          <Target className="h-5 w-5 text-cyan-400" /> The Challenge
                        </div>
                        <p className="text-gray-400 leading-relaxed">{selectedStudy.challenge}</p>
                      </div>
                      <div>
                        <div className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                          <Lightbulb className="h-5 w-5 text-blue-400" /> Our Solution
                        </div>
                        <p className="text-gray-400 leading-relaxed">{selectedStudy.solution}</p>
                      </div>
                      <div>
                        <div className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                          <Trophy className="h-5 w-5 text-emerald-400" /> The Impact
                        </div>
                        <p className="text-gray-400 leading-relaxed">{selectedStudy.impact}</p>
                      </div>
                    </div>

                    {/* Metrics sidebar */}
                    <div className="lg:col-span-1">
                      <div className={`rounded-[24px] border border-white/10 bg-gradient-to-b ${selectedStudy.accent} p-[1px]`}>
                        <div className="flex h-full flex-col gap-6 rounded-[23px] bg-[#070B14] p-6">
                          <h3 className="font-bold text-white">Key Outcomes</h3>
                          {selectedStudy.metrics.map((m: any, idx: number) => (
                            <div key={idx} className="border-l-2 border-cyan-500/50 pl-4">
                              <div className="text-3xl font-black text-white">{m.value}</div>
                              <div className="mt-1 text-sm font-medium text-gray-400">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
