import { useEffect, useState } from "react";
import "./thumbnail.css";

export const Thumbnail = ({ title, thumbnailSrc, onCLick = () => {} }) => {
  return (
    <>
      <div className="image-container" onClick={onCLick}>
        <div>
          <img src={thumbnailSrc} alt="thumbnail" />
        </div>
        <p class="bottom-left-text">{title}</p>
      </div>
    </>
  );
};
