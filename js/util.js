import GetData from './dados.js';

const Util = (elementoNavegacao, elementoExibicao) => {
  init(elementoNavegacao, elementoExibicao);
};

const init = (elementoNavegacao, elementoExibicao) => {
  document.getElementById(elementoNavegacao)
    .addEventListener('click', () => exibirElementos(elementoNavegacao, elementoExibicao));
};

const exibirElementos = (elementoNavegacao, elementoExibicao) => {
  const el = document.getElementById(elementoExibicao)
  el.innerHTML = GetData(elementoNavegacao);
  const elForm = document.getElementById('form')
  if(elForm !== undefined){
    definirForm(elementoExibicao);
  }
};

const definirForm = (elementoExibicao) => {
  const el = document.getElementById(elementoExibicao);
  const elMenssagem = document.getElementById('form-message');
  el.addEventListener('submit', function(e) {
    let m = '';
    let error = false;
    if (e.target['nome'].value == '') {
      error = true;
      m += `<div class="message-error">Necessário informar um nome.</div>`;
    }
    if (e.target['email'].value == ''){
      m += `<div class="message-error">Necessário informar um email.</div>`;
      error = true;
    }
    else if (!ValidateEmail(e.target['email'].value)) {
      m += `<div class="message-error">Necessário informar um email válido.</div>`;
      error = true;
    }
    if (e.target['mensagem'].value == '') {
      m += `<div class="message-error">Necessário informar uma mensagem.</div>`;
      error = true;
    }
    if (error)
    document.getElementById('form-message').innerHTML = m += '';
    else {
      e.target['nome'].value = "";
      e.target['mensagem'].value = "";
      e.target['email'].value = "";
      m = `<div class="message-success">Mensagem enviada com sucesso em ${Date().toLocaleString()}</div>`;
      document.getElementById('form-message').innerHTML = m;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  });
};

// Fonte: Adaptado de w3resource (https://www.w3resource.com/javascript/form/email-validation.php)
function ValidateEmail(mail) {
  return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
}

export default Util;
