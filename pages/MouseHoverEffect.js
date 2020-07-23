import React, { useRef, useEffect } from "react";
import ImageChangeOnMouseHover from "./ImageChangeOnMouseHover";

const MouseHoverEffect = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <img
      style={{ width: "200px", paddingRight: "10px" }}
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default MouseHoverEffect;
