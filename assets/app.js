function criarCartasManeiras(categoria, perguntas, respostas) {
    let container = document.getElementById('container')
    let CartasManeiras = document.createElement('article')
    CartasManeiras.className = 'CartasManeiras'

    CartasManeiras.innerHTML = 
    `<div class="conteudo">
        <h3>${categoria}</h3>
            <div class="pergunta">
                    ${perguntas}
            </div>
            <div class="resposta">
                    ${respostas}
            </div>
    </div>`


    container.appendChild(CartasManeiras)
}