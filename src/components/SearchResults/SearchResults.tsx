import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults() {
  return (
    <div className="bg-background">
      <div className="container py-8 md:py-10 xl:py-20 flex flex-col gap-5 md:gap-8 xl:gap-16 items-center">
        <h3 className="font-robotoSlab font-normal text-[30px] leading-[34px] text-start w-full">
          Search results
        </h3>
        <NewsCardList />
        <button className="text-lg leading-6 p-4 bg-white text-current rounded-full w-full md:w-60 xl:w-72 hover:bg-button-secondary-hover transition-colors duration-300">
          Show more
        </button>
      </div>
    </div>
  );
}

export default SearchResults;
