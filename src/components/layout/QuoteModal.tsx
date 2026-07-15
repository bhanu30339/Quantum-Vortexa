"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, ShieldCheck, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
  countryCode: z.string().min(1, "Required"),
  phone: z.string().min(6, "Valid phone number is required"),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details"),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: "+971",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const subject = encodeURIComponent(`New Lead: ${data.name} - ${data.serviceInterest}`);
      const body = encodeURIComponent(`Name: ${data.name}
Company: ${data.company || 'Not provided'}
Email: ${data.email}
Phone: ${data.countryCode} ${data.phone}
Service Interest: ${data.serviceInterest}

Project Details:
${data.message}`);

      window.location.href = `mailto:pranay.b@qvortexa.com,info@qvortexa.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitStatus("idle");
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#070B14] p-6 sm:p-10 shadow-2xl">
              {/* Background Accents */}
              <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-[100px]" />
              <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

              <button
                onClick={handleClose}
                className="absolute right-6 top-6 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                    <MessageSquare className="h-6 w-6 text-cyan-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Request a Callback</h2>
                    <p className="text-sm text-gray-400">We'll respond within one business day.</p>
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
                      onClick={handleClose}
                      className="mt-6 rounded-full bg-white/10 px-6 py-2.5 font-medium text-white transition hover:bg-white/20"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input type="text" {...register("honeypot")} className="hidden" />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-300">Full Name *</label>
                        <input
                          {...register("name")}
                          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-300">Company Name</label>
                        <input
                          {...register("company")}
                          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                          placeholder="Enterprise Corp"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-300">Email Address *</label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-300">Phone Number *</label>
                        <div className="flex gap-2">
                          <select
                            {...register("countryCode")}
                            className="w-28 shrink-0 rounded-xl border border-white/10 bg-black/40 px-2 py-2.5 text-white outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 [&>option]:bg-[#070B14]"
                          >
                            <option value="+971">+971 (UAE)</option>
                            <option value="+1">+1 (US/CA)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+91">+91 (IN)</option>
                            <option value="+966">+966 (SA)</option>
                            <option value="+974">+974 (QA)</option>
                            <option value="+973">+973 (BH)</option>
                            <option value="+968">+968 (OM)</option>
                            <option value="+965">+965 (KW)</option>
                          </select>
                          <input
                            {...register("phone")}
                            className="w-full flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                            placeholder="5X XXX XXXX"
                          />
                        </div>
                        {(errors.phone || errors.countryCode) && (
                          <p className="mt-1 text-xs text-red-400">{errors.phone?.message || "Country code is required"}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-300">Service Interest *</label>
                      <select
                        {...register("serviceInterest")}
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 [&>option]:bg-[#070B14]"
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
                      <label className="mb-1 block text-sm font-medium text-gray-300">Project Details *</label>
                      <textarea
                        {...register("message")}
                        rows={3}
                        className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                        placeholder="Tell us about your requirements..."
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                    </div>

                    {submitStatus === "error" && (
                      <p className="text-sm text-red-400">An error occurred while submitting your request. Please try again.</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-bold text-white transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                      ) : (
                        <>
                          Submit Request <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
