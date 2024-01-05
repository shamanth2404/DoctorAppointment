import React, { useState } from "react";
import Testimonial from "../../components/testimonial/Testimonial";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowfeedbackForm] = useState(false);
  return (
    <section>
      <div className="container">
        <Testimonial />
        {!showFeedbackForm && (
          <div className="text-center">
            <button onClick={() => setShowfeedbackForm(true)} className="btn">
              Give Feedback
            </button>
          </div>
        )}
        {showFeedbackForm && <FeedbackForm />}
      </div>
    </section>
  );
};

export default Feedback;
