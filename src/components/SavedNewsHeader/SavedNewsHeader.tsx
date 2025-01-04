import { SavedContext } from "contexts/SavedContext/SavedContext";
import { UserContext } from "contexts/UserContext/UserContext";
import { SavedArticle } from "types/savedArticle";
import { useContext } from "react";

function SavedNewsHeader() {
  const { userInfo } = useContext(UserContext);
  const { savedArticles, isLoading } = useContext(SavedContext);

  return (
    <div className="container flex flex-col gap-4 xl:gap-8 py-2 md:py-6 xl:py-10">
      <p className="text-sm leading-6 opacity-50">Saved articles</p>
      {savedArticles && !isLoading && (
        <>
          <h2 className="font-robotoSlab text-3xl max-w-[336px]">
            {userInfo.user?.name}, you have {savedArticles?.length} saved
            articles
          </h2>
          <p className="text-lg leading-6">
            {savedArticles.length ? (
              <>
                By keywords:
                <span className="font-bold">
                  {generateKeywordString(savedArticles)}
                </span>
              </>
            ) : (
              "You haven't saved any articles yet"
            )}
          </p>
        </>
      )}
    </div>
  );
}

function generateKeywordString(articles: SavedArticle[]): string {
  const uniqueKeywords = Array.from(
    new Set(articles.map((article) => article.keyword.toLowerCase()))
  ).map((keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1));

  if (uniqueKeywords.length === 0) {
    return "You still not have saved articles";
  }

  if (uniqueKeywords.length <= 3) {
    return ` ${uniqueKeywords.join(", ")}`;
  }

  const [first, second, ...rest] = uniqueKeywords;
  return ` ${first}, ${second}, and ${rest.length} other${
    rest.length > 1 ? "s" : ""
  }`;
}

export default SavedNewsHeader;