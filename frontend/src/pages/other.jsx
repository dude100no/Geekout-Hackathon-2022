//for resources
import React from "react";
import { Link } from "react-router-dom";
import "../styles/other.css";

function Other() {
  return (
    <div id="other-page" className="page">
      <h1>Other Resources</h1>
      <p>Here are other resources that will help you in your journey.</p>
      <p>
        <a href="https://www.myskillsfuture.gov.sg/content/portal/en/index.html">
          SkillsFuture
        </a>
      </p>
      <p>
        <a href="https://www.myskillsfuture.gov.sg/content/portal/en/assessment/landing.html">
          Self-Assesement Tool
        </a>
      </p>
    </div>
  );
}
export default Other;
