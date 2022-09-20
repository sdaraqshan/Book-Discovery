import { createContext, useContext } from "react";

export type SearchContent = {
  search_value: string;
  setSearchValue: (c: string) => void;
};

export const SearchContext = createContext<SearchContent>({
  search_value: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchValue: () => {},
});

export const useSearchContext = () => useContext(SearchContext);
