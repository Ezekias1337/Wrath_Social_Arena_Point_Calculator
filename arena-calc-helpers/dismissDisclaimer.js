export const dismissDisclaimer = () => {
  const disclaimerWarningWrapper = document.getElementById(
    "disclaimerWarningWrapper"
  );
  disclaimerWarningWrapper.remove();
};
