"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Code, Database, LineChart, Cpu, MessageSquare } from "lucide-react";

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Public Health Data Analytics System",
      client: "National Public Health Authority",
      domain: "Public Health",
      icon: <Database className="text-blue-500" size={24} />,
      summary: "Designed and implemented comprehensive data-driven analytics for large-scale public health surveys and population health monitoring.",
      problem: "Fragmented data collection systems across multiple facilities hindering evidence-based policy decisions.",
      solution: "Centralized data warehouse with standardized ETL processes, integrating disparate data sources for unified analysis using R and Python for statistical modeling.",
      tools: ["Data Warehousing", "SQL", "Python", "R", "Statistical Modeling"],
      impact: "Enabled evidence-based public health interventions, improving decision-making for population health programs.",
    },
    {
      id: 2,
      title: "Healthcare Data Warehouse & Dashboard Platform",
      client: "Regional Health Ministry",
      domain: "Healthcare Systems",
      icon: <LineChart className="text-purple-500" size={24} />,
      summary: "Built scalable data warehousing solutions for integrated healthcare datasets with interactive Power BI dashboards for executive reporting.",
      problem: "Healthcare managers lacked real-time visibility into performance metrics across facilities and regional data.",
      solution: "Engineered a centralized data model integrating multiple health information systems, deployed interactive dashboards for monitoring and reporting.",
      tools: ["Power BI", "SQL Server", "Data Architecture", "ETL"],
      impact: "Improved healthcare service delivery visibility, enabling better resource allocation and program management across 50+ facilities.",
    },
    {
      id: 3,
      title: "AI-Driven Policy Impact Evaluation Framework",
      client: "Government Policy Development Office",
      domain: "Policy & Evaluation",
      icon: <Cpu className="text-cyan-500" size={24} />,
      summary: "Developed predictive and causal models for policy impact assessment, applying ML and statistical techniques for evidence-based insights.",
      problem: "Policy teams relied on traditional methods lacking quantitative evidence for impact assessment and decision support.",
      solution: "Implemented causal inference models and predictive analytics using Python, providing evidence-based policy evaluation dashboards.",
      tools: ["Python", "Machine Learning", "Causal Inference", "Statistical Modeling", "Dashboarding"],
      impact: "Enhanced policy evaluation methodology, supporting government decisions on 10+ major public policy initiatives.",
    },
    {
      id: 4,
      title: "Automated Data Collection & Processing Pipeline",
      client: "International Development Organization",
      domain: "Data Operations",
      icon: <Code className="text-teal-500" size={24} />,
      summary: "Designed automated ETL workflows for large-scale survey data processing, improving efficiency in data collection and quality assurance.",
      problem: "Manual data collection and processing workflows were time-consuming and prone to errors in large-scale operations.",
      solution: "Built automated data pipelines with validation checkpoints, reducing processing time from weeks to hours while improving data quality.",
      tools: ["Python", "ETL", "Data Validation", "Automation"],
      impact: "Processed datasets for 500K+ respondents efficiently, enabling timely analysis for development programs.",
    },
    {
      id: 5,
      title: "Decision Support System for Management",
      client: "Large Public Institution",
      domain: "Decision Support",
      icon: <MessageSquare className="text-indigo-500" size={24} />,
      summary: "Developed data products and visualization systems providing executive-level insights for strategic planning and management decisions.",
      problem: "Leadership lacked accessible, data-driven insights for strategic decision-making and resource planning.",
      solution: "Created integrated data products combining data warehousing, analytics, and interactive visualizations for executive dashboards.",
      tools: ["Data Warehousing", "Analytics", "Power BI", "Python", "Data Visualization"],
      impact: "Enabled data-driven strategic planning, improving organizational performance and resource allocation efficiency.",
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
            Data products, AI-enabled analytics solutions, data warehousing systems, and decision-support dashboards developed for management and policy-making.
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
