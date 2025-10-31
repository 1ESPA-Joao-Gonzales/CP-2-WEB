document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault(); // evita que a página recarregue

  // pega as respostas marcadas
  let p1 = document.querySelector('input[name="pergunta1"]:checked');
  let p2 = document.querySelector('input[name="pergunta2"]:checked');
  let p3 = document.querySelector('input[name="pergunta3"]:checked');
  let p4 = document.querySelector('input[name="pergunta4"]:checked');

  // verifica se todas foram respondidas
  if (!p1 || !p2 || !p3 || !p4) {
    alert("Por favor, responda todas as perguntas antes de enviar!");
    return;
  }
});
