"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's build the future, together.</h1>
          <p className="text-xl text-gray-400">
            Discuss your enterprise requirements with our solutions architects. We're ready to accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">UAE Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Office Location</h4>
                    <p className="text-gray-400">CWS-1V-223327, 26th Floor<br/>Amber Gem Tower, Ajman Free Zone, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Direct Lines & WhatsApp</h4>
                    <a href="tel:+971544566332" className="block text-gray-400 hover:text-white transition-colors">+971 54 456 6332</a>
                    <a href="tel:+971581037096" className="block text-gray-400 hover:text-white transition-colors">+971 58 103 7096</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-400">Mon - Fri, 9:00 AM - 6:00 PM (GST)<br/>SOC 24/7/365</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3312959825444!2d55.4519999!3d25.3936999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f583569c20a4b%3A0xc3c54530fc4ccb2b!2sAmber%20Gem%20Tower!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-6">Request a Callback</h3>
            
            {submitStatus === "success" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Received</h4>
                <p className="text-gray-400">Thank you for reaching out. A solutions architect will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-6 px-6 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input type="text" {...register("honeypot")} className="hidden" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name *</label>
                    <input 
                      {...register("name")} 
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                    <input 
                      {...register("company")} 
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Enterprise Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address *</label>
                    <input 
                      {...register("email")} 
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number (UAE/Intl) *</label>
                    <input 
                      {...register("phone")} 
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="+971 5X XXX XXXX"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Service Interest *</label>
                  <select 
                    {...register("serviceInterest")}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="cybersecurity">Cybersecurity (VAPT, SOC)</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="cloud">Cloud Migration & Architecture</option>
                    <option value="sap">SAP Implementation</option>
                    <option value="managed-it">Managed IT Services</option>
                    <option value="other">Other / Consultation</option>
                  </select>
                  {errors.serviceInterest && <p className="mt-1 text-xs text-red-500">{errors.serviceInterest.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Project Details *</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                </div>

                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm">An error occurred while submitting your request. Please try again or contact us directly.</p>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy regarding the processing of your personal data under UAE PDPL.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
