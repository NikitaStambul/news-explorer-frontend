import placeholderImg from "assets/placeholder.jpg";
import BookmarkBtn from "../BookmarkBtn/BookmarkBtn";
import Tooltip from "../Tooltip/Tooltip";
import { Article } from "#/types/newsapi";
import { useContext } from "react";
import { UserContext } from "#/contexts/UserContext/UserContext";
import RemoveBtn from "../RemoveBtn/RemoveBtn";

interface NewsCardProps {
  article: Article;
  page: "SEARCH" | "SAVED";
}

function NewsCard({ article, page = "SEARCH" }: NewsCardProps) {
  const { userInfo } = useContext(UserContext);

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
        {page == "SEARCH" && (
          <Tooltip
            className="absolute top-4 right-4"
            content={
              userInfo.user ? "Save article" : "Sign in to save articles"
            }
          >
            <BookmarkBtn disabled={!userInfo.user} />
          </Tooltip>
        )}
        {page == "SAVED" && (
          <Tooltip
            className="absolute top-4 right-4"
            content={
              userInfo.user ? "Save article" : "Sign in to save articles"
            }
          >
            <RemoveBtn disabled={!userInfo.user} />
          </Tooltip>
        )}
      </li>
    </a>
  );
}

export default NewsCard;
