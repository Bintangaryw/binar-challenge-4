import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailMoviePages from "./pages/DetailMoviePages";
import NavbarComponent from "./components/NavbarComponent";
import SearchResultsPages from "./pages/SearchResultsPages";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:movieId" element={<DetailMoviePages />} />
        <Route path="/search-results" element={<SearchResultsPages />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
