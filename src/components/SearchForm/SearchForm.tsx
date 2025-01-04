import { SearchContext } from "contexts/SearchContext/SearchContext";
import { useContext, useState } from "react";

function SearchForm() {
  const [query, setQuery] = useState("");
  const { searchByQuery } = useContext(SearchContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchByQuery(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex flex-1 justify-center text-text-contrast py-8 md:py-10 xl:py-20 "
    >
      <div className="flex flex-col justify-between flex-1 md:max-w-[440px] xl:max-w-[680px] gap-12 xl:gap-20">
        <div className="flex flex-col gap-4 xl:gap-8">
          <h3 className="font-robotoSlab text-4xl xl:text-6xl">
            What's going on in the world?
          </h3>
          <p className="text-lg leading-6">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <div className="relative flex flex-col gap-4">
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="gap-4 md:flex-row py-4 px-4 lg:px-6 xl:py-5 md:pr-44 xl:pr-[200px] rounded-full text-text"
            placeholder="Enter keywords"
          />
          <button
            type="submit"
            className="bg-button hover:bg-button-hover transition-colors duration-300 text-lg leading-6 py-4 px-4 lg:px-6 xl:py-5 md:w-40 xl:w-44 rounded-full md:right-0 md:absolute shadow-submit"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
