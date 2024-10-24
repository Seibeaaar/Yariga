import { FC } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { PropertyLocation } from '@/types/property';

type PropertyLocationMapProps = {
  location: PropertyLocation;
};

const PropertyLocationMap: FC<PropertyLocationMapProps> = ({ location }) => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        defaultCenter={{ lat: location.lat, lng: location.lon }}
        style={{
          width: '100%',
          height: '300px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
        defaultZoom={3}
      >
        <Marker position={{ lat: location.lat, lng: location.lon }} />
      </Map>
    </APIProvider>
  );
};

export default PropertyLocationMap;
