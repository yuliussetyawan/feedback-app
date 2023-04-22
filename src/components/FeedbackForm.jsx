import React, { useState, useContext } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const {addFeedback} = useContext(FeedbackContext);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }
     addFeedback(newFeedback)
    }
    
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate the service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
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
