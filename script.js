const mensagem = document.getElementById('mensagem');
const salis = document.getElementById('salis');
let carinhoHoje = localStorage.getItem('carinho') || '0';
let comidaHoje = localStorage.getItem('comida') || '0';

function atualizarLocalStorage(chave) {
  const dataHoje = new Date().toLocaleDateString();
  localStorage.setItem(chave, dataHoje);
}

function darCarinho() {
  const dataHoje = new Date().toLocaleDateString();
  if (carinhoHoje === dataHoje) {
    mensagem.innerText = 'Você já deu carinho hoje 🧡';
  } else {
    mensagem.innerText = 'Salis ficou muito feliz com seu carinho! 🥹';
    carinhoHoje = dataHoje;
    atualizarLocalStorage('carinho');
    animarSalis();
  }
}

function alimentar() {
  const dataHoje = new Date().toLocaleDateString();
  if (comidaHoje === dataHoje) {
    mensagem.innerText = 'Você já alimentou o Salis hoje 🍽️';
  } else {
    mensagem.innerText = 'Hmmm que comidinha gostosa! Obrigado 🐟';
    comidaHoje = dataHoje;
    atualizarLocalStorage('comida');
    animarSalis();
  }
}

function dormir() {
  mensagem.innerText = 'Boa noite! O Salis foi descansar 💤';
  salis.style.opacity = '0.4';
  setTimeout(() => {
    salis.style.opacity = '1';
    mensagem.innerText = 'O Salis acordou descansado e feliz 💙';
  }, 4000);
}

function animarSalis() {
  let novaPosicao = Math.random() * (window.innerWidth - 100);
  salis.style.left = novaPosicao + 'px';
}