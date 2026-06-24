import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Solstice — Text Editor for Mac',
  description: 'Solstice is a Mac text editor built around file meta management. Star files, label them, copy paths instantly, label windows, and integrate with Flowerdock.',
}

const features = [
  {
    icon: '★',
    title: 'Star Any File',
    desc: 'Mark files that matter with a single click. The red star appears in both the sidebar row and the tab — so your important files are always visible at a glance across your workspace.',
    color: 'text-red-400',
  },
  {
    icon: '✏️',
    title: 'Custom File Labels',
    desc: "Add a freeform text label to any open file — separate from the filename. Label a config file 'production server', a script 'runs nightly', or a doc 'needs review'. Your labels persist across sessions.",
    color: 'text-beamray-blue',
  },
  {
    icon: '⚡',
    title: 'One-Click Tool Buttons',
    desc: 'Every file row has four instant-action buttons: copy full path, copy folder path, copy filename, and reveal in Finder. Hover any button to preview exactly what will be copied before you click.',
    color: 'text-beamray-green',
  },
  {
    icon: '🗂️',
    title: 'Three-Column Sidebar',
    desc: 'Solstice splits the sidebar into Tool Buttons, Folder (showing three folder levels deep), and File — each its own resizable column. Drag any column divider to set widths that match your workflow.',
    color: 'text-beamray-purple',
  },
  {
    icon: '🏷️',
    title: 'Window Labels',
    desc: 'Type a label directly into the drag bar — "client work", "personal", "build scripts" — and that label becomes the window\'s native macOS title. Switch between labeled windows without guessing what\'s where.',
    color: 'text-beamray-blue',
  },
  {
    icon: '🌸',
    title: 'Flowerdock Integration',
    desc: 'Window labels feed directly into Flowerdock tiles via the native macOS window title. No configuration needed — open Flowerdock, hover your Solstice windows, and each tile shows your custom label.',
    color: 'text-pink-400',
  },
  {
    icon: '⇅',
    title: 'Drag to Reorder',
    desc: 'Drag tabs left or right to reorder them. Drag any sidebar row up or down. Both systems stay in sync in real time — reorder from either place and the other updates instantly.',
    color: 'text-beamray-green',
  },
  {
    icon: '🔍',
    title: 'Find & Replace',
    desc: 'Press ⌘F for find with a live match count, or ⌘⇧F for search and replace. A clean custom panel with clearly labeled buttons — none of the cryptic icon clutter found in other editors.',
    color: 'text-amber-400',
  },
  {
    icon: '⊞',
    title: 'True Multi-Window',
    desc: 'Press ⌘N to open a new window. Each window carries its own independent set of tabs, its own label, and its own sidebar state. Work across multiple projects without mixing them together.',
    color: 'text-beamray-purple',
  },
]

export default function Solstice() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="bg-slate-900 text-white pt-32 pb-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-sm text-slate-400 mb-8">
              <span className="text-base">🍎</span> macOS only
            </div>
            <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent leading-tight">
              Solstice
            </h1>
            <p className="text-2xl font-light text-slate-300 mb-4">
              A text editor that knows which files matter.
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Solstice brings Monaco editor power to a purpose-built Mac app, wrapped in a sidebar
              built around <em>file meta management</em> — starring, labeling, path copying, and
              window organization features that no other editor offers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://beamray.lemonsqueezy.com/checkout/buy/solstice-free-trial"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl">⬇</span>
                Download Free Trial
              </a>
              <span className="text-slate-500 text-sm">14-day free trial · No credit card required</span>
            </div>
          </div>
        </section>

        {/* ── UI Preview strip ────────────────────────────────────────────── */}
        <section className="bg-slate-800 py-10 px-4 border-y border-slate-700">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-950 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
              {/* Fake drag bar */}
              <div className="bg-slate-900 border-b border-slate-800 px-5 py-2.5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
                </div>
                <span className="text-slate-500 text-sm ml-3">☀ Solstice</span>
                <span className="text-slate-600 text-xs ml-4">Window Label:</span>
                <span className="text-slate-400 text-xs border-b border-slate-700 px-1">client project</span>
              </div>
              {/* Fake tab bar */}
              <div className="bg-slate-900 border-b border-slate-800 flex items-center gap-1 px-3 py-1.5">
                {['★ config.js', 'utils.ts', 'index.html'].map((t, i) => (
                  <div key={t} className={`px-3 py-1 rounded text-xs font-medium ${i === 0 ? 'bg-slate-700 text-slate-200' : 'text-slate-500'}`}>{t}</div>
                ))}
              </div>
              {/* Fake sidebar + editor */}
              <div className="flex text-xs">
                <div className="bg-slate-900 border-r border-slate-800 w-36 flex-shrink-0">
                  <div className="border-b border-slate-800 text-slate-600 text-center py-1.5">Tool Buttons</div>
                  {['copy full path','copy folder path','copy file name','show in finder'].map(b => (
                    <div key={b} className="px-2 py-1.5 border-b border-slate-800/50 text-slate-600">{b}</div>
                  ))}
                </div>
                <div className="bg-slate-900 border-r border-slate-800 w-28 flex-shrink-0">
                  <div className="border-b border-slate-800 text-slate-600 text-center py-1.5">Folder</div>
                  <div className="px-3 py-3 space-y-0.5">
                    <div className="text-slate-600">projects</div>
                    <div className="text-slate-500">client-a</div>
                    <div className="text-slate-300 font-medium">src</div>
                  </div>
                </div>
                <div className="bg-slate-900 border-r border-slate-800 w-36 flex-shrink-0">
                  <div className="border-b border-slate-800 text-slate-600 text-center py-1.5">File</div>
                  <div className="px-3 py-2.5 space-y-1">
                    <div className="text-slate-500 text-xs italic">needs review</div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-red-400">★</span>
                      <span className="text-slate-300">config.js</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-slate-950 p-4 font-mono">
                  <div className="text-slate-600"><span className="text-violet-400">const</span> <span className="text-blue-400">config</span> <span className="text-slate-400">=</span> {'{'}</div>
                  <div className="text-slate-600 ml-4"><span className="text-emerald-400">apiUrl</span><span className="text-slate-400">:</span> <span className="text-amber-300">"https://api.example.com"</span><span className="text-slate-600">,</span></div>
                  <div className="text-slate-600 ml-4"><span className="text-emerald-400">timeout</span><span className="text-slate-400">:</span> <span className="text-amber-300">5000</span></div>
                  <div className="text-slate-600">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ────────────────────────────────────────────────────── */}
        <section className="bg-white py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 gradient-text">Built around your files, not just their content</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Every feature in Solstice exists to reduce the cognitive overhead of managing many open files at once.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(f => (
                <div key={f.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:border-slate-300 transition-all duration-200">
                  <div className={`text-3xl mb-4 ${f.color}`}>{f.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Flowerdock callout ──────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-pink-50 to-violet-50 border-y border-slate-200 py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-5">🌸</div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Pairs beautifully with Flowerdock</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Label each Solstice window with one word — <span className="font-semibold text-slate-800">"client"</span>, <span className="font-semibold text-slate-800">"server"</span>, <span className="font-semibold text-slate-800">"notes"</span> — and Flowerdock tiles show exactly that label when you hover your Dock. No configuration, no plugins. It works because Solstice writes your label directly to the native macOS window title, which is exactly where Flowerdock reads from.
            </p>
            <p className="text-slate-400 text-sm">Flowerdock is a separate Mac app. Each works independently — together they're better.</p>
          </div>
        </section>

        {/* ── Pricing / CTA ───────────────────────────────────────────────── */}
        <section className="bg-slate-900 text-white py-24 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Try Solstice free for 14 days
            </h2>
            <p className="text-slate-400 mb-2">No credit card. No account required. Just download and run.</p>
            <p className="text-slate-500 text-sm mb-10">After the trial, a license is <span className="text-slate-300 font-semibold">$97 / year</span> — unlimited use, all future updates.</p>
            <a
              href="https://beamray.lemonsqueezy.com/checkout/buy/solstice-free-trial"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>⬇</span> Download Free Trial
            </a>
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-600 text-sm">
              <span>🍎</span>
              <span>macOS 12 Monterey or later required</span>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
