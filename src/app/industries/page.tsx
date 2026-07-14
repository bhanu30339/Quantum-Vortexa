import Link from "next/link";
import { Banknote, HeartPulse, Factory, ShoppingCart, Plane, Zap, ShieldCheck, TrendingUp, Globe as Globe2, ArrowRight, Sparkles } from "lucide-react";

const industries = [
  {
    title: "Banking & Financial Services",
    icon: Banknote,
    desc: "Secure digital banking, fraud detection AI, regulatory compliance and core system modernization for UAE and GCC financial institutions.",
    challenges: ["Fraud & AML automation", "Open banking APIs", "Regulatory compliance"],
    accent: "from-cyan-500 to-blue-600",
    image:
      "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    span: "lg:col-span-2",
    featured: true,
    blurb:
      "Trusted by leading banks across the UAE to secure transactions, automate compliance and modernize core platforms.",
    statsList: [
      { value: "40+", label: "Financial Projects" },
      { value: "99.99%", label: "Uptime Delivered" },
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    icon: HeartPulse,
    desc: "HIPAA-aligned data protection, AI diagnostics, telemedicine platforms and secure EHR integration.",
    challenges: ["Patient data privacy", "AI diagnostics", "Telemedicine"],
    accent: "from-rose-500 to-pink-600",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    span: "",
    featured: false,
    blurb: "Secure patient data and enable AI-driven care across the region.",
    statsList: [{ value: "25+", label: "Healthcare Engagements" }],
  },
  {
    title: "Manufacturing & Industrial",
    icon: Factory,
    desc: "Industry 4.0, IoT integration, predictive maintenance and OT/IT security convergence.",
    challenges: ["Predictive maintenance", "OT/IT convergence", "Supply chain visibility"],
    accent: "from-amber-500 to-orange-600",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    span: "",
    featured: false,
    blurb: "Smart factory enablement with IoT, AI and secure OT integration.",
    statsList: [{ value: "30+", label: "Industrial Projects" }],
  },
  {
    title: "Retail & E-Commerce",
    icon: ShoppingCart,
    desc: "Omnichannel platforms, AI personalization, payment security and real-time inventory.",
    challenges: ["Omnichannel experience", "AI personalization", "Payment security"],
    accent: "from-violet-500 to-purple-600",
    image:
      "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    span: "lg:col-span-2",
    featured: true,
    blurb:
      "We help retailers build seamless omnichannel experiences with AI-driven personalization and bulletproof payment security.",
    statsList: [
      { value: "35+", label: "Retail Engagements" },
      { value: "3x", label: "Conversion Lift" },
    ],
  },
  {
    title: "Aviation & Logistics",
    icon: Plane,
    desc: "Cargo tracking, route optimization AI, secure ops and GCAA compliance.",
    challenges: ["Route optimization", "Cargo visibility", "GCAA compliance"],
    accent: "from-sky-500 to-cyan-600",
    image:
      "https://images.pexels.com/photos/610829/pexels-photo-610829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    span: "",
    featured: false,
    blurb: "Optimize routes, secure operations and ensure compliance.",
    statsList: [{ value: "20+", label: "Logistics Projects" }],
  },
  {
    title: "Energy & Utilities",
    icon: Zap,
    desc: "Smart grid analytics, SCADA security, predictive asset management and ESG reporting.",
    challenges: ["Smart grid analytics", "SCADA security", "ESG reporting"],
    accent: "from-emerald-500 to-teal-600",
    image:
      "https://images.pexels.com/photos/414553/pexels-photo-414553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    span: "",
    featured: false,
    blurb: "Secure SCADA, smart grid analytics and ESG-ready reporting.",
    statsList: [{ value: "18+", label: "Energy Projects" }],
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Security-First by Design",
    desc: "Every solution is architected with Zero Trust principles and UAE PDPL compliance from day one.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Business Impact",
    desc: "We tie every engagement to clear KPIs — uptime, cost savings, risk reduction and revenue lift.",
  },
  {
    icon: Globe2,
    title: "Regional Expertise",
    desc: "Deep understanding of GCC regulatory landscapes, business culture and enterprise needs.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,.10),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Hero */}
        <section className="mx-auto max-w-5xl text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            <Sparkles size={16} /> Industries We Serve
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-white">
            Sector Expertise for
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              the GCC Economy
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            From banking to energy, we bring deep domain knowledge and
            battle-tested technology to every engagement — delivering outcomes
            that matter in regulated, high-stakes environments.
          </p>
        </section>

        {/* Bento Grid */}
        <section className="mb-24">
          <div className="grid auto-rows-[420px] gap-6 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 ${ind.span}`}
              >
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/80 to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${ind.accent} shadow-lg`}>
                    <ind.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{ind.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{ind.blurb}</p>

                  {ind.featured && (
                    <p className="mt-3 leading-7 text-gray-400">{ind.desc}</p>
                  )}

                  <div className="mt-5 flex gap-6">
                    {ind.statsList.map((s) => (
                      <div key={s.label}>
                        <div className="text-2xl font-bold text-white">{s.value}</div>
                        <div className="text-xs text-gray-400">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {ind.challenges.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiators */}
        <section className="mb-24">
          <h2 className="text-center text-4xl font-bold text-white">
            Why Industry Leaders Choose Us
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="group rounded-[24px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <d.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold text-white">{d.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">
          <h2 className="text-4xl font-bold text-white">Your industry. Our expertise.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Let&apos;s discuss how Quantum Vortexa can accelerate transformation in
            your sector.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Schedule a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
