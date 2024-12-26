import { useContext } from "react";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";
import { SearchContext } from "#/contexts/SearchContext/SearchContext";
import LoadingSection from "#/LoadingSection/LoadingSection";
import NotFoundSection from "../NotFoundSection/NotFoundSection";

function Main() {
  const { articles, error, isLoading } = useContext(SearchContext);

  return (
    <div className="flex-1">
      {articles && articles.length > 0 && !error && !isLoading && (
        <SearchResults articles={articles} />
      )}
      {isLoading && <LoadingSection />}
      {!isLoading && articles && articles.length == 0 && <NotFoundSection />}
      <About />
    </div>
  );
}

export default Main;
