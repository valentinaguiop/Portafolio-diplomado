import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  GraduationCap, 
  Award, 
  Terminal, 
  Mail, 
  Linkedin, 
  Github, 
  Layers, 
  BrainCircuit, 
  Lightbulb, 
  CheckCircle2, 
  Check, 
  Info, 
  X,
  Menu,
  ChevronRight,
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { PERSONAL_INFO, TOOLS_DATA, GOALS_DATA } from './data';
import { Project } from './types';
import Gallery from './components/Gallery';
import ProjectModal from './components/ProjectModal';
import GlassCard from './components/GlassCard';
import DynamicIcon from './components/DynamicIcon';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showHelperBanner, setShowHelperBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const menuItems = [
    { name: 'Presentación', href: '#presentacion' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Herramientas', href: '#herramientas' },
    { name: 'Metas', href: '#metas' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative flex flex-col font-sans select-none selection:bg-brand selection:text-slate-950">
      {/* Light glow effects with green and pink blending */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-2/3 w-96 h-96 bg-brand-pink/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        id="navbar-header"
        className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b border-white/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="bg-brand/20 p-2 rounded-xl text-slate-800 border border-brand/45 group-hover:scale-105 duration-300">
              <Sparkles size={18} className="text-brand-dark animate-pulse" />
            </span>
            <div>
              <span className="font-display font-bold text-slate-900 text-sm tracking-tight block">
                Valentina Guio P.
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest block uppercase">
                Diplomado IA Generativa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100/60 duration-200 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons Action Block */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-brand-dark hover:bg-slate-100 rounded-xl transition duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-brand-dark hover:bg-slate-100 rounded-xl transition duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <button
              onClick={handleCopyEmail}
              className="bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 hover:border-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition duration-200 cursor-pointer shadow-sm"
            >
              {copiedEmail ? '¡Copiado!' : 'Contacto'}
            </button>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <div className="flex items-center md:hidden gap-1">
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-bold"
            >
              {copiedEmail ? 'Copiado' : 'Contacto'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg duration-200"
              aria-label="Toggle mobile menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-6 py-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 border-b border-slate-50 last:border-b-0"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 flex-1 py-8 md:py-12 space-y-16 md:space-y-24">
        
        {/* Dynamic Developer Help Banner */}
        <AnimatePresence>
          {showHelperBanner && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-brand-muted border border-brand/30 text-slate-800 p-5 rounded-3xl flex items-start gap-3.5 relative shadow-sm"
              id="help-banner"
            >
              <Info className="text-brand-dark mt-0.5 shrink-0" size={18} />
              <div className="text-xs leading-relaxed pr-6">
                <span className="font-bold block text-slate-900 mb-1">💡 ¡Secciones de Plantilla Portafolio generadas con éxito!</span>
                Ya tienes las 5 secciones interactivas optimizadas para Valentina Guio Plazas. Puedes editar los archivos <code className="bg-white/70 px-1 rounded font-mono font-bold text-emerald-800 text-[11px]">/src/data.ts</code> para personalizar tus proyectos, descripciones e insignias finales de entrega cuando gustes.
              </div>
              <button
                onClick={() => setShowHelperBanner(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 duration-150 cursor-pointer"
                aria-label="Cerrar banner"
              >
                <X size={15} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. SECCIÓN PRESENTACIÓN (TARJETA PRINCIPAL DEL PORTAFOLIO) */}
        <section id="presentacion" className="scroll-mt-24">
          <GlassCard className="glass-panel-glow border-brand/20 relative overflow-hidden" glowOnHover={false}>
            {/* Soft pink and green ambient lights inside card */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Left Column: True Color Beautiful Portrait */}
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="relative group">
                  {/* Glowing organic double-ring with green and pink transitions */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand to-brand-pink rounded-[32px] blur opacity-40 group-hover:opacity-65 transition duration-500" />
                  
                  {/* Portrait frame - No filters, full color to preserve exact tones */}
                  <div className="relative w-64 h-80 sm:w-60 sm:h-76 bg-white p-2 rounded-[28px] shadow-md border border-slate-200/50">
                    <img 
                      src={PERSONAL_INFO.avatarUrl} 
                      alt="Valentina Guio Plazas" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-[20px] shadow-inner"
                    />
                  </div>
                </div>

                {/* University micro identity */}
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase block">
                    VALENTINA GUIO PLAZAS
                  </span>
                  <div className="inline-flex items-center gap-1.5 bg-slate-100/80 border border-slate-200/50 px-3 py-1 rounded-full text-[11px] text-slate-700 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
                    <span>Universidad de América</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Information, expectations and CTAs */}
              <div className="md:col-span-8 space-y-6">
                
                {/* Headers & Title */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-brand-muted border border-brand/35 text-brand-dark px-3 py-0.5 text-[11px] font-bold rounded-lg tracking-wide uppercase">
                      <Sparkle size={10} className="fill-brand text-brand-dark" /> Portafolio IA 2026
                    </span>
                    <span className="inline-flex items-center gap-1 bg-brand-pink-muted border border-brand-pink/35 text-brand-pink-dark px-3 py-0.5 text-[11px] font-bold rounded-lg tracking-wide uppercase">
                      <Sparkles size={10} className="text-brand-pink-dark animate-pulse" /> Toque Femenino
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-slate-900 leading-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  
                  <p className="text-brand-dark font-display font-semibold text-sm sm:text-base tracking-wide flex items-center gap-1.5">
                    <GraduationCap size={16} className="text-brand-pink-dark" />
                    Estudiante del Diplomado en Inteligencia Artificial Generativa
                  </p>
                </div>

                {/* Bio */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {PERSONAL_INFO.bio}
                </p>

                {/* Expectations Block inside the Profile card */}
                <div className="bg-white/40 border-l-4 border-brand-pink/60 border border-slate-200/30 p-4 rounded-xl space-y-2 relative shadow-sm">
                  <div className="absolute top-2 right-3 text-slate-200 pointer-events-none">
                    <BrainCircuit size={48} className="stroke-[1]" />
                  </div>
                  <h3 className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1">
                    <Lightbulb size={12} className="text-brand" /> Mis Expectativas del Diplomado
                  </h3>
                  <blockquote className="text-slate-700 text-xs sm:text-sm leading-relaxed italic pr-4">
                    "{PERSONAL_INFO.expectative}"
                  </blockquote>
                  
                  <div className="flex flex-wrap gap-2 pt-1 text-[10px] text-slate-500 font-medium">
                    <span className="bg-white/80 border border-slate-100 px-2 py-0.5 rounded-md">🌱 Integración Frontend Interactiva</span>
                    <span className="bg-white/80 border border-slate-100 px-2 py-0.5 rounded-md">🤖 Orquestación de Agentes</span>
                  </div>
                </div>

                {/* Call to action buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href="#proyectos"
                      className="bg-gradient-to-r from-brand-dark to-brand hover:from-brand hover:to-brand-pink-medium text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition duration-300 shadow-sm inline-flex items-center gap-1.5 hover:scale-[1.02] active:scale-95"
                    >
                      Explorar Proyectos <ArrowRight size={13} />
                    </a>
                    <a
                      href="#metas"
                      className="bg-white/80 border border-slate-300 hover:border-brand-pink/50 hover:text-brand-pink-dark text-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition duration-200 shadow-sm inline-flex items-center gap-1.5 hover:bg-brand-pink-muted/10"
                    >
                      Ver Metas
                    </a>
                  </div>

                  {/* Micro contact action */}
                  <div className="flex items-center gap-2 overflow-hidden text-[10px]">
                    <span className="truncate text-slate-400 font-mono bg-slate-100/50 px-2 py-1 rounded border border-slate-200/30">{PERSONAL_INFO.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-[10px] text-brand-pink-dark hover:text-brand-pink-medium font-bold shrink-0 underline cursor-pointer"
                    >
                      {copiedEmail ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>
                </div>

              </div>
              
            </div>
          </GlassCard>
        </section>

        {/* 3. SECCIÓN PRODUCTOS/PROYECTOS */}
        <section id="proyectos" className="scroll-mt-24 space-y-8">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-[10px] text-brand-dark font-bold font-mono tracking-widest uppercase block mb-1">
              DEMOSTRACIONES PRÁCTICAS
            </span>
            <h2 className="text-2xl md:text-3.5xl font-display font-medium text-slate-900 tracking-tight">
              Portafolio de Productos
            </h2>
            <p className="text-slate-500 text-xs md:text-sm mt-1.5">
              Haz clic en cualquier proyecto para desplegar su ficha descriptiva ampliada y probar la simulación interactiva con prompts de prueba en tiempo real.
            </p>
          </div>

          <Gallery onSelectProject={setSelectedProject} />
        </section>

        {/* 4. SECCIÓN HERRAMIENTAS APRENDIDAS */}
        <section id="herramientas" className="scroll-mt-24 space-y-8">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-[10px] text-brand-dark font-bold font-mono tracking-widest uppercase block mb-1">
              TECNOLOGÍAS & STACK
            </span>
            <h2 className="text-2xl md:text-3.5xl font-display font-medium text-slate-900 tracking-tight">
              Herramientas que he Aprendido
            </h2>
            <p className="text-slate-500 text-xs md:text-sm mt-1.5">
              Ecosistema tecnológico y metodológico estudiado e implementado a lo largo de las sesiones del diplomado.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS_DATA.map((tool, idx) => (
              <GlassCard 
                key={tool.name} 
                className="bg-white group"
                delay={idx * 0.08}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="bg-slate-100 group-hover:bg-brand-muted text-slate-800 group-hover:text-brand-dark p-2 rounded-xl border border-slate-200/50 group-hover:border-brand/20 duration-300">
                        <DynamicIcon name={tool.iconName} size={18} />
                      </span>
                      <div>
                        <h3 className="text-sm md:text-base font-display font-bold text-slate-900">
                          {tool.name}
                        </h3>
                        <span className="text-[10px] text-slate-400 font-semibold">{tool.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed min-h-[40px]">
                    {tool.description}
                  </p>

                  {/* Skill level meter visual indicator */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400 font-semibold">Nivel de Práctica</span>
                      <span className="text-brand-dark font-bold">{tool.percentageLearned}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.percentageLearned}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-brand rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* 5. SECCIÓN METAS LOGRADAS */}
        <section id="metas" className="scroll-mt-24 space-y-8">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-[10px] text-brand-dark font-bold font-mono tracking-widest uppercase block mb-1">
              LOGROS & HITOS
            </span>
            <h2 className="text-2xl md:text-3.5xl font-display font-medium text-slate-900 tracking-tight">
              Metas Logradas en el Diplomado
            </h2>
            <p className="text-slate-500 text-xs md:text-sm mt-1.5">
              Progreso sistemático de competencias teóricas y entregas de software acreditadas por la dirección académica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOALS_DATA.map((goal, idx) => (
              <GlassCard 
                key={goal.id} 
                className={`bg-white hover:border-slate-300 relative ${
                  goal.completed ? 'border-brand/10' : 'border-amber-200/20'
                }`}
                delay={idx * 0.1}
              >
                <div className="flex items-start gap-3.5">
                  {/* Complete checkmark circle */}
                  <div className="mt-0.5 shrink-0">
                    {goal.completed ? (
                      <span className="h-6 w-6 rounded-full bg-brand/15 text-brand-dark border border-brand/25 flex items-center justify-center">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                    ) : (
                      <span className="h-6 w-6 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center text-[10px] font-bold">
                        ⏱️
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">
                        {goal.category}
                      </span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        goal.completed ? 'bg-brand-muted text-brand-dark' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {goal.dateCompleted}
                      </span>
                    </div>

                    <h3 className="text-xs md:text-sm font-display font-bold text-slate-900 tracking-tight leading-snug">
                      {goal.title}
                    </h3>
                    
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

      </main>

      {/* Sleek, simple visual footer */}
      <footer className="border-t border-slate-200/70 bg-white py-12 shrink-0 overflow-hidden" id="page-footer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-mono">
          <div className="text-center md:text-left space-y-1.5">
            <span className="font-bold text-slate-700 font-display block text-sm">Valentina Guio Plazas</span>
            <span className="block text-[11px]">Diplomado de Inteligencia Artificial Generativa • Universidad de América</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-brand-dark transition text-[11px]"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-brand-dark transition text-[11px]"
            >
              GitHub
            </a>
            <span>•</span>
            <button
              onClick={handleCopyEmail}
              className="text-[11px] text-slate-400 hover:text-brand-dark cursor-pointer underline hover:no-underline"
            >
              Email
            </button>
          </div>
          
          <span className="text-[10px]">© 2026 • Portafolio Seguro</span>
        </div>
      </footer>

      {/* Dynamic Project descriptive modal overlay with live interactive simulators */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
