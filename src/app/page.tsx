import Image from 'next/image'
import { Navigation } from '@/components/nav'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[var(--color-primary)] bg-opacity-10 h-[300px] flex flex-col justify-end pb-12">
        <div className="text-center">
          <h1 className="text-5xl font-normal mb-4 text-[var(--color-primary)]">Liana & Jordan</h1>
          <p className="text-xl mb-2 text-[var(--color-text-light)]">JUNE 21, 2025 • OMAHA, NE</p>
        </div>
      </div>

      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/placeholder.svg"
          alt="Wedding couple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Our Story */}
          <div>
            <h2 className="text-4xl font-normal text-[var(--color-text)] mb-8">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-[var(--color-text-light)]">
                We met in the summer of 2020, during what felt like the strangest time of our lives.
                Despite the challenges of dating during a pandemic, we found ways to connect and grow closer.
                Our first date was a socially-distanced picnic in Central Park, and the rest, as they say, is history.
              </p>
            </div>
          </div>

          {/* Proposal Story */}
          <div>
            <h2 className="text-4xl font-normal text-[var(--color-text)] mb-8">The Proposal</h2>
            <div className="prose prose-lg">
              <p className="text-[var(--color-text-light)]">
                On a crisp autumn morning in October 2024, Jordan planned a surprise hiking trip to our
                favorite spot in the mountains. As we reached the summit at sunrise, he got down on one
                knee and asked the question that would change our lives forever.
              </p>
            </div>
          </div>
        </div>

        {/* Reception Details */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-normal text-[var(--color-text)] mb-8">Reception</h2>
          <p className="text-xl text-[var(--color-text-light)]">
            Join us for an evening of celebration at
          </p>
          <p className="text-2xl text-[var(--color-text)] mt-2">
            The Langham Huntington
          </p>
          <p className="text-lg text-[var(--color-text-light)] mt-1">
            1401 S Oak Knoll Ave, Pasadena, CA 91106
          </p>
          <div className="mt-8">
            <Link href="/rsvp" className="btn btn-primary">
              RSVP Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

