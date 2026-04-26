import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'The 7 Steps To Increased Pest Control Profits | BeamRay Marketing',
  description:
    'A private guide from BeamRay Marketing on growing a pest control company — from small operator to mid-range, and from mid-range to big operator.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

const steps: { title: string; small: string; mid: string }[] = [
  {
    title: 'Step 1 — Lock In Your Unit Economics Before You Scale Anything',
    small:
      "Most small operators don't truly know what a single stop costs them once you fold in drive time, chemical, fuel, insurance, payroll tax, and re-services. Until you do, every new customer is a gamble. Sit down with last quarter's books and calculate four numbers per service line: gross margin per stop, average revenue per stop, average minutes on site, and re-service rate. If your gross margin per stop is under 55–60%, raising prices is almost always cheaper and faster than cutting costs.",
    mid:
      'Mid-range operators should already be tracking these numbers monthly per route, per tech, and per service line. The next move is route density — measuring revenue per drive-hour, not per stop — and re-pricing or re-routing the bottom 20% of stops that drag margin down. This is the single biggest unlock between $1M and $5M in revenue.',
  },
  {
    title: 'Step 2 — Build A Predictable Lead Engine Instead Of A Lucky One',
    small:
      "Small operators tend to live on referrals, a Facebook page, and whatever Google sends them. That's not a system — that's weather. Pick three channels and commit to them for at least 90 days: Google Local Services Ads (LSA), an optimized Google Business Profile with weekly photo posts and review requests, and a single paid search campaign tightly geo-fenced to your most profitable ZIPs. Track cost per booked job, not cost per click.",
    mid:
      'Mid-range operators graduate from one-channel dependency. Add SEO content targeting the specific pests and neighborhoods you serve, a retargeting layer on Meta, and a real CRM that attributes booked jobs back to source. The goal is for no single channel to be more than 40% of your booked revenue — that is what makes the company sellable later.',
  },
  {
    title: 'Step 3 — Systemize The Sale, Not Just The Service',
    small:
      "If you are the owner taking the calls, you are the bottleneck. Write down what you actually say on a winning sales call — the questions, the price framing, the close — and turn it into a one-page script. Hire one part-time CSR and have them follow it. The number that matters here is booking rate: of every 10 qualified inbound calls, how many turn into a scheduled job? Anything under 65% is leaving real money on the table.",
    mid:
      'Mid-range operators install a tiered sales process: an inbound CSR for routine bookings, an outbound rep or solutions consultant for commercial and recurring contracts, and a defined hand-off to operations. Every call is recorded and scored weekly. Mid-range operators that skip this step plateau at around $2M and burn out the owner.',
  },
  {
    title: 'Step 4 — Productize Recurring Revenue (This Is What Turns Small Into Mid)',
    small:
      "One-time treatments are a job. Quarterly recurring plans are a business. The fastest way for a small operator to climb into mid-range is to convert one-off customers onto a named, recurring service plan with auto-billing — and to stop selling anything else as the default. Give it a name, put it on every invoice, and pay your techs a small spiff for every conversion. Aim to get 60%+ of your residential customer base on recurring within 12 months.",
    mid:
      'Mid-range operators stratify their recurring base: a basic plan, a premium plan with mosquito or rodent add-ons, and a commercial plan with a real service-level agreement. Recurring revenue per customer per year, not customer count, is the headline number. When recurring revenue exceeds 70% of gross, the company starts attracting acquisition interest and bank financing on completely different terms.',
  },
  {
    title: 'Step 5 — Hire The First Operations Layer So You Can Stop Doing The Work',
    small:
      "The hardest hire for a small operator is the second tech and the first dispatcher / office manager. It feels expensive — but staying owner-operator past two trucks is what kills growth. Pay slightly above market, write actual SOPs (route start, callbacks, complaints, re-services), and hold a 15-minute morning huddle. Your job is to stop riding routes and start running the company.",
    mid:
      'Mid-range operators move from \"a manager\" to a real org chart: an operations manager, a service manager who owns techs and quality, a sales/CSR lead, and a part-time bookkeeper or controller. Each role has 3–5 numbers they own weekly. This is the layer that lets a $2M company become a $7M company without the owner working more hours — usually fewer.',
  },
  {
    title: 'Step 6 — Install A Weekly Scoreboard With The Numbers That Actually Predict Profit',
    small:
      "Most small operators look at the bank balance and the QuickBooks P&L once a month. That is too late and too vague. Build a one-page weekly scoreboard with seven numbers: booked jobs, booking rate, revenue per stop, recurring conversion rate, re-service rate, technician utilization, and Google reviews added. Print it. Look at it every Monday. Numbers you watch weekly improve. Numbers you watch monthly drift.",
    mid:
      'Mid-range operators turn the scoreboard into a real dashboard with route-level and tech-level drill-downs, and they add forward-looking metrics: pipeline of commercial proposals, churn on recurring plans, customer acquisition cost (CAC) by channel, and lifetime value (LTV). When LTV / CAC clears 4x and churn stays under 10% annually, the business is ready for the next phase.',
  },
  {
    title: 'Step 7 — Expand Geography Through Branches Or Acquisitions (Mid Becomes Big Here)',
    small:
      "Smaller operators do not need to think about this yet — but it is worth knowing the destination. The path from small to mid is mostly about depth in your existing service area: more density, more recurring, better margins. Don't chase new ZIPs until your home market is genuinely saturated and your operations layer (Step 5) is running without you.",
    mid:
      'Mid-range operators cross into big-operator territory in one of two ways: opening a second branch in an adjacent metro, or acquiring a smaller competitor. Both work; both fail spectacularly without Steps 1–6 already nailed. The acquisition path is usually faster and cheaper per dollar of revenue — especially if you target retiring owner-operators and convert their one-off base onto your recurring plan. This is how regional operators get built.',
  },
]

export default function Guide7Steps() {
  return (
    <>
      <Navigation />

      <section className="min-h-screen pt-24 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm text-beamray-green mb-4">
              Private Guide
            </p>
            <h1 className="text-4xl md:text-6xl font-black mb-6 gradient-text leading-tight">
              The 7 Steps To Increased Pest Control Profits
            </h1>
            <p className="text-xl text-gray-300 mb-3">
              A practical playbook for growing a pest control company —
              <br className="hidden md:inline" />
              from small operator to mid-range, and from mid-range to big.
            </p>
            <p className="text-sm text-gray-500">By BeamRay Marketing</p>
          </header>

          <div className="glass-effect rounded-2xl p-6 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-3">Who this guide is for</h2>
            <p className="text-gray-300 mb-3">
              If you run a pest control company doing somewhere between
              $250K and $5M a year, this guide is for you. The first half
              of each step is written for owner-operators and small teams
              trying to climb into the mid-range tier (roughly $1M–$3M).
              The second half is written for mid-range operators trying
              to cross into the big-operator tier (roughly $5M+ with a
              real management layer).
            </p>
            <p className="text-gray-300">
              The steps are sequential on purpose. Skipping the early
              ones to chase the later ones is the single most common
              reason pest control companies stall.
            </p>
          </div>

          <ol className="space-y-10">
            {steps.map((step, i) => (
              <li
                key={i}
                className="glass-effect rounded-2xl p-6 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {step.title}
                </h2>

                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-widest text-beamray-blue mb-2">
                    For Smaller Operators (Growing Into Mid-Range)
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.small}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-beamray-green mb-2">
                    For Mid-Range Operators (Growing Into Big Operators)
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.mid}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="glass-effect rounded-2xl p-6 md:p-10 mt-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Where most companies stall
            </h2>
            <p className="text-gray-300 mb-4">
              In our experience working with home-service operators, the
              two hardest jumps are not where owners expect them. The
              first is between Step 4 and Step 5 — productizing recurring
              revenue and then actually getting out of the truck. The
              second is between Step 6 and Step 7 — running the business
              by the numbers long enough that a second branch or an
              acquisition is a calculated move instead of a hopeful one.
            </p>
            <p className="text-gray-300">
              If you would like a more specific conversation about which
              of these steps is your bottleneck right now, reach out to
              Kyle directly. This page is private and was sent to you on
              purpose — there is no form to fill out and no funnel
              attached.
            </p>
          </div>

          <footer className="text-center mt-16 text-sm text-gray-500">
            <p>© BeamRay Marketing — Private guide. Please do not redistribute.</p>
          </footer>
        </div>
      </section>
    </>
  )
}
