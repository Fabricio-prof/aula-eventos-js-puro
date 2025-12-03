// 1. Exemplo Básico: Click
const btnClick = document.getElementById("btn-click");
const outputClick = document.getElementById("output-click");

// Função de callback (listener)
function handleButtonClick() {
  outputClick.textContent =
    "Status: Botão clicado! Hora: " + new Date().toLocaleTimeString();
  btnClick.style.backgroundColor = "#dc3545"; // Muda a cor para demonstrar a ação
}

// Anexando o listener
btnClick.addEventListener("click", handleButtonClick);

// 2. Objeto Evento e Prevenção de Padrão
const linkPrevent = document.getElementById("link-prevent");
const outputPrevent = document.getElementById("output-prevent");

linkPrevent.addEventListener("click", function (event) {
  // event.preventDefault() impede a ação padrão do navegador (navegar para o link)
  event.preventDefault();
  outputPrevent.textContent =
    "Status: Ação padrão do link prevenida! O Objeto Evento foi: " + event.type;
  linkPrevent.style.color = "#28a745";
});

// 3. Borbulhamento (Bubbling)
const divPai = document.getElementById("div-pai");
const divFilho = document.getElementById("div-filho");
const btnNeto = document.getElementById("btn-neto");
const outputBubbling = document.getElementById("output-bubbling");

function logEvent(elementName, event) {
  outputBubbling.innerHTML += `  
Evento '${event.type}' capturado por: <strong>${elementName}</strong>`;
}

// Listeners na fase de Borbulhamento (padrão)
divPai.addEventListener("click", function (event) {
  logEvent("Div Pai", event);
});

divFilho.addEventListener("click", function (event) {
  logEvent("Div Filho", event);
});

btnNeto.addEventListener("click", function (event) {
  // event.stopPropagation(); // Descomente para parar o borbulhamento aqui
  logEvent("Botão Neto", event);
});

// Listener na fase de Captura (o 'true' no terceiro argumento)
// Este listener será executado antes de todos os outros na fase de borbulhamento
divPai.addEventListener(
  "click",
  function () {
    // Limpa o output após 2 segundos para nova demonstração
    setTimeout(() => {
      outputBubbling.innerHTML = "Status: Clique nos elementos acima.";
    }, 2000);
  },
  true
);

// 4. Remover Listener (`removeEventListener`)
const btnRemover = document.getElementById("btn-remover");
const outputRemover = document.getElementById("output-remover");
let isListenerActive = true;

// A função de callback deve ser uma referência nomeada para ser removida
function toggleBackground() {
  const currentColor = btnRemover.style.backgroundColor;
  btnRemover.style.backgroundColor =
    currentColor === "blue" ? "#28a745" : "blue";
  outputRemover.textContent = `Status: Listener ativo. Cor alterada para ${btnRemover.style.backgroundColor}`;
}

// Anexando o listener inicial
btnRemover.addEventListener("click", toggleBackground);

// Listener para ativar/desativar o listener principal
btnRemover.addEventListener("dblclick", function () {
  if (isListenerActive) {
    // Para remover, a função de callback DEVE ser a mesma referência usada para adicionar
    btnRemover.removeEventListener("click", toggleBackground);
    outputRemover.textContent =
      "Status: Listener REMOVIDO! O clique não fará mais nada.";
    btnRemover.style.backgroundColor = "red";
  } else {
    btnRemover.addEventListener("click", toggleBackground);
    outputRemover.textContent =
      "Status: Listener RE-ADICIONADO! Clique novamente.";
    btnRemover.style.backgroundColor = "#28a745";
  }
  isListenerActive = !isListenerActive;
});
