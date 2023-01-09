import React from "react";
import "./Gallery.css";

const Gallery = ({ data }) => {
  return (
    <div className="row">
      {data.map((image) => (
        <div className="image">
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            height="400"
            width="450"
            alt={image.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
