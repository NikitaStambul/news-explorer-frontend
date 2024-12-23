import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews() {
  return (
    <div className="">
      <SavedNewsHeader />
      <div className="bg-background">
        <div className="container py-6 md:py-8 xl:py-15">
          <NewsCardList />
        </div>
      </div>
    </div>
  );
}

export default SavedNews;
