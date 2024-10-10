import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import Widget from '@/components/Widget';
import PropertySearchActionItem from '@/components/PropertySearch/ActionItem';
import PropertySearchbar from '@/components/PropertySearch/Searchbar';
import PropertiesSearchList from '@/components/PropertySearch/PropertyList';

const PropertySearchPage = () => {
  return (
    <AuthedScreenContainer
      title="Property list"
      actionItem={<PropertySearchActionItem />}
    >
      <Widget>
        <div className="flex items-center justify-between">
          <PropertySearchbar />
        </div>
        <PropertiesSearchList />
      </Widget>
    </AuthedScreenContainer>
  );
};

export default PropertySearchPage;
