const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");

// Check system preference for darkmode

// if (window.matchMedia && window.matchMedia("(prefers-color-scheme:light)").matches) {
//   document.documentElement.classList.remove("dark");
//   darkBtn.classList.remove("hidden");
//   lightBtn.classList.add("hidden");
// }

// Toggle dark mode

document.querySelectorAll("header button").forEach((button) => {
  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    darkBtn.classList.toggle("hidden");
    lightBtn.classList.toggle("hidden");
  });
});
