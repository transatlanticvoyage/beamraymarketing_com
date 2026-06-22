import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Pavillion - BeamRay Marketing',
}

export default function Pavillion() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main" className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center py-20">
          <h1 className="text-5xl font-black mb-6 gradient-text">Pavillion</h1>
          <p className="text-xl text-slate-600">Coming soon</p>
        </div>
      </main>
    </>
  )
}
