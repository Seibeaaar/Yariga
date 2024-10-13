import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import Widget from '@/components/Widget';
import PropertySearchActionItem from '@/components/PropertySearch/ActionItem';
import PropertySearchbar from '@/components/PropertySearch/Searchbar';
import PropertiesSearchList from '@/components/PropertySearch/PropertyList';
import PropertyFiltersModal from '@/components/PropertyFiltersModal';
import { filterProperties } from '@/redux/actions/property';
import { PropertyFilters } from '@/types/property';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux';
import {
  selectSearchFilterSuccess,
  selectSearchFilters,
} from '@/redux/selectors/property/search';

const PropertySearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const setupPropertyFilters = (filters: PropertyFilters) =>
    dispatch(
      filterProperties({
        filters,
      }),
    );
  const filterSuccess = useSelector(selectSearchFilterSuccess);
  const appliedFilters = useSelector(selectSearchFilters);

  return (
    <AuthedScreenContainer
      title="Property list"
      actionItem={<PropertySearchActionItem />}
    >
      <Widget>
        <div className="flex items-center justify-between">
          <PropertySearchbar />
          <PropertyFiltersModal
            submitSuccess={filterSuccess}
            submitText="Apply filters"
            defaultValues={appliedFilters}
            buttonText="Filters"
            onSubmit={setupPropertyFilters}
          />
        </div>
        <PropertiesSearchList />
      </Widget>
    </AuthedScreenContainer>
  );
};

export default PropertySearchPage;
