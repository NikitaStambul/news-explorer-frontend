import { useCallback, useState } from "react";
import { SearchContext } from "./SearchContext";
import { Article } from "types/newsapi";
import newsApi from "utils/newsApi";

interface SearchContextState {
  articles: Article[] | null;
  isLoading: boolean;
  error: Error | null;
}

const SearchContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<SearchContextState>({
    articles: null,
    isLoading: false,
    error: null,
  });

  const searchByQuery = useCallback(async (query: string) => {
    setState((state) => ({ ...state, isLoading: true }));

    try {
      const articles = await newsApi.getArticles(query);
      setState((state) => ({
        ...state,
        articles: filterArticles(articles),
      }));
    } catch (err: unknown) {
      const error =
        err instanceof Error ? err : new Error("An unknown error occurred");
      setState((state) => ({ ...state, error }));
    } finally {
      setState((state) => ({ ...state, isLoading: false }));
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        articles: state.articles,
        isLoading: state.isLoading,
        error: state.error,
        searchByQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

function filterArticles(articles: Article[]) {
  return articles.filter((article: Article) => {
    const invalidFields = ["[Removed]", null, undefined];

    return (
      !invalidFields.includes(article.title) &&
      !invalidFields.includes(article.description) &&
      !invalidFields.includes(article.content) &&
      !(article.source && invalidFields.includes(article.source.name))
    );
  });
}

export default SearchContextProvider;
