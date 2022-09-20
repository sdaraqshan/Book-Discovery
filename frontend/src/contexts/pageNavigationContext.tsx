import { createContext, useContext } from "react";

export type PageNavigationContent = {
  is_navigated: boolean;
  setPageNavigation: (c: boolean) => void;
};

export const PageNavigationContext = createContext<PageNavigationContent>({
  is_navigated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPageNavigation: () => {},
});

export const usePageNavigationContext = () => useContext(PageNavigationContext);
