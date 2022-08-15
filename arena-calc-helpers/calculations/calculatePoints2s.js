export const calculatePoints2s = () => {
  const inputElement2 = document.getElementById("2s");
  const outputElement2 = document.getElementById("2s-output");

  let pointOutput2s;
  let points = inputElement2.value;

  if (points >= 150) {
    const exponent = -0.00412 * points;
    const resultFromExponentParse = Math.pow(2.71828, exponent);

    pointOutput2s = Math.floor(
      (1022 / (1 + 123 * resultFromExponentParse) + 580) * 0.76
    );

    outputElement2.value = pointOutput2s;
  } else if (points < 150 || inputElement2.value === "") {
    outputElement2.value = "";
  } else {
    outputElement2.value = 0;
  }
};
