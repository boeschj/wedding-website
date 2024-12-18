import { Navigation } from '@/components/nav'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const hotels = [
  {
    name: 'The Langham Huntington',
    image: '/placeholder.svg',
    description: 'Our wedding venue and a luxury hotel with historic charm.',
    link: 'https://www.langhamhotels.com/en/the-langham/pasadena/',
  },
  {
    name: 'Hyatt Place Pasadena',
    image: '/placeholder.svg',
    description: 'Modern hotel in the heart of Pasadena, walking distance to shops and restaurants.',
    link: 'https://www.hyatt.com/en-US/hotel/california/hyatt-place-pasadena/laczp',
  },
]

export default function PlacesToStay() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-normal text-center mb-16 text-[var(--color-text)]">Places to Stay</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {hotels.map((hotel) => (
            <Card key={hotel.name} className="card">
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={600}
                height={400}
                className="w-full object-cover h-64 rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-normal mb-2 text-[var(--color-text)]">{hotel.name}</h3>
                <p className="text-[var(--color-text-light)] mb-4">{hotel.description}</p>
                <Button asChild variant="outline" className="btn btn-outline">
                  <Link href={hotel.link} target="_blank">
                    Book Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-normal mb-6 text-[var(--color-text)]">Airbnb Options</h2>
          <p className="text-[var(--color-text-light)] mb-8">
            Looking for a more local experience? Check out nearby Airbnb listings.
          </p>
          <Button asChild className="btn btn-primary">
            <Link href="https://www.airbnb.com/s/Pasadena--California" target="_blank">
              View Airbnb Listings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

