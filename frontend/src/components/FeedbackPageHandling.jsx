import { useState, useEffect, useRef } from "react";

import Feedback from "./FeedbackPage";
import Waiting from "./WaitingPage"

export default function FeedbackPageHandle() {
  console.log("feedback-handle render");
  const [feedbackPage, setFeedbackPage] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const checkFeedbackPageStatus = async () => {
       const currentTime = new Date();
       const hours = currentTime.getHours();
       const minutes = currentTime.getMinutes();

       const isBetween10and12 =
         (hours >= 10 && minutes >= 0) &&
         (hours <= 16 && minutes <= 0);
       setFeedbackPage(isBetween10and12);
    };

    // check the feedback component every minute
    intervalRef.current = setInterval(checkFeedbackPageStatus, 60 * 1000);

    // check the feedback page status for the first time
    checkFeedbackPageStatus();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return <>{feedbackPage ? <Feedback isTimeUp={feedbackPage} /> : <Waiting isTimeUp={feedbackPage} />}</>;
}
