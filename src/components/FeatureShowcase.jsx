import React from 'react';
import { Shield, Users, Palette, Globe, Star, FileText, Layout, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Step-by-step Builder',
    desc: 'Guided sections with instant preview and smart suggestions.'
  },
  {
    icon: Layout,
    title: '20+ Templates',
    desc: 'Modern, minimalist, and creative layouts you can customize.'
  },
  {
    icon: Star,
    title: 'Gamified UX',
    desc: 'Progress, milestones, and micro-interactions that motivate.'
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    desc: 'Edit together with live cursors, comments, and versioning.'
  },
  {
    icon: Shield,
    title: 'Security-first',
    desc: 'Role-based access, encrypted sync, and secure exports.'
  },
  {
    icon: Palette,
    title: 'Futuristic Design',
    desc: '3D dashboard, holographic panels, and particle layers.'
  },
  {
    icon: Globe,
    title: 'Accessible & Global',
    desc: 'Keyboard nav, screen readers, TTS, and multilingual.'
  },
  {
    icon: MessageSquare,
    title: 'AI Mentor',
    desc: 'Smart tips, scoring insights, and career path guidance.'
  }
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">All-in-one power features</h2>
      <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
        Designed for performance, accessibility, collaboration, and style.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-300">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
