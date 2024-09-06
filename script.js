const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "por que o desmatamento vem crescendo a cada dia?",
    alternativas: [
        {
texto:"falta de fiscalização",
afirmacao:"Você acredita que a fiscalização é fallha."
        },
{
    texto:"Venda de eucalipto",
    afirmacao:"Você não tem conhecimento sobre o real motivo do desmatamento."
}
]
    },
    {
        enunciado: "uma das consequencias do desmatamento tem sido?",
        alternativas: [
            {
    texto:"desiquilibrio ambiental",
    afirmacao:"Você acredita que o desiquilibrio ambiental é o principal motivo do desmatamento."
            },
   {
    texto:"acredita que o desmatamento gera um grande problema",
    afirmacao:"Você tem dúvidas sobre o desmatamento."
   },
    ]
        },
        {
            enunciado: "o que fazer para recuperar as areas desmatadas?",
            alternativas: [
                {
   texto:"reflorestamento",
   afirmacao:"Você acredita na melhoria do meio ambiente."
                },
                {
      texto: "Não tem solução",
      afirmacao:"Você não acredit que exista solução de melhoria para o meio ambiente."
                }
        ]
            },
   ];
   let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();