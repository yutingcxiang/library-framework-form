import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Review.css';

export default function Review (props) {
  const renderReview = () => {
    if (props.location.formData) {
      return (
        <div>
          <h2>{props.location.formData.toolName}</h2>
          <div>{"⭐".repeat(props.location.formData.toolRating)} </div>
          <div><em>{props.location.formData.toolRecommendation === "true" ? "Recommended 👍" : "Not recommended 👎"}</em></div>
          <div>Category: {props.location.formData.toolCategory}</div>
          <br/>
          <div>{props.location.formData.toolReview}</div>
          <br/>
          <div>What is your familiarity with the tool on a scale of 1 to 10? <em>{props.location.formData.toolFamiliarity}</em></div>
          <div>Have you used this tool in any projects? If so, which ones? <em>{props.location.formData.reviewerProjects ? props.location.formData.reviewerProjects : " N/A"}</em></div>
          <div>Have you experienced any challenges or difficulties when using this tool? If so, what? <em>{props.location.formData.toolChallenges ? props.location.formData.toolChallenges : " N/A"}</em></div>
          <div>Are there any alternative or similar tools that you would consider?<em>{props.location.formData.toolAlternatives ? props.location.formData.toolAlternatives : " N/A"}</em></div>
          <br/>
          <div>Review by {props.location.formData.reviewerName} ({props.location.formData.reviewerRole})</div>
          <div>{props.location.formData.dateSubmitted.toLocaleString()}</div>
        </div>
      )
    }
    return (
      <Link to="/new-review"><h2>Submit new review</h2></Link>
    )
  }

  return (
    <div className="view-review">
      {renderReview()}
    </div>
  );
}

