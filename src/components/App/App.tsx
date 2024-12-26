import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Main from "../Main/Main";
import ModalsRenderer from "../ModalsRenderer/ModalsRenderer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useContext } from "react";
import { UserContext } from "#/contexts/UserContext/UserContext";

function App() {
  const { user, userIsLoading } = useContext(UserContext);

  return (
    <div className="flex flex-col min-h-dvh">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="relative h-dvh lg:h-auto dark flex flex-col">
                <div className="absolute inset-0 bg-[url('/bg.jpeg')] bg-cover bg-center brightness-50 -z-10"></div>
                <Header />
                <SearchForm />
              </div>
              <Main />
            </>
          }
        />
        {!userIsLoading && (
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={!!user}>
                <Header />
                <SavedNews />
              </ProtectedRoute>
            }
          />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <ModalsRenderer />
    </div>
  );
}

export default App;
