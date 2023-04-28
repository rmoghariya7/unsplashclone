import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="nav-container">
        <NavLink to={"/"}>
          <div className="logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              version="1.1"
              aria-labelledby="unsplash-home"
              aria-hidden="false"
            >
              <desc lang="en-US">Unsplash logo</desc>
              <title id="unsplash-home">Unsplash Home</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
          </div>
        </NavLink>
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
              onChange(e.target[0].value);
            }}
          >
            <input
              // onChange={onChange}
              type="text"
              placeholder="Search High-Resolution Images"
            />
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

        <div className="links">
          <ul>
            <li className="advertise-li">Advertise</li>
            <li className="blog-li">Blog</li>
            <li className="unsplash-plus">Unsplash+</li>
            <li className="submit-btn-li">
              <button className="submit-btn">Submit a Photo</button>
            </li>
            <li className="bell-li">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                aria-hidden="false"
                className="bell"
              >
                <desc lang="en-US">Bell</desc>
                <path d="M14.345 21.15c-4.637 1.604-8.871.902-9.778-1.805-.303-1.002-.202-2.005.403-3.108.302-.5.302-1.303.1-1.905l-.705-2.306c-.605-1.604-.403-3.308.202-4.712.403-1.102 1.109-1.904 2.117-2.606l-.202-.602c-.302-.601.1-1.403.706-1.604l1.21-.401c.705-.3 1.41.1 1.612.802l.202.602c1.31-.1 2.52.2 3.629.902 1.21.802 2.117 1.905 2.62 3.409l.807 2.506c.202.501.706 1.203 1.31 1.404 1.11.4 1.916 1.103 2.218 2.105 1.008 2.507-1.814 5.715-6.451 7.319Zm4.536-6.717c-.403-1.103-3.226-1.705-7.056-.401-3.83 1.303-5.645 3.609-5.242 4.712.403 1.103 3.226 1.704 7.056.4 3.83-1.302 5.645-3.608 5.242-4.711Zm-7.56 4.11c-1.008 0-1.815-.501-2.42-1.203-.1-.1-.1-.3 0-.4.706-.602 1.714-1.204 3.327-1.806.605-.2 1.21-.4 1.814-.5.202 0 .303.1.303.2v.501c0 1.203-.706 2.306-1.714 2.807.1 0-.706.401-1.31.401Z"></path>
              </svg>
            </li>

            <li
              className="menu-ul"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <svg
                width="24"
                height="24"
                className="BOTrp"
                viewBox="0 0 24 24"
                version="1.1"
                aria-hidden="false"
              >
                <desc lang="en-US">navigation menu</desc>
                <path d="M3 16h18v2H3v-2ZM3 6v2h18V6H3Zm0 7h18v-2H3v2Z"></path>
              </svg>
            </li>

            {showMenu && (
              <div className="main-menu-wrapper">
                <div className="menu">
                  <div className="company">
                    <div className="img-wrapper">
                      <svg
                        width="24"
                        height="24"
                        className="CnNKA"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity=".5"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M19 9h-2V7h2v2Zm0 4h-2v-2h2v2Zm0 4h-2v-2h2v2Zm-2 2v2h4c.55 0 1.021-.196 1.413-.587.391-.392.587-.863.587-1.413V5c0-.55-.196-1.021-.587-1.413A1.928 1.928 0 0 0 21 3h-9c-.55 0-1.02.192-1.412.575A1.856 1.856 0 0 0 10 4.95l2 1.45V5h9v14h-4Z"
                          fill="#111"
                        ></path>
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M1 20v-7.975a1.947 1.947 0 0 1 .85-1.625l5-3.575c.35-.25.733-.375 1.15-.375.417 0 .8.125 1.15.375l5 3.575a1.94 1.94 0 0 1 .85 1.625V20c0 .283-.096.52-.287.712A.968.968 0 0 1 14 21H9v-5H7v5H2a.965.965 0 0 1-.712-.288A.965.965 0 0 1 1 20Zm4-1H3v-7l5-3.55L13 12v7h-2v-5H5v5Z"
                          fill="#111"
                        ></path>
                      </svg>
                    </div>
                    <h3>Company</h3>
                    <ul>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                    </ul>
                  </div>
                  <div className="product">
                    <div className="img-wrapper">
                      <svg
                        width="24"
                        height="24"
                        className="CnNKA"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity=".5"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M17 4v16c.55 0 1.021-.196 1.413-.587.391-.392.587-.863.587-1.413V6c0-.55-.196-1.02-.587-1.412A1.927 1.927 0 0 0 17 4Zm4 2v12c.417 0 .77-.146 1.062-.438.292-.291.438-.645.438-1.062v-9c0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 21 6Z"
                          fill="#111"
                        ></path>
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M4 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 20V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h9c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v16c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 13 22H4Zm9-2H4V4h9v16Z"
                          fill="#111"
                        ></path>
                      </svg>
                    </div>
                    <h3>Product</h3>
                    <ul>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                    </ul>
                  </div>
                  <div className="community">
                    <div className="img-wrapper">
                      <svg
                        width="24"
                        height="24"
                        className="CnNKA"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M.288 21.712A.965.965 0 0 0 1 22h3.5v-1.6c0-.433.054-.842.162-1.225.109-.383.28-.742.513-1.075a6.122 6.122 0 0 0-.562-.075A7.09 7.09 0 0 0 4 18c-1.2 0-2.167.221-2.9.663-.733.441-1.1 1.029-1.1 1.762V21c0 .283.096.52.288.712Zm5.999 0c.192.192.43.288.713.288h10c.283 0 .52-.096.712-.288A.965.965 0 0 0 18 21v-.6c0-1.083-.55-1.963-1.65-2.638-1.1-.675-2.55-1.012-4.35-1.012-1.783 0-3.229.337-4.337 1.012C6.554 18.437 6 19.317 6 20.4v.6c0 .283.096.52.287.712ZM19.5 20.4V22H23c.283 0 .52-.096.712-.288A.965.965 0 0 0 24 21v-.575c0-.733-.367-1.32-1.1-1.762-.733-.442-1.7-.663-2.9-.663-.217 0-.42.008-.612.025s-.38.042-.563.075c.217.333.383.692.5 1.075.117.383.175.792.175 1.225ZM9.45 19.137c.75-.258 1.6-.387 2.55-.387.95 0 1.796.125 2.538.375.741.25 1.187.542 1.337.875h-7.75c.133-.317.575-.604 1.325-.863Zm-6.862-2.724C2.979 16.804 3.45 17 4 17c.55 0 1.02-.196 1.412-.587C5.804 16.021 6 15.55 6 15s-.196-1.021-.588-1.413A1.925 1.925 0 0 0 4 13c-.55 0-1.02.196-1.412.587A1.927 1.927 0 0 0 2 15c0 .55.196 1.021.588 1.413Zm15.999 0c.392.391.863.587 1.413.587s1.021-.196 1.413-.587c.391-.392.587-.863.587-1.413s-.196-1.021-.587-1.413A1.928 1.928 0 0 0 20 13c-.55 0-1.021.196-1.413.587A1.928 1.928 0 0 0 18 15c0 .55.196 1.021.587 1.413Zm-8.712-1.288A2.893 2.893 0 0 0 12 16c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 15 13c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 10c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 13c0 .833.292 1.542.875 2.125Zm1.413-2.838A.967.967 0 0 1 12 12a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 13c0 .283-.096.52-.287.712A.968.968 0 0 1 12 14a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 13c0-.283.096-.521.288-.713Z"
                          fill="#111"
                        ></path>
                        <path
                          d="M6.6 3c1.05 0 2.05.22 3 .662A6.803 6.803 0 0 1 12 5.5a6.803 6.803 0 0 1 2.4-1.838 7.037 7.037 0 0 1 3-.662c1.867 0 3.433.633 4.7 1.9C23.367 6.167 24 7.733 24 9.6c0 .633-.083 1.258-.25 1.875a9.786 9.786 0 0 1-.7 1.825 4.1 4.1 0 0 0-.65-.85 2.92 2.92 0 0 0-.875-.6c.15-.383.267-.758.35-1.125.083-.367.125-.742.125-1.125 0-1.3-.442-2.392-1.325-3.275S18.7 5 17.4 5c-1.35 0-2.387.37-3.112 1.112A60.128 60.128 0 0 0 12 8.6a48.097 48.097 0 0 0-2.287-2.5C8.988 5.367 7.95 5 6.6 5c-1.3 0-2.392.442-3.275 1.325S2 8.3 2 9.6c0 .383.042.758.125 1.125.083.367.2.742.35 1.125a2.92 2.92 0 0 0-.875.6 4.1 4.1 0 0 0-.65.85c-.3-.6-.533-1.208-.7-1.825A7.156 7.156 0 0 1 0 9.6c0-1.867.633-3.433 1.9-4.7C3.167 3.633 4.733 3 6.6 3Z"
                          fill="#111"
                          opacity=".5"
                        ></path>
                      </svg>
                    </div>
                    <h3>Community</h3>
                    <ul>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                      <li>Lorem.</li>
                    </ul>
                  </div>
                </div>

                <div className="nav-footer">
                  <ul>
                    <li>License</li>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Insurance</li>
                  </ul>

                  <span>English</span>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
