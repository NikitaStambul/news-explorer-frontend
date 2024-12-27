import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews() {
  return (
    <div className="flex-1 flex flex-col">
      <SavedNewsHeader />
      <div className="bg-background flex-1">
        <div className="container py-6 md:py-8 xl:py-15">
          <NewsCardList articles={[]} page="SAVED" />
        </div>
      </div>
    </div>
  );
}

export default SavedNews;
