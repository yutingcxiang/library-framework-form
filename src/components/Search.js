import React, { useEffect } from 'react';
import { ReactiveBase, ReactiveList, DataSearch } from '@appbaseio/reactivesearch';
import '../styles/Search.css';
import Review from "./Review";
// import axios from 'axios';

export default function Search() {
  // useEffect(() => {
  //   const query = {
  //     query: {
  //       match_all: {}
  //     }
  //   };

  //   axios.get('http://localhost:9200/kns/review/_search?pretty', {
  //     params: {
  //       source: JSON.stringify(query),
  //       source_content_type: 'application/json'
  //     }
  //   }).then((res) => {
  //     console.log(res.data.hits.hits);
  //   });
  // })

  return (
    <div className="search-review">
      <ReactiveBase url="http://localhost:9200/" app="kns">
      <DataSearch 
        componentId="SearchReviews" 
        dataField={['toolName', 'reviewerName']} 
        placeholder="Search for a tool or engineer"
      />
      <ReactiveList
        componentId="SearchResult"
        dataField='toolName'
        react={{ 
          and: ['SearchReviews'],
        }}
        renderItem={res => (
          <div>
            <h2>{res.toolName ? res.toolName : ''}</h2>
            <div>{res.toolRating ? "⭐".repeat(res.toolRating) : ''} </div>
            {/* <div><em>{props.location.formData.toolRecommendation === "true" ? "Recommended 👍" : "Not recommended 👎"}</em></div>
            <div>Category: {props.location.formData.toolCategory}</div>
            <br/>
            <div>{props.location.formData.toolReview}</div>
            <br/>
            <div>What is your familiarity with the tool on a scale of 1 to 10? <em>{props.location.formData.toolFamiliarity}</em></div>
            <div>Have you used this tool in any projects? If so, which ones? <em>{props.location.formData.reviewerProjects ? props.location.formData.reviewerProjects : " N/A"}</em></div>
            <div>Have you experienced any challenges or difficulties when using this tool? If so, what? <em>{props.location.formData.toolChallenges ? props.location.formData.toolChallenges : " N/A"}</em></div>
            <div>Are there any alternative or similar tools that you would consider?<em>{props.location.formData.toolAlternatives ? props.location.formData.toolAlternatives : " N/A"}</em></div>
            <br/> */}
            <div>Review by {res.reviewerName ? res.reviewerName : 0}</div>
            {/* <div>{props.location.formData.dateSubmitted.toLocaleString()}</div> */}
          </div>
        )}
        style={{"color": "white"}}
      />
      </ReactiveBase>
    </div>
  )
}
