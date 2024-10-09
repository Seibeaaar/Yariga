import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import Widget from '@/components/Widget';
import PropertySearchActionItem from '@/components/PropertySearch/ActionItem';

const PropertySearchPage = () => {
  return (
    <AuthedScreenContainer
      title="Property list"
      actionItem={<PropertySearchActionItem />}
    >
      <Widget>
        <h1>Hello</h1>
        {/* Header: search bar and filters */}
        {/* Property list */}
        {/* Pagination */}
      </Widget>
    </AuthedScreenContainer>
  );
};

export default PropertySearchPage;
