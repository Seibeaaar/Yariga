import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const PropertySearchActionItem = () => {
  const navigate = useNavigate();

  const goToAddProperty = () => navigate('/add-property');

  return (
    <Button
      onClick={goToAddProperty}
      className="max-w-[140px] py-[8px] font-light gap-[8px]"
      leftIcon={<p className="text-2xl font-light">+</p>}
      text="Add property"
    />
  );
};

export default PropertySearchActionItem;
