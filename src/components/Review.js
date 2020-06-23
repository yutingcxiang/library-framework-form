import React from 'react';
import '../styles/Review.css';

export default function Review (props) {
  const renderReview = () => {
    if (props.reviewData) {
      return (
        <div>
          <h2>{props.reviewData.toolName}</h2>
          <div>{"⭐".repeat(props.reviewData.toolRating)} </div>
          <div><em>{props.reviewData.toolRecommendation === "true" ? "Recommended 👍" : "Not recommended 👎"}</em></div>
          <div>Category: {props.reviewData.toolCategory}</div>
          <br/>
          <div>{props.reviewData.toolReview}</div>
          <br/>
          <div>What is your familiarity with the tool on a scale of 1 to 10? <em>{props.reviewData.toolFamiliarity}</em></div>
          <div>Have you used this tool in any projects? If so, which ones? <em>{props.reviewData.reviewerProjects ? props.reviewData.reviewerProjects : " N/A"}</em></div>
          <div>Have you experienced any challenges or difficulties when using this tool? If so, what? <em>{props.reviewData.toolChallenges ? props.reviewData.toolChallenges : " N/A"}</em></div>
          <div>Are there any alternative or similar tools that you would consider?<em>{props.reviewData.toolAlternatives ? props.reviewData.toolAlternatives : " N/A"}</em></div>
          <br/>
          <div>Review by {props.reviewData.reviewerName} ({props.reviewData.reviewerRole})</div>
          <div>{props.reviewData.dateSubmitted.toLocaleString()}</div>
        </div>
      )
    }
  }

  return (
    <div className="view-review">
      {renderReview()}
    </div>
  );
}

