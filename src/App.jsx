import { useEffect, useRef, useState } from 'react'
import { me, stats, experience, education, projects, skills, certs, badges, papers, patent, awards } from './data'

const useReveal = () => useEffect(() => {
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('show')), { threshold: .12 })
  document.querySelectorAll('.reveal').forEach(el => io.observe(el)); return () => io.disconnect()
}, [])

const Typed = ({ words }) => {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i], t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1); else if (!del) setDel(true)
      else if (n > 0) setN(n - 1); else { setDel(false); setI((i + 1) % words.length) }
    }, del ? 35 : n === w.length ? 1400 : 70); return () => clearTimeout(t)
  }, [n, del, i, words])
  return <span className="grad font-mono">{words[i].slice(0, n)}<span className="animate-pulse">|</span></span>
}

const Count = ({ to, suf }) => {
  const ref = useRef(), [v, setV] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect(); const t0 = performance.now()
      const tick = t => { const k = Math.min((t - t0) / 1200, 1); setV(Math.round(to * (1 - Math.pow(1 - k, 3)))); k < 1 && requestAnimationFrame(tick) }
      requestAnimationFrame(tick)
    }); io.observe(ref.current); return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{v}{suf}</span>
}

const Avatar = () => {
  const [ok, setOk] = useState(true)
  return ok ? <img src="./profile.jpg" alt={me.name} onError={() => setOk(false)} className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-lg" />
    : <div className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-3xl font-extrabold text-white ring-4 ring-white shadow-lg">ZA</div>
}

const Section = ({ id, title, sub, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-6 py-20">
    <div className="reveal mb-12"><h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{title}</h2>
      {sub && <p className="mt-2 text-slate-500">{sub}</p>}<div className="mt-3 h-1 w-16 rounded bg-gradient-to-r from-indigo-600 to-sky-500" /></div>{children}
  </section>)

const Badge = () => <svg viewBox="0 0 24 24" className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="M9 14.5 7.5 21l4.5-2.5 4.5 2.5L15 14.5" /><path d="m9.5 9 2 2 3-3.5" /></svg>
const Ic = ({ d }) => <svg viewBox="0 0 24 24" className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
const Tag = ({ children }) => <span className="rounded-full bg-indigo-50 px-3 py-1 font-mono text-xs text-indigo-700 ring-1 ring-indigo-100">{children}</span>
const A = ({ href, children }) => href ? <a href={href} target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:text-sky-600">{children}</a> : null
const nav = ['about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact']

export default function App() {
  const [filter, setFilter] = useState('All'), [pf, setPf] = useState('All'), [msg, setMsg] = useState({ name: '', email: '', text: '' })
  const pcats = ['All', ...new Set(projects.map(p => p.c))], pshown = projects.filter(p => pf === 'All' || p.c === pf)
  const send = e => { e.preventDefault(); location.href = `mailto:${me.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + msg.name)}&body=${encodeURIComponent(msg.text + '\n\n' + msg.name + ' (' + msg.email + ')')}` }
  const cats = ['All', ...new Set(certs.map(c => c.c))]
  const shown = certs.filter(c => filter === 'All' || c.c === filter)
  useReveal()
  return (<>
    <div className="blob h-96 w-96 bg-indigo-300 -top-20 -left-20" /><div className="blob h-96 w-96 bg-sky-300 bottom-0 right-0" />
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-lg font-extrabold text-white shadow-md">Z</span><span className="hidden font-semibold tracking-tight text-slate-900 sm:block">Zayd Ansari</span></a>
        <ul className="hidden gap-6 text-sm text-slate-500 lg:flex">{nav.map(n => <li key={n}><a className="capitalize hover:text-indigo-600" href={`#${n}`}>{n}</a></li>)}</ul>
        <a href={me.resume} className="btn px-5 py-2 text-sm">Resume</a>
      </nav>
    </header>

    <main>
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-28 pb-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />Open to work</span>
          <h1 className="reveal mt-5 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">Hi, I'm <span className="grad">{me.name}</span></h1>
          <p className="reveal mt-4 text-xl md:text-2xl">{me.role}<br /><Typed words={me.typed} /></p>
          <p className="reveal mt-5 max-w-xl text-lg text-slate-500">{me.tagline}</p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn px-7 py-3">View projects</a>
            <a href={me.resume} className="card px-7 py-3 font-semibold text-slate-700">Download resume ↓</a>
            <a href="#contact" className="card px-7 py-3 font-semibold text-slate-700">Contact</a>
          </div>
        </div>
        <div className="reveal card mx-auto w-full max-w-sm p-8 text-center">
          <div className="flex justify-center"><Avatar /></div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">{me.name}</h3>
          <p className="text-indigo-600">Software Engineer Trainee</p>
          <p className="text-sm text-slate-500">{me.org} · {me.location.split(',')[0]}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-slate-100 pt-5 text-sm">
            {Object.entries(me.links).map(([k, v]) => <A key={k} href={v}>{k}</A>)}
          </div>
        </div>
      </section>

      <Section id="about" title="About Me">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="reveal space-y-4 text-lg leading-relaxed text-slate-600">{me.about.map(p => <p key={p}>{p}</p>)}</div>
          <div className="grid grid-cols-2 gap-4">{stats.map(s => <div key={s.l} className="card reveal p-5">
            <div className="ico">{s.i}</div>
            <div className="grad mt-4 text-3xl font-extrabold"><Count to={s.n} suf={s.suf} /></div>
            <div className="mt-1 text-sm text-slate-500">{s.l}</div></div>)}</div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="relative space-y-8 border-l-2 border-indigo-100 pl-8">
          {experience.map(e => <div key={e.role} className="reveal relative">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 ring-4 ring-white" />
            <div className="card p-6"><div className="flex flex-wrap justify-between gap-2"><h3 className="text-xl font-semibold text-slate-900">{e.role}</h3><span className="font-mono text-sm text-sky-600">{e.when}</span></div>
              <p className="text-indigo-600">{e.org}</p><ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-500">{e.pts.map(p => <li key={p}>{p}</li>)}</ul></div>
          </div>)}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid gap-6 md:grid-cols-2">{education.map(e => <div key={e.t} className="card reveal p-6"><div className="ico mb-3">🎓</div><h3 className="font-semibold text-slate-900">{e.t}</h3><p className="text-indigo-600">{e.o}</p><p className="mt-2 font-mono text-sm text-slate-400">{e.w} · {e.x}</p></div>)}</div>
      </Section>

      <Section id="projects" title="Projects" sub="A selection from my GitHub, spanning GenAI, data engineering, full-stack and ML.">
        <div className="mb-8 flex flex-wrap gap-2">{pcats.map(c => <button key={c} onClick={() => setPf(c)} className={`pill ${pf === c ? 'on' : ''}`}>{c}</button>)}</div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pshown.map(p => <article key={p.t} className={`card pop flex flex-col p-6 ${p.star ? 'ring-1 ring-indigo-200' : ''}`}>
            <div className="flex items-center justify-between">{p.star ? <span className="font-mono text-xs text-indigo-600">★ FEATURED</span> : <span className="font-mono text-xs text-slate-400">{p.c}</span>}<span className="font-mono text-xs text-slate-400">{p.y}</span></div>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.t}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{p.d}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.s.map(s => <Tag key={s}>{s}</Tag>)}</div>
            <div className="mt-4 flex gap-4 text-sm"><A href={p.gh}>GitHub ↗</A><A href={p.live}>Live demo ↗</A></div>
          </article>)}
        </div>
        <div className="mt-10 text-center"><a href={me.links.GitHub + '?tab=repositories'} target="_blank" rel="noreferrer" className="card inline-block px-7 py-3 font-semibold text-slate-700">See all 40 repositories on GitHub ↗</a></div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{Object.entries(skills).map(([k, v]) => <div key={k} className="card reveal p-6"><h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-900"><span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />{k}</h3><div className="flex flex-wrap gap-2">{v.map(s => <Tag key={s}>{s}</Tag>)}</div></div>)}</div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="mb-8 flex flex-wrap gap-2">{cats.map(c => <button key={c} onClick={() => setFilter(c)} className={`pill ${filter === c ? 'on' : ''}`}>{c}</button>)}</div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map(c => <div key={c.t} className="card pop flex flex-col p-6">
            <div className="ico"><Badge /></div><h3 className="mt-4 flex-1 font-semibold text-slate-900">{c.t}</h3>
            <p className="mt-2 text-sm text-slate-500">{c.by} · <span className="font-mono">{c.d}</span></p>
            {c.url && <div className="mt-3 text-sm"><A href={c.url}>View credential ↗</A></div>}
          </div>)}
        </div>
      <div className="reveal card mt-8 p-6 hover:translate-y-0"><h3 className="mb-4 font-semibold text-indigo-600">HackerRank Skill Certificates</h3>
          <div className="flex flex-wrap gap-2">{badges.map(b => <Tag key={b}>{b}</Tag>)}</div>
          <div className="mt-4 text-sm"><A href={me.links.HackerRank}>View on HackerRank ↗</A></div></div>
      </Section>

      <Section id="publications" title="Publications, Patent & Achievements">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card reveal p-6"><h3 className="mb-4 font-semibold text-indigo-600">📄 Publications</h3><ul className="space-y-3">{papers.map(p => <li key={p.v}><div className="text-sm text-slate-800">{p.t}</div><div className="font-mono text-xs text-slate-400">{p.v} <A href={p.url}>· read ↗</A></div></li>)}</ul></div>
          <div className="card reveal p-6"><h3 className="mb-4 font-semibold text-indigo-600">💡 Patent</h3><div className="text-slate-800">{patent.t}</div><div className="mt-1 font-mono text-xs text-slate-400">{patent.n} · {patent.status}</div></div>
          <div className="card reveal p-6"><h3 className="mb-4 font-semibold text-indigo-600">🏆 Achievements</h3><ul className="space-y-2 text-sm text-slate-600">{awards.map(a => <li key={a}>★ {a}</li>)}</ul></div>
        </div>
      </Section>

      <Section id="contact" title="Get In Touch" sub="Have an opportunity or a project in mind? Let's talk.">
        <div className="card reveal grid gap-0 overflow-hidden p-0 hover:translate-y-0 lg:grid-cols-[1fr_1.2fr]">
          <div className="bg-gradient-to-br from-indigo-600 to-sky-500 p-8 text-white md:p-10">
            <h3 className="text-2xl font-bold">Let's build something together</h3>
            <p className="mt-3 text-indigo-50">I'm open to Software Engineering, Generative AI and Data Engineering roles. I usually reply within a day.</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/20">✉</span><a href={`mailto:${me.email}`} className="break-all hover:underline">{me.email}</a></li>
              <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/20">⌖</span>{me.location}</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">{Object.entries(me.links).map(([k, v]) => <a key={k} href={v} target="_blank" rel="noreferrer" className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium transition hover:bg-white hover:text-indigo-700">{k}</a>)}</div>
          </div>
          <form onSubmit={send} className="space-y-4 p-8 md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required value={msg.name} onChange={e => setMsg({ ...msg, name: e.target.value })} placeholder="Your name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" />
              <input required type="email" value={msg.email} onChange={e => setMsg({ ...msg, email: e.target.value })} placeholder="Your email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" />
            </div>
            <textarea required rows="5" value={msg.text} onChange={e => setMsg({ ...msg, text: e.target.value })} placeholder="How can I help?" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" />
            <button type="submit" className="btn w-full px-8 py-3">Send message</button>
            <p className="text-center text-xs text-slate-400">Opens your email app with the message ready to send.</p>
          </form>
        </div>
      </Section>
    </main>

    <footer className="border-t border-slate-200 bg-white/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-slate-500">
        <span>© {new Date().getFullYear()} {me.name}</span>
        <div className="flex flex-wrap gap-5">{Object.entries(me.links).map(([k, v]) => <A key={k} href={v}>{k}</A>)}</div>
      </div>
    </footer>
  </>)
}
