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

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.95 7.04c.01.17.01.35.01.52 0 5.33-4.06 11.48-11.48 11.48-2.28 0-4.4-.67-6.18-1.82.32.04.64.06.97.06 1.89 0 3.63-.64 5.01-1.72a4.04 4.04 0 0 1-3.77-2.8c.25.05.5.08.77.08.37 0 .73-.05 1.07-.15A4.03 4.03 0 0 1 2.8 7.7v-.05c.54.3 1.15.48 1.8.5A4.03 4.03 0 0 1 2.87 4.1c0-.75.2-1.45.56-2.06a11.46 11.46 0 0 0 8.32 4.22 4.05 4.05 0 0 1 6.89-3.69 8 8 0 0 0 2.56-.98 4.06 4.06 0 0 1-1.78 2.24 8.07 8.07 0 0 0 2.33-.64 8.7 8.7 0 0 1-2.8 2.25z"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.71 4.71 0 0 0 12 7.3zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3z"
      />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      <path
        fill="currentColor"
        d="M17.8 3H6.2A3.2 3.2 0 0 0 3 6.2v11.6A3.2 3.2 0 0 0 6.2 21h11.6a3.2 3.2 0 0 0 3.2-3.2V6.2A3.2 3.2 0 0 0 17.8 3zm1.7 14.8a1.7 1.7 0 0 1-1.7 1.7H6.2a1.7 1.7 0 0 1-1.7-1.7V6.2A1.7 1.7 0 0 1 6.2 4.5h11.6a1.7 1.7 0 0 1 1.7 1.7z"
      />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7L15.5 12z"
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
              Let&apos;s build <span className="text-blue-600 dark:text-blue-400">together</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 leading-relaxed">
              Available for consulting, AI architecture design, and end-to-end data pipeline development. Reach out to discuss how we can accelerate your business with AI.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:zulfiqarcomsats@gmail.com" className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="font-medium">zulfiqarcomsats@gmail.com</span>
              </a>
              <a href="https://wa.me/923415883613" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-500 transition-colors group">
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <span className="font-medium">+92-3415883613</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zulfiqar-ali01/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="h-5 w-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/zulfiqar-ali01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group"
              >
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fill="currentColor"
                      d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.2 11.1.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.3 9.3 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6 4.8-1.5 8.2-5.9 8.2-11.1A11.5 11.5 0 0 0 12 .5Z"
                    />
                  </svg>
                </div>
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://twitter.com/Zulfiqa08762401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-sky-500 transition-colors group"
              >
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <TwitterIcon className="h-5 w-5" />
                </div>
                <span className="font-medium">Twitter</span>
              </a>
              <a
                href="https://www.facebook.com/Zulfibalti/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-[#1877F2] transition-colors group"
              >
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fill="currentColor"
                      d="M13 21v-7h2.3l.4-3H13V9.2c0-.9.3-1.5 1.6-1.5H16V5.1C15.7 5 14.8 5 13.8 5 11.5 5 10 6.4 10 8.9V11H8v3h2v7h3Z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/zulfibalti96/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-pink-500 transition-colors group"
              >
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <span className="font-medium">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@InnvoAI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-red-500 transition-colors group"
              >
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <YouTubeIcon className="h-5 w-5" />
                </div>
                <span className="font-medium">YouTube</span>
              </a>
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">Skardu, Gilgit Baltistan, Pakistan</span>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Download Resume</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Full detailed experience and skills.</p>
              </div>
              <a href="/resume.pdf" download className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2 font-medium">
                <FileText size={18} />
                <span>CV</span>
              </a>
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
