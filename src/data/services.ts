export interface TravelService {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  features: string[];
}

export const servicesData: TravelService[] = [
  {
    id: 'tour-packages',
    title: 'Tour Packages',
    shortDesc: 'Curated domestic and international holiday packages tailored to your schedule.',
    description: 'From scenic mountain getaways in Himachal and Kashmir to tropical Maldives and Dubai excursions, explore diverse ready-made and customizable package options.',
    iconName: 'Compass',
    features: ['Curated daily itineraries', 'Flexible travel dates', 'Twin-sharing & family options', 'Local expert guides'],
  },
  {
    id: 'flight-booking',
    title: 'Flight Booking',
    shortDesc: 'End-to-end assistance with domestic & international flight ticketing.',
    description: 'We help you find the best routes, convenient connections, baggage allowances, and group airline ticketing assistance without booking hassles.',
    iconName: 'Plane',
    features: ['Domestic & international routes', 'Baggage guidance', 'Seat selection support', 'Flexible rebooking assistance'],
  },
  {
    id: 'hotel-booking',
    title: 'Hotel & Resort Booking',
    shortDesc: 'Vetted accommodations from boutique villas to 5-star luxury resorts.',
    description: 'Stay in handpicked hotels, heritage havelis, luxury beachfront resorts, and authentic houseboats with verified cleanliness and top ratings.',
    iconName: 'Building2',
    features: ['Verified guest reviews', 'Breakfast inclusions', 'Prime city / scenic locations', 'Transparent billing'],
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    shortDesc: 'Professional guidance for international documentation and visa filing.',
    description: 'Our team guides you step-by-step through required documents, embassy appointments, photo specifications, and form filling for hassle-free travel readiness.',
    iconName: 'FileCheck2',
    features: ['Checklist preparation', 'Embassy appointment guidance', 'Application review', 'Insurance coordination'],
  },
  {
    id: 'transportation',
    title: 'Cabs & Local Transfers',
    shortDesc: 'Reliable private vehicle arrangements, airport transfers and city sightseeing.',
    description: 'Travel comfortably with verified polite chauffeurs, sanitized sedans, SUVs, and tempo travelers with transparent toll and driver allowances included.',
    iconName: 'Car',
    features: ['Private airport pickups & drops', 'Clean sanitized fleet', 'Professional chauffeurs', 'All tolls & permits covered'],
  },
  {
    id: 'custom-itineraries',
    title: 'Customized Itineraries',
    shortDesc: 'Bespoke travel plans handcrafted precisely around your preferences.',
    description: 'Design your dream journey at your own pace. Whether it is a slow cultural retreat, an adrenaline-packed trek, or a multi-country family reunion, we craft it for you.',
    iconName: 'Sparkles',
    features: ['Personalized consultation', 'Flexible pacing & stops', 'Tailored to your budget', 'Dedicated trip coordinator'],
  },
];
