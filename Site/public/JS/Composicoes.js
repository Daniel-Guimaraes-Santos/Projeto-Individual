const Campo = document.querySelector('.Campo');

for (let i = 0; i < 28; i++) {
  const hexagono = document.createElement('div');
  hexagono.classList.add('hexagono');

hexagono.onclick = () => {
  hexagono.innerHTML = '';
};

  // Eventos de drag & drop
  hexagono.addEventListener('dragover', event => {
    event.preventDefault();
  });

  function limparTabuleiro() {
  document.querySelectorAll('.hexagono').forEach(hexagono => hexagono.innerHTML = '');
};

  hexagono.addEventListener('drop', event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const unidade = document.querySelector(`[data-name="${data}"]`).cloneNode(true);
    hexagono.innerHTML = '';
    hexagono.appendChild(unidade);
  });


  Campo.appendChild(hexagono);
}

const Unidades = document.querySelectorAll('.unidade');
Unidades.forEach(unidade => {
  unidade.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text', unidade.dataset.name);
  });
}); 

