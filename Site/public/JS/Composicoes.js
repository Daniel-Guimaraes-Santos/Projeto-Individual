const Campo = document.querySelector('.Campo');

// Cria 28 divs
for (let i = 0; i < 28; i++) {
  const hexagono = document.createElement('div');
  hexagono.classList.add('hexagono');

hexagono.onclick = function() {
  hexagono.innerHTML = '';
};

  // Eventos de drag & drop
  hexagono.addEventListener('dragover', e => {
    e.preventDefault();
  });

  function limparTabuleiro() {
  document.querySelectorAll('.hexagono').forEach(hexagono => hexagono.innerHTML = '');
};

  hexagono.addEventListener('drop', e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    const unidade = document.querySelector(`[data-name="${data}"]`).cloneNode(true);
    hexagono.innerHTML = '';
    hexagono.appendChild(unidade);
  });


  Campo.appendChild(hexagono);
}

// Unidades - arrastar
const Unidades = document.querySelectorAll('.unidade');
Unidades.forEach(unidade => {
  unidade.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text', unidade.dataset.name);
  });
});

