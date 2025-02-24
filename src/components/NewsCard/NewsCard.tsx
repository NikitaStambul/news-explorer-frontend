import placeholderImg from "assets/placeholder.jpg";
import BookmarkBtn from "components/BookmarkBtn/BookmarkBtn";
import Tooltip from "components/Tooltip/Tooltip";
import { Article } from "types/newsapi";
import { useContext } from "react";
import { UserContext } from "contexts/UserContext/UserContext";
import RemoveBtn from "components/RemoveBtn/RemoveBtn";
import { SearchContext } from "contexts/SearchContext/SearchContext";
import { SavedArticle } from "types/savedArticle";

interface NewsCardProps {
  article: Article | SavedArticle;
  page: "SEARCH" | "SAVED";
}

function NewsCard({ article, page = "SEARCH" }: NewsCardProps) {
  const {
    userInfo: { user },
    removeArticle,
    saveArticle,
  } = useContext(UserContext);
  const { query } = useContext(SearchContext);
  const isBookmarked = Boolean(
    user?.bookmarked.find((savedArticle) => article.url === savedArticle.url)
  );

  const toggleSaveArticle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (isBookmarked) {
      removeArticle(article.url);
    } else {
      saveArticle(article, query);
    }
  };

  const handleRemoveClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    removeArticle(article.url);
  };

  return (
    <a href={article.url} target="_blank">
      <li className="relative flex flex-col rounded-xl overflow-hidden bg-background-light">
        <img
          src={article.urlToImage || placeholderImg}
          alt="Article image"
          className="h-48 md:h-64 object-cover"
        />
        <div className="flex flex-col p-4 xl:p-6">
          <p className="text-lg font-inter text-text-muted leading-6 line-clamp-1 mb-3">
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h3 className="font-robotoSlab text-2xl line-clamp-2 h-16 mb-4">
            {article.title}
          </h3>
          <p className="leading-[22px] line-clamp-5 h-[110px] mb-5">
            {article.description}
          </p>
          <p className="text-text-muted uppercase line-clamp-1">
            {article.author && `${article.author}, `}
            {article.source.name}
          </p>
        </div>
        {"keyword" in article && (
          <span className="absolute top-4 left-4 flex items-center z-10 px-5 text-xs font-medium bg-background rounded-lg shadow-md h-10 w-max">
            {article.keyword}
          </span>
        )}
        {page == "SEARCH" && (
          <Tooltip
            className="absolute top-4 right-4"
            content={
              user
                ? isBookmarked
                  ? "Remove from saved"
                  : "Save article"
                : "Sign in to save articles"
            }
          >
            <BookmarkBtn
              disabled={!user}
              onClick={toggleSaveArticle}
              isBookmarked={isBookmarked}
            />
          </Tooltip>
        )}
        {page == "SAVED" && (
          <Tooltip
            className="absolute top-4 right-4"
            content={"Remove article"}
          >
            <RemoveBtn disabled={!user} onClick={handleRemoveClick} />
          </Tooltip>
        )}
      </li>
    </a>
  );
}

export default NewsCard;
