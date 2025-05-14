const board = document.querySelector('.board');

// Cria 28 células hexagonais
for (let i = 0; i < 28; i++) {
  const hex = document.createElement('div');
  hex.classList.add('hex');

hex.onclick = function() {
  hex.innerHTML = '';
};

  // Eventos de drag & drop
  hex.addEventListener('dragover', e => {
    e.preventDefault();
    hex.classList.add('over');
  });

  function limparTabuleiro() {
  document.querySelectorAll('.hex').forEach(hex => hex.innerHTML = '');
};

  hex.addEventListener('dragleave', () => {
    hex.classList.remove('over');
  });

  hex.addEventListener('drop', e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    const unit = document.querySelector(`[data-name="${data}"]`).cloneNode(true);
    hex.innerHTML = '';
    hex.appendChild(unit);
    hex.classList.remove('over');
  });




  board.appendChild(hex);
}

// Unidades - arrastar
const units = document.querySelectorAll('.unit');
units.forEach(unit => {
  unit.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text', unit.dataset.name);
  });
});
