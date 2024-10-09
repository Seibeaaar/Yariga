import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { Search } from '@mui/icons-material';
import { searchProperties } from '@/redux/actions/property';
import { useState, useEffect, ChangeEvent } from 'react';

const PropertySearchbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const searchDelay = setTimeout(() => {
      if (query.trim().length > 0) {
        dispatch(
          searchProperties({
            query,
          }),
        );
      }
    }, 500);

    return () => clearTimeout(searchDelay);
  }, [query, dispatch]);

  const onSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const focus = () => setFocused(true);
  const blur = () => setFocused(false);

  return (
    <>
      <div
        onFocus={focus}
        onBlur={blur}
        className={`min-w-[450px] text-secondary-light dark:text-secondary-dark cursor-pointer bg-bg-light dark:bg-bg-dark rounded-[10px] p-[8px] flex items-center gap-[8px] border ${!focused ? 'border-bg-light dark:border-bg-dark' : 'border-primary'}`}
      >
        <Search color="inherit" />
        <input
          className="flex-grow border-none bg-transparent outline-none"
          onChange={onSearchInput}
          value={query}
        />
      </div>
    </>
  );
};

export default PropertySearchbar;
