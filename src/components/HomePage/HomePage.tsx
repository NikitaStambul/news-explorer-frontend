import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";

function HomePage() {
  return (
    <>
      <div className="relative h-dvh lg:h-auto dark flex flex-col">
        <div className="absolute inset-0 bg-[url('/bg.jpeg')] bg-cover bg-center brightness-50 -z-10"></div>
        <Header />
        <SearchForm />
      </div>
      <Main />
    </>
  );
}

export default HomePage;
