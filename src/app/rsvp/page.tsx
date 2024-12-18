'use client'

import { useState } from 'react'
import { Navigation } from '@/components/nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

export default function RSVP() {
  const [found, setFound] = useState<boolean | null>(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate guest lookup
    setSearched(true)
    setFound(Math.random() > 0.5) // Random true/false for demo
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-normal text-center mb-12 text-[var(--color-text)]">RSVP</h1>
        
        <form onSubmit={handleSearch} className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[var(--color-text)]">First Name</Label>
              <Input id="firstName" required className="input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[var(--color-text)]">Last Name</Label>
              <Input id="lastName" required className="input" />
            </div>
          </div>

          {searched && (
            found ? (
              <div className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[var(--color-text)]">Email</Label>
                  <Input id="email" type="email" required className="input" />
                </div>

                <div className="space-y-2">
                  <Label className="text-[var(--color-text)]">Will you be attending?</Label>
                  <RadioGroup defaultValue="yes">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="text-[var(--color-text-light)]">Joyfully Accept</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-[var(--color-text-light)]">Regretfully Decline</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies" className="text-[var(--color-text)]">Food Allergies or Dietary Restrictions</Label>
                  <Textarea id="allergies" className="input" />
                </div>

                <Button type="submit" className="w-full btn btn-primary">
                  Submit RSVP
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-[var(--color-error)]">
                  We couldn't find your invitation. Please contact the bride or groom.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearched(false)
                    setFound(null)
                  }}
                  className="btn btn-outline"
                >
                  Try Again
                </Button>
              </div>
            )
          )}

          {!searched && (
            <Button type="submit" className="w-full btn btn-primary">
              Find Invitation
            </Button>
          )}
        </form>
      </div>
    </div>
  )
}

