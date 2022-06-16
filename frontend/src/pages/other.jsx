//for resources
import React from "react";
import { Link } from "react-router-dom";
import '../styles/other.css';

function Other() {
  return (<header id="other-page">
  <div>
    <h1>
    Other Resources
    </h1>
    <p>Here are other resources that will help you in your journey.
    </p>
    <p> <Link to="https://www.myskillsfuture.gov.sg/content/portal/en/index.html">SkillsFuture</Link></p>
    <p>
    <Link to="https://www.myskillsfuture.gov.sg/content/portal/en/assessment/landing.html">Self-Assesement Tool</Link>
    </p>
  </div>
  </header>
  )
}
export default Other;
