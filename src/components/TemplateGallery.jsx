import React from 'react';
import { Layout, Palette, Star } from 'lucide-react';

const templates = [
  { id: 'neo', name: 'Neon Neo', accent: 'from-cyan-500 to-fuchsia-500' },
  { id: 'mono', name: 'Mono Pro', accent: 'from-slate-700 to-slate-500' },
  { id: 'glass', name: 'Glass Aurora', accent: 'from-indigo-500 to-cyan-500' },
  { id: 'solar', name: 'Solar Pulse', accent: 'from-amber-500 to-rose-500' }
];

export default function TemplateGallery({ selected, onSelect }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Template Gallery</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Pick a style — you can fine-tune colors and typography later.</p>
        </div>
        <div className="hidden items-center gap-2 text-sm text-gray-600 dark:text-gray-300 sm:flex">
          <Palette size={16} />
          <span>Live theme preview</span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map(t => (
          <button
            key={t.id}
            onClick={() => onSelect?.(t.id)}
            className={`group relative overflow-hidden rounded-2xl border p-0 text-left transition hover:-translate-y-1 hover:shadow-lg ${
              selected === t.id
                ? 'border-cyan-400 dark:border-cyan-400'
                : 'border-gray-200 dark:border-white/10'
            }`}
          >
            <div className={`h-28 w-full bg-gradient-to-r ${t.accent}`} />
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t.id}</div>
              </div>
              {selected === t.id ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/15 px-2 py-1 text-xs font-medium text-cyan-500">
                  <Star size={14} /> Selected
                </span>
              ) : (
                <span className="text-xs text-gray-500">Select</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
