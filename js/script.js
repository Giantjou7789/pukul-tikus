const tanah = document.querySelectorAll('.tanah');
const buaya = document.querySelectorAll('.buaya');
const score = document.querySelector('.score');


let tanahsebelumnya;
let selesai ;
let skor ;


function randomtanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const trandom = tanah[t];

    if(trandom == tanahsebelumnya) {
        randomtanah(tanah);
    }
    tanahsebelumnya = trandom;
    return trandom;
} 
   
function randomwaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min );
}

function munculkanbuaya() {
    const trandom = randomtanah(tanah);
    const wrandom = randomwaktu(300, 1000);
     trandom.classList.add('muncul');   
     
     setTimeout(() => {
        trandom.classList.remove('muncul');
        if( !selesai) {
            munculkanbuaya();
        }
     }, wrandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    score.textContent = 0;
    munculkanbuaya();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    skor++;
    score.textContent = skor;
    this.parentNode.classList.remove('muncul');

}

buaya.forEach(t => {
    t.addEventListener('click', pukul);

});