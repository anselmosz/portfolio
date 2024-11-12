const $html = document.querySelector('html');
const $modo = document.getElementById("select");

$modo.addEventListener("click", function () {
  $html.classList.toggle("light-mode");
  $modo.classList.toggle("light");

  $modo.classList.toggle("dark-mode");
  const imagem = document.getElementById("imagem-tema");
  if ($modo.classList.contains("dark-mode")) {
    imagem.src = "./images/typing-bro-blue.png";
  } else {
      imagem.src = "./images/typing-bro-red.png";
  }
});