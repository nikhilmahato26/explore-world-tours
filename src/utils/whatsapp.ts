import { BUSINESS_INFO } from '../data/business';

export const createWhatsAppUrl = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
};

export const getGeneralWhatsAppUrl = (): string => {
  return createWhatsAppUrl('Hello Explore World Tours, I would like to enquire about your tour packages.');
};

export const getIndiaTourWhatsAppUrl = (regionName?: string): string => {
  const text = regionName 
    ? `Hello Explore World Tours, I am interested in an India tour to ${regionName}. Please share the available options.`
    : 'Hello Explore World Tours, I am interested in an India tour. Please share the available options.';
  return createWhatsAppUrl(text);
};

export const getInternationalTourWhatsAppUrl = (destinationName?: string): string => {
  const text = destinationName
    ? `Hello Explore World Tours, I am interested in an international tour to ${destinationName}. Please share the available destinations and packages.`
    : 'Hello Explore World Tours, I am interested in an international tour. Please share the available destinations and packages.';
  return createWhatsAppUrl(text);
};

export const getCustomTripWhatsAppUrl = (params?: {
  name?: string;
  destination?: string;
  travelType?: string;
  travelDate?: string;
  travelers?: string;
  travelStyle?: string;
  budget?: string;
  message?: string;
}): string => {
  if (!params || !params.destination) {
    return createWhatsAppUrl('Hello Explore World Tours, I would like to plan a customized trip. Please contact me with the available options.');
  }

  const lines = [
    '✨ *New Custom Trip Enquiry - Explore World Tours*',
    params.name ? `👤 *Name:* ${params.name}` : '',
    `📍 *Destination:* ${params.destination}`,
    params.travelType ? `🌍 *Type:* ${params.travelType}` : '',
    params.travelDate ? `📅 *Date:* ${params.travelDate}` : '',
    params.travelers ? `👥 *Travelers:* ${params.travelers}` : '',
    params.travelStyle ? `🎒 *Style:* ${params.travelStyle}` : '',
    params.budget ? `💰 *Budget:* ${params.budget}` : '',
    params.message ? `💬 *Notes:* ${params.message}` : '',
    '',
    'Please contact me with a customized itinerary & quote!',
  ].filter(Boolean);

  return createWhatsAppUrl(lines.join('\n'));
};

export const getPackageBookingWhatsAppUrl = (params: {
  title: string;
  duration: string;
  price: number;
  travelers?: number | string;
  date?: string;
}): string => {
  const lines = [
    `🌴 *Enquiry for: ${params.title}*`,
    `⏱️ *Duration:* ${params.duration}`,
    `💰 *Package Price:* ₹${params.price.toLocaleString('en-IN')}`,
    params.travelers ? `👥 *Travelers:* ${params.travelers}` : '',
    params.date ? `📅 *Preferred Travel Date:* ${params.date}` : '',
    '',
    'Hello Explore World Tours, please share complete package availability and quote for this itinerary.',
  ].filter(Boolean);

  return createWhatsAppUrl(lines.join('\n'));
};
