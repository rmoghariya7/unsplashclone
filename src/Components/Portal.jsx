import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { IoShareSocialSharp } from 'react-icons/io5';
import { IoInformationCircle } from 'react-icons/io5';
import { AiOutlineSafety } from 'react-icons/ai';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { BsCamera } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import SingleImage from './SingleImage';
import { v4 as uuidv4 } from 'uuid';
const secretKey = process.env.REACT_APP_ACCESS_KEY;
const Portal = ({ id, setPortalOpen }) => {
  const getDate = (date) => {
    const newDate = new Date(date);
    const month = newDate.toLocaleString('default', { month: 'long' });
    const year = newDate.getFullYear();
    const Currdate = newDate.getDate() < 10 ? '0' : '' + newDate.getDate();

    setFormatedDate(`${month} ${Currdate} ${year}`);
  };

  const [img, setImg] = useState({});
  console.log(img);
  console.log(img['tags']);
  const [formatedDate, setFormatedDate] = useState('');

  const getSingleImage = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/${id}?client_id=${secretKey}`
      );
      const data = await response.json();
      setImg(data);
      getDate(data.created_at);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <>
      <div className='overlay'></div>
      <div className='outer' onClick={() => setPortalOpen(false)}>
        <div
          className='single-image-portal'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='image-info'>
            <div className='profile-pic'>
              <div className='img-wrapper'>
                <img src={img?.user?.profile_image?.medium} alt='' />
              </div>
              <div className='user-info'>
                <span style={{ fontSize: '15px' }}>
                  {img?.user?.first_name}
                </span>
                <span style={{ fontSize: '11px' }}>{img?.user?.name}</span>
              </div>
            </div>
            <div className='cta'>
              <button className='img-like'>
                <svg
                  width='15'
                  height='15'
                  class='TrVF8'
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
                  class='utUL6'
                  viewBox='0 0 24 24'
                  version='1.1'
                  aria-hidden='false'
                >
                  <desc lang='en-US'>A plus sign</desc>
                  <path d='M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z'></path>
                </svg>
              </button>
              <button className='download-btn'>
                <span className='download-text'>Downlaod</span>
                <div className='downlaod-svg'>
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
                </div>
              </button>
            </div>
          </div>

          <div className='main-image-wrapper'>
            <img src={img?.urls?.regular} alt='' />
          </div>

          {/* grid Container */}
          <div className='image-description'>
            {/* 1st item in grid */}
            <div className='img-desc-1'>
              <div className='view'>
                <span>View</span>
                <span>{img.views}</span>
              </div>
              <div className='image-downlaods'>
                <span>Downloads</span>
                <span>{img.downloads}</span>
              </div>
            </div>
            {/* 2nd container */}
            <div className='img-desc-2'>
              <div className='img-location'>
                <GoLocation color='grey' />
                <span>Published on {formatedDate}</span>
              </div>
              <div className='pub-date'>
                <IoCalendarClearOutline color='grey' />
                <span>{img?.location?.name}</span>
              </div>
              <div className='pub-policy'>
                <AiOutlineSafety color='grey' />
                <span>Free to use under the Unsplash License</span>
              </div>

              {img?.exif?.name && (
                <div className='camera-specs'>
                  <BsCamera />
                  <span>{img?.exif?.name}</span>
                </div>
              )}
            </div>
            {/* third contianer  */}
            <div className='img-desc-3'>
              <button>
                <IoShareSocialSharp />
                <span>Share</span>
              </button>
              <button>
                <IoInformationCircle />
                <span>Info</span>
              </button>
              <button>...</button>
            </div>
          </div>

          <div className='related-images'>
            <h4>Related Photos</h4>
            <div className='grid-container'>
              {img?.related_collections?.results.map((obj) =>
                obj.preview_photos.map((innerObj) => (
                  <SingleImage key={uuidv4()} image={innerObj} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal-root')
  );
};

export default Portal;
