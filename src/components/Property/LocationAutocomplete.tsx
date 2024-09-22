import { ChangeEvent, FC, useState } from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import Input from '../Input';
import { PropertyLocation } from '@/types/property';

type LocationAutocompleteProps = {
  onSelect(location: PropertyLocation): void;
};

const LocationAutocomplete: FC<LocationAutocompleteProps> = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesService({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInputValue(input);
    getPlacePredictions({
      input,
    });
  };

  const onLocationSelect = (
    item: google.maps.places.AutocompletePrediction,
  ) => {
    placesService?.getDetails(
      {
        placeId: item.place_id,
      },
      (details) => {
        if (!details?.formatted_address || !details.geometry?.location) return;
        const lat = details.geometry?.location?.lat();
        const lon = details.geometry?.location?.lng();
        const address = details.formatted_address;
        onSelect({
          lat,
          lon,
          title: address,
        });
        setInputValue(address);
        getPlacePredictions({
          input: '',
        });
      },
    );
  };

  return (
    <div className="relative">
      <Input
        value={inputValue}
        onChange={onInputChange}
        label="Property location"
        placeholder="Enter location of your property"
      />
      <div className="absolute w-full">
        {placePredictions.map((item) => (
          <div
            onClick={() => onLocationSelect(item)}
            key={item.place_id}
            className="px-[16px] py-[8px] [&:not(:last-child)]:border-b border-b-border-light dark:border-b-border-dark bg-bg-light dark:bg-bg-dark hover:bg-primary dark:hover:bg-primary cursor-pointer"
          >
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationAutocomplete;
