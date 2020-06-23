import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../styles/Navbar.css";
import Form from "./Form";
import Review from "./Review";
import Search from "./Search";
import ReviewsList from "./ReviewsList";

export default function Navbar() {
  return (
    <div className="navbar">
      <Router>
        <div className="navbar-menu">
          <h1 className="app-title">Know Your Staff</h1>
          <h3><Link to="/">View Reviews</Link></h3>
          <h3><Link to="/search-review">Search Reviews</Link></h3>
          <h3><Link to="/new-review">Add Review</Link></h3>
        </div>

        <Route exact path="/" component={ReviewsList}/>
        <Route exact path="/search-review" component={Search}/>
        <Route exact path="/new-review" component={Form}/>
        <Route exact path="/view-review" component={Review}/>
      </Router>
    </div>
  );
}

