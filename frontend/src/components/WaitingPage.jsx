import { useEffect } from "react";

export default function WaitingComponent({ isTimeUp }) {
    // when time is up, tell the backend 
    useEffect(() => {
        fetch("http://localhost:8000/api/v1/feedback/send-feedback", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                value: "hey this is ankit",
                isTimeUp: true
            })
        })
        .then(async (res) => {
            const json = await res.json();
            console.log(json);
        });
    }, [isTimeUp]);

    return (
        <>
            <h1>Feedback will starting soon...</h1>
        </>
    )
}