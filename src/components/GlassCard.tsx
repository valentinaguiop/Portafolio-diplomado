import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  delay?: number;
  key?: React.Key;
}

export default function GlassCard({ 
  children, 
  className = '', 
  glowOnHover = true,
  delay = 0 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1], // Luxury custom cubic-bezier
        delay 
      }}
      whileHover={glowOnHover ? { 
        y: -6,
        scale: 1.01,
        transition: { duration: 0.3, ease: 'easeOut' }
      } : undefined}
      className={`glass-panel rounded-3xl p-6 md:p-8 transition-shadow duration-300 ${
        glowOnHover ? 'hover:shadow-[0_20px_50px_rgba(75,214,128,0.15)] hover:border-brand/40' : ''
      } ${className}`}
    >
      {/* Interior light reflections helper */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 rounded-3xl pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
