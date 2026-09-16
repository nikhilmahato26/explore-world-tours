export interface TourCategory {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  count: string;
}

export const tourCategories: TourCategory[] = [
  {
    id: 'family',
    title: 'Family Holidays',
    description: 'Comfortable, kid-friendly itineraries with relaxed pacing and convenient stays.',
    tag: 'All Ages',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80',
    count: '24+ Destinations',
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon Trips',
    description: 'Romantic getaways, candlelight beach dinners, private pool villas and scenic vistas.',
    tag: 'Couples Special',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80',
    count: '18+ Romantic Spots',
  },
  {
    id: 'group',
    title: 'Group Tours',
    description: 'Unforgettable journeys with friends, clubs, or extended families with dedicated group discounts.',
    tag: 'Social & Fun',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80',
    count: 'Special Group Rates',
  },
  {
    id: 'adventure',
    title: 'Adventure Tours',
    description: 'Trekking Himalayan passes, scuba diving coral reefs, desert safaris and river rafting.',
    tag: 'Thrill Seekers',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    count: '15+ Adventure Hubs',
  },
  {
    id: 'luxury',
    title: 'Luxury Holidays',
    description: 'Top-tier 5-star suites, private chauffeurs, exclusive yacht cruises and VIP concierge service.',
    tag: 'Premium Elite',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    count: 'Bespoke Curations',
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    description: 'Conferences, MICE tours, offsite team retreats and seamless business logistics.',
    tag: 'Business & Offsite',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
    count: 'Corporate Invoicing',
  },
  {
    id: 'custom',
    title: 'Custom Tours',
    description: 'Create a tailored itinerary shaped around your dream places, dates and preferred budget.',
    tag: '100% Flexible',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
    count: 'Any Destination',
  },
];
