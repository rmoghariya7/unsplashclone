import React from "react";
import { createPortal } from "react-dom";

const Portal = ({ image, setPortalOpen }) => {
  return createPortal(
    <>
      <div className="overlay" onClick={() => setPortalOpen(false)}></div>
      <div className="single-image-portal">
        <div className="image-info">
          <div className="profile-pic">
            <div className="img-wrapper">
              <img src={image?.user?.profile_image?.medium} alt="" />
            </div>
            <div className="user-info">
              <span style={{ fontSize: "15px" }}>
                {image?.user?.first_name}
              </span>
              <span style={{ fontSize: "11px" }}>{image?.user?.name}</span>
            </div>
          </div>
          <div className="cta">
            <button className="img-like">
              <svg
                width="15"
                height="15"
                class="TrVF8"
                viewBox="0 0 24 24"
                version="1.1"
                aria-hidden="false"
              >
                <desc lang="en-US">A heart</desc>
                <path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
              </svg>
            </button>
            <button className="img-plus">
              <svg
                width="15"
                height="15"
                class="utUL6"
                viewBox="0 0 24 24"
                version="1.1"
                aria-hidden="false"
              >
                <desc lang="en-US">A plus sign</desc>
                <path d="M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z"></path>
              </svg>
            </button>
            <button className="download-btn">
              <span className="download-text">Downlaod</span>
              <div className="downlaod-svg">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  version="1.1"
                  aria-hidden="false"
                >
                  <desc lang="en-US">Arrow pointing down</desc>
                  <path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="main-image-wrapper">
          <img src={image?.urls?.regular} alt="" />
        </div>
      </div>
    </>,
    document.getElementById("portal-root")
  );
};

export default Portal;
