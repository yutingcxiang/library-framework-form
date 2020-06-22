import React from "react";
import { useForm } from "react-hook-form";
import '../styles/Form.css';
import { useHistory } from "react-router-dom";
// import axios from 'axios';

export default function Form() {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const dateSubmitted = new Date();
    data.dateSubmitted = dateSubmitted;
    console.log(data)

    // Send POST request to API endpoint
    // axios.post('/api/create-review', data)
    // .then((response) => {
    //   push to / after submission to see all reviews
    //   history.push({ pathname: "/" });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  return (
    <div className="new-review">
      <h1>Submit a new review</h1>
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Tool Name<span> * </span></label> 
        <input name="toolName" placeholder="ex: React Testing Library" ref={register({ required: true })} />
        {errors.toolName && <p className="error">This field is required</p>}

        {/* Currently a static list but can be pulled from database */}
        <label>Tool Category</label> 
        <select name="toolCategory" defaultValue="" ref={register}>
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

        <label>Your Name<span>*</span></label> 
        <input name="reviewerName" ref={register({ required: true })} />
        {errors.reviewerName && <p className='error'>This field is required</p>}

        <label>Your Role<span>*</span> </label>
        <select name="reviewerRole" defaultValue="---" ref={register({ required: true })}>
          <option value="">---</option>
          <option value="Junior Engineer">Junior Engineer</option>
          <option value="Mid-level Engineer">Mid-level Engineer</option>
          <option value="Senior Engineer">Senior Engineer</option>
          <option value="Other">Other</option>
        </select>
        {errors.reviewerRole && <p className="error">This field is required</p>}

        <label>How would you rate this tool on a scale of 1 to 5? <span>*</span></label>
        <input type="number" name="toolRating" min="1" max="5"ref={register({required: true, max: 10, min: 1})} />
        {errors.toolRating && <p className="error">Please select a value</p>}

        <label>Would you use this tool again or recommend this tool to others? <span>*</span></label>
        <label className="radio-label"><input name="toolRecommendation" type="radio" value={true} ref={register({ required: true })}/>Yes</label>
        <label className="radio-label margin-right"><input name="toolRecommendation" type="radio" value={false} ref={register({ required: true })}/>No</label>
        {errors.toolRecommendation && <p className="error">Please select an option</p>}

        <label>How would you review this tool? <span>*</span></label>
        <textarea name="toolReview" ref={register({ required: true})}></textarea>
        {errors.toolReview && <p className="error">This field is required</p>}

        <label>Have you experienced any challenges or difficulties when using this tool? If so, what?</label>
        <textarea name="toolChallenges" ref={register} />

        <label>What is your familiarity with this tool on a scale of 1 to 10? <span>*</span></label>
        <input type="number" name="toolFamiliarity" min="1" max="10"ref={register({required: true, max: 10, min: 1})} />
        {errors.toolFamiliarity && <p className="error">Please select a value</p>}

        <label>Have you used this tool in any projects? If so, which ones? </label>
        <textarea name="reviewerProjects" ref={register} />

        <label>Are there any alternative or similar tools that you would consider? </label>
        <textarea name="toolAlternatives" ref={register} />

        <input type="submit" />
      </form>
      <br/>
    </div>
  );
};