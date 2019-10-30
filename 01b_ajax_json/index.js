// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach


// soluçao 1

// const url = './data/dados.json'

// const request = new XMLHttpRequest;

// request.onreadystatechange = mostraProfessoras;

// request.open('GET', url);
// request.send();


// function mostraProfessoras(){
//     console.log('entrou na função')
//     if (request.readyState === 4 && request.status === 200){
//     const response = request.response;
//     const json = JSON.parse(response);
//     console.log(json.data)
//     const body = document.body;
    
//     body.innerHTML += `
//       <img src=${json.data[0].imagem}>
//       <img src=${json.data[1].imagem}>
//       <img src=${json.data[2].imagem}>`
//   }


// }

//solução 2 usando for

const url = './data/dados.json'

const request = new XMLHttpRequest;

request.onreadystatechange = mostraProfessoras;

request.open('GET', url);
request.send();


function mostraProfessoras(){
    console.log('entrou na função')
    if (request.readyState === 4 && request.status === 200){
    const response = request.response;
    const json = JSON.parse(response);
    data = json.data
    const div = document.querySelector('#root');
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const img = `<img src = ${element.imagem}>`;
            div.innerHTML += img
        }


    }
}

    
}


