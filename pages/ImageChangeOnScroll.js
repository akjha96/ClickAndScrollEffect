import React, { Fragment } from "react";
import ScrollOverEffect from "./ScrollOverEffect";

const ImageChangeOnScroll = () => {
  return (
    <Fragment>
      {[1124, 187, 823, 1269, 1530, 1725, 5996].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ScrollOverEffect primaryImg={`../static/speakers/bw/Speaker-${speakerId}.jpg`} secondaryImg={`../static/speakers/Speaker-${speakerId}.jpg`} alt="" />
          </div>
        );
      })}
    </Fragment>
  );
};

export default ImageChangeOnScroll;
