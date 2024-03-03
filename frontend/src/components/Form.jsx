import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import ImageInput from "./ImageInput";

function Form() {
  const [formData, setFormData] = useState({
    rating: 0,
    message: "",
  });
  const [rating, setRating] = useState(5);
  const [selectedfile, SetSelectedFile] = useState([]);

  useEffect(
    function () {
      setFormData((prevFormData) => ({ ...prevFormData, rating: rating }));
    },
    [rating]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Rating: ${formData.rating} Image: ${selectedfile.map(
        (file) => file.filename
      )} Message: ${formData.message}`
    );
    console.log(selectedfile);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="starRating">
        <label htmlFor="rating">Rating</label>
        <StarRating
          maxRating={5}
          messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
          onSetRating={setRating}
          margin={"15px 0 0 -24px"}
          defaultRating={5}
          gap="15px"
        />
      </div>

      {rating <= 3 && (
        <ImageInput
          SetSelectedFile={SetSelectedFile}
          selectedfile={selectedfile}
        />
      )}

      <div className="message">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
