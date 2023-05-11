import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

const SubNavBar = ({
  CATEGORIES,
  setImgCategory,
  setQuery,
  setPageNumber,
  setImages,
}) => {
  const [active, setActive] = useState(-1);
  const subNavRef = useRef();
  const subNavRef2 = useRef();
  const arrowRefRight = useRef();
  const arrowRefLeft = useRef();

  const handleClick = (index) => {
    setImgCategory(CATEGORIES[index]);
    setQuery(CATEGORIES[index]);
    setPageNumber(1);
    setImages([]);
    setActive(index);
  };

  const scrollIntoViewRight = () => {
    subNavRef.current?.scrollIntoView({ behavior: "smooth" });
    arrowRefLeft.current.style.display = "block";
    arrowRefRight.current.style.display = "none";
  };
  const scrollIntoViewLeft = () => {
    subNavRef2.current?.scrollIntoView({ behavior: "smooth" });
    arrowRefRight.current.style.display = "block";
    arrowRefLeft.current.style.display = "none";
  };

  return (
    <div className="subNavWrapper">
      <ul className="static-ul">
        <li
          className={active === -1 ? "active" : ""}
          onClick={() => {
            setActive(-1);
            setImgCategory("Editorial");
          }}
        >
          Editorial
        </li>
        <li
          className={active === -2 ? "active" : ""}
          onClick={() => {
            setActive(-2);
            setImgCategory("Following");
          }}
        >
          Following
        </li>
      </ul>

      <div className="vline" />

      <div className="svg-wrapper">
        <svg
          onClick={scrollIntoViewLeft}
          ref={arrowRefLeft}
          className="arrow-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          aria-hidden="false"
        >
          <desc lang="en-US">Chevron left</desc>
          <path d="M15.5 18.5 14 20l-8-8 8-8 1.5 1.5L9 12l6.5 6.5Z"></path>
        </svg>
      </div>
      <ul className="dynamic-ul">
        {CATEGORIES.map((category, index) =>
          CATEGORIES.length - 1 === index ? (
            <NavLink to={"/"} key={uuidv4()}>
              <li
                ref={subNavRef}
                className={index === active ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {category}
              </li>
            </NavLink>
          ) : index === 0 ? (
            <NavLink to={"/"} key={uuidv4()}>
              <li
                ref={subNavRef2}
                className={index === active ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {category}
              </li>
            </NavLink>
          ) : (
            <NavLink to={"/"} key={uuidv4()}>
              <li
                className={index === active ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {category}
              </li>
            </NavLink>
          )
        )}
      </ul>
      <div className="svg-wrapper">
        <svg
          className="arrow-right"
          onClick={scrollIntoViewRight}
          ref={arrowRefRight}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          aria-hidden="false"
        >
          <desc lang="en-US">Chevron right</desc>
          <path d="M8.5 5.5 10 4l8 8-8 8-1.5-1.5L15 12 8.5 5.5Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SubNavBar;
