import { useSelector } from 'react-redux';
import { SearchOff } from '@mui/icons-material';
import { selectResults } from '@/redux/selectors/property/search';
import Pagination from '@/components/Pagination';
import PropertySearchItem from './Item';

const PropertiesSearchList = () => {
  const { results, total, page, pages } = useSelector(selectResults);

  const renderContent = () => {
    if (results.length === 0) {
      return (
        <div className="flex min-h-[250px] flex-col gap-[16px] items-center justify-center text-secondary-light dark:text-secondary-dark">
          <SearchOff
            color="inherit"
            sx={{
              width: 96,
              height: 96,
            }}
          />
          <h4 className="text-2xl">No properties found</h4>
        </div>
      );
    }

    return (
      <div className="flex items-center flex-wrap mt-[24px]">
        {results.map((property) => (
          <PropertySearchItem key={property.id} property={property} />
        ))}
      </div>
    );
  };

  return (
    <>
      {renderContent()}
      <Pagination
        onChange={() => {}}
        total={total}
        pages={pages}
        activePage={page}
      />
    </>
  );
};

export default PropertiesSearchList;
