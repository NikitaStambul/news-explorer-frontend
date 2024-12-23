import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

function Main() {
  return (
    <div className="flex-1">
      <SearchResults />
      <About />
    </div>
  );
}

export default Main;
