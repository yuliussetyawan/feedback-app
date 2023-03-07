import React, { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  return (
    <Card>
      <form>
        <h2>How would you rate the service with us</h2>
        <div className="input-group">
          <input placeholder="Write a Message" value={text} onChange={handleChange} type='text'/>
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
