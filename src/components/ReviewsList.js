import React, { useState, useEffect } from 'react';
import Review from "./Review";
// import axios from 'axios';

export default function ReviewsList () {
  const [reviews, setReviews] = useState([])

  // useEffect(() => {
    // Send GET request to API endpoint for all review data
    // axios.get('/api/reviews')
    // .then((response) => {
    //   setReviews(response)
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  // })

  const displayReviews = () => {
    for (const review in reviews) {
      return (
        <li><Review reviewData={review}/></li>
      )
    }
  }

  return (
    <div>
      <ul className="reviews-list">
        {displayReviews()}
      </ul>
    </div>
  );
}

