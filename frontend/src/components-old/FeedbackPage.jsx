
const ratings = [1, 2, 3, 4, 5];

export default function Feedback({ isTimeUp }) {

  async function handleClick(e) {
    const value = e.target.value;
    console.log(value);

    const res = await fetch("http://localhost:8000/api/v1/feedback/send-feedback", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value,
        isTimeUp: !isTimeUp
      })
    });

    const data = await res.json();
    console.log(data);
  }


  return (
    <div className={"flex justify-center"}>
      {ratings.map((rating, index) => (
        <button
          className={"bg-purple-500 p-2 rounded m-2"}
          key={index}
          value={rating}
          onClick={handleClick}
        >
          {rating}
        </button>
      ))}
    </div>
  );
}
