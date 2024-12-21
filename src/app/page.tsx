import Image from "next/image";
import { Navigation } from "@/components/nav";
import Link from "next/link";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[600px] w-[1200px] max-w-full mx-auto">
        <Image
          src="/jordan-and-liana.jpg"
          alt="Wedding couple"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Our Story */}
          <div>
            <h2 className="text-4xl font-normal text-[var(--color-text)] mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg">
              <p className="text-[var(--color-text-light)]">
                We first met in July of 2018 at Hy-Vee, where we both worked at
                the time. Our early conversations were bonding over shared music
                taste and a love for Christmas, our favorite holiday. Over time
                we got to know each other and went on our first date to an
                arcade on Valentine's day 2019. We hit it off, and had long
                phone conversations about our many shared interests that lasted
                into the early hours of the morning.
              </p>
            </div>
          </div>

          {/* Proposal Story */}
          <div>
            <h2 className="text-4xl font-normal text-[var(--color-text)] mb-8">
              The Proposal
            </h2>
            <div className="prose prose-lg">
              <p className="text-[var(--color-text-light)]">
                On December 1, 2023, Jordan planned a surprise weekend getaway
                to Breckenridge, Colorado to see the town's annual Christmas
                tree lighting ceremony. It was snowing heavily as we arrived,
                yet Jordan seemed insistent on exploring downtown Breckenridge
                on foot. After trudging through the snow for a while and
                admiring some christmas decorations, Jordan paused on a
                pedestrian bridge and got on one knee to propose. The rest is
                history!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-4xl font-normal text-[var(--color-text)] mb-8 text-center">
            Our Important Dates
          </h2>
          <ul className="space-y-4 list-disc list-inside text-lg text-[var(--color-text-light)] text-left mx-auto max-w-xl">
            <li>Wedding Ceremony - October 5th, 2024 at 4:00 PM</li>
            <li>Reception to follow at 5:30 PM</li>
            <li>Dancing and celebration until 11:00 PM</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
