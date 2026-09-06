export type Destination = {
  slug: string
  name: string
  country: string
  image: string
  rating: number
  reviews: number
  priceFrom: number
  tag: string
}

export const destinations: Destination[] = [
  {
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    image: '/images/dest-bali.png',
    rating: 4.9,
    reviews: 1280,
    priceFrom: 1240,
    tag: 'Tropical',
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    image: '/images/dest-santorini.png',
    rating: 4.8,
    reviews: 964,
    priceFrom: 1680,
    tag: 'Island',
  },
  {
    slug: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    image: '/images/dest-kyoto.png',
    rating: 4.9,
    reviews: 1520,
    priceFrom: 1990,
    tag: 'Culture',
  },
  {
    slug: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: '/images/dest-alps.png',
    rating: 4.7,
    reviews: 742,
    priceFrom: 2250,
    tag: 'Mountains',
  },
  {
    slug: 'amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    image: '/images/dest-amalfi.png',
    rating: 4.8,
    reviews: 880,
    priceFrom: 1870,
    tag: 'Coastal',
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    image: '/images/dest-tokyo.png',
    rating: 4.9,
    reviews: 2040,
    priceFrom: 2100,
    tag: 'City',
  },
]

export type SavedTrip = {
  id: string
  title: string
  destination: string
  image: string
  startDate: string
  endDate: string
  days: number
  travelers: number
  budget: number
  status: 'upcoming' | 'planning' | 'completed'
}

export const savedTrips: SavedTrip[] = [
  {
    id: 'trip-bali',
    title: 'The Quiet Side of Bali',
    destination: 'Bali, Indonesia',
    image: '/images/dest-bali.png',
    startDate: '14 Feb 2025',
    endDate: '18 Feb 2025',
    days: 5,
    travelers: 2,
    budget: 4876,
    status: 'upcoming',
  },
  {
    id: 'trip-santorini',
    title: 'Sunsets over Santorini',
    destination: 'Santorini, Greece',
    image: '/images/dest-santorini.png',
    startDate: '02 Jun 2025',
    endDate: '08 Jun 2025',
    days: 7,
    travelers: 2,
    budget: 6120,
    status: 'planning',
  },
  {
    id: 'trip-kyoto',
    title: 'Temples & Maples in Kyoto',
    destination: 'Kyoto, Japan',
    image: '/images/dest-kyoto.png',
    startDate: '11 Nov 2024',
    endDate: '17 Nov 2024',
    days: 7,
    travelers: 1,
    budget: 5340,
    status: 'completed',
  },
  {
    id: 'trip-alps',
    title: 'Alpine Escape',
    destination: 'Swiss Alps, Switzerland',
    image: '/images/dest-alps.png',
    startDate: '20 Dec 2025',
    endDate: '26 Dec 2025',
    days: 7,
    travelers: 4,
    budget: 8990,
    status: 'planning',
  },
]

export type ItineraryDay = {
  day: number
  title: string
  location: string
  image: string
  summary: string
  weather: { condition: string; high: number; low: number }
  activities: { time: string; title: string; detail: string }[]
  dayBudget: number
}

export const sampleItinerary = {
  destination: 'Bali, Indonesia',
  headline: 'The Quiet Side of Bali',
  dates: '14 Feb - 18 Feb 2025',
  travelers: 2,
  totalBudget: 4876,
  days: [
    {
      day: 1,
      title: 'Arrival & Coastal Sunset',
      location: 'Uluwatu',
      image: '/images/dest-bali.png',
      summary:
        'Settle into your cliffside villa, unwind on the beach, and catch the first Balinese sunset.',
      weather: { condition: 'Sunny', high: 31, low: 24 },
      dayBudget: 720,
      activities: [
        { time: '14:00', title: 'Villa check-in', detail: 'Private cliff villa in Uluwatu' },
        { time: '17:30', title: 'Sunset at Uluwatu Temple', detail: 'Kecak fire dance performance' },
        { time: '20:00', title: 'Seafood dinner', detail: 'Beachfront grill at Jimbaran Bay' },
      ],
    },
    {
      day: 2,
      title: 'Rice Terraces & Waterfalls',
      location: 'Ubud',
      image: '/images/dest-kyoto.png',
      summary:
        'A full day inland exploring lush jungle, emerald rice terraces, and hidden waterfalls.',
      weather: { condition: 'Partly Cloudy', high: 29, low: 23 },
      dayBudget: 540,
      activities: [
        { time: '08:00', title: 'Tegallalang Rice Terrace', detail: 'Morning walk & coffee tasting' },
        { time: '12:30', title: 'Tibumana Waterfall', detail: 'Swim in a secluded jungle pool' },
        { time: '19:00', title: 'Ubud night market', detail: 'Local street food tour' },
      ],
    },
    {
      day: 3,
      title: 'Island Hopping',
      location: 'Nusa Penida',
      image: '/images/dest-santorini.png',
      summary:
        'Fast boat to Nusa Penida for dramatic cliffs, turquoise coves, and snorkeling.',
      weather: { condition: 'Sunny', high: 32, low: 25 },
      dayBudget: 860,
      activities: [
        { time: '07:00', title: 'Fast boat to Nusa Penida', detail: '45 min crossing' },
        { time: '10:00', title: 'Kelingking Beach', detail: 'Iconic T-Rex cliff viewpoint' },
        { time: '14:00', title: 'Snorkeling with manta rays', detail: 'Crystal Bay reef' },
      ],
    },
  ] as ItineraryDay[],
}

export const travelStyles = [
  'Relaxed',
  'Adventure',
  'Cultural',
  'Luxury',
  'Budget',
  'Family',
]

export const interestOptions = [
  'Beaches',
  'Hiking',
  'Food & Dining',
  'Museums',
  'Nightlife',
  'Shopping',
  'Nature',
  'History',
  'Photography',
  'Wellness',
]
