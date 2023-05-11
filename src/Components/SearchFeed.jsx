import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import SingleImage from './SingleImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import Portal from './Portal';

const SearchFeed = ({ setPage, isClick, setIsClick, getimgID, ID }) => {
  const [queryImages, setQueryImages] = useState([]);
  const [pageNumber, setQueryPageNumber] = useState(1);
  const [portalOpen, setPortalOpen] = useState(false);

  const params = useParams();
  const fetchQueryReq = async (signal) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=tf370IbxGuEg8R5VrBx3btQ5m68eU3xA9lEW2QnbQH8&query=${params.query}&page=${pageNumber}`,
      { signal }
    );
    const data = await response.json();

    pageNumber === 1
      ? setQueryImages(data.results)
      : setQueryImages((prev) => [...prev, ...data.results]);
  };

  useEffect(() => {
    if (isClick) {
      setQueryPageNumber(1);
      setIsClick(false);
    }
    const controller = new AbortController();
    const signal = controller.signal;

    fetchQueryReq(signal);

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, params]);
  useEffect(() => {
    if (setQueryPageNumber) {
      const body = document.querySelector('body');
      body.style.overflow = portalOpen ? 'hidden' : 'auto';
    }
  }, [portalOpen, pageNumber]);

  return (
    <div className='container'>
      <h2>{params?.query}</h2>

      <div>
        {/* images */}
        <InfiniteScroll
          dataLength={queryImages.length - 1} //This is important field to render the next data
          next={() => setQueryPageNumber((prev) => prev + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className='grid-container'
        >
          {portalOpen && <Portal id={ID} setPortalOpen={setPortalOpen} />}
          {queryImages?.map((image, index) => (
            <>
              <SingleImage image={image} key={uuidv4()} getimgID={getimgID} />
            </>
          ))}
        </InfiniteScroll>

        {/* finish */}
      </div>
    </div>
  );
};

export default SearchFeed;
