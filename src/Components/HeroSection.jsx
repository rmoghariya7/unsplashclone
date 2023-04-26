import React from "react";
import SingleImage from "./SingleImage";

const HeroSection = ({ images, loading, setPageNumber, hasMore }) => {
  return (
    <>
      <div className="grid-container">
        {images?.map((image, index) => (
          <SingleImage
            key={image.id}
            image={image}
            index={index}
            lastImage={images.length - 1}
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
