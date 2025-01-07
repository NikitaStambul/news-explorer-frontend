import NewsCard from "components/NewsCard/NewsCard";
import { Article } from "types/newsapi";

interface NewsCardListProps {
  articles: Article[];
  page: "SEARCH" | "SAVED";
}

function NewsCardList({ articles, page }: NewsCardListProps) {
  return articles.length == 0 ? (
    <p className="font-robotoSlab text-2xl">Save articles to see it here</p>
  ) : (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(224px,_1fr))] xl:grid-cols-[repeat(3,_minmax(224px,_1fr))] gap-4 w-full">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} page={page} />
      ))}
    </ul>
  );
}

export default NewsCardList;
