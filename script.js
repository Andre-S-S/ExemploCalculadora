const display = document.getElementById('resultado');
const valores = document.querySelectorAll('[id*=btn');
const operadores = document.querySelectorAll('[id*=sinal');

let novoValor = true;
let sinal;
let valorAnterior;

const operacaoPendente = () => sinal != undefined;

const calcular = () => {
    if (operacaoPendente()) {
        const valorAtual = display.textContent;
        novoValor = true;
        const resultado = eval(`${valorAnterior}${sinal}${valorAtual}`);
        atualizarDisplay(resultado);
    }
}

const atualizarDisplay = (texto) => {
    if (novoValor) {
        display.textContent = texto;
        novoValor = false;
    } else {
        display.textContent += texto;
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
valores.forEach (numero => numero.addEventListener('click', inserirNumero));

const selecionarSinal = (evento) => {
    if (!novoValor) {
        calcular();
        novoValor = true;
        sinal = evento.target.textContent;
        valorAnterior = parseFloat(display.textContent);
    }
}

operadores.forEach (sinal => sinal.addEventListener('click', selecionarSinal));

const ativarIgual = () => {
    calcular();
    sinal = undefined;
}

document.getElementById('igual').addEventListener('click', ativarIgual);

const limparResultado = () => display.textContent = '';
document.getElementById('limparResultado').addEventListener('click', limparResultado);

const limparCalculo = () => {
    limparResultado();
    sinal = undefined;
    novoValor = true;
    valorAnterior = undefined;
}

document.getElementById('limparCalculo').addEventListener('click', limparCalculo);

function color(cor) {
    if (cor == 15) {
        document.body.style.backgroundImage = 'linear-gradient(45deg, black, rgb(15, 45, 141))';
    }

    if (cor == 25) {
        document.body.style.backgroundImage = 'linear-gradient(45deg, black, rgb(25, 126, 22))';
    }

    if (cor == 21) {
        document.body.style.backgroundImage = 'linear-gradient(45deg, black, rgb(21, 124, 124))';
    }

    if (cor == 179) {
        document.body.style.backgroundImage = 'linear-gradient(45deg, black, rgb(179, 6, 6))';
    }
}

const mapaTeclado = {
    '0'         : 'btn0',
    '1'         : 'btn1',
    '2'         : 'btn2',
    '3'         : 'btn3',
    '4'         : 'btn4',
    '5'         : 'btn5',
    '6'         : 'btn6',
    '7'         : 'btn7',
    '8'         : 'btn8',
    '9'         : 'btn9',
    'c'         : 'limparCalculo',
    'Backspace' : 'limparResultado',
    '.'         : 'btnVirgula',
    '/'         : 'sinalDividir',
    '*'         : 'sinalMultiplicar',
    '-'         : 'sinalSubtrair',
    '+'         : 'sinalAdicionar',
    'Enter'     : 'igual'
}

const teclado = (evento) => {
    const tecla = evento.key;

    const teclaEscolhida = () => Object.keys(mapaTeclado).indexOf(tecla) != -1;
    if (teclaEscolhida())
        document.getElementById(mapaTeclado[tecla]).click();
}

document.addEventListener('keydown', teclado);