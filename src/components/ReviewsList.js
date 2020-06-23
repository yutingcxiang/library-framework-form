import React, { useState, useEffect } from 'react';
import Review from "./Review";
// import axios from 'axios';

const sampleReview = [{
  dateSubmitted: new Date().toLocaleString(),
  reviewerName: "Christine",
  reviewerProjects: "Leopard Solutions",
  reviewerRole: "Junior Engineer",
  toolAlternatives: "",
  toolcategory: "Testing",
  toolChallenges: "There is a learning curve.",
  toolName: "React Testing Library",
  toolRating: "4",
  toolRecommendation: "true",
  toolReview: "Good testing tool."
}]

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

  useEffect(() => {
    setReviews(sampleReview)
  }, [reviews])


  const displayReviews = () => {
    if (reviews.length > 0) {
      for (let review in reviews) {
        return (
          <li><Review reviewData={reviews[review]}/></li>
        )
      }
    } 
    return <div>No Reviews Found</div>
  }

  return (
    <div>
      <ul className="reviews-list">
        {displayReviews()}
      </ul>
    </div>
  );
}

