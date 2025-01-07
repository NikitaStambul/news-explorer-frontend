import { SavedArticle } from "types/savedArticle";
import { createContext } from "react";

interface SavedContextValue {
  savedArticles: SavedArticle[] | null;
  isLoading: boolean;
  error: Error | null;
  fetchArticles: () => Promise<void>;
}

export const SavedContext = createContext<SavedContextValue>({
  savedArticles: null,
  error: null,
  isLoading: false,
  fetchArticles: async () => {},
});
