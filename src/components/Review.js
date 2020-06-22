import React from 'react';
import '../styles/Review.css';

export default function Review ({ reviewData }) {
  const renderReview = () => {
    if (reviewData) {
      return (
        <div>
          <h2>{reviewData.toolName}</h2>
          <div>{"⭐".repeat(reviewData.toolRating)} </div>
          <div><em>{reviewData.toolRecommendation === "true" ? "Recommended 👍" : "Not recommended 👎"}</em></div>
          <div>Category: {reviewData.toolCategory}</div>
          <br/>
          <div>{reviewData.toolReview}</div>
          <br/>
          <div>What is your familiarity with the tool on a scale of 1 to 10? <em>{reviewData.toolFamiliarity}</em></div>
          <div>Have you used this tool in any projects? If so, which ones? <em>{reviewData.reviewerProjects ? reviewData.reviewerProjects : " N/A"}</em></div>
          <div>Have you experienced any challenges or difficulties when using this tool? If so, what? <em>{reviewData.toolChallenges ? reviewData.toolChallenges : " N/A"}</em></div>
          <div>Are there any alternative or similar tools that you would consider?<em>{reviewData.toolAlternatives ? reviewData.toolAlternatives : " N/A"}</em></div>
          <br/>
          <div>Review by {reviewData.reviewerName} ({reviewData.reviewerRole})</div>
          <div>{reviewData.dateSubmitted.toLocaleString()}</div>
        </div>
      )
    }
    return <div><h2>No Reviews Available</h2></div>
  }

  return (
    <div className="view-review">
      {renderReview()}
    </div>
  );
}

