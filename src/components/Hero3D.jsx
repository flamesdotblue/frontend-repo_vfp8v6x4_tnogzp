import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Trophy, Cpu } from 'lucide-react';

const StatBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white backdrop-blur">
    <Icon size={16} className="text-cyan-300" />
    <span className="text-xs">{label}</span>
  </div>
);

export default function Hero3D() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <div className="mb-4 flex gap-2">
          <StatBadge icon={Rocket} label="AI-Powered Resume Builder" />
          <StatBadge icon={Cpu} label="3D Futuristic UI" />
          <StatBadge icon={Trophy} label="Gamified Progress" />
        </div>
        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Build a next‑gen Resume & Portfolio with AI, 3D and Gamification
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-white/80">
          Craft a standout profile with live previews, smart guidance, templates, and collaborative tools — all in a sleek, cyberpunk-inspired interface.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#builder" className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black hover:bg-cyan-400">
            Get Started
          </a>
          <a href="#features" className="pointer-events-auto inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
