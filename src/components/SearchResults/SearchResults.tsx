import { Article } from "types/newsapi";
import { useState } from "react";
import NewsCardList from "components/NewsCardList/NewsCardList";

interface SearchResultsProps {
  articles: Article[];
}

function SearchResults({ articles }: SearchResultsProps) {
  const [articlesShown, setArticlesShown] = useState(3);

  return (
    <div className="bg-background">
      <div className="container py-8 md:py-10 xl:py-20 flex flex-col gap-5 md:gap-8 xl:gap-16 items-center">
        <h3 className="font-robotoSlab font-normal text-[30px] leading-[34px] text-start w-full">
          Search results
        </h3>
        <NewsCardList
          articles={articles.slice(0, articlesShown)}
          page="SEARCH"
        />
        {articlesShown < articles.length && (
          <button
            onClick={() => setArticlesShown((count) => count + 3)}
            className="text-lg leading-6 p-4 bg-white text-current rounded-full w-full md:w-60 xl:w-72 hover:bg-button-secondary-hover transition-colors duration-300"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
