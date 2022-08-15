export const calculatePoints3s = () => {
  const inputElement3 = document.getElementById("3s");
  const outputElement3 = document.getElementById("3s-output");

  let points;
  let pointOutput3s;
  points = inputElement3.value;

  if (points >= 150) {
    const exponent = -0.00412 * points;
    const resultFromExponentParse = Math.pow(2.71828, exponent);

    pointOutput3s = Math.ceil(
      (1022 / (1 + 123 * resultFromExponentParse) + 580) * 0.88
    );

    outputElement3.value = pointOutput3s;
  } else if (points < 150 || inputElement3.value === "") {
    outputElement3.value = "";
  } else {
    outputElement3.value = 0;
  }
};
