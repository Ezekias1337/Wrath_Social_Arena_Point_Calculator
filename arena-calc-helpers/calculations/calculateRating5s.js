export const calculateRating5s = () => {
  const inputElement5 = document.getElementById("5s-output");
  const outputElement5 = document.getElementById("5s");

  let desiredPoints = inputElement5.value;
  let ratingOutput5s;

  if (desiredPoints >= 150) {
    ratingOutput5s = Math.round(
      Math.ceil(
        (1 / -0.00412) *
          (Math.log((1022 / (desiredPoints - 580) - 1) / 123) /
            Math.log(2.71828))
      )
    );
    outputElement5.value = ratingOutput5s;
  } else if (desiredPoints < 150 || inputElement5.value === "") {
    outputElement5.value = "";
  } else {
    outputElement5.value = 0;
  }
};
