import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectSearchMode,
  selectSearchQuery,
} from '@/redux/selectors/property/search';
import { AppDispatch } from '@/redux';
import { Search } from '@mui/icons-material';
import { getAllProperties, searchProperties } from '@/redux/actions/property';
import { useState, useEffect, ChangeEvent } from 'react';

const PropertySearchbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector(selectSearchQuery);
  const mode = useSelector(selectSearchMode);
  const [query, setQuery] = useState(searchQuery);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const searchDelay = setTimeout(() => {
      if (query.trim().length > 0) {
        dispatch(
          searchProperties({
            query,
          }),
        );
      } else if (mode === 'search') {
        dispatch(getAllProperties());
      }
    }, 500);

    return () => clearTimeout(searchDelay);
  }, [query, dispatch, mode]);

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
