import React, { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be more than 10 char");
    } else {
      setBtnDisabled(false);
      setMessage(null)
    }
    setText(event.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate the service with us</h2>
        <div className="input-group">
          <input
            placeholder="Write a Message"
            value={text}
            onChange={handleChange}
            type="text"
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
        {/* shorthand for: if(condition1) {condition2;} */}
      </form>
    </Card>
  );
}

export default FeedbackForm;
