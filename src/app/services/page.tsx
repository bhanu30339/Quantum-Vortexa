import Link from "next/link";
import { Shield, Brain, Cloud, Database, Cpu, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Cybersecurity",
      description: "Military-grade protection for your digital assets. VAPT, SOC-as-a-Service, Zero Trust Architecture, and comprehensive GRC advisory.",
      icon: Shield,
      link: "/services/cybersecurity",
      features: ["Penetration Testing", "24/7 SOC", "Zero Trust", "Compliance"]
    },
    {
      title: "AI & Machine Learning",
      description: "Unlock the value of your data with intelligent automation, predictive analytics, and enterprise-grade LLM integrations.",
      icon: Brain,
      link: "/services/ai-ml",
      features: ["LLM Integration", "Predictive Analytics", "Computer Vision", "MLOps"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, secure, and resilient cloud architectures across AWS, Azure, and GCP. Migration, DevOps, and cost optimization.",
      icon: Cloud,
      link: "/services/cloud",
      features: ["Cloud Migration", "Kubernetes", "FinOps", "Disaster Recovery"]
    },
    {
      title: "SAP Services",
      description: "End-to-end SAP implementation, S/4HANA migration, and continuous support tailored for complex enterprise environments.",
      icon: Database,
      link: "/services/sap",
      features: ["S/4HANA Migration", "SAP Support", "Integration", "Customization"]
    },
    {
      title: "Managed IT & Transformation",
      description: "Comprehensive infrastructure management and strategic consulting to accelerate your digital transformation journey.",
      icon: Cpu,
      link: "/services/managed-it",
      features: ["Infrastructure Management", "Digital Strategy", "Helpdesk", "Enterprise Apps"]
    }
  ];

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Enterprise Solutions</h1>
          <p className="text-xl text-gray-400">
            Comprehensive technology stacks designed to solve complex business challenges, drive operational efficiency, and secure your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="flex h-full">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group flex flex-col w-full">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 flex-grow">{service.description}</p>
                
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all gap-1 mt-auto">
                  Explore Capabilities <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
