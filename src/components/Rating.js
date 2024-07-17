import React from "react";
import StarRatings from 'react-star-ratings';

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      <StarRatings 
          rating={value}
          starRatedColor={color}
          numberOfStars={5}
          name='rating'
		  starDimension='15px'
          starSpacing="2px"
        />
      <span>
        {text && text}
      </span>
    </div>
  );
}

export default Rating;
