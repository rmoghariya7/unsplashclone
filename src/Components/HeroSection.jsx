import React from "react";
import SingleImage from "./SingleImage";
import { v4 as uuidv4 } from "uuid";

const HeroSection = ({ images, loading, setPageNumber, hasMore }) => {
  return (
    <>
      <div className="grid-container">
        {images?.map((image, index) => (
          <SingleImage
            key={uuidv4()}
            image={image}
            index={index}
            lastImage={images.length - 2}
            loading={loading}
            setPageNumber={setPageNumber}
            hasMore={hasMore}
          />
        ))}
      </div>
      {loading && <h3>Loading....</h3>}
    </>
  );
};

export default HeroSection;
