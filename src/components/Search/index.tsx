/// <reference types="vite-plugin-svgr/client" />
import { ChangeEvent, useState } from "react";
import SearchIcon from "@/assets/icons/Search.svg?react";
import useWindowDimensions from "@/customization/useWindowDimensions";
import { CloseOutlined } from "@mui/icons-material";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const onSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  if (width <= 768) {
    if (isSearchOpen) {
      return (
        <div className="fixed top-0 left-0 h-screen w-screen z-[1000] flex flex-col">
          <div className="bg-white dark:bg-bg-black text-primary-light dark:text-primary-dark h-[70px] p-[23px] flex items-center gap-[12px] w-full">
            <CloseOutlined color="inherit" onClick={toggleSearch} />
            <div className="rounded-[8px] p-[10px] flex items-center gap-[10px] dark:bg-bg-black bg-bg-light flex-grow">
              <SearchIcon />
              <input
                onChange={onSearchInput}
                value={searchText}
                placeholder="Search Property, Customer etc"
                className="outline-none dark:text-primary-dark text-primary-light border-none flex-grow bg-transparent text-xs"
              />
            </div>
          </div>
          <div className="flex-grow w-full bg-white opacity-90" />
        </div>
      );
    }
    return (
      <div className="flex items-center gap-[14px]">
        <SearchIcon onClick={toggleSearch} />
      </div>
    );
  }

  return (
    <div className="rounded-[8px] p-[10px] flex items-center gap-[10px] dark:bg-black bg-bg-light">
      <SearchIcon />
      <input
        onChange={onSearchInput}
        value={searchText}
        placeholder="Search Property, Customer etc"
        className="outline-none border-none dark:text-primary-dark text-primary-light flex-grow bg-transparent text-xs min-w-[400px]"
      />
    </div>
  );
};

export default SearchBar;
