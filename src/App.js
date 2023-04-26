import Navbar from "./Components/Navbar";
import "../src/styles/main.css";
import SubNavBar from "./Components/SubNavBar";
import MainBanner from "./Components/MainBanner";
import { CATEGORIES } from "./helpers/categoryList";
import { useState } from "react";
import HeroSection from "./Components/HeroSection";
import useFetchApi from "./helpers/useFetchApi";

function App() {
  const [imgCategory, setImgCategory] = useState("Editorial");
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, images, hasMore, setImages } = useFetchApi(
    query,
    pageNumber
  );

  console.log(images);

  const handleChange = (e) => {
    setImages([]);
    setPageNumber(1);
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar onChange={handleChange} />
      <SubNavBar CATEGORIES={CATEGORIES} setImgCategory={setImgCategory} />
      <MainBanner imgCategory={imgCategory} />
      <main className="main_outer_container">
        <HeroSection
          images={images}
          loading={loading}
          setPageNumber={setPageNumber}
          hasMore={hasMore}
        />
      </main>
    </>
  );
}

export default App;
