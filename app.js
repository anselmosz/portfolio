const $html = document.querySelector("html");
const $theme = document.getElementById("theme-selector");

$theme.addEventListener("click", function() {
  $html.classList.toggle("light-mode");
  $modo.classList("light");
});
