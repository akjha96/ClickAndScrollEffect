import React, { Fragment } from "react";
import MouseHoverEffect from "./MouseHoverEffect";

const ImageChangeOnMouseHover = () => {
  return (
    <Fragment>
      <MouseHoverEffect primaryImg="../static/speakers/bw/Speaker-10803.jpg" secondaryImg="../static/speakers/Speaker-10803.jpg" alt="" />

      <MouseHoverEffect primaryImg="../static/speakers/bw/Speaker-10808.jpg" secondaryImg="../static/speakers/Speaker-10808.jpg" alt="" />
    </Fragment>
  );
};

export default ImageChangeOnMouseHover;
