"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const portals = [
  {
    title: "Our Services",
    desc: "Explore our comprehensive suite of enterprise technology solutions designed for scale.",
    href: "/services",
    img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    className: "col-span-1 md:col-span-2 min-h-[400px]"
  },
  {
    title: "Industries",
    desc: "Tailored strategies accelerating transformation across diverse global sectors.",
    href: "/industries",
    img: "https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    className: "col-span-1 md:col-span-1 min-h-[400px]"
  },
  {
    title: "Case Studies",
    desc: "Discover how we've architected digital transformation for leading enterprises.",
    href: "/case-studies",
    img: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    className: "col-span-1 md:col-span-3 min-h-[350px]"
  }
];

export default function NavigationHub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
    >
      {portals.map((portal, idx) => (
        <motion.div key={idx} variants={cardVariants} className={`${portal.className}`}>
          <Link href={portal.href} className="block relative w-full h-full rounded-[2rem] overflow-hidden group">
            
            {/* Background Image */}
            <Image 
              src={portal.img}
              alt={portal.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%]"
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] group-hover:border-primary/50 transition-colors duration-500 z-20" />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-30">
              <div className="flex items-end justify-between w-full">
                <div className="max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    {portal.title}
                  </h3>
                  <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {portal.desc}
                  </p>
                </div>

                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white transform group-hover:rotate-45 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shrink-0 mb-4 md:mb-0">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
