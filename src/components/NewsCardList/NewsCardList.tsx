import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(224px,_1fr))] xl:grid-cols-[repeat(3,_minmax(224px,_1fr))] gap-4 w-full">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ul>
  );
}

export default NewsCardList;
