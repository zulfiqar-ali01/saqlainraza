"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Code, Database, LineChart, Cpu, MessageSquare } from "lucide-react";

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI Automation & Workflow System",
      client: "Global technology consulting firm",
      domain: "Consulting / Technology",
      icon: <Cpu className="text-blue-500" size={24} />,
      summary: "Built automated workflows using APIs and orchestration tools to reduce manual work and improve efficiency.",
      problem: "High volume of repetitive tasks across departments leading to bottlenecks and human errors.",
      solution: "Designed an orchestration layer using n8n and Python scripts to integrate multiple APIs into a seamless automated pipeline.",
      tools: ["Python", "n8n", "REST APIs", "OpenAI API"],
      impact: "Reduced manual data entry by 85% and improved process completion time from hours to minutes.",
    },
    {
      id: 2,
      title: "Payment & Transaction Analytics Dashboard",
      client: "Global professional services firm",
      domain: "Financial Consulting",
      icon: <LineChart className="text-purple-500" size={24} />,
      summary: "Built KPI dashboards with filters and financial insights including total payments and transaction trends.",
      problem: "Executives lacked real-time visibility into transaction volumes, leading to delayed financial decisions.",
      solution: "Engineered a scalable data model and built interactive Power BI dashboards with drill-down capabilities.",
      tools: ["Power BI", "SQL", "DAX", "Data Modeling"],
      impact: "Provided executive team with real-time financial tracking, identifying a 12% discrepancy in historical payments.",
    },
    {
      id: 3,
      title: "Retail & Sales BI Platform",
      client: "Healthcare-focused retail organization",
      domain: "Healthcare / Retail",
      icon: <Database className="text-cyan-500" size={24} />,
      summary: "Created hourly and monthly sales dashboards, including peak hour analysis and product performance insights.",
      problem: "Retail managers couldn't identify peak sales hours or underperforming products quickly enough.",
      solution: "Developed an automated ETL pipeline feeding into a centralized reporting platform with hourly granularity.",
      tools: ["Power BI", "Excel", "SQL", "ETL"],
      impact: "Enabled store managers to optimize staffing during peak hours, increasing overall daily sales efficiency by 15%.",
    },
    {
      id: 4,
      title: "Centralized Data System (Survey Tracker MVP)",
      client: "North American university",
      domain: "Higher Education",
      icon: <Code className="text-teal-500" size={24} />,
      summary: "Designed full data architecture and schema. Built scalable data model for operations tracking.",
      problem: "Survey data was scattered across disparate Excel sheets, making aggregate analysis impossible.",
      solution: "Architected a centralized SQL database schema and deployed a robust ingestion tracker for consistent data entry.",
      tools: ["SQL", "Relational Database", "Data Architecture"],
      impact: "Unified 5 years of historical data, providing a single source of truth for all operational metrics.",
    },
    {
      id: 5,
      title: "AI Social Media Analytics Platform",
      client: "Government communication office",
      domain: "Government / Public Sector",
      icon: <MessageSquare className="text-indigo-500" size={24} />,
      summary: "Developed sentiment analysis using NLP and built an engagement and trend tracking dashboard.",
      problem: "Marketing team struggled to quantify campaign success beyond basic like/share metrics.",
      solution: "Implemented an NLP pipeline to classify sentiment and extract emerging topics from live social media feeds.",
      tools: ["Python", "NLP", "Machine Learning", "Dashboarding"],
      impact: "Increased campaign ROI by enabling data-driven ad targeting based on public sentiment trends.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-neutral-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Projects & <span className="text-blue-600 dark:text-blue-400">Case Studies</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            A selection of my recent engineering work, spanning AI automation to enterprise business intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group ${index === 4 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
            >
              <div 
                className="p-6 md:p-8 cursor-pointer relative overflow-hidden"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`text-neutral-400 transition-transform duration-300 select-none ${expandedId === project.id ? "rotate-180" : ""}`} 
                  />
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-300">
                  {project.summary}
                </p>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4 text-sm">
                        <div className="flex flex-col sm:flex-row gap-4 mb-2">
                          <div className="flex-1">
                            <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">Client:</strong>
                            <p className="text-neutral-600 dark:text-neutral-400">{project.client}</p>
                          </div>
                          <div className="flex-1">
                            <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">Domain:</strong>
                            <span className="inline-block px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-blue-100 dark:border-blue-800/50">
                              {project.domain}
                            </span>
                          </div>
                        </div>
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">Problem:</strong>
                          <p className="text-neutral-600 dark:text-neutral-400">{project.problem}</p>
                        </div>
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">Solution:</strong>
                          <p className="text-neutral-600 dark:text-neutral-400">{project.solution}</p>
                        </div>
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">Business Impact:</strong>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{project.impact}</p>
                        </div>
                        <div className="pt-2 flex flex-wrap gap-2">
                          {project.tools.map(tool => (
                            <span key={tool} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full text-xs font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
