import React, { useEffect, useState } from "react";
import AltImg from "../Assets/alt-back.png";
import { AiOutlineSearch } from "react-icons/ai";
import { SiGooglelens } from "react-icons/si";

const secretKey = process.env.REACT_APP_ACCESS_KEY;
const MainBanner = ({ onChange, query }) => {
  const [banner, setBanner] = useState({});

  const fetchBanner = async (signal) => {
    setBanner(null);
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${secretKey}&query=${
        query ? query : "editorial"
      }&orientation=landscape`,
      { signal }
    );
    const data = await response.json();
    setBanner(data);
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchBanner(signal);
    return () => {
      controller.abort();
    };
  }, [query]);
  return (
    <>
      <div className="main-banner">
        <img src={banner === null ? AltImg : banner?.urls?.full} alt="" />

        <div className="center-div">
          <h1>Unsplash</h1>
          <p className="heading">The internet’s source for visuals.</p>
          <p className="heading2">Powered by creators everywhere.</p>
          <div className="search-bar">
            <div className="img-wrapper">
              <AiOutlineSearch />
              {/* <img src={MagnifyGlass} alt="" /> */}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onChange(e.target[0].value);
              }}
            >
              <input type="text" placeholder="Search High-Resolution Images" />
            </form>
            <div className="img-wrapper">
              <SiGooglelens />
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
