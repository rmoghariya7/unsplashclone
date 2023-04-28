import Navbar from "./Components/Navbar";
import "../src/styles/main.css";
import SubNavBar from "./Components/SubNavBar";
import MainBanner from "./Components/MainBanner";
import { CATEGORIES } from "./helpers/categoryList";
import { useEffect, useRef, useState } from "react";
import HeroSection from "./Components/HeroSection";
import useFetchApi from "./helpers/useFetchApi";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import SearchFeed from "./Components/SearchFeed";

function App() {
  const [imgCategory, setImgCategory] = useState("Editorial");
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, images, hasMore, setImages, banner } = useFetchApi(
    query,
    pageNumber
  );

  const [isClick, setIsClick] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setIsClick(true);
    setImages([]);
    setPageNumber(1);
    setQuery(e);
    navigate(`/${e}`);
  };

  return (
    <>
      <Navbar onChange={handleChange} />
      <SubNavBar
        CATEGORIES={CATEGORIES}
        setQuery={setQuery}
        setImgCategory={setImgCategory}
        setPageNumber={setPageNumber}
        setImages={setImages}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner setQuery={setQuery} banner={banner} query={query} />
              <main className="main_outer_container">
                <HeroSection
                  images={images}
                  loading={loading}
                  setPageNumber={setPageNumber}
                  hasMore={hasMore}
                />
              </main>
            </>
          }
        />
        <Route
          path="/:query"
          element={
            <SearchFeed
              query={query}
              isClick={isClick}
              setIsClick={setIsClick}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
