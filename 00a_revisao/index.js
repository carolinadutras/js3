// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

console.log('oi')

const body = document.body;
// const body = document.querySelector('body');
// console.log ('pegou meu corpinho de novo');
// body.style.backgroundColor = 'rgb()';
// const intRandon = parseInt( Math.random()*255);
// console.log (intRandon)

const btn = document.getElementById('trocaCor');
console.log('eu te escuto botao');
btn.addEventListener('click', mudaCor)

function geraInteiro() {
    const n = parseInt (Math.random()* 255);
    return n;    
}

function mudaCor() {
    const r = geraInteiro();
    const g = geraInteiro();
    const b = geraInteiro();
    // const r = parseInt( Math.random()*255);
    // const g = parseInt( Math.random()*255);
    // const b = parseInt( Math.random()*255);
// console.log('entrei na função');

console.log(r ,g ,b)
body.style.backgroundColor = 'rgb('+r+','+g+','+ b +')' 
    
}