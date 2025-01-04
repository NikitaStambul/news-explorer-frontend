import { useState } from "react";
import { SavedContext } from "./SavedContext";
import { SavedArticle } from "types/savedArticle";
import articlesApi from "utils/articlesApi";

interface SavedContextState {
  savedArticles: SavedArticle[] | null;
  isLoading: boolean;
  error: Error | null;
}

const SavedContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<SavedContextState>({
    savedArticles: null,
    isLoading: false,
    error: null,
  });

  const fetchArticles = async () => {
    setState((state) => ({ ...state, isLoading: true }));

    try {
      const articles = await articlesApi.getArticles();
      setState((state) => ({ ...state, savedArticles: articles }));
    } catch (err: unknown) {
      const error =
        err instanceof Error ? err : new Error("An unknown error occurred");
      setState((state) => ({ ...state, error }));
    } finally {
      setState((state) => ({ ...state, isLoading: false }));
    }
  };

  return (
    <SavedContext.Provider
      value={{
        savedArticles: state.savedArticles,
        isLoading: state.isLoading,
        error: state.error,
        fetchArticles,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export default SavedContextProvider;
