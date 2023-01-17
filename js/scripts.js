/*

Milestone 0:
Focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
OK


Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
OK
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile 
OK

e dovremo aggiungervi titolo e testo.
OK


Milestone 2:
Aggiungere il ciclo infinito del carosello. 
Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra, l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso sinistra.

*/

// MILESTONE 0
// Creo array di 5 oggetti
const arrayContent = [
    {
        url: '01.webp',
        titolo: 'Spiderman',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aut.' 
    }, 
    {
        url: '02.webp',
        titolo: 'Spiderman',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aut.' 
    },
    {
        url: '03.webp',
        titolo: 'Spiderman',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aut.' 
    },
    {
        url: '04.webp',
        titolo: 'Spiderman',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aut.' 
    },
    {
        url: '05.webp',
        titolo: 'Spiderman',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aut.' 
    }
];


// Sostituisci a ogni proprietà url un tag immagine contenente src ciclato
for (i = 0; i < arrayContent.length; i++) {

    arrayContent[i].url = `<img class="img-size" src="img/${arrayContent[i].url}">`;
    arrayContent[i].titolo = `<div class="position-title">${arrayContent[i].titolo}</div>`;
    arrayContent[i].descrizione = `<p class="position-description">${arrayContent[i].descrizione}</p>`;
}

console.log(arrayContent);

// Inserisci ogni oggetto in un div 'slide'; ogni oggetto è composto da 1 immagine, 1 div e 1 paragrafo
let slide;

// Inserisci in div container le 5 slide create
const container = document.getElementById('container');


for (i = 0; i < arrayContent.length; i++) {

    slide = document.createElement('div');
    slide.classList.add('slide');

    slide.innerHTML = arrayContent[i].url;
    slide.innerHTML += arrayContent[i].titolo;
    slide.innerHTML += arrayContent[i].descrizione;
    // console.log(slide);


    container.append(slide);

    
}

console.log(container);


// MILESTONE 1
// Così prende tutti i div con classe slide --> si crea un array
const slides = document.querySelectorAll('.slide');
console.log(slides);

// Crea un identificativo per la slide corrente che si può incrementare o decrementare
let currentSlide = 0;

slides[currentSlide].classList.add('current');

// Prendi da HTML le frecce
const previous = document.getElementById('arrow-previous');

const next = document.getElementById('arrow-next');

// All'evento click avanti....
next.addEventListener ('click',

    function() {

        // Deve aggiungere alla slide la classe .current

        slides[currentSlide].classList.remove('current');


        // Controllo: se sono all'ultima slide, torna a prima slide
        if (currentSlide == slides.length - 1) {

            currentSlide = 0;
            
        }
        // Altrimenti procedi alla slide successiva
        else {
            currentSlide = currentSlide + 1;
        }

        slides[currentSlide].classList.add('current');
   

     }

)

// All'evento click indietro...

previous.addEventListener ('click',

    function() {

    // Deve aggiungere alla slide la classe .current

    slides[currentSlide].classList.remove('current');

    // Controllo: se sono all'ultima slide, torna a prima slide
    if (currentSlide == 0) {

        currentSlide = slides.length - 1;
        
    }
    // Altrimenti procedi alla slide successiva
    else {
        currentSlide = currentSlide - 1;
    }

    slides[currentSlide].classList.add('current');


    }

)
