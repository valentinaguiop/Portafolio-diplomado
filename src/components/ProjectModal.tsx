import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Cpu, Terminal, Play, ClipboardCheck, MessageCircleCode, Volume2, Sparkles, Smile, ShieldAlert, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [inputText, setInputText] = useState('');
  const [simResponse, setSimResponse] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Render a specific interactive mockup/playground for the project based on ID
  const renderSimulator = () => {
    switch (project.id) {
      case '1': // LegalAI
        const handleLegalAnalyze = () => {
          if (!inputText.trim()) return;
          setIsSimulating(true);
          setSimResponse(null);
          setTimeout(() => {
            setIsSimulating(false);
            setSimResponse(
              `🔍 [Análisis LegalAI Finalizado para: "${inputText.slice(0, 30)}..."]\n\n` +
              `⚠️ RIESGO IDENTIFICADO: Alto.\n` +
              `1. Cláusula de Confidencialidad Unilateral detectada. Se recomienda mutuo acuerdo.\n` +
              `2. Jurisdicción: Estipulada en un tribunal extranjero; se sugiere renegociar a tribunales nacionales.\n` +
              `3. Penalidad de Incumplimiento: Desproporcionada de acuerdo al canon mensual.`
            );
          }, 1500);
        };
        return (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 border border-slate-700 font-mono text-sm shadow-inner relative overflow-hidden">
            <div className="absolute top-2 right-3 flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
            <h4 className="text-brand flex items-center gap-1.5 font-bold mb-3">
              <ClipboardCheck size={16} /> Sandbox LegalAI (Simulador de Prompts)
            </h4>
            <p className="text-xs text-slate-400 mb-3">Pega un fragmento de pacto o contrato para que la IA realice auditoría semántica:</p>
            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ej: Ambas partes acuerdan que en caso de filtración de información confidencial, la parte contratista pagará una multa de $100,000 USD sin requerir juicio de culpabilidad..."
              className="w-full text-xs p-3 bg-slate-950 text-slate-200 border border-slate-800 rounded-lg focus:outline-none focus:border-brand/70 resize-none"
            />
            <div className="mt-2 flex justify-end">
              <button
                disabled={isSimulating || !inputText.trim()}
                onClick={handleLegalAnalyze}
                className="bg-brand text-slate-950 hover:bg-brand-medium text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSimulating ? (
                  <>
                    <Cpu className="animate-spin" size={14} /> Procesando Cláusulas...
                  </>
                ) : (
                  <>
                    <Play size={12} fill="currentColor" /> Analizar con Gemini
                  </>
                )}
              </button>
            </div>
            {simResponse && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-slate-950/80 border border-brand/20 rounded-lg text-xs leading-relaxed text-slate-300"
              >
                <pre className="whitespace-pre-wrap font-sans text-slate-200">{simResponse}</pre>
              </motion.div>
            )}
          </div>
        );

      case '2': // PromoGen
        const handlePromoGen = () => {
          if (!inputText.trim()) return;
          setIsSimulating(true);
          setSimResponse(null);
          setTimeout(() => {
            setIsSimulating(false);
            setSimResponse(
              `✨ [PromoGen Marketing Bundle Generado para: "${inputText}"]\n\n` +
              `✍️ COPY SUGERIDO (Tono Persuasivo):\n` +
              `"¿Estás cansado de soluciones genéricas? 🚀 Descubre el poder de la personalización adaptativa con ${inputText}. Lleva tus flujos al siguiente nivel y automatiza con inteligencia. Haz clic hoy y vive la verdadera era digital. 💡"\n\n` +
              `🎯 PROMPT DE IMAGEN RECOMENDADO:\n` +
              `"A striking minimal product shot of ${inputText} on a floating glass pedestal, dynamic warm lighting, emerald gradient accent, ultra-realistic visual composition, photorealistic studio shot, 8k resolution"`
            );
          }, 1500);
        };
        return (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 border border-slate-700 font-mono text-sm shadow-inner relative overflow-hidden">
            <div className="absolute top-2 right-3 flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
            <h4 className="text-brand flex items-center gap-1.5 font-bold mb-3">
              <Sparkles size={16} /> PromoGen Studio (Simulador Campañas)
            </h4>
            <p className="text-xs text-slate-400 mb-3">Escribe el nombre de tu producto o servicio para estructurar tu campaña:</p>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ej: Café Orgánico de los Andes, Suscripción SaaS de Finanzas..."
              className="w-full text-xs p-3 bg-slate-950 text-slate-200 border border-slate-800 rounded-lg focus:outline-none focus:border-brand/70"
            />
            <div className="mt-2 flex justify-end">
              <button
                disabled={isSimulating || !inputText.trim()}
                onClick={handlePromoGen}
                className="bg-brand text-slate-950 hover:bg-brand-medium text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSimulating ? (
                  <>
                    <Cpu className="animate-spin" size={14} /> Creando Campaña...
                  </>
                ) : (
                  <>
                    <Play size={12} fill="currentColor" /> Generar Multimodal
                  </>
                )}
              </button>
            </div>
            {simResponse && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-slate-950/80 border border-brand/20 rounded-lg text-xs leading-relaxed text-slate-300"
              >
                <pre className="whitespace-pre-wrap font-sans text-slate-200">{simResponse}</pre>
              </motion.div>
            )}
          </div>
        );

      case '3': // AgentDesk
        const [agentLogs, setAgentLogs] = useState<string[]>([]);
        const runAgentChain = () => {
          setIsSimulating(true);
          setAgentLogs([]);
          const steps = [
            '🤖 [Agente Investigador]: Buscando catálogos de hardware en repositorios simulados de Amazon y Dell...',
            '🤖 [Agente Investigador]: Encontrados 3 lotes de servidores que cumplen con un presupuesto menor a $5000 USD.',
            '📊 [Agente Analista]: Cruzando especificaciones técnicas. Procesadora Xeon v4 vs. AMD EPYC de 32 núcleos.',
            '📊 [Agente Analista]: Obteniendo balance rendimiento-costo. AMD EPYC ofrece un 22% mejor costo de oportunidad.',
            '📝 [Agente Redactor]: Formateando la documentación ejecutiva y aplicando los guardrails corporativos.',
            '✅ [Orquestador]: ¡Proceso Autónomo Finalizado! Informe y matrices listas para descargar.'
          ];

          steps.forEach((step, index) => {
            setTimeout(() => {
              setAgentLogs((prev) => [...prev, step]);
              if (index === steps.length - 1) {
                setIsSimulating(false);
              }
            }, (index + 1) * 900);
          });
        };
        return (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 border border-slate-700 font-mono text-sm shadow-inner relative overflow-hidden">
            <h4 className="text-brand flex items-center gap-1.5 font-bold mb-2">
              <Terminal size={16} /> AgentDesk Terminal (Simulación de Agentes)
            </h4>
            <p className="text-xs text-slate-400 mb-3">Presiona iniciar para visualizar la simulación de diálogo y orquestación multi-agente en tiempo real:</p>
            <div className="flex justify-start mb-3">
              <button
                disabled={isSimulating}
                onClick={runAgentChain}
                className="bg-brand text-slate-950 hover:bg-brand-medium text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 duration-200 disabled:opacity-50 cursor-pointer"
              >
                <Play size={12} fill="currentColor" /> Desplegar Red de Agentes
              </button>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 h-40 overflow-y-auto text-xs space-y-2">
              {agentLogs.length === 0 && !isSimulating && (
                <span className="text-slate-500 italic">La terminal de agentes está inactiva. Haz clic en Desplegar para ver el flujo coordinado.</span>
              )}
              {agentLogs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={log.startsWith('✅') ? 'text-brand font-bold' : log.includes('Analista') ? 'text-blue-400' : 'text-slate-300'}
                >
                  {log}
                </motion.div>
              ))}
              {isSimulating && (
                <div className="flex items-center gap-2 text-slate-400 text-[10px] animate-pulse">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full animate-ping"></span>
                  Agentes deliberando en segundo plano...
                </div>
              )}
            </div>
          </div>
        );

      case '4': // SocratesCode
        const handleSocraticHelp = () => {
          if (!inputText.trim()) return;
          setIsSimulating(true);
          setSimResponse(null);
          setTimeout(() => {
            setIsSimulating(false);
            setSimResponse(
              `💡 [Guía Socrática de SocratesCode para tu código]\n\n` +
              `🤔 Reflexión: Veo que estás intentando actualizar el estado de React directamente en el cuerpo del componente asignándole un valor directo.\n\n` +
              `❓ Hazte estas preguntas:\n` +
              `1. Si React renderiza basándose en cambios de referencias y colas de reconciliación, ¿se enterará de un cambio si saltas el setter formal 'setState'?\n` +
              `2. ¿Qué efecto secundario produce actualizar el estado directo sin envolverlo en una acción o hook de ciclo de vida?\n\n` +
              `🛠️ Próximo paso: Intenta reescribir tu línea usando la llamada setter \`setCount(count + 1)\` dentro de una función manejadora de eventos, e investiga qué es la mutabilidad del estado.`
            );
          }, 1500);
        };
        return (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 border border-slate-700 font-mono text-sm shadow-inner relative overflow-hidden">
            <h4 className="text-brand flex items-center gap-1.5 font-bold mb-3">
              <MessageCircleCode size={16} /> SocratesCode (Tutor de Programación)
            </h4>
            <p className="text-xs text-slate-400 mb-3">Sube un fragmento de código defectuoso para recibir una guía de auto-aprendizaje guiada:</p>
            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ej: count = count + 1; // ¿Por qué mi componente React no cambia de valor en la pantalla al hacer clic?"
              className="w-full text-xs p-3 bg-slate-950 text-slate-200 border border-slate-800 rounded-lg focus:outline-none focus:border-brand/70 resize-none font-mono"
            />
            <div className="mt-2 flex justify-end">
              <button
                disabled={isSimulating || !inputText.trim()}
                onClick={handleSocraticHelp}
                className="bg-brand text-slate-950 hover:bg-brand-medium text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 duration-200 disabled:opacity-50 cursor-pointer"
              >
                {isSimulating ? <Cpu className="animate-spin" size={14} /> : <Play size={12} fill="currentColor" />}
                Interrogar Tutor
              </button>
            </div>
            {simResponse && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-slate-950/80 border border-emerald-500/20 rounded-lg text-xs leading-relaxed text-slate-300"
              >
                <div className="whitespace-pre-wrap font-sans text-slate-200">{simResponse}</div>
              </motion.div>
            )}
          </div>
        );

      case '5': // VoiceSense
        const handleVoiceSenseAnalysis = (emotion: string) => {
          setIsSimulating(true);
          setSimResponse(null);
          setTimeout(() => {
            setIsSimulating(false);
            let actionText = '';
            if (emotion === 'Angry') {
              actionText = `🚨 ALERTA CRÍTICA: Cliente con alta probabilidad de fuga.\n📍 ACCIÓN RECOMENDADA: El sistema generó un bono de descuento por satisfacción del 20%. Redirigir el ticket a un Supervisor de Cuentas Senior de inmediato con la llamada grabada transcrita.`;
            } else if (emotion === 'Sad/Frustrated') {
              actionText = `⚠️ ATENCIÓN REQUERIDA: Cliente frustrado por demoras de soporte técnico.\n📍 ACCIÓN RECOMENDADA: Responder proactivamente asumiendo el retraso y garantizando solución técnica en menos de 2 horas.`;
            } else {
              actionText = `👍 EXCELENTE: Cliente satisfecho. El tono general de voz es estable y ameno.\n📍 ACCIÓN RECOMENDADA: Archivar ticket con calificación de 5 estrellas. `;
            }
            setSimResponse(
              `🎙️ [VoiceSense Sentiment Analyzer - Resultado del Procesamiento de Audio]\n\n` +
              `📊 SENTIMIENTO DETECTADO: ${emotion === 'Angry' ? 'Enojado / Hostil 😡' : emotion === 'Sad/Frustrated' ? 'Frustrado / Triste 😟' : 'Satisfecho / Agradecido 😊'}\n` +
              `🗣️ TRANSCRIPCIÓN SIMULADA ( Whisper ): "Llevo tres días intentando solucionar este problema y sigo sin respuestas técnicas claras, exijo hablar con alguien pronto."\n\n` +
              `🧠 RECOMENDACIÓN:\n${actionText}`
            );
          }, 1200);
        };
        return (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 border border-slate-700 font-mono text-sm shadow-inner relative overflow-hidden">
            <h4 className="text-brand flex items-center gap-1.5 font-bold mb-3">
              <Volume2 size={16} /> VoiceSense Playback (Simulador de Voz)
            </h4>
            <p className="text-xs text-slate-400 mb-3">Selecciona el estado emocional de voz simulada de la llamada de soporte técnico para el análisis:</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                disabled={isSimulating}
                onClick={() => handleVoiceSenseAnalysis('Angry')}
                className="bg-red-500/20 hover:bg-red-500/40 text-red-300 text-xs px-3 py-1.5 rounded-lg border border-red-500/30 flex items-center gap-1 duration-200 cursor-pointer"
              >
                <ShieldAlert size={14} /> Tono Enojado (Molesto)
              </button>
              <button
                disabled={isSimulating}
                onClick={() => handleVoiceSenseAnalysis('Sad/Frustrated')}
                className="bg-yellow-500/20 hover:bg-yellow-500/40 text-yellow-300 text-xs px-3 py-1.5 rounded-lg border border-yellow-500/30 flex items-center gap-1 duration-200 cursor-pointer"
              >
                <Smile size={14} className="rotate-180" /> Tono Frustrado
              </button>
              <button
                disabled={isSimulating}
                onClick={() => handleVoiceSenseAnalysis('Happy')}
                className="bg-brand-muted hover:bg-brand/30 text-brand text-xs px-3 py-1.5 rounded-lg border border-brand/20 flex items-center gap-1 duration-200 cursor-pointer"
              >
                <Smile size={14} /> Tono Agradecido
              </button>
            </div>
            {isSimulating && (
              <div className="h-2 bg-slate-950 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-brand rounded-full animate-pulse w-3/4"></div>
              </div>
            )}
            {simResponse && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-slate-950/80 border border-brand/20 rounded-lg text-xs leading-relaxed text-slate-300"
              >
                <div className="whitespace-pre-wrap font-sans text-slate-200">{simResponse}</div>
              </motion.div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white/95 rounded-3xl border border-slate-200/80 shadow-2xl z-10 overflow-hidden glass-panel-glow max-h-[90vh] flex flex-col"
        >
          {/* Header section with image backdrop */}
          <div className="relative h-60 md:h-72 w-full shrink-0">
            <img
              src={project.coverImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-900/10" />
            
            {/* Upper Right Action Bar */}
            <button
              onClick={onClose}
              id={`close-modal-${project.id}`}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md text-white p-2 rounded-full cursor-pointer hover:scale-105 transition duration-200"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            {/* Title / Labels on Image Footer */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs bg-brand text-slate-950 font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mt-3 tracking-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-slate-300 text-xs font-medium">
                <span>{project.diplomaModule}</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  Nivel: <span className="bg-white/10 px-2 py-0.5 rounded text-white">{project.difficulty}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
              {/* Left Column: Documentation */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-2.5">
                    Descripción del Caso
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-3">
                    Características Clave
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="bg-brand-muted text-brand p-0.5 rounded-full mt-0.5 md:mt-1 flex-shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </span>
                        <span className="text-slate-600 text-xs leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-display font-bold text-slate-900 mb-2.5">
                    Tecnologías Aplicadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mini Interactive AI Sandbox / Simulator */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-display font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Cpu size={18} className="text-brand-medium" /> Prototipo En Vivo
                </h3>
                <p className="text-xs text-slate-500 mb-2">
                  Interactúa directamente con este módulo de simulación de IA para ver los guardrails y el agente en acción de forma simulada.
                </p>
                {renderSimulator()}
              </div>
            </div>
          </div>

          {/* Modal Footer / CTA action buttons */}
          <div className="p-5 md:px-8 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0">
            <span className="text-xs text-slate-400 font-mono">
              Proyecto Diseñado con Buenas Prácticas del Diplomado de IA
            </span>
            <div className="flex items-center gap-2.5 justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 duration-200 shadow-sm flex items-center gap-2 cursor-pointer transition"
                >
                  <Github size={14} /> Código Fuente
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl duration-200 hover:scale-[1.01] transition shadow cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
