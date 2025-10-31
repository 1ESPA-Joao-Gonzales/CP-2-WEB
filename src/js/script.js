function trocar(cor) {
  // muda o fundo do site
  document.body.style.background = cor;

  // define cores de texto e do header/menu
  let corTexto;
  let corHeader;

  if (cor === "#004EB5") {          // vinho
    corTexto = "white";
    corHeader = "#003985ff";

  } else if (cor === "#454545") {   // cinza escuro
    corTexto = "white";
    corHeader = "#2E2E2E";

  } else if (cor === "#ffffffff") {   // claro
    corTexto ="black";
    corHeader = "#b9b9b9ff";
  }

  // muda a cor do texto do site
  document.body.style.color = corTexto;


  // muda a cor dos links do menu
  let links = document.querySelectorAll(".menu a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = corTexto;
  }

  // muda a cor do header
  let header = document.querySelector(".partePreta");
  header.style.background = `linear-gradient(#F5D3C1, ${corHeader})`;

  // muda a cor do fundo do menu
  let menu = document.querySelector(".menu");
  menu.style.backgroundColor = corHeader;

  let footer = document.querySelector(".copy");
  footer.style.backgroundColor = corHeader;

}
