import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const secretKey = process.env.REACT_APP_ACCESS_KEY;
const MainBanner = ({ setQuery, query }) => {
  const [banner, setBanner] = useState({});

  const fetchBanner = async () => {
    setBanner({});
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${secretKey}&query=${
        query ? query : "editorial"
      }&orientation=landscape`
    );
    const data = await response.json();
    setBanner(data);
  };
  // useEffect(() => {
  //   fetchBanner();
  // }, [query]);
  return (
    <>
      <div className="main-banner">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={banner?.urls?.small}
          src={banner?.urls?.full}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ position: "absolute" }}
        />

        <div className="center-div">
          <h1>Unsplash</h1>
          <p className="heading">The internet’s source for visuals.</p>
          <p className="heading2">Powered by creators everywhere.</p>
          <div className="search-bar">
            <div className="img-wrapper">
              <svg
                width="20"
                height="20"
                className="search-svg"
                viewBox="0 0 24 24"
                version="1.1"
                aria-hidden="false"
              >
                <desc lang="en-US">A magnifying glass</desc>
                <path d="M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z"></path>
              </svg>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQuery(e.target[0].value);
              }}
            >
              <input type="text" placeholder="Search High-Resolution Images" />
            </form>
            <div className="img-wrapper">
              <svg
                width="20"
                height="20"
                className="google-lens"
                viewBox="0 0 24 24"
                version="1.1"
                aria-hidden="false"
              >
                <desc lang="en-US">Visual search</desc>
                <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4ZM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5Zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2Zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4ZM12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="main-banner-footer">
          <div>
            <span>Photo</span> by <span>{banner?.user?.username}</span>
          </div>
          <div className="license">
            Read more about the <span>Unsplash License</span>
          </div>
        </div>
      </div>

      {/* dynamic name put here */}
    </>
  );
};

export default MainBanner;
