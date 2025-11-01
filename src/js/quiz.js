document.getElementById("quiz-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // coleta respostas
  let p1 = document.querySelector('input[name="pergunta1"]:checked');
  let p2 = document.querySelector('input[name="pergunta2"]:checked');
  let p3 = document.querySelector('input[name="pergunta3"]:checked');
  let p4 = document.querySelector('input[name="pergunta4"]:checked');

  if (!p1 || !p2 || !p3 || !p4) {
    alert("Por favor, responda todas as perguntas antes de enviar!");
    return;
  }

  // pontuação de cada opção
  let sabores = { leve: 0, doce: 1, intenso: 2, amargo: 3 };
  let ocasioes = { churrasco: 0, jantar: 1, festas: 2, relaxar: 3 };
  let temperaturas = { gelada: 0, fria: 1, fresca: 2, ambiente: 3 };
  let comidas = { carne: 0, peixe: 1, massa: 2, aperitivos: 3 };

  // calcula índice (0 a 255)
  let indice =
    sabores[p1.value] * 64 +
    ocasioes[p2.value] * 16 +
    temperaturas[p3.value] * 4 +
    comidas[p4.value];

  // divide igualmente em 16 grupos
  let tipos = [
    " Pilsen — leve e refrescante, perfeita para churrascos e encontros casuais.",
    " American Lager — clara e suave, ideal para acompanhar frutos do mar.",
    " Blonde Ale — equilibrada e frutada, ótima com massas e queijos.",
    " Weissbier — cremosa e levemente doce, excelente para festas e celebrações.",
    " Witbier — cítrica e leve, combina com peixes e pratos leves.",
    " Belgian Ale — aromática e complexa, ideal para relaxar.",
    " Brown Ale — maltada e encorpada, perfeita com carnes vermelhas.",
    " Stout — escura e forte, ideal para churrascos e carnes defumadas.",
    " Porter — com notas de café e chocolate, ótima para noites frias.",
    " IPA — amarga e aromática, ideal para quem gosta de sabores marcantes.",
    " APA — equilibrada e cítrica, perfeita com massas e molhos ricos.",
    " Double IPA — intensa e marcante, para os que buscam potência.",
    " Saison — frutada e seca, refrescante para dias quentes.",
    " Golden Ale — leve e dourada, ótima para eventos e comemorações.",
    " Red Ale — caramelada e doce, perfeita para petiscos e festas.",
    " India Pale Lager — equilibrada, une leveza da lager com o amargor da IPA."
  ];

  // seleciona o grupo
  let tipoSelecionado = tipos[Math.floor(indice / 16)];

  // mostra resultado
  let resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("resultado");
  resultadoDiv.innerHTML = `<h3>Sua cerveja ideal é:</h3><p>${tipoSelecionado}</p>`;

  let container = document.getElementById("resultado-container");
  container.innerHTML = ""; // limpa resultados anteriores
  container.appendChild(resultadoDiv);
  resultadoDiv.scrollIntoView({ behavior: "smooth" });
});
