"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, FileText, Send, MapPin } from "lucide-react";
import { useState } from "react";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.32 8.16h4.36V24H.32zM8.08 8.16h4.18v2.16h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.68V24h-4.36v-7.08c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V24H8.08z"
      />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-[#080808] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s build an <span className="text-blue-600 dark:text-blue-400">AI-enabled Ecosystem</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 leading-relaxed">
              Available for consulting on data science, AI solutions, data warehousing, policy evaluation, and decision support systems. Let&apos;s discuss how data-driven insights can transform your organization.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:bhatti_sb@yahoo.com" className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="font-medium">bhatti_sb@yahoo.com</span>
              </a>
              <a href="https://wa.me/966533475986" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-500 transition-colors group">
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <span className="font-medium">+966533475986</span>
              </a>
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=Saqlain%20Raza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="h-5 w-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">Saudi Arabia</span>
              </div>
            </div>

           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all h-32 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-bold text-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <span>Send Inquiry</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
