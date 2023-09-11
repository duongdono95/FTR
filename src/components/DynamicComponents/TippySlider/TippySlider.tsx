import React from "react";
import "./TippySlider.scss";
const TippySlider = ({ message }: { message: string }) => {
  return (
    <div className="TippySlider">
      <div className="child-container">{message}</div>
    </div>
  );
};

export default TippySlider;
