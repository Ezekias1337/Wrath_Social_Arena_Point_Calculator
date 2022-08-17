export const calculateRating2s = () => {
  const inputElement2 = document.getElementById("2s-output");
  const outputElement2 = document.getElementById("2s");

  let desiredPoints = inputElement2.value;
  let ratingOutput2s;

  if (desiredPoints >= 150) {
    ratingOutput2s = Math.ceil(
      (1 / -0.00412) *
        (Math.log((1022 / (desiredPoints - 580) - 1) / 123) / Math.log(2.71828))
    );

    ratingOutput2s = Math.round(ratingOutput2s / 0.7732474964234621);
    outputElement2.value = ratingOutput2s;
  } else if (desiredPoints < 150 || inputElement2.value === "") {
    outputElement2.value = "";
  } else {
    outputElement2.value = 0;
  }
};
