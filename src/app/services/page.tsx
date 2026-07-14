import Link from "next/link";
import { Shield, Brain, Cloud, Database, Cpu, ArrowRight, Sparkles, CircleCheck as CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Cybersecurity",
    tagline: "Military-grade defense for the digital enterprise.",
    description:
      "VAPT, SOC-as-a-Service, Zero Trust Architecture, and comprehensive GRC advisory aligned with UAE NESA, PDPL and ISO 27001.",
    icon: Shield,
    link: "/services/cybersecurity",
    features: [
      "Penetration Testing",
      "24/7 SOC Monitoring",
      "Zero Trust Architecture",
      "Compliance Advisory",
    ],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI & Machine Learning",
    tagline: "Turn data into intelligent, automated action.",
    description:
      "Enterprise LLM integration, MLOps pipelines, computer vision, and predictive analytics deployed on secure, sovereign infrastructure.",
    icon: Brain,
    link: "/services/ai-ml",
    features: [
      "LLM Integration",
      "Predictive Analytics",
      "Computer Vision",
      "MLOps Automation",
    ],
    accent: "from-blue-500 to-indigo-600",
  },
  {
    title: "Cloud Solutions",
    tagline: "Scalable, resilient, cost-optimized cloud.",
    description:
      "AWS, Azure and GCP architecture, Kubernetes orchestration, DevOps automation, and seamless migration with zero downtime.",
    icon: Cloud,
    link: "/services/cloud",
    features: [
      "Cloud Migration",
      "Kubernetes & DevOps",
      "FinOps Optimization",
      "Disaster Recovery",
    ],
    accent: "from-sky-500 to-cyan-600",
  },
  {
    title: "SAP Services",
    tagline: "Enterprise SAP, modernized end-to-end.",
    description:
      "S/4HANA migration, implementation, integration and managed support tailored for complex GCC enterprise environments.",
    icon: Database,
    link: "/services/sap",
    features: [
      "S/4HANA Migration",
      "Implementation & Support",
      "Cloud Integration",
      "Custom Development",
    ],
    accent: "from-teal-500 to-emerald-600",
  },
  {
    title: "Managed IT & Transformation",
    tagline: "Your infrastructure, fully managed.",
    description:
      "Comprehensive infrastructure management, digital strategy consulting, helpdesk and enterprise application support.",
    icon: Cpu,
    link: "/services/managed-it",
    features: [
      "Infrastructure Management",
      "Digital Strategy",
      "Enterprise Helpdesk",
      "Application Support",
    ],
    accent: "from-cyan-500 to-teal-600",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    desc: "Deep-dive workshops to map your current architecture, risks and transformation goals.",
  },
  {
    step: "02",
    title: "Solution Architecture",
    desc: "We design a tailored, secure and scalable blueprint aligned with your business outcomes.",
  },
  {
    step: "03",
    title: "Implementation & Migration",
    desc: "Agile delivery with zero-downtime migration, continuous testing and risk mitigation.",
  },
  {
    step: "04",
    title: "Managed Operations",
    desc: "24/7 monitoring, optimization and ongoing support to keep your systems performing.",
  },
];

export default function ServicesPage() {
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
