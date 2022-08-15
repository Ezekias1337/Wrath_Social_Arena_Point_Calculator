import { dismissDisclaimer } from "./dismissDisclaimer.js";
import { calculatePoints2s } from "./calculations/calculatePoints2s.js";
import { calculatePoints3s } from "./calculations/calculatePoints3s.js";
import { calculatePoints5s } from "./calculations/calculatePoints5s.js";
import { resetArenaCalculator } from "./resetArenaCalculator.js";

export const addEventListeners = () => {
  // Dismiss disclaimer
  const dismissDisclaimerButton = document.getElementById(
    "dismissDisclaimerWarning"
  );
  dismissDisclaimerButton.addEventListener("click", dismissDisclaimer);

  // Input fields
  const input2s = document.getElementById("2s");
  const input3s = document.getElementById("3s");
  const input5s = document.getElementById("5s");

  input2s.addEventListener("keyup", calculatePoints2s);
  input3s.addEventListener("keyup", calculatePoints3s);
  input5s.addEventListener("keyup", calculatePoints5s);

  // Reset button
  const resetButton = document.getElementById("resetArenaPoints");
  resetButton.addEventListener("click", resetArenaCalculator);
};
