import { Article } from "types/newsapi";
import { createContext } from "react";

interface SearchContextValue {
  articles: Article[] | null;
  query: string;
  setQuery: (query: string) => void
  isLoading: boolean;
  error: Error | null;
  searchByQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextValue>({
  articles: null,
  query: "",
  setQuery: () => {},
  error: null,
  isLoading: false,
  searchByQuery: () => {},
});
