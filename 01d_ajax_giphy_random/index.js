

// const request = new XMLHttpRequest()


// const urlRequest = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=3&offset=0'

// // const url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=3&offset=0'

// request.onreadystatechange = mostraGif;

// const img = document.getElementById('imagem')
// // const body = document.getElementById('body')
// // let img2 = document.createElement('img')
// // let img3 = document.createElement('img')

// // body.appendChild(img2);
// // body.appendChild(img3);

// // request.open('GET', url);

// request.open('GET', urlRequest);
// request.send()


// function mostraGif() {
//     if (request.readyState === 4 && request.status === 200){
//         const response = request.response;
//         const json = JSON.parse(response)      

//         console.log(json);
//         // console.log(typeof response)
        

//         // console.log(json.data[0].images.original.url);
//         // console.log(json.data[1].images.original.url);
//         // console.log(json.data[2].images.original.url);

//         // img.src = json.data[0].images.original.url;

//         // img2.src = json.data[1].images.original.url;

//         // img3.src = json.data[2].images.original.url;

//         // const imgSrc0 = json.data[0].images.original.url;

//         // document.querySelector('#imagem').src = imgSrc0

//         const imgSrc = json.data[0].images.original.url;
//         document.querySelector('#imagem').src=imgSrc;

//         // const imgSrc2 = json.data[2].images.original.url;
//         // document.querySelector('#imagem').src = imgSrc2
    
//     } else {

//     }
// }
// // const response = request.response;
// // console.log (response)
// // nao funcionou merdaaaaaaaaaaaaaa





const request = new XMLHttpRequest()


const urlRequest = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=3&offset=0'


request.onreadystatechange = mostraGif;

const img = document.getElementById('imagem')


request.open('GET', urlRequest);
request.send()


function mostraGif() {
    if (request.readyState === 4 && request.status === 200){
        const response = request.response;
        const json = JSON.parse(response)      

        console.log(json);
    

        const imgSrc = json.data[0].images.original.url;
        // document.querySelector('#imagem').src=imgSrc;

        const body = document.body;
        body.innerHTML = `<img src=${json.data[0].images.original.url}>
        <img src=${json.data[1].images.original.url}>
        <img src=${json.data[2].images.original.url}>`
        

    
    } else {

    }
}
// const response = request.response;
// console.log (response)

