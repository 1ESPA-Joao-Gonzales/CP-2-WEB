let imagens = [
    '/src/assets/imgs/hell.webp',
    '/src/assets/imgs/perigosa.webp',
    '/src/assets/imgs/abstrax.webp',
    '/src/assets/imgs/cacau.webp',
    '/src/assets/imgs/dogma.webp',
    '/src/assets/imgs/locomotive.png',
];
let tempo = 2300;

let i = 0;

function slideShow(){
    document.getElementById("img").src=imagens[i];
    i++;
    if(i >= imagens.length){
        i=0;
    }
    setTimeout(slideShow,tempo)
}
slideShow();