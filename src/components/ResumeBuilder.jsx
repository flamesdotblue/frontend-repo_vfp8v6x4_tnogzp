import React, { useMemo, useState } from 'react';
import { FileText, Wand2, Download, Trophy } from 'lucide-react';

const initialData = {
  name: '',
  title: '',
  summary: '',
  skills: '',
  experience: ''
};

const templates = {
  neo: {
    accent: 'text-cyan-400',
    border: 'border-cyan-400/30',
    bg: 'bg-white dark:bg-slate-900'
  },
  mono: {
    accent: 'text-slate-700 dark:text-slate-200',
    border: 'border-slate-400/30',
    bg: 'bg-white dark:bg-slate-900'
  },
  glass: {
    accent: 'text-indigo-400',
    border: 'border-indigo-400/30',
    bg: 'bg-white/70 backdrop-blur dark:bg-white/5'
  },
  solar: {
    accent: 'text-amber-500',
    border: 'border-amber-400/30',
    bg: 'bg-white dark:bg-slate-900'
  }
};

export default function ResumeBuilder({ template = 'neo' }) {
  const [data, setData] = useState(initialData);

  const completion = useMemo(() => {
    const keys = Object.keys(initialData);
    const filled = keys.filter(k => String(data[k]).trim().length > 0).length;
    return Math.round((filled / keys.length) * 100);
  }, [data]);

  const barColor = completion < 40 ? 'bg-rose-500' : completion < 80 ? 'bg-amber-500' : 'bg-emerald-500';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleAI = () => {
    // Placeholder AI: add subtle guidance locally.
    if (!data.summary) {
      setData(prev => ({
        ...prev,
        summary: 'Impact-driven professional blending creativity and systems thinking. I design, build, and optimize experiences that feel futuristic yet practical.'
      }));
    }
    if (!data.skills) {
      setData(prev => ({
        ...prev,
        skills: 'React, TypeScript, Node.js, FastAPI, Tailwind, Three.js, WebGL, Accessibility, SEO, CI/CD'
      }));
    }
  };

  const exportPDF = () => {
    window.print();
  };

  const tpl = templates[template] ?? templates.neo;

  return (
    <section id="builder" className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
          <FileText size={22} /> Resume Builder
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <div className="h-2 w-40 overflow-hidden rounded-full bg-black/10 dark:bg-white/10" aria-label="Progress" aria-valuemax={100} aria-valuemin={0} aria-valuenow={completion} role="progressbar">
            <div className={`h-full ${barColor}`} style={{ width: `${completion}%` }} />
          </div>
          <span className="min-w-10 text-gray-600 dark:text-gray-300">{completion}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Editor */}
        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input name="name" value={data.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-transparent" placeholder="Ada Lovelace" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
              <input name="title" value={data.title} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-transparent" placeholder="Software Engineer" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Summary</label>
            <textarea name="summary" value={data.summary} onChange={handleChange} rows={4} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-transparent" placeholder="Brief career summary" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Skills</label>
            <textarea name="skills" value={data.skills} onChange={handleChange} rows={3} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-transparent" placeholder="Comma-separated skills" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Experience</label>
            <textarea name="experience" value={data.experience} onChange={handleChange} rows={5} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-transparent" placeholder="Your recent roles, projects, and impact" />
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={handleAI} className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500">
              <Wand2 size={16} /> AI Suggest
            </button>
            <button onClick={exportPDF} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/10">
              <Download size={16} /> Export PDF
            </button>
            {completion === 100 && (
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <Trophy size={16} /> Milestone: Complete!
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className={`rounded-2xl border p-6 shadow-sm ${tpl.border} ${tpl.bg}`}>
          <div className="space-y-1 border-b border-black/5 pb-4 dark:border-white/10">
            <h3 className={`text-2xl font-bold ${tpl.accent}`}>{data.name || 'Your Name'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{data.title || 'Your Title'}</p>
          </div>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
            <section>
              <h4 className={`mb-1 font-semibold ${tpl.accent}`}>Summary</h4>
              <p>{data.summary || 'Write a concise summary that highlights your strengths and impact.'}</p>
            </section>
            <section>
              <h4 className={`mb-1 font-semibold ${tpl.accent}`}>Skills</h4>
              <p>{data.skills || 'List your skills separated by commas.'}</p>
            </section>
            <section>
              <h4 className={`mb-1 font-semibold ${tpl.accent}`}>Experience</h4>
              <p className="whitespace-pre-wrap">{data.experience || 'Describe your experience, projects, and achievements.'}</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
