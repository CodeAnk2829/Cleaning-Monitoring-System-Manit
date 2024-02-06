import { useState, useEffect } from "react";

import Feedback from "./FeedbackPage";
import Waiting from "./WaitingPage"

export default function FeedbackPageHandle() {
  console.log("feedback-handle render");
  const [feedbackPage, setFeedbackPage] = useState(false);

  useEffect(() => {
    const checkFeedbackPageStatus = async () => {
      try {
        const res = await fetch(
          "http://localhost:8000/api/v1/feedback/feedback-page-status"
        );
        const data = await res.json();

        setFeedbackPage(data.feedbackPage);
      } catch (err) {
        console.error("Error while fetching the feedback page");
      }
    };

    // check the feedback component every minute
    const interval = setInterval(checkFeedbackPageStatus, 60 * 1000);

    // check the feedback page status for the first time
    checkFeedbackPageStatus();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{feedbackPage ? <Feedback isTimeUp={feedbackPage} /> : <Waiting isTimeUp={feedbackPage} />}</>;
}
