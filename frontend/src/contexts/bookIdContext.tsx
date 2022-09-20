import { createContext, useContext } from "react";

export type BookIdContent = {
  book_id: number;
  setBookId: (c: number) => void;
};

export const bookIDContext = createContext<BookIdContent>({
  book_id: 1,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setBookId: () => {},
});

export const useBookIdContext = () => useContext(bookIDContext);
