import Util from './util.js';

const listElementos = [
  'nav-doces',
  'nav-lojas',
  'nav-clientes',
  'nav-sobre',
  'nav-contato'
];

listElementos.forEach(e => Util(e, 'main-section'));
document.getElementById('nav-doces').click();
