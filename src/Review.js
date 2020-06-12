import React from 'react';
import './App.css';

export default function Review({ formData }) {
  return (
    <div className="review">
      <h2>{formData.toolName}</h2>
      <div>{"⭐".repeat(formData.toolRating)} </div>
      <div><em>{formData.toolRecommendation === true ? "Recommended 👍" : "Not recommended 👎"}</em></div>
      <div>Category: {formData.toolCategory}</div>
      <br/>
      <div>{formData.toolReview}</div>
      <br/>
      <div>What is your familiarity with the tool on a scale of 1 to 10? <em>{formData.toolFamiliarity}</em></div>
      <div>Have you used this tool in any projects? If so, which ones? <em>{formData.reviewerProjects ? formData.reviewerProjects : " N/A"}</em></div>
      <div>Have you experienced any challenges or difficulties when using this tool? If so, what? <em>{formData.toolChallenges ? formData.toolChallenges : " N/A"}</em></div>
      <div>Are there any alternative or similar tools that you would consider?<em>{formData.toolAlternatives ? formData.toolAlternatives : " N/A"}</em></div>
      <br/>
      <div>Review by {formData.reviewerName} ({formData.reviewerRole})</div>
      <div>{formData.dateSubmitted.toLocaleString()}</div>
    </div>
  );
}

