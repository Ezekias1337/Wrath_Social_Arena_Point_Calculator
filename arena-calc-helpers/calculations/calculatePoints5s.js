export const calculatePoints5s = () => {
  const inputElement5 = document.getElementById("5s");
  const outputElement5 = document.getElementById("5s-output");

  let points;
  let pointOutput5s;
  points = inputElement5.value;

  if (points >= 150) {
    const exponent = -0.00412 * points;
    const resultFromExponentParse = Math.pow(2.71828, exponent);

    pointOutput5s = Math.ceil(1022 / (1 + 123 * resultFromExponentParse) + 580);

    outputElement5.value = pointOutput5s;
  } else if (points < 150 || inputElement5.value === "") {
    outputElement5.value = "";
  } else {
    outputElement5.value = 0;
  }
};
