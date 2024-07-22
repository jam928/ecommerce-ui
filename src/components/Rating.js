import React from "react";
import StarRatings from 'react-star-ratings';

function Rating({ value = 0, text = '', color = 'black' }) {
  const numValue = Number(value);
  return (
    <div className="rating">
      <StarRatings 
          rating={numValue}
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
