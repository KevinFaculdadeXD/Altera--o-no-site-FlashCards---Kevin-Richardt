// Selecionando os elementos
const btnAdicionar = document.getElementById('btn-adicionar');
const container = document.getElementById('container');

// Função para criar o card visualmente
function criarCartasManeiras(categoria, pergunta, resposta) {
    const cartao = document.createElement('article');
    cartao.className = 'CartasManeiras';

    cartao.innerHTML = `
        <div class="conteudo">
            <div class="pergunta">
                <h3 style="color: #00ff88; font-size: 12px;">${categoria}</h3>
                <p>${pergunta}</p>
            </div>
            <div class="resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Faz o card girar ao clicar
    cartao.addEventListener('click', () => {
        cartao.classList.toggle('active');
    });

    container.appendChild(cartao);
}

// Função para pegar os dados do formulário
btnAdicionar.addEventListener('click', () => {
    const inputCategoria = document.getElementById('input-categoria');
    const inputPergunta = document.getElementById('input-pergunta');
    const inputResposta = document.getElementById('input-resposta');

    if (inputPergunta.value === '' || inputResposta.value === '') {
        alert("Preencha a pergunta e a resposta!");
        return;
    }

    criarCartasManeiras(inputCategoria.value, inputPergunta.value, inputResposta.value);

    // Limpa os campos
    inputCategoria.value = '';
    inputPergunta.value = '';
    inputResposta.value = '';
});