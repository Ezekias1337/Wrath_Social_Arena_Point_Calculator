import { calculatePoints2s } from "./calculations/calculatePoints2s.js";
import { calculatePoints3s } from "./calculations/calculatePoints3s.js";
import { calculatePoints5s } from "./calculations/calculatePoints5s.js";

import { calculateRating2s } from "./calculations/calculateRating2s.js";
import { calculateRating3s } from "./calculations/calculateRating3s.js";
import { calculateRating5s } from "./calculations/calculateRating5s.js";

import { incrementPoints2s } from "./calculations/incrementPoints2s.js";
import { incrementPoints3s } from "./calculations/incrementPoints3s.js";
import { incrementPoints5s } from "./calculations/incrementPoints5s.js";

import { decrementPoints2s } from "./calculations/decrementPoints2s.js";
import { decrementPoints3s } from "./calculations/decrementPoints3s.js";
import { decrementPoints5s } from "./calculations/decrementPoints5s.js";

import { resetArenaCalculator } from "./resetArenaCalculator.js";

export const addEventListeners = () => {
  // Input fields
  const input2s = document.getElementById("2s");
  const input3s = document.getElementById("3s");
  const input5s = document.getElementById("5s");

  input2s.addEventListener("keyup", calculatePoints2s);
  input3s.addEventListener("keyup", calculatePoints3s);
  input5s.addEventListener("keyup", calculatePoints5s);

  const output2s = document.getElementById("2s-output");
  const output3s = document.getElementById("3s-output");
  const output5s = document.getElementById("5s-output");

  output2s.addEventListener("keyup", calculateRating2s);
  output3s.addEventListener("keyup", calculateRating3s);
  output5s.addEventListener("keyup", calculateRating5s);

  // Incrementor Arrows
  const increment2s = document.getElementById("increment-2s");
  const increment3s = document.getElementById("increment-3s");
  const increment5s = document.getElementById("increment-5s");

  const decrement2s = document.getElementById("decrement-2s");
  const decrement3s = document.getElementById("decrement-3s");
  const decrement5s = document.getElementById("decrement-5s");

  increment2s.addEventListener("click", incrementPoints2s);
  increment3s.addEventListener("click", incrementPoints3s);
  increment5s.addEventListener("click", incrementPoints5s);

  decrement2s.addEventListener("click", decrementPoints2s);
  decrement3s.addEventListener("click", decrementPoints3s);
  decrement5s.addEventListener("click", decrementPoints5s);

  // Reset button
  const resetButton = document.getElementById("resetArenaPoints");
  resetButton.addEventListener("click", resetArenaCalculator);
};
