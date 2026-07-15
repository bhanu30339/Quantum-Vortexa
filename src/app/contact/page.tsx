"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Building2,
  X,
  ExternalLink,
  Briefcase,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(6, "Valid phone number is required"),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details"),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const contactCards = [
  {
    icon: MapPin,
    title: "Office Location",
    lines: [
      { text: "CWS-1V-223327, 26th Floor" },
      { text: "Amber Gem Tower, Ajman Free Zone, UAE" }
    ],
  },
  {
    icon: Phone,
    title: "Direct Lines & WhatsApp",
    lines: [
      { text: "+971 54 456 6332", href: "tel:+971544566332" },
      { text: "+971 58 103 7096", href: "tel:+971581037096" }
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [
      { text: "Mon – Fri, 9:00 AM – 6:00 PM (GST)" },
      { text: "SOC 24/7/365" }
    ],
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Channels",
    interactive: true,
    lines: [
      { text: "pranay@qvortexa.com" },
      { text: "info@qvortexa.com" }
    ],
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#070B14] pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,.10),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Hero */}
        <section className="mx-auto max-w-5xl text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            <Sparkles size={16} /> Let&apos;s Connect
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-white">
            Let&apos;s build the
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              future, together.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Discuss your enterprise requirements with our solutions architects.
            We&apos;re ready to accelerate your digital transformation journey.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card: any) => (
            <div
              key={card.title}
              onClick={() => card.interactive && setIsEmailModalOpen(true)}
              className={`group rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40 ${card.interactive ? "cursor-pointer" : ""}`}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <card.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-white">{card.title}</h3>
              <div className="mt-2 space-y-1">
                {card.lines.map((line: any) => (
                  'href' in line && !card.interactive ? (
                    <a key={line.text} href={line.href} className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                      {line.text}
                    </a>
                  ) : (
                    <p key={line.text} className="text-sm text-gray-400">{line.text}</p>
                  )
                ))}
              </div>
              {card.interactive && (
                <div className="mt-4 flex items-center text-xs text-cyan-400 font-medium opacity-80 transition-opacity group-hover:opacity-100">
                  View Departments <Sparkles className="ml-1.5 h-3 w-3" />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Form + Map */}
        <section className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                <MessageSquare className="h-6 w-6 text-cyan-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Request a Callback</h2>
                <p className="text-sm text-gray-400">We&apos;ll respond within one business day.</p>
              </div>
            </div>

            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <ShieldCheck className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Received</h4>
                <p className="mt-2 text-gray-400">
                  Thank you for reaching out. A solutions architect will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-6 rounded-full bg-white/10 px-6 py-2.5 font-medium text-white transition hover:bg-white/20"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input type="text" {...register("honeypot")} className="hidden" />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">Full Name *</label>
                    <input
                      {...register("name")}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">Company Name</label>
                    <input
                      {...register("company")}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                      placeholder="Enterprise Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">Phone Number *</label>
                    <input
                      {...register("phone")}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                      placeholder="+971 5X XXX XXXX"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">Service Interest *</label>
                  <select
                    {...register("serviceInterest")}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                  >
                    <option value="">Select a service...</option>
                    <option value="cybersecurity">Cybersecurity (VAPT, SOC)</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="cloud">Cloud Migration & Architecture</option>
                    <option value="sap">SAP Implementation</option>
                    <option value="managed-it">Managed IT Services</option>
                    <option value="other">Other / Consultation</option>
                  </select>
                  {errors.serviceInterest && <p className="mt-1 text-xs text-red-400">{errors.serviceInterest.message}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">Project Details *</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                </div>

                {submitStatus === "error" && (
                  <p className="text-sm text-red-400">An error occurred while submitting your request. Please try again or contact us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  ) : (
                    <>
                      Submit Request <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-500">
                  By submitting this form, you agree to our Privacy Policy regarding the processing of your personal data under UAE PDPL.
                </p>
              </form>
            )}
          </div>

          {/* Map + Office */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[32px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3312959825444!2d55.4519999!3d25.3936999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f583569c20a4b%3A0xc3c54530fc4ccb2b!2sAmber%20Gem%20Tower!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>

            <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Regional Headquarters</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-300">
                    Quantum Vortexa FZE LLC<br />
                    CWS-1V-223327, 26th Floor, Amber Gem Tower<br />
                    Ajman Free Zone, United Arab Emirates
                  </p>
                  <p className="mt-3 text-xs text-gray-500">Trade License No: 262528109888</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {isEmailModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEmailModalOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 z-[110] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#070B14] p-6 sm:p-10 shadow-2xl">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/20 blur-[100px] pointer-events-none" />
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEmailModalOpen(false);
                  }}
                  className="absolute right-4 top-4 z-50 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>

                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                      <Mail className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Email Directory</h2>
                      <p className="text-sm text-gray-400">Connect with the right department.</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/40 hover:bg-white/10">
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                        <Briefcase size={20} />
                      </div>
                      <h3 className="mb-1 font-bold text-white">Leadership & Strategy</h3>
                      <p className="mb-4 text-sm text-gray-400">For executive discussions, acquisitions, and high-level partnerships.</p>
                      
                      <a href="mailto:pranay@qvortexa.com" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                        pranay@qvortexa.com <ExternalLink size={14} />
                      </a>
                    </div>
                    
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-emerald-400/40 hover:bg-white/10">
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Info size={20} />
                      </div>
                      <h3 className="mb-1 font-bold text-white">General Inquiries</h3>
                      <p className="mb-4 text-sm text-gray-400">For general questions, platform support, and basic information.</p>
                      
                      <a href="mailto:info@qvortexa.com" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                        info@qvortexa.com <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-6 rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
                    <p className="text-sm text-gray-400">Looking for a tailored solution? <button onClick={() => { setIsEmailModalOpen(false); window.scrollTo({ top: 400, behavior: "smooth" }) }} className="font-medium text-cyan-400 hover:underline">Request a Callback</button> below.</p>
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
