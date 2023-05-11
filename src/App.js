import Navbar from './Components/Navbar';
import '../src/styles/main.css';
import SubNavBar from './Components/SubNavBar';
import MainBanner from './Components/MainBanner';
import { CATEGORIES } from './helpers/categoryList';
import { useState } from 'react';
import HeroSection from './Components/HeroSection';
import useFetchApi from './helpers/useFetchApi';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SearchFeed from './Components/SearchFeed';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [ID, setID] = useState('');
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

  const getimgID = (id) => {
    setID(id);
  };

  return (
    <>
      <Navbar onChange={handleChange} />
      <SubNavBar
        CATEGORIES={CATEGORIES}
        setQuery={setQuery}
        setPageNumber={setPageNumber}
        setImages={setImages}
      />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <MainBanner
                onChange={handleChange}
                banner={banner}
                query={query}
              />
              <main className='main_outer_container'>
                <HeroSection
                  images={images}
                  loading={loading}
                  setPageNumber={setPageNumber}
                  hasMore={hasMore}
                  getimgID={getimgID}
                  ID={ID}
                />
              </main>
            </>
          }
        />
        <Route
          path='/:query'
          element={
            <SearchFeed
              query={query}
              isClick={isClick}
              setIsClick={setIsClick}
              ID={ID}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
