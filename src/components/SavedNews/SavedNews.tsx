import { useContext } from "react";
import NewsCardList from "components/NewsCardList/NewsCardList";
import SavedNewsHeader from "components/SavedNewsHeader/SavedNewsHeader";
import LoadingSection from "components/LoadingSection/LoadingSection";
import { UserContext } from "contexts/UserContext/UserContext";

function SavedNews() {
  const {
    userInfo: { user, userIsLoading },
  } = useContext(UserContext);

  return (
    <div className="flex-1 flex flex-col">
      <SavedNewsHeader />
      <div className="bg-background flex-1">
        {userIsLoading ? (
          <LoadingSection text="Loading saved articles..." />
        ) : (
          <div className="container py-6 md:py-8 xl:py-15">
            <NewsCardList articles={user?.bookmarked ?? []} page="SAVED" />
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedNews;
