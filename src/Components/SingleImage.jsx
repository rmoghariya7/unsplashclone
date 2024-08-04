import React, { useCallback, useEffect, useRef, useState } from 'react';
import Portal from './Portal';
// import { Blurhash } from 'react-blurhash';

const SingleImage = ({
  image,
  index,
  lastImage,
  loading,
  hasMore,
  setPageNumber,
  getimgID,
}) => {
  const [portalOpen, setPortalOpen] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const observer = useRef();
  const lastImgRef = useCallback(
    (node) => {
      if (setPageNumber) {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setPageNumber((prev) => prev + 1);
          }
        });
        if (node) observer.current.observe(node);
      }
    },
    [loading, setPageNumber]
  );

  useEffect(() => {
    if (setPageNumber) {
      const body = document.querySelector('body');
      body.style.overflow = portalOpen ? 'hidden' : 'auto';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portalOpen]);

  return (
    <>
      {portalOpen && <Portal id={image.id} setPortalOpen={setPortalOpen} />}
      {index === lastImage ? (
        <div
          ref={lastImgRef}
          className='last'
          onClick={() => {
            getimgID(image.id);
            setPortalOpen(true);
          }}
        >
          <img src={image?.urls?.regular} alt='img' loading='lazy' />

          <div className='button-wrapper'>
            <button className='img-like'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 24 24'
                version='1.1'
                aria-hidden='false'
              >
                <desc lang='en-US'>A heart</desc>
                <path d='M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z'></path>
              </svg>
            </button>
            <button className='img-plus'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 24 24'
                version='1.1'
                aria-hidden='false'
              >
                <desc lang='en-US'>A plus sign</desc>
                <path d='M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z'></path>
              </svg>
            </button>
          </div>

          <div className='user-details'>
            <div className='inner-user-div'>
              <img src={image?.user?.profile_image?.small} alt='' />
              <span>{image?.user?.first_name}</span>
            </div>
            <a
              className='download-btn'
              download
              href={`${image?.links?.download}&force=true`}
              rel='noreferrer'
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <svg
                width='15'
                height='15'
                viewBox='0 0 24 24'
                version='1.1'
                aria-hidden='false'
              >
                <desc lang='en-US'>Arrow pointing down</desc>
                <path d='m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z'></path>
              </svg>
            </a>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            getimgID(image.id);
            setPortalOpen(true);
          }}
        >
          <img
            src={image?.urls?.regular}
            alt='img'
            loading='lazy'
            onLoad={() => setLoaded(true)}
          />

{/*           {!isLoaded && (
            <Blurhash
              hash={image?.blur_hash}
              width={400}
              height={300}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )} */}

          <div className='button-wrapper'>
            <button className='img-like'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 24 24'
                version='1.1'
                aria-hidden='false'
              >
                <desc lang='en-US'>A heart</desc>
                <path d='M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z'></path>
              </svg>
            </button>
            <button className='img-plus'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 24 24'
                version='1.1'
                aria-hidden='false'
              >
                <desc lang='en-US'>A plus sign</desc>
                <path d='M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z'></path>
              </svg>
            </button>
          </div>

          <div className='user-details'>
            <div className='inner-user-div'>
              <img src={image?.user?.profile_image?.small} alt='' />
              <span>{image?.user?.first_name}</span>
            </div>

            <a
              className='download-btn'
              download
              href={`${image?.links?.download}&force=true`}
              rel='noreferrer'
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <svg
                width='15'
                height='15'
                viewBox='0 0 24 24'
                version='1.1'
                aria-hidden='false'
              >
                <desc lang='en-US'>Arrow pointing down</desc>
                <path d='m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z'></path>
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleImage;
