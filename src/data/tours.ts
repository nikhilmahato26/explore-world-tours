export interface ItineraryDay {
  day: number;
  title: string;
  details: string;
}

export interface TourPackage {
  id: number;
  region: string;
  title: string;
  duration: string;
  places: string;
  location: string;
  travelers: string;
  originalPrice: number;
  price: number;
  image: string;
  gallery?: string[];
  rating: number;
  reviewsCount: number;
  tag?: string;
  category: string;
  itinerary: ItineraryDay[];
  inclusion: string[];
  exclusion: string[];
  slug: string;
}

export const slugify = (value: string): string =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const baseTours = [
  {
    id: 1,
    region: 'Andaman',
    title: 'Azure Escape: Explore the Best of Andaman',
    duration: '5 Days & 4 Nights',
    places: '2N Port Blair · 2N Havelock',
    location: 'Andaman Islands',
    travelers: '2 Pax',
    originalPrice: 35000,
    price: 16500,
    rating: 4.9,
    reviewsCount: 112,
    tag: 'Bestseller',
    category: 'Island & Beach',
    image: 'https://images.pexels.com/photos/14313849/pexels-photo-14313849.jpeg',
    gallery: [
      'https://images.pexels.com/photos/14313849/pexels-photo-14313849.jpeg',
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Port Blair', details: 'Airport pickup, check-in, evening at Cellular Jail & Light and Sound Show.' },
      { day: 2, title: 'Havelock Island', details: 'Ferry to Havelock, Radhanagar Beach, leisure time.' },
      { day: 3, title: 'Elephant Beach', details: 'Optional water sports, snorkeling, return to hotel.' },
      { day: 4, title: 'Back to Port Blair', details: 'Return ferry, local sightseeing & shopping.' },
      { day: 5, title: 'Departure', details: 'Checkout and drop to airport.' },
    ],
    inclusion: [
      'Accommodation on twin sharing basis',
      'Daily breakfast',
      'All transfers & sightseeing as per itinerary',
      'Private cab for local sightseeing',
    ],
    exclusion: [
      'Airfare / train tickets',
      'Personal expenses & tips',
      'Any meals not mentioned in inclusions',
      'Adventure / water sports charges',
    ],
  },
  {
    id: 2,
    region: 'Himachal Pradesh',
    title: 'Classic Himachal with Chandigarh',
    duration: '6 Days & 5 Nights',
    places: '2N Shimla · 2N Manali · 1N Chandigarh',
    location: 'Himachal Pradesh',
    travelers: '2 Pax',
    originalPrice: 16960,
    price: 7300,
    rating: 4.8,
    reviewsCount: 95,
    tag: 'Popular',
    category: 'Mountain & Hills',
    image: 'https://images.pexels.com/photos/13588958/pexels-photo-13588958.jpeg',
    gallery: [
      'https://images.pexels.com/photos/13588958/pexels-photo-13588958.jpeg',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Chandigarh to Shimla', details: 'Arrival, scenic drive, mall road & local market.' },
      { day: 2, title: 'Shimla Sightseeing', details: 'Kufri excursion, Jakhoo Temple, leisure evening.' },
      { day: 3, title: 'Shimla to Manali', details: 'Drive to Manali, check-in, local cafes.' },
      { day: 4, title: 'Solang / Atal Tunnel', details: 'Snow activities (seasonal), Solang Valley & nearby sights.' },
      { day: 5, title: 'Manali to Chandigarh', details: 'Return drive, evening leisure.' },
      { day: 6, title: 'Departure', details: 'Checkout and departure.' },
    ],
    inclusion: ['Hotel stay', 'Breakfast', 'All transfers', 'Driver allowance & tolls'],
    exclusion: ['Personal expenses', 'Lunch/dinner', 'Entry fees', 'Adventure activities'],
  },
  {
    id: 3,
    region: 'Kashmir',
    title: 'Srinagar & Pahalgam Retreat',
    duration: '6 Days & 5 Nights',
    places: '4N Srinagar · 1N Pahalgam',
    location: 'Kashmir',
    travelers: '2 Pax',
    originalPrice: 17445,
    price: 8000,
    rating: 4.9,
    reviewsCount: 140,
    tag: 'Paradise on Earth',
    category: 'Honeymoon & Nature',
    image: 'https://images.pexels.com/photos/25786551/pexels-photo-25786551.jpeg',
    gallery: [
      'https://images.pexels.com/photos/25786551/pexels-photo-25786551.jpeg',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=1200&q=80',
      'https://images.unsplash.com/photo-1588661757805-47e25283f58e?w=1200&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Srinagar', details: 'Shikara ride, Dal Lake evening.' },
      { day: 2, title: 'Gulmarg Day Trip', details: 'Gondola (optional), sightseeing and return.' },
      { day: 3, title: 'Sonmarg Day Trip', details: 'Meadows, optional pony ride.' },
      { day: 4, title: 'Srinagar to Pahalgam', details: 'En-route saffron fields & temples, check-in.' },
      { day: 5, title: 'Pahalgam Local', details: 'Aru/Betab Valley (optional), riverside walks.' },
      { day: 6, title: 'Departure', details: 'Drop to airport.' },
    ],
    inclusion: ['Accommodation', 'Breakfast', 'Private cab', 'All transfers'],
    exclusion: ['Flights', 'Activities tickets', 'Pony rides', 'Personal expenses'],
  },
  {
    id: 4,
    region: 'Kerala',
    title: '4 Nights Kerala Getaway!',
    duration: '5 Days & 4 Nights',
    places: '2N Munnar · 1N Thekkady · +1 More',
    location: 'Kerala',
    travelers: '2 Pax',
    originalPrice: 30000,
    price: 14000,
    rating: 4.9,
    reviewsCount: 88,
    tag: 'Trending',
    category: 'Nature & Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Cochin', details: 'Pickup, drive to Munnar via waterfalls & tea gardens.' },
      { day: 2, title: 'Munnar Sightseeing', details: 'Tea museum, viewpoints and local markets.' },
      { day: 3, title: 'Munnar to Thekkady', details: 'Check-in, spice plantation visit.' },
      { day: 4, title: 'Alleppey Houseboat', details: 'Backwaters cruise, overnight on houseboat.' },
      { day: 5, title: 'Departure', details: 'Checkout and drop.' },
    ],
    inclusion: ['Hotels + houseboat', 'Breakfast', 'All transfers', 'Sightseeing as per itinerary'],
    exclusion: ['Airfare', 'Lunch/dinner unless specified', 'Entry tickets', 'Personal expenses'],
  },
  {
    id: 5,
    region: 'Rajasthan',
    title: 'Royal Rajasthan: Jaipur · Jodhpur · Udaipur',
    duration: '6 Days & 5 Nights',
    places: '2N Jaipur · 1N Jodhpur · 2N Udaipur',
    location: 'Rajasthan',
    travelers: '2 Pax',
    originalPrice: 24000,
    price: 15500,
    rating: 4.85,
    reviewsCount: 104,
    tag: 'Royal Heritage',
    category: 'Heritage & Culture',
    image: 'https://images.pexels.com/photos/36033417/pexels-photo-36033417.jpeg',
    gallery: [
      'https://images.pexels.com/photos/36033417/pexels-photo-36033417.jpeg',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80',
      'https://images.unsplash.com/photo-1609137144822-26155694a5c6?w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Jaipur', details: 'Pickup, check-in, evening at local markets & city lights.' },
      { day: 2, title: 'Jaipur Sightseeing', details: 'Amber Fort, Hawa Mahal, City Palace and photo stops.' },
      { day: 3, title: 'Jaipur to Jodhpur', details: 'Drive to Jodhpur, check-in, evening at Clock Tower area.' },
      { day: 4, title: 'Jodhpur to Udaipur', details: 'Mehrangarh Fort visit (time permitting), then drive to Udaipur.' },
      { day: 5, title: 'Udaipur Sightseeing', details: 'City Palace, Lake Pichola boat ride (optional), Sajjangarh sunset.' },
      { day: 6, title: 'Departure', details: 'Checkout and drop.' },
    ],
    inclusion: ['Accommodation', 'Breakfast', 'All transfers & sightseeing', 'Driver allowance & tolls'],
    exclusion: ['Train/air tickets', 'Entry fees', 'Boat ride charges', 'Personal expenses'],
  },
  {
    id: 6,
    region: 'Uttarakhand',
    title: 'Kedarnath & Badrinath Yatra',
    duration: '7 Days & 6 Nights',
    places: '2N Haridwar · 2N Kedarnath · 2N Badrinath',
    location: 'Uttarakhand',
    travelers: '2 Pax',
    originalPrice: 22000,
    price: 13000,
    rating: 4.95,
    reviewsCount: 167,
    tag: 'Spiritual Sacred',
    category: 'Pilgrimage & Spiritual',
    image: 'https://images.pexels.com/photos/16152405/pexels-photo-16152405.jpeg',
    gallery: [
      'https://images.pexels.com/photos/16152405/pexels-photo-16152405.jpeg',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Haridwar', details: 'Pickup, hotel check-in, evening Ganga Aarti at Har Ki Pauri.' },
      { day: 2, title: 'Haridwar to Guptkashi', details: 'Drive via Devprayag/Rudraprayag, overnight at Guptkashi.' },
      { day: 3, title: 'Guptkashi to Kedarnath', details: 'Early drive to Sonprayag/Gaurikund, trek to Kedarnath, darshan.' },
      { day: 4, title: 'Kedarnath to Guptkashi', details: 'Morning darshan, trek down, return to Guptkashi.' },
      { day: 5, title: 'Guptkashi to Badrinath', details: 'Drive to Badrinath, en-route scenic valleys, evening aarti.' },
      { day: 6, title: 'Badrinath Sightseeing', details: 'Mana village, Bhim Pul, Vyas Gufa, local sightseeing.' },
      { day: 7, title: 'Departure', details: 'Return journey / drop as per plan.' },
    ],
    inclusion: ['Accommodation', 'Breakfast', 'All transfers', 'Driver allowance & tolls'],
    exclusion: ['Helicopter / pony charges', 'Temple entry fees', 'Personal expenses', 'Any meals not mentioned'],
  },
  {
    id: 7,
    region: 'Bhubaneswar',
    title: 'Odisha Heritage Tour',
    duration: '5 Days & 4 Nights',
    places: '2N Bhubaneswar · 1N Puri · 1N Konark',
    location: 'Bhubaneswar & Puri',
    travelers: '2 Pax',
    originalPrice: 14000,
    price: 8500,
    rating: 4.75,
    reviewsCount: 62,
    tag: 'Heritage Special',
    category: 'Heritage & Culture',
    image: 'https://images.pexels.com/photos/6040171/pexels-photo-6040171.jpeg',
    gallery: [
      'https://images.pexels.com/photos/6040171/pexels-photo-6040171.jpeg',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
      'https://images.unsplash.com/photo-1609137144822-26155694a5c6?w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Bhubaneswar', details: 'Pickup, check-in, local temples and markets.' },
      { day: 2, title: 'Bhubaneswar Sightseeing', details: 'Lingaraj Temple, Udayagiri & Khandagiri caves.' },
      { day: 3, title: 'Bhubaneswar to Puri', details: 'Drive to Puri, Jagannath Temple (as per darshan rules), beach time.' },
      { day: 4, title: 'Konark Excursion', details: 'Sun Temple visit, Chandrabhaga beach, return.' },
      { day: 5, title: 'Departure', details: 'Checkout and drop.' },
    ],
    inclusion: ['Accommodation', 'Breakfast', 'All transfers & sightseeing', 'Driver allowance & tolls'],
    exclusion: ['Train/air tickets', 'Entry fees', 'Personal expenses', 'Any meals not mentioned'],
  },
  {
    id: 8,
    region: 'Uttar Pradesh',
    title: 'Golden Triangle Agra & Varanasi',
    duration: '6 Days & 5 Nights',
    places: '2N Delhi · 2N Agra · 2N Varanasi',
    location: 'Delhi · Agra · Varanasi',
    travelers: '2 Pax',
    originalPrice: 19000,
    price: 11500,
    rating: 4.88,
    reviewsCount: 130,
    tag: 'Classic Route',
    category: 'Heritage & Culture',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
      'https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Delhi', details: 'Airport/railway pickup, local sightseeing (time permitting).' },
      { day: 2, title: 'Delhi Sightseeing', details: 'Red Fort / India Gate / Qutub Minar (as per time).' },
      { day: 3, title: 'Delhi to Agra', details: 'Drive to Agra, Taj Mahal & Agra Fort visits.' },
      { day: 4, title: 'Agra to Varanasi', details: 'Transfer, evening Ganga Aarti (as per schedule).' },
      { day: 5, title: 'Varanasi Local', details: 'Sunrise boat ride (optional), Kashi Vishwanath, local ghats.' },
      { day: 6, title: 'Departure', details: 'Checkout and drop.' },
    ],
    inclusion: ['Accommodation', 'Breakfast', 'All transfers', 'Driver allowance & tolls'],
    exclusion: ['Flights/trains', 'Entry tickets', 'Boat rides', 'Personal expenses'],
  },
];

export const tours: TourPackage[] = baseTours.map((t) => ({
  ...t,
  slug: slugify(t.title),
}));

export const getTourBySlug = (slug: string): TourPackage | undefined =>
  tours.find((t) => t.slug === slug);
