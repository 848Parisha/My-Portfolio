'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { PinContainer } from "@/components/ui/3d-pin";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Projects = () => {
  // Map real projects to HoverEffect format (only featured)
  const hoverProjects = projects.filter(p => p.featured).map(p => ({
    title: p.title,
    description: p.description,
    link: p.githubUrl || p.liveUrl || "#",
  }));
  return (
    <section className="section-padding bg-black" id="projects">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Card Hover Effect Demo for Featured Projects */}
        <div className="mb-16">
          <HoverEffect items={hoverProjects} />
        </div>
        <div className="border-b border-gray-800 mb-12"></div>
      </div>
    </section>
  );
};

export default Projects; 