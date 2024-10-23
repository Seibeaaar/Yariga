import { Property } from '@/types/property';

export const formatPropertyPrice = (price: number) => {
  return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPropertyURL = (property: Property) => {
  return `/properties/${property.title.toLowerCase().replaceAll(' ', '_')}-${property._id}`;
};

export const extractPropertyIdFromURL = (url: string) => {
  const slugWithId = url.replace('/properties/', '');
  const lastDashIndex = slugWithId.lastIndexOf('-');
  const propertyId = slugWithId.substring(lastDashIndex + 1);

  return propertyId;
};
