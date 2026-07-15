import Link from "next/link";
import { ArrowRight, Code, MonitorSmartphone, Leaf, Sparkles, CheckCircle2, Trophy, Users, Globe2, Activity, ChevronDown } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Software House",
      description: "Custom software development, enterprise applications, and scalable digital solutions tailored to your business needs.",
      icon: Code,
      link: "/services/software-house",
      features: ["Custom Development", "Enterprise Apps", "UI/UX Design", "Quality Assurance"],
      accent: "from-cyan-500 to-blue-500",
      tagline: "Build The Future"
    },
    {
      title: "Information Technology Consultant",
      description: "Strategic IT consulting, digital transformation, and robust infrastructure planning to drive operational excellence.",
      icon: MonitorSmartphone,
      link: "/services/it-consulting",
      features: ["IT Strategy", "Digital Transformation", "Infrastructure", "Tech Audits"],
      accent: "from-blue-500 to-indigo-500",
      tagline: "Strategic Excellence"
    },
    {
      title: "Green Buildings Consultant",
      description: "Sustainable building design, LEED certification consulting, and energy-efficient architecture solutions.",
      icon: Leaf,
      link: "/services/green-buildings",
      features: ["LEED Certification", "Energy Modeling", "Sustainable Design", "Eco-friendly Materials"],
      accent: "from-emerald-400 to-cyan-500",
      tagline: "Sustainable Architecture"
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "We analyze your requirements and current capabilities." },
    { step: "02", title: "Strategy", desc: "Our architects map out a scalable, secure blueprint." },
    { step: "03", title: "Execution", desc: "Agile delivery with zero disruption to your daily operations." },
    { step: "04", title: "Scale", desc: "Continuous optimization, monitoring, and support." }
  ];

  const stats = [
    { label: "Enterprise Clients", value: "200+", icon: Users },
    { label: "Global Reach", value: "15+ Countries", icon: Globe2 },
    { label: "Uptime SLA", value: "99.99%", icon: Activity },
    { label: "Industry Awards", value: "24", icon: Trophy },
  ];

  const faqs = [
    { question: "How long does a typical digital transformation take?", answer: "Every enterprise is unique. A foundational cloud migration might take 3-6 months, while a full-scale IT modernization can span 12-18 months. We prioritize rapid, iterative value delivery." },
    { question: "Do you offer post-implementation support?", answer: "Yes, our Managed IT division provides 24/7 proactive monitoring, security patching, and continuous infrastructure optimization." },
    { question: "What is your approach to green building design?", answer: "We integrate smart IoT sensors with sustainable architectural practices to model energy efficiency, achieving LEED certification standards while reducing operational costs." },
    { question: "Are your software solutions scalable?", answer: "Absolutely. We build cloud-native, microservices-based architectures designed to scale infinitely as your user base and data requirements grow." },
  ];

  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,.10),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Hero */}
        <section className="mx-auto max-w-5xl text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            <Sparkles size={16} /> Our Capabilities
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-white">
            Enterprise Solutions
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Comprehensive technology stacks designed to solve complex business
            challenges, drive operational efficiency, and secure your future
            across the GCC.
          </p>
        </section>

        {/* Impact Metrics - Modern Bento UI */}
        <section className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 rounded-[32px] border border-cyan-400/10 bg-white/[0.02] backdrop-blur-xl shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/5">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h4 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3 text-center">{stat.value}</h4>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 text-center opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="mb-24 overflow-hidden py-10 border-y border-white/5 bg-white/[0.02]">
          <div className="text-center mb-8">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-400/50 uppercase">Powered by Enterprise Technologies</p>
          </div>
          <div className="flex justify-center flex-wrap gap-x-12 gap-y-8 px-6 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-700">
             {["Next.js", "React", "Python", "TensorFlow", "AWS", "Microsoft Azure", "Docker", "Kubernetes", "SAP HANA"].map(tech => (
               <span key={tech} className="text-2xl md:text-3xl font-black tracking-tighter text-white">
                 {tech}
               </span>
             ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.link} className="group flex h-full">
                <div className="flex w-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} shadow-lg`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-300">
                    {service.tagline}
                  </p>
                  <p className="mt-4 leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-1 text-cyan-300 transition-all group-hover:gap-2">
                    Explore Capabilities <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA Card */}
            <div className="flex h-full flex-col justify-center rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Need something custom?</h3>
              <p className="mt-4 text-gray-400">
                Tell us about your unique requirements and we&apos;ll architect a
                solution.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
              >
                Talk to an Architect <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-24">
          <h2 className="text-center text-4xl font-bold text-white">
            How We Engage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            A proven, transparent delivery framework that de-risks
            transformation from day one.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="group relative rounded-[24px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <span className="text-5xl font-black text-white/10 transition group-hover:text-cyan-400/30">
                  {p.step}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs - Modern Accordion UI */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Questions & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Answers</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400">Everything you need to know about partnering with us.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-cyan-400/30 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 md:p-8 text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
                  {faq.question}
                  <span className="relative ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 transition-transform duration-300 group-open:rotate-180 group-hover:bg-cyan-400/20">
                    <ChevronDown className="h-5 w-5 text-cyan-400" />
                  </span>
                </summary>
                <div className="px-6 pb-8 md:px-8 text-gray-400 leading-relaxed text-base border-t border-white/5 pt-4">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to transform your enterprise?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Partner with Quantum Vortexa to accelerate secure, intelligent
            digital transformation across AI, cybersecurity, cloud and
            enterprise platforms.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Book a Free Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
