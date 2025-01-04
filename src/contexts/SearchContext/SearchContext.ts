import { Article } from "types/newsapi";
import { createContext } from "react";

interface SearchContextValue {
  articles: Article[] | null;
  isLoading: boolean;
  error: Error | null;
  searchByQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextValue>({
  articles: null,
  searchByQuery: () => {},
  error: null,
  isLoading: false,
});
