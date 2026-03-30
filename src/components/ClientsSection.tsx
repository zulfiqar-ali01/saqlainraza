"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { name: "Near Space Labs", src: "/logo/near_space_logo.jpg" },
    { name: "CVS Coram", src: "/logo/cvs-health.svg" },
    { name: "GPN Technologies", src: "/logo/gpn-technologies.jpg" },
    { name: "Queens University of Charlotte", src: "/logo/queens-university.png" },
    { name: "KPMG", src: "/logo/kpmg-logo.jpg" },
    { name: "Ministry of Information Pakistan", src: "/logo/moib.jpg" },
    { name: "Cornis", src: "/logo/cornis-logo.png" },
  ];

  // Duplicate the array to create a seamless infinite scrolling effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-widest"
        >
          Trusted by leading organizations across healthcare, consulting, government, and technology sectors
        </motion.p>
      </div>

      <div className="relative w-full flex items-center h-24 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 md:before:w-32 before:bg-linear-to-r before:from-neutral-50 before:to-transparent dark:before:from-[#080808] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 md:after:w-32 after:bg-linear-to-l after:from-neutral-50 after:to-transparent dark:after:from-[#080808]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-12 md:gap-24 px-6 md:px-12">
          {duplicatedClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="relative w-32 md:w-48 h-16 md:h-20 flex items-center justify-center grayscale dark:grayscale-0 dark:opacity-70 opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 drop-shadow-sm hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                fill
                sizes="(max-width: 768px) 128px, 192px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
