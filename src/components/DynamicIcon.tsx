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
  Sparkle
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
  Sparkle
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size = 20 }: DynamicIconProps) {
  const IconComponent = iconsMap[name] || Sparkles; // Default to Sparkles if not found
  return <IconComponent className={className} size={size} />;
}
