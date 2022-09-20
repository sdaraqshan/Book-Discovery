import { createContext, useContext } from "react";

export type PageStateContent = {
  page_state: string;
  setPageState: (c: string) => void;
};

export const PageStateContext = createContext<PageStateContent>({
  page_state: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPageState: () => {},
});

export const usePageStateContext = () => useContext(PageStateContext);
