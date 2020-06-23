import React from 'react';
import '../styles/Search.css';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function Search() {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const dateSubmitted = new Date();
    data.dateSubmitted = dateSubmitted;
    console.log(data)

    // Send POST request to API endpoint
    // axios.post('/api/query-reviews', data)
    // .then((response) => {
    //   push to /view-review after submission for filtered results
      history.push({ pathname: "/view-review", reviewData: data });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  return (
    <div className="search-review">
      <h1>Search for reviews</h1>
      <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Search by Tool Name</label> 
        <input className="search-input" type="text" name="toolName" placeholder="ex: React Testing Library" ref={register} />

        <label>Search by Tool Category:</label> 
        {/* Can be changed to allow for multiple selection */}
        <select className="search-input" name="toolCategory" defaultValue="" ref={register}>
          <option value="">---</option>
          <option value="Accessibility">Accessibility</option>
          <option value="Build">Build</option>
          <option value="Data">Data</option>
          <option value="Design">Design</option>
          <option value="Utility">Utility</option>
          <option value="Security">Security</option>
          <option value="Testing">Testing</option>
          <option value="Other">Other</option>
        </select>

        <label>Search by Reviewer Name:</label> 
        <input className="search-input" type="text" name="reviewerName" ref={register} />

        {/* Can be changed to allow for multiple selection */}
        <label>Search by Reviewer Role:</label>
        <select className="search-input" name="reviewerRole" defaultValue="" ref={register}>
          <option value="">---</option>
          <option value="Junior Engineer">Junior Engineer</option>
          <option value="Mid-level Engineer">Mid-level Engineer</option>
          <option value="Senior Engineer">Senior Engineer</option>
          <option value="Other">Other</option>
        </select>

        {/* Can be changed to be a dropdown list or multiple selection */}
        <label>Filter by Project:</label>
        <input className="search-input" type="text" name="reviewerProjects" ref={register} />
        <br/>

        {/* Can be changed to allow for multiple selection */}
        <label>Filter by Rating:</label>
        <br/>
        <label className="radio-label"><input name="toolRating" type="radio" value="⭐⭐⭐⭐⭐" ref={register}/><span role="img" aria-label="star">⭐⭐⭐⭐⭐</span></label>
        <label className="radio-label"><input name="toolRating" type="radio" value="⭐⭐⭐⭐" ref={register}/><span role="img" aria-label="star">⭐⭐⭐⭐</span></label>
        <label className="radio-label"><input name="toolRating" type="radio" value="⭐⭐⭐" ref={register}/><span role="img" aria-label="star">⭐⭐⭐</span></label>
        <label className="radio-label"><input name="toolRating" type="radio" value="⭐⭐" ref={register}/><span role="img" aria-label="star">⭐⭐</span></label>
        <label className="radio-label"><input name="toolRating" type="radio" value="⭐" ref={register}/><span role="img" aria-label="star">⭐</span></label>
        <br/>

        <label>Recommended:</label>
        <input className="search-checkbox" type="checkbox" placeholder="false" name="toolRecommendation" ref={register} />

        {/* Defaults to 10.Can be changed to allow for multiple selection */}
        <label>Tool Familiarity:</label>
        <input className="search-input" type="range" name="toolFamiliarity" min="1" max="10" ref={register({max: 10, min: 1})} />
        <br/>

        <input type="submit" value="search"/>
      </form>
      <br/>
    </div>
  )
}
