import React, { useEffect, useState } from 'react';
import Hero3D from './components/Hero3D';
import FeatureShowcase from './components/FeatureShowcase';
import TemplateGallery from './components/TemplateGallery';
import ResumeBuilder from './components/ResumeBuilder';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [dark, setDark] = useState(true);
  const [template, setTemplate] = useState('neo');

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900 dark:from-[#0a0a0f] dark:to-black dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            NeoResume
          </a>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a href="#features" className="hover:text-cyan-400">Features</a>
            <a href="#builder" className="hover:text-cyan-400">Builder</a>
            <a href="#templates" className="hover:text-cyan-400">Templates</a>
          </nav>
          <button aria-label="Toggle theme" onClick={() => setDark(v => !v)} className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-medium hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      {/* Hero with Spline */}
      <Hero3D />

      {/* Feature grid */}
      <FeatureShowcase />

      {/* Template Gallery */}
      <div id="templates">
        <TemplateGallery selected={template} onSelect={setTemplate} />
      </div>

      {/* Resume Builder */}
      <ResumeBuilder template={template} />

      {/* Footer */}
      <footer className="border-t border-black/5 py-8 text-center text-sm text-gray-600 dark:border-white/10 dark:text-gray-400">
        <div className="mx-auto max-w-6xl px-6">
          Built with a futuristic 3D interface, AI hints, and smooth accessibility in mind.
        </div>
      </footer>
    </div>
  );
}

export default App;
