const doces = {
  nome: "Doces",
  elementos: [
    {
      imagem: 'brigadeiro.jpg',
      detalhes: {
        Nome: 'Brigadeiro',
        Resumo: 'O brigadeiro é um doce típico da culinária brasileira, com origem no Sudeste do país, que rapidamente se difundiu pelo Brasil, tornando-se comum em todo o país a sua presença em festas de aniversário, junto com doces como o cajuzinho e o beijinho. É conhecido também no Rio Grande do Sul pelo nome de negrinho.',
        Valor: 5
      }
    },
    {
      imagem: 'beijinho.jpg',
      detalhes: {
        Nome: 'Beijinho',
        Resumo: 'Beijinho ou Branquinho é um doce tipicamente brasileiro servido em festas de aniversário. Sua origem provém de alguns experimentos com leite condensado e leite de cabra coalhado, que daria um gosto levemente azedo quebrando o excesso de açúcar no seu sabor.',
        Valor:  4 
      }
    },
    {
      imagem: 'cocada.jpg',
      detalhes: {
        Nome: 'Cocada',
        Resumo: 'Cocada é um doce à base de coco, tradicional em várias regiões do mundo, especialmente na América Latina e em Angola. Existem variantes quanto a receita aplicada em diferentes países, como a utilização de gemas, leite, leite condensado, rapadura, amendoim, leite de coco e coco ralado queimado.',
        Valor: 7
      }
    }
  ]
}

const lojas = {
  nome: "Lojas",
  elementos: [
    {
      imagem: 'rp.jpg',
      detalhes: {
        Cidade: 'Ribeirão Preto, SP',
        Local: 'Rua São José, 933',
        Telefone: '(16) 3610-6674'
      }
    },
    {
      imagem: 'cajuru.jpg',
      detalhes: {
        Cidade: 'Cajuru, SP',
        Local: 'R. José Bonifácio, 889',
        Telefone: '(16) 3667-2589'
      }
    },
    {
      imagem: 'jaboticabal.jpg',
      detalhes: {
        Cidade: 'Jaboticabal',
        Local: 'Rua Rui Barbosa, 934',
        Telefone: '(16) 3204-8022'
      }
    }
  ]
}

const clientes = {
  nome: "Clientes",
  elementos: [
    {
      imagem: 'img_avatar.png',
      detalhes: {
        Nome: 'João Paulo',
        Email: 'joao@hotmail.com',
        Depoimento: 'Ótima confeitairia, sempre compro, brigadeiro maravilhoso.'
      }
    },
    {
      imagem: 'm_avatar.png',
      detalhes: {
        Nome: 'Camila',
        Email: 'camila@gmail.com',
        Depoimento: 'Melhor confeitaria da região, doces maravilhosos.'
      }
    },
    {
      imagem: 'img_avatar.png',
      detalhes: {
        Nome: 'Carlos',
        Email: 'carlos@gmail.com',
        Depoimento: 'Cocada incrível, me lembrou da minha infância de tão gostosa.'
      }
    }
  ]
}

const sobre = {
  nome: "Sobre",
  elementos: {
    Projeto: "Confeitaria",
    Nome: 'Eder Wilson Ulian  Filho',
    Codigo: '822500'
  }
}

const GetElements = (dados) => {
  let content = `
    <div class="container-dados">
      <div class="titulo">${dados.nome}</div>
  `;
  dados.elementos.forEach(d => {
    content += `
    <div class="column">
        <div class="card">
          <img src="img/${d.imagem}" alt="Avatar" style="width:100%">
          <div class="container">
            ${Object.keys(d.detalhes).map(n => `<h4>${n}</h4><p>${d.detalhes[n]}</p>`).join('')}
          </div>
        </div>
    </div>
  `});
  return content += '</div>';
}

const GetData = (nome) => {

  switch(nome)
  {
    case 'nav-doces': return GetElements(doces);
    case 'nav-lojas' : return GetElements(lojas);
    case 'nav-clientes': return GetElements(clientes);
    case 'nav-sobre' : return DadosSobre(sobre);
    case 'nav-contato': return DadosContato();
  }
}

const DadosSobre = (sobre) => {
  return `
    <div class="container-dados">
    <div class="titulo">${sobre.nome}</div>
      <div class="main-form">
        <h1>${sobre.elementos.Projeto}</h1>
        <h4>Aluno</h4>
        <p>${sobre.elementos.Nome}</p>
        <h4>Código</h4>
        <p>${sobre.elementos.Codigo}</p>
      <div>
    <div>
  `;
}

const DadosContato = () => {
  return `
    <div class="container-dados">
    <div class="titulo">Contato</div>
      <div class="main-form">
        <form id="form" method="post">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome"><br>
            <label for="email">Email</label><br>
            <input type="text" id="email" name="email"><br>
            <label for="mensagem">Mensagem</label><br>
            <textarea  type="text" id="mensagem" name="mensagem" rows="4" cols="50"></textarea><br>
            <button id="submit-form">Enviar</button>
        </form>
        <div class="form-message" id="form-message">
        </div>
      </div>
    <div>
  `;
}

export default GetData;
