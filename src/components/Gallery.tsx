import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, ArrowUpRight, Cpu, HelpCircle, Layers, Sparkles } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data';
import GlassCard from './GlassCard';

interface GalleryProps {
  onSelectProject: (project: Project) => void;
}

export default function Gallery({ onSelectProject }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Get unique categories
  const categories: string[] = ['Todos', 'Procesamiento de Lenguaje (NLP)', 'Generación Multimodal (Difusión)', 'Agentes & Razonamiento', 'Productividad & Web'];

  // 2. Filter projects
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          project.diplomaModule.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8" id="proyectos-gallery">
      {/* Search and Filters Glass Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-4 md:p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        {/* Dynamic Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none scroll-smooth">
          <Filter size={15} className="text-slate-400 shrink-0 ml-1 hidden sm:inline" />
          <div className="flex gap-1.5 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                id={`filter-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-xl transition duration-300 pointer-events-auto cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-brand to-brand-pink text-slate-950 shadow-md font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="gallery-search-input"
            placeholder="Buscar por tecnología, tema..."
            className="w-full text-xs pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand/70 bg-white"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700"
            >
              Limpiar
            </button>
          )}
        </div>
      </motion.div>

      {/* Grid of Custom Animated Cards */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              id={`project-card-${project.id}`}
              className="glass-panel hover:border-brand-pink/50 hover:shadow-[0_20px_50px_rgba(255,161,205,0.15)] rounded-3xl overflow-hidden group flex flex-col h-full bg-white transition-all duration-300"
            >
              {/* Cover Image container */}
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-slate-200/55 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  {project.category}
                </span>
                
                {/* Micro tech chips bottom left of image */}
                <span className="absolute bottom-3.5 left-4 text-[10px] font-bold text-brand uppercase tracking-widest bg-slate-900/40 backdrop-blur-sm px-2 py-0.5 rounded">
                  {project.difficulty}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-display font-bold text-slate-900 tracking-tight leading-snug group-hover:text-brand-medium transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 pb-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-slate-50 border border-slate-200/80 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] text-slate-400 font-mono self-center px-1">
                      +{project.technologies.length - 3} máis
                    </span>
                  )}
                </div>

                {/* CTA Action Block */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium truncate max-w-[60%]">
                    {project.diplomaModule.split(':')[0]}
                  </span>
                  
                  <button
                    onClick={() => onSelectProject(project)}
                    id={`btn-detail-${project.id}`}
                    className="text-xs font-bold text-slate-900 hover:text-brand-dark group-hover:translate-x-0.5 transition duration-200 inline-flex items-center gap-1.5 cursor-pointer p-1"
                  >
                    Ver Detalle
                    <ArrowUpRight size={14} className="text-brand-medium group-hover:rotate-45 duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-16 text-center"
          >
            <Layers className="mx-auto text-slate-300 mb-3" size={40} />
            <h4 className="text-base font-bold text-slate-600">No se encontraron productos</h4>
            <p className="text-xs text-slate-400 mt-1">Prueba reajustando los filtros o buscando otro término tecnológico.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
