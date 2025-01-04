import { useContext } from "react";
import Header from "components/Header/Header";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import SavedNews from "components/SavedNews/SavedNews";
import { UserContext } from "contexts/UserContext/UserContext";

function SavedNewsPage() {
  const { userInfo } = useContext(UserContext);

  return (
    <ProtectedRoute isLoggedIn={!!userInfo.user}>
      <Header />
      <SavedNews />
    </ProtectedRoute>
  );
}

export default SavedNewsPage;
