(() => {
  "use strict";

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("pointerdown", () => link.classList.add("is-pressed"));
    ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
      link.addEventListener(eventName, () => link.classList.remove("is-pressed"));
    });
  });
})();
