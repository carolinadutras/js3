// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string

const body = document.body;
const btn = document.getElementById('trocaCor');

btn.addEventListener('click', function () {
        const r = geraInteiro();
        const g = geraInteiro();
        const b = geraInteiro();
    
    // body.style.backgroundColor = 'rgb('+r+','+g+','+ b +')' 
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

})

function geraInteiro() {
    const n = parseInt (Math.random()* 255);
    return n;    
}

