import React from "react";
import demo1 from "../Assets/demo1.jpg";

const UserCollection = ({ collection }) => {
  return (
    <div className="grid-collection">
      <div>
        <img src={demo1} alt={demo1} />
      </div>
      <div>
        <img src={demo1} alt={demo1} />
      </div>
      <div>
        <img src={demo1} alt={demo1} />
      </div>
    </div>
  );
};

export default UserCollection;
