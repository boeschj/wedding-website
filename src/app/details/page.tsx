import { Navigation } from '@/components/nav'

const timeline = [
  { time: '4:00 PM', event: 'Ceremony Begins' },
  { time: '4:45 PM', event: 'Cocktail Hour' },
  { time: '6:00 PM', event: 'Reception Begins' },
  { time: '6:30 PM', event: 'Dinner Service' },
  { time: '7:30 PM', event: 'Dancing' },
  { time: '11:00 PM', event: 'Farewell Send-off' },
]

export default function Details() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-normal text-center mb-16 text-[var(--color-text)]">Wedding Details</h1>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-normal text-center mb-12 text-[var(--color-text)]">Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div
                key={item.time}
                className="flex items-center space-x-8 text-lg"
              >
                <span className="font-medium w-24 text-right text-[var(--color-text)]">{item.time}</span>
                <div className="w-4 h-4 rounded-full bg-[var(--color-primary)]" />
                <span className="text-[var(--color-text-light)]">{item.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dress Code */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-normal mb-8 text-[var(--color-text)]">Dress Code</h2>
          <p className="text-xl text-[var(--color-text)] mb-4">Black Tie Optional</p>
          <p className="text-[var(--color-text-light)]">
            Ladies: Floor-length gowns or elegant cocktail dresses<br />
            Gentlemen: Tuxedo or dark suit and tie
          </p>
        </div>

        {/* Registry */}
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-[var(--color-text)]">Registry</h2>
          <p className="text-[var(--color-text-light)] mb-8">
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honor us with a gift, we are registered at:
          </p>
          <div className="space-y-4">
            <p className="text-xl">
              <a href="#" className="text-[var(--color-primary)] hover:underline">
                Crate & Barrel
              </a>
            </p>
            <p className="text-xl">
              <a href="#" className="text-[var(--color-primary)] hover:underline">
                West Elm
              </a>
            </p>
            <p className="text-xl">
              <a href="#" className="text-[var(--color-primary)] hover:underline">
                Williams-Sonoma
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

