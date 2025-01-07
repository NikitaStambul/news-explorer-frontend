import { useContext, useEffect } from "react";
import NewsCardList from "components/NewsCardList/NewsCardList";
import SavedNewsHeader from "components/SavedNewsHeader/SavedNewsHeader";
import { SavedContext } from "contexts/SavedContext/SavedContext";
import LoadingSection from "components/LoadingSection/LoadingSection";

function SavedNews() {
  const { isLoading, savedArticles, fetchArticles } = useContext(SavedContext);

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <SavedNewsHeader />
      <div className="bg-background flex-1">
        {isLoading ? (
          <LoadingSection text="Loading saved articles..." />
        ) : (
          <div className="container py-6 md:py-8 xl:py-15">
            <NewsCardList articles={savedArticles ?? []} page="SAVED" />
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedNews;
