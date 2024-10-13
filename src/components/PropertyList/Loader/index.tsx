import PropertyItemLoader from './ItemLoader';

const PropertyListLoader = () => {
  return (
    <div className="flex items-center flex-wrap gap-[24px] mt-[24px]">
      {Array.from({
        length: 10,
      }).map((_, i) => (
        <PropertyItemLoader key={i} />
      ))}
    </div>
  );
};

export default PropertyListLoader;
