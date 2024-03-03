const {calculateRating} = require("../utils/ratingCalculator");

exports.setRatings = async (req, res) => {
  // problem: It may be possible that someone can hit this url with infinite number of requests
  const { value, isTimeUp } = req.body;
  console.log(req.body);

  if (isTimeUp) {
    // save into the database
    console.log("time up");
    const ratingsInJson = await client.hGetAll("ratings:1");
    const ratings = {
      1: parseInt(ratingsInJson["1"]),
      2: parseInt(ratingsInJson["2"]),
      3: parseInt(ratingsInJson["3"]),
      4: parseInt(ratingsInJson["4"]),
      5: parseInt(ratingsInJson["5"]),
    }
    console.log(ratings);

    const result = calculateRating(ratings);
    console.log(result.toFixed(2));
    return res.status(200).json({
      msg: "Ratings saved successfully",
      rating: result
    });
  } else {
    const ok = await client.hIncrBy("ratings:1", `${value}`, 1);
    console.log("yes " + ok);
  }

  res.status(200).json({
    value: value,
  });
};

exports.rate = async (req, res) => {
  const { value } = req.body;
  
}
