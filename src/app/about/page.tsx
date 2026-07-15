import Image from "next/image";
import {
  CheckCircle2,
  Shield,
  Target,
  MapPin,
  ArrowRight,
  Building2,
  Globe2,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "15+", label: "Countries Served" },
  { value: "250+", label: "Projects Delivered" },
  { value: "99.99%", label: "Infrastructure Uptime" },
  { value: "24/7", label: "Enterprise Support" },
];

const values = [
  {
    title: "Uncompromising Security",
    desc: "Security is built into every architecture from day one.",
  },
  {
    title: "Engineering Excellence",
    desc: "Scalable, resilient and enterprise-grade solutions.",
  },
  {
    title: "Local Compliance",
    desc: "Aligned with UAE regulations and global standards.",
  },
  {
    title: "Client Partnership",
    desc: "Long-term collaboration focused on business outcomes.",
  },
];

const timeline = [
  "Company Founded",
  "Cloud & Infrastructure Services",
  "Cybersecurity Expansion",
  "AI & Enterprise Transformation",
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,.10),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-6">

        <section className="mx-auto max-w-5xl text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            <Sparkles size={16}/> About Quantum Vortexa
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-white">
            Architecting the
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Future
            </span>
            of the Middle East
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Quantum Vortexa FZE LLC is a premier technology partner helping
            enterprises accelerate digital transformation through AI,
            cybersecurity, cloud infrastructure and enterprise engineering.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((item)=>(
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40">
                <h3 className="text-4xl font-bold text-white">{item.value}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2 mb-24">
          {[{
            icon:<Target className="text-cyan-300"/>,
            title:"Our Mission",
            body:"To empower GCC enterprises with secure, scalable and intelligent technology infrastructures that drive innovation and sustainable growth."
          },{
            icon:<Shield className="text-cyan-300"/>,
            title:"Our Vision",
            body:"To become the most trusted technology partner across the Middle East by delivering world-class cybersecurity, AI and cloud solutions."
          }].map((card)=>(
            <div key={card.title} className="group rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                {card.icon}
              </div>
              <h2 className="text-3xl font-bold text-white">{card.title}</h2>
              <p className="mt-5 leading-8 text-gray-400">{card.body}</p>
            </div>
          ))}
        </section>

        <section className="grid items-center gap-16 lg:grid-cols-2 mb-24">
          <div>
            <span className="text-cyan-300 uppercase tracking-[0.25em] text-sm">UAE Presence</span>
            <h2 className="mt-4 text-4xl font-bold text-white">Deep Roots in the UAE</h2>
            <p className="mt-6 leading-8 text-gray-400">
              Headquartered in Ajman Free Zone, Quantum Vortexa combines deep regional knowledge with global engineering excellence. Every solution is designed for security, compliance and long-term scalability.
            </p>

            <div className="mt-8 space-y-4">
              {["UAE PDPL Compliance","Enterprise Ready Architecture","Government Security Standards"].map((t)=>(
                <div key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-400"/>
                  <span className="text-gray-300">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <MapPin className="text-cyan-300"/>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ajman Free Zone</h4>
                <p className="text-sm text-gray-400">Amber Gem Tower • 26th Floor</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/10">
            <img src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Office Headquarters" className="h-[500px] w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-lg">
              <div className="flex items-center gap-3">
                <Building2 className="text-cyan-300"/>
                <div>
                  <p className="font-semibold text-white">Regional Headquarters</p>
                  <p className="text-sm text-gray-300">Ajman, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-center text-4xl font-bold text-white">Core Values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((v)=>(
              <div key={v.title} className="group rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40">
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <Globe2 className="text-cyan-300"/>
                </div>
                <h3 className="text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <style>{`
            @keyframes movingLine {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}</style>
          <h2 className="mb-12 text-center text-4xl font-bold text-white">Our Journey</h2>
          <div className="isolate grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item,index)=>(
              <div key={item} className="relative p-8 text-center">
                <div className="absolute inset-0 z-[-2] rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-400/40" />
                
                {index < timeline.length - 1 && (
                  <div className="absolute left-[50%] top-[59px] z-[-1] hidden h-[2px] w-[calc(100%+2rem)] overflow-hidden bg-white/10 lg:block">
                    <div 
                      className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" 
                      style={{ 
                        animation: 'movingLine 2s linear infinite',
                        animationDelay: `${index * 0.5}s`
                      }} 
                    />
                  </div>
                )}

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  {index+1}
                </div>
                <h3 className="font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">
          <h2 className="text-4xl font-bold text-white">Building Tomorrow's Digital Infrastructure</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Partner with Quantum Vortexa to accelerate secure digital transformation across AI, cybersecurity, cloud and enterprise platforms.
          </p>
          <button className="mt-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
            Contact Us
          </button>
        </section>

      </div>
    </div>
  );
}
