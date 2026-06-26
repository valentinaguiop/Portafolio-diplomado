import React from 'react';
import { 
  Sparkles, 
  MessageSquareText, 
  Network, 
  Database, 
  Image, 
  Globe, 
  BookOpen, 
  Award, 
  Linkedin, 
  Github, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Filter, 
  Search, 
  Terminal, 
  Calendar, 
  User, 
  BrainCircuit,
  Settings,
  GraduationCap,
  Sparkle,
  Zap,
  ClipboardList,
  Gem
} from 'lucide-react';

const iconsMap: Record<string, any> = {
  Sparkles,
  MessageSquareText,
  Network,
  Database,
  Image,
  Globe,
  BookOpen,
  Award,
  Linkedin,
  Github,
  Mail,
  ExternalLink,
  ChevronRight,
  Filter,
  Search,
  Terminal,
  Calendar,
  User,
  BrainCircuit,
  Settings,
  GraduationCap,
  Sparkle,
  Zap,
  ClipboardList,
  Gem
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size = 20 }: DynamicIconProps) {
  const normalizedKey = name.toLowerCase().trim();

  // Custom vector brand logos
  if (normalizedKey === 'make') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#6c5ce7" />
        <circle cx="12" cy="7" r="2.5" fill="#a29bfe" />
        <circle cx="8" cy="14" r="2.5" fill="#e84393" />
        <circle cx="16" cy="14" r="2.5" fill="#fd79a8" />
        <line x1="12" y1="7" x2="8" y2="14" stroke="#6c5ce7" strokeWidth="1.5" />
        <line x1="12" y1="7" x2="16" y2="14" stroke="#6c5ce7" strokeWidth="1.5" />
        <line x1="8" y1="14" x2="16" y2="14" stroke="#6c5ce7" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normalizedKey === 'tally') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <rect width="24" height="24" rx="6" fill="#000000" />
        <path d="M12 5v14M5 12h14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalizedKey === 'gemini') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" fill="url(#gemini-grad)" />
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4285F4"/>
            <stop offset="0.5" stopColor="#9B51E0"/>
            <stop offset="1" stopColor="#E91E63"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normalizedKey === 'opal') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <polygon points="12,2 22,8.5 22,17.5 12,22 2,17.5 2,8.5" fill="url(#opal-grad)" />
        <polygon points="12,6 18,10 18,15 12,18 6,15 6,10" fill="#ffffff" fillOpacity="0.3" />
        <defs>
          <linearGradient id="opal-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7A00"/>
            <stop offset="1" stopColor="#FF007A"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normalizedKey === 'google-ai') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <circle cx="12" cy="12" r="10" stroke="url(#google-grad)" strokeWidth="2.5" />
        <path d="M12 6v12M6 12h12M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="url(#google-grad)" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" fill="#4285F4" />
        <defs>
          <linearGradient id="google-grad" x1="2" y1="2" x2="22" y2="22">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="30%" stopColor="#EA4335" />
            <stop offset="65%" stopColor="#FBBC05" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normalizedKey === 'netlify') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <path d="M12 2L2 19h20L12 2z" fill="#00C7B7" fillOpacity="0.2" />
        <path d="M12 2L6 12.5h12L12 2z" fill="#00C7B7" />
        <path d="M12 9.5L9 14.5h6L12 9.5z" fill="#20C4C4" />
        <path d="M12 14.5L10 18h4l-2-3.5z" fill="#1B9A9A" />
      </svg>
    );
  }

  if (normalizedKey === 'chatgpt') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <rect width="24" height="24" rx="6" fill="#10a37f" />
        <path fill="#ffffff" d="M20.31 10.63a4.73 4.73 0 0 0-.21-2.92 4.83 4.83 0 0 0-2.43-2.43 4.76 4.76 0 0 0-4.05.47 4.76 4.76 0 0 0-3-1.46 4.83 4.83 0 0 0-3.32.74A4.77 4.77 0 0 0 5.4 7.6a4.83 4.83 0 0 0-.47 4.05 4.76 4.76 0 0 0-.74 3.32 4.83 4.83 0 0 0 2.57 3.32c.57.32 1.21.5 1.86.52a4.76 4.76 0 0 0 3 1.46 4.83 4.83 0 0 0 3.32-.74 4.77 4.77 0 0 0 1.9-2.57c.7.13 1.42.1 2.1-.1a4.83 4.83 0 0 0 3.32-2.57 4.77 4.77 0 0 0-.45-3.86zm-11 .86c.07-.46.24-.9.5-1.28l3.18 1.84a1.27 1.27 0 0 1 .63 1.1v3.68l-3.18-1.84a2.53 2.53 0 0 1-1.13-3.5zm4 7l-3.18-1.84a1.27 1.27 0 0 1-.63-1.1V11.9l3.18 1.84a1.27 1.27 0 0 1 .63 1.1zm.63-5.26l-3.18-1.84 3.18-1.84 3.18 1.84zm1.9-1.37l3.18-1.84a2.53 2.53 0 0 1 1.13 3.5 2.54 2.54 0 0 1-1.38 1.28l-3.18-1.84V11.9a1.27 1.27 0 0 1-.63-1.1zm-1.27-5.23a1.27 1.27 0 0 1 .63 1.1v3.68l-3.18-1.84a1.27 1.27 0 0 1-.63-1.1V4.48zm-1.9 1.37l-3.18 1.84a2.53 2.53 0 0 1-1.13-3.5 2.54 2.54 0 0 1 1.38-1.28l3.18 1.84v3.68a1.27 1.27 0 0 1 .63 1.1z" transform="scale(0.7) translate(5, 5)" />
      </svg>
    );
  }

  if (normalizedKey === 'claude') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <rect width="24" height="24" rx="6" fill="#D97706" />
        <path fill="#ffffff" d="M12 5.5l1.65 3.34 3.69.54-2.67 2.6 1.15 3.52-3.82-2.01-3.82 2.01 1.15-3.52-2.67-2.6 3.69-.54z" />
      </svg>
    );
  }

  if (normalizedKey === 'tokenizer') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <rect width="24" height="24" rx="6" fill="#4B5563" />
        <path d="M7 8h3m4 0h3M7 12h10M7 16h5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <rect x="13" y="13" width="5" height="5" rx="1.5" fill="#10B981" />
      </svg>
    );
  }

  if (normalizedKey === 'colab' || normalizedKey === 'google-colab' || normalizedKey === 'google colab') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <path d="M8.5 7.5a4.5 4.5 0 0 0 0 9M15.5 7.5a4.5 4.5 0 0 1 0 9" stroke="#F57C00" strokeWidth="3" strokeLinecap="round" />
        <circle cx="8.5" cy="12" r="2.5" fill="#FFA726" />
        <circle cx="15.5" cy="12" r="2.5" fill="#F57C00" />
        <path d="M8.5 12h7" stroke="#FFB74D" strokeWidth="2" />
      </svg>
    );
  }

  if (normalizedKey === 'vscode' || normalizedKey === 'vs code') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <rect width="24" height="24" rx="6" fill="#007ACC" />
        <path d="M16.5 4.5L12 9l-4-3-3 2v8l3 2 4-3 4.5 4.5V4.5z" fill="#0066B3" />
        <path d="M16.5 4.5L5 12.5 16.5 19.5V4.5z" fill="#0098FF" fillOpacity="0.4" />
        <path d="M16.5 4.5l-6.5 6.5 6.5 8.5V4.5z" fill="#007ACC" />
      </svg>
    );
  }

  if (normalizedKey === 'opencode' || normalizedKey === 'open code') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <rect width="24" height="24" rx="6" fill="#0F172A" />
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalizedKey === 'nodejs' || normalizedKey === 'node.js') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <rect width="24" height="24" rx="6" fill="#333333" />
        <path d="M12 4.5l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z" fill="#339933" />
        <path d="M12 4.5L6 8v8l6 3.5V4.5z" fill="#43853D" />
        <path d="M12 8.5l3.5 2v3l-3.5 2-3.5-2v-3l3.5-2z" fill="#ffffff" fillOpacity="0.15" />
      </svg>
    );
  }

  if (normalizedKey === 'npm') {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }} className={className}>
        <rect width="24" height="24" rx="6" fill="#CB3837" />
        <path d="M4 8h16v8H4V8zm2 2v4h2v-4h2v4h2v-4h2v4h4V10H6z" fill="#ffffff" />
      </svg>
    );
  }

  // Fallback to Lucide maps
  const IconComponent = iconsMap[name] || Sparkles;
  return <IconComponent className={className} size={size} />;
}
