import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "contexts/UserContext/UserContext";
import Footer from "components/Footer/Footer";
import ModalsRenderer from "components/ModalsRenderer/ModalsRenderer";
import HomePage from "components/HomePage/HomePage";
import SavedNewsPage from "components/SavedNewsPage/SavedNewsPage";

function App() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="flex flex-col min-h-dvh">
      {!userInfo.userIsLoading && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/saved-news" element={<SavedNewsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      <Footer />
      <ModalsRenderer />
    </div>
  );
}

export default App;
