import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Indulge in our tiffin service that brings culinary delight to your
          doorstep. We offer a diverse menu of freshly prepared, wholesome meals
          crafted with locally sourced ingredients, ensuring a perfect blend of
          taste and nutrition for your daily dining experience.
        </p>
        <p>
          Experience convenience without compromising on health. Our tiffin
          service is designed for those seeking delicious, well-balanced
          options, providing a hassle-free solution for individuals leading busy
          lives. Elevate your daily meals with our commitment to quality,
          flavor, and nutritional excellence
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
