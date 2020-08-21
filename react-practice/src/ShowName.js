import React from "react";
import "./ShowName.css";
function ShowName(probs) {
  return (
    <div className="tc bg-hot-pink grow ShowNameDiv">
      <img
        className="mw4"
        src={`https://joeschmoe.io/api/v1/${probs.name}`}
        alt="Profile"
      />
      <h1>{probs.name}</h1>
      <h4>{probs.work}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        porro aperiam facere officiis exercitationem! Eligendi debitis est quasi
        voluptatum magnam!
      </p>
    </div>
  );
}
export default ShowName;
