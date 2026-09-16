export interface Testimonial {
  id: number;
  name: string;
  location: string;
  trip: string;
  avatar: string;
  quote: string;
  rating: number;
  date: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & James V.',
    location: 'Delhi NCR',
    trip: 'Andaman Azure Escape',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    quote: 'Explore World Tours made our Andaman trip absolutely seamless. The ferry transfers in Havelock, private cab, and beachfront stay were handled with precision. Highly recommended for couples!',
    rating: 5,
    date: 'February 2026',
  },
  {
    id: 2,
    name: 'Emily & Carter Sharma',
    location: 'Noida, UP',
    trip: 'Kerala 4-Nights Getaway',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote: 'The Munnar tea gardens and the Alleppey houseboat experience exceeded all expectations. We coordinated everything via WhatsApp with their Noida team, and the support was responsive throughout.',
    rating: 5,
    date: 'January 2026',
  },
  {
    id: 3,
    name: 'Michael Brown',
    location: 'Gurugram',
    trip: 'Kashmir Srinagar & Pahalgam',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    quote: 'From the Shikara ride on Dal Lake to the snow views in Gulmarg, the itinerary was well-paced and driver was courteous. Transparent pricing with zero hidden charges.',
    rating: 5,
    date: 'March 2026',
  },
  {
    id: 4,
    name: 'Pooja & Rajesh Verma',
    location: 'Indirapuram, Ghaziabad',
    trip: 'Royal Rajasthan Tour',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    quote: 'Jaipur, Jodhpur and Udaipur in 6 days felt royal and hassle-free. The heritage hotel recommendations and sightseeing routes gave our family memories for a lifetime.',
    rating: 5,
    date: 'January 2026',
  },
];
