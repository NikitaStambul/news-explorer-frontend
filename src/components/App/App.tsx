import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import ModalsRenderer from "../ModalsRenderer/ModalsRenderer";
import { useContext } from "react";
import { UserContext } from "#/contexts/UserContext/UserContext";
import HomePage from "../HomePage/HomePage";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";

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
