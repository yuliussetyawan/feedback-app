import React from "react";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
      <h1>About This Project</h1>
      <p>This is react app to leave a feedback</p>
      <p>Version: 1.0.0</p>
      <p><a href="/">Back to Home</a></p>

      </div>
    </Card>
  );
}

export default AboutPage;
