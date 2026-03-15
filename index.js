import { motion } from 'framer-motion'

const stars = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 29) % 100}%`,
  duration: 2.8 + (i % 5),
  delay: (i % 7) * 0.35,
}))

const features = [
  {
    title: 'Zero terrestrial downtime',
    body: 'Because local outages become irrelevant once your infra has physically and emotionally left Earth.',
  },
  {
    title: 'Low orbit is the new edge',
    body: 'Why store your data on Earth when premium compute can hover judgementally above everyone else?',
  },
  {
    title: 'Astronomical uptime',
    body: 'Built for planetary resilience, cinematic pitch decks, and deeply unserious technical ambition.',
  },
]

const metrics = [
  ['100%', 'SLA guaranteed*'],
  ['0 ms', 'emotionally estimated latency'],
  ['24/7', 'planetary resilience'],
]

const dashboardRows = [
  ['Orbital uptime', '99.999999%'],
  ['Debris avoidance AI', 'Enabled'],
  ['Solar event readiness', 'Absolutely'],
  ['Terrestrial dependency', 'Deprecated'],
]

function Rocket() {
  return (
    <motion.div
      className="absolute left-[-12%] top-24 z-20"
      animate={{ x: ['0vw', '110vw'], y: [0, -24, 0, 18, 0], rotate: [-8, 0, 4, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative">
        <div className="absolute -left-20 top-1/2 h-2 w-24 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-300/0 via-cyan-300/80 to-white blur-md" />
        <div className="relative h-14 w-28 rounded-r-full rounded-l-[2rem] border border-white/20 bg-gradient-to-br from-white via-slate-200 to-slate-400 shadow-2xl">
          <div className="absolute left-3 top-4 h-6 w-6 rounded-full border border-sky-200/80 bg-sky-300/50" />
          <div className="absolute bottom-[-10px] left-6 h-5 w-5 -skew-x-[25deg] rounded-b-md bg-red-400" />
          <div className="absolute top-[-8px] left-10 h-4 w-8 rounded-t-full bg-red-400" />
          <div className="absolute right-[-14px] top-1/2 h-0 w-0 -translate-y-1/2 border-b-[14px] border-l-[18px] border-t-[14px] border-b-transparent border-l-white border-t-transparent" />
          <motion.div
            className="absolute -left-7 top-1/2 h-5 w-8 -translate-y-1/2 rounded-l-full bg-gradient-to-r from-orange-300 via-yellow-300 to-transparent blur-[1px]"
            animate={{ scaleX: [1, 1.4, 0.95], opacity: [0.9, 1, 0.75] }}
            transition={{ duration: 0.35, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function SpaceDataCenter() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[520px]">
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute left-1/2 top-[8%] h-20 w-20 -translate-x-1/2 rounded-full border border-cyan-200/30 bg-white/10 shadow-2xl backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-3 rounded-full border border-cyan-200/20 bg-cyan-300/10" />
        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/60 blur-[1px]" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute left-1/2 top-0 h-14 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
          <div className="mt-3 flex justify-center gap-1">
            <span className="h-2 w-8 rounded-full bg-emerald-300/80" />
            <span className="h-2 w-4 rounded-full bg-cyan-300/80" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 h-14 w-24 -translate-x-1/2 translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
          <div className="mt-3 flex justify-center gap-1">
            <span className="h-2 w-5 rounded-full bg-violet-300/80" />
            <span className="h-2 w-7 rounded-full bg-cyan-300/80" />
          </div>
        </div>
        <div className="absolute left-0 top-1/2 h-14 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
          <div className="mt-3 flex justify-center gap-1">
            <span className="h-2 w-6 rounded-full bg-cyan-300/80" />
            <span className="h-2 w-6 rounded-full bg-emerald-300/80" />
          </div>
        </div>
        <div className="absolute right-0 top-1/2 h-14 w-24 translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
          <div className="mt-3 flex justify-center gap-1">
            <span className="h-2 w-7 rounded-full bg-red-300/80" />
            <span className="h-2 w-4 rounded-full bg-cyan-300/80" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700 shadow-[0_0_80px_rgba(59,130,246,0.35)]"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-[10%] rounded-full border border-white/10" />
        <div className="absolute right-[18%] top-[22%] h-8 w-8 rounded-full bg-white/20 blur-sm" />
        <div className="absolute left-[16%] top-[38%] h-10 w-10 rounded-full bg-emerald-300/20 blur-sm" />
        <div className="absolute bottom-[22%] left-[42%] h-8 w-12 rounded-full bg-cyan-200/10 blur-sm" />
      </motion.div>
    </div>
  )
}

export default function SpaceCloudLandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.14),transparent_28%)]" />

      <div className="pointer-events-none absolute inset-0">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute h-1 w-1 rounded-full bg-white/80"
            style={{ left: star.left, top: star.top }}
            animate={{ opacity: [0.2, 1, 0.25], scale: [1, 1.8, 1] }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
          />
        ))}
      </div>

      <Rocket />

      <header className="relative z-10 border-b border-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/50">SPACE CLOUD</div>
            <div className="text-lg font-semibold">Orbital Compute, Elevated</div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium shadow-2xl transition hover:bg-white/15"
            >
              Join Waitlist
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              View GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200">
              Race to the moon was yesterday. Now it’s the race to space cloud.
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
              The next hyperscaler <span className="text-cyan-300">won’t be terrestrial.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Cloud is no longer just someone else’s computer. It’s above everyone else’s.
              We’re building orbital infrastructure for the next generation of compute, storage,
              and deeply unnecessary founder confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Reserve Orbital Capacity
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                GitHub Pages Deploy Guide
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {metrics.map(([stat, label]) => (
                <motion.div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur"
                  whileHover={{ y: -6 }}
                >
                  <div className="text-3xl font-semibold">{stat}</div>
                  <div className="mt-2 text-sm text-white/60">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <SpaceDataCenter />

            <div className="relative mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-white/45">Live Infra Dashboard</div>
                  <div className="mt-1 text-2xl font-semibold">LEO Cluster Alpha</div>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  Operational-ish
                </div>
              </div>

              <div className="space-y-4">
                {dashboardRows.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="text-white/60">{k}</span>
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-cyan-300/15 bg-cyan-300/10 p-5">
                <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/70">Founder Note</div>
                <p className="mt-3 text-sm leading-7 text-cyan-50/90">
                  If Elon Musk can put a Tesla in space, we can put the cloud there too.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item) => (
              <motion.div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 shadow-2xl backdrop-blur">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-white/45">Core Platform</div>
                <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                  From cloud computing to <span className="text-violet-300">space computing</span>.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-white/65">
                  Space Cloud unifies orbital storage, extraterrestrial workload orchestration,
                  and launch-native infrastructure into one seamless full-stack platform for teams
                  ready to think beyond planet-bound compute.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>Edge region</span>
                    <span>Low Earth Orbit</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>Compliance</span>
                    <span>Interplanetary ready</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>Deployment model</span>
                    <span>RocketOps™</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>Data gravity</span>
                    <span>Under review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-5xl px-6 py-10">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/10 p-8 shadow-2xl backdrop-blur">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-cyan-100/70">Limited orbital capacity</div>
                <h3 className="mt-3 text-3xl font-semibold">Join the waitlist for the future of infra.</h3>
                <p className="mt-4 max-w-xl leading-8 text-cyan-50/80">
                  Be among the first teams to deploy workloads into an architecture nobody asked for
                  but everybody will pretend to understand on LinkedIn.
                </p>
              </div>
              <form className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <input
                  type="text"
                  placeholder="Work email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
                />
                <button
                  type="button"
                  className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  Request launch window
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-sm text-white/45">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>#SpaceCloud #OrbitalCompute #FutureOfInfra #EdgeComputing #NewSpace</div>
          <div>* subject to launch windows, solar activity, debris events, geopolitics, and acts of god.</div>
        </div>
      </footer>
    </div>
  )
}
