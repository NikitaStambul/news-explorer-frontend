import { Article } from "#/types/newsapi";
import NewsCard from "../NewsCard/NewsCard";

interface NewsCardListProps {
  articles: Article[];
  page: "SEARCH" | "SAVED";
}

function NewsCardList({ articles, page }: NewsCardListProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(224px,_1fr))] xl:grid-cols-[repeat(3,_minmax(224px,_1fr))] gap-4 w-full">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} page={page} />
      ))}
    </ul>
  );
}

export default NewsCardList;
