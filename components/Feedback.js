import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !feedback) return;

    setSubmitted(true);
    setName("");
    setFeedback("");
  };

  return (
    <div className="page">
      <h1>Feedback</h1>
      <p>We would love to hear your feedback!</p>

      <div className="feedback-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <p className="success-msg">Feedback successfully sent!</p>
        )}
      </div>
    </div>
  );
}

export default Feedback;