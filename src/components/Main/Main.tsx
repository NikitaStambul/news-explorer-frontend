import { useContext } from "react";
import About from "components/About/About";
import SearchResults from "components/SearchResults/SearchResults";
import { SearchContext } from "contexts/SearchContext/SearchContext";
import LoadingSection from "components/LoadingSection/LoadingSection";
import NotFoundSection from "components/NotFoundSection/NotFoundSection";

function Main() {
  const { articles, error, isLoading } = useContext(SearchContext);

  return (
    <main className="flex-1">
      {articles && articles.length > 0 && !error && !isLoading && (
        <SearchResults articles={articles} />
      )}
      {isLoading && <LoadingSection text="Searching for news..." />}
      {!isLoading && articles && articles.length == 0 && <NotFoundSection />}
      <About />
    </main>
  );
}

export default Main;
