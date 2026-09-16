export interface ExperienceCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  destinations: string;
}

export const experiencesData: ExperienceCategory[] = [
  {
    id: 'beach',
    title: 'Beach Holidays',
    subtitle: 'Sun-drenched shores & turquoise lagoons',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    destinations: 'Andaman · Maldives · Bali · Goa',
  },
  {
    id: 'mountain',
    title: 'Mountain Escapes',
    subtitle: 'Crisp pine air, snow peaks & misty valleys',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    destinations: 'Himachal · Kashmir · Uttarakhand · Swiss Alps',
  },
  {
    id: 'city',
    title: 'City Breaks',
    subtitle: 'Modern skylines, luxury shopping & nightlife',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    destinations: 'Dubai · Singapore · Bangkok · Paris',
  },
  {
    id: 'cultural',
    title: 'Cultural Tours',
    subtitle: 'Centuries of heritage, grand temples & palaces',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
    destinations: 'Rajasthan · Odisha · Varanasi · Rome',
  },
  {
    id: 'adventure',
    title: 'Adventure Trips',
    subtitle: 'Trekking trails, river rapids & dune bashing',
    image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1200&q=80',
    destinations: 'Solang Snow · Kedarnath Trek · Bali Rafting',
  },
  {
    id: 'luxury',
    title: 'Luxury Holidays',
    subtitle: 'Private pool villas & personalized concierge',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    destinations: 'Dubai Palm · Maldives Villas · Udaipur Palaces',
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon Escapes',
    subtitle: 'Romantic getaways handcrafted for two',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80',
    destinations: 'Kashmir · Munnar · Havelock · Switzerland',
  },
  {
    id: 'spiritual',
    title: 'Sacred Pilgrimages',
    subtitle: 'Spiritual tranquility & sacred shrine yatras',
    image: 'https://images.pexels.com/photos/16152405/pexels-photo-16152405.jpeg',
    destinations: 'Char Dham · Haridwar · Puri Jagannath · Varanasi',
  },
];
