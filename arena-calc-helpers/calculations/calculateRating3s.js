export const calculateRating3s = () => {
  const inputElement3 = document.getElementById("3s-output");
  const outputElement3 = document.getElementById("3s");

  let desiredPoints = inputElement3.value;
  let ratingOutput3s;

  if (desiredPoints >= 150) {
    ratingOutput3s = Math.ceil(
      (1 / -0.00412) *
        (Math.log((1022 / (desiredPoints - 580) - 1) / 123) / Math.log(2.71828))
    );

    ratingOutput3s = Math.round(ratingOutput3s / 0.8919141914191419);
    outputElement3.value = ratingOutput3s;
  } else if (desiredPoints < 150 || inputElement3.value === "") {
    outputElement3.value = "";
  } else {
    outputElement3.value = 0;
  }
};
