function findCoefficient(factNum, sign) {
  if (factNum >= 10) return 1;
  if (factNum <= 0.1) return 0;
  console.log("factNum : ", factNum);
  console.log("escape base case");
  const norm = 0.55;
  const inc = 0.05 * (factNum - 1);
  return norm + inc * sign;
}

exports.calculateRating = (ratingsCount) => {
  const rating_1 = ratingsCount[1] || 0;
  const rating_2 = ratingsCount[2] || 0;
  const rating_3 = ratingsCount[3] || 0;
  const rating_4 = ratingsCount[4] || 0;
  const rating_5 = ratingsCount[5] || 0;

  console.log("rating_1: ", rating_1);
  console.log("rating_2: ", rating_2);
  console.log("rating_3: ", rating_3);
  console.log("rating_4: ", rating_4);
  console.log("rating_5: ", rating_5);

  if (rating_4 === 0 && rating_5 === 0) {
    console.log("first block running");
    const rating =
      ((rating_1 + rating_2 * 2 + rating_3 * 3) * 1.0) /
      (rating_1 + rating_2 + rating_3);
    return rating;
  } else if (rating_1 === 0 && rating_2 === 0) {
    console.log("second block running");
    const rating =
      ((rating_3 * 3 + rating_4 * 4 + rating_5 * 5) * 1.0) /
      (rating_3 + rating_4 + rating_5);
    return rating;
  }

  console.log("third block running");

  let sign = 1;
  let fact_4 = (rating_4 * 1.0) / Math.max(rating_1, rating_2);
  let fact_5 = (rating_5 * 1.0) / Math.max(rating_1, rating_2);

  console.log("fact_4: ", fact_4);
  console.log("fact_5: ", fact_5);

  let coeff_4 = 0;
  let coeff_5 = 0;

  if (fact_4 !== 0) {
    if (fact_4 < 1) {
      fact_4 = 1 / fact_4;
      console.log("fact_4 if less than 1: ", fact_4.toPrecision(2));
      sign = -1;
    } else {
      sign = 1;
    }
    coeff_4 = findCoefficient(Math.floor(fact_4.toPrecision(2)), sign).toPrecision(2);
  }

  if (fact_5 !== 0) {
    if (fact_5 < 1) {
      fact_5 = 1 / fact_5;
      sign = -1;
    } else {
      sign = 1;
    }
    coeff_5 = findCoefficient(Math.floor(fact_5), sign).toPrecision(2);
  }

  console.log("coeff_4: ", coeff_4);
  console.log("coeff_5: ", coeff_5);

  const weightedSum =
    rating_1 +
    rating_2 * 2 +
    rating_3 * 3 +
    4 * coeff_4 * rating_4 +
    5 * coeff_5 * rating_5;
  const totalGivenRatings =
    rating_1 + rating_2 + rating_3 + rating_4 + rating_5;

  console.log("weightedSum: ", weightedSum);
  console.log("totalRatings: ", totalGivenRatings);

  const rating = weightedSum / totalGivenRatings;
  console.log("result: ", rating);
  return rating;
}
