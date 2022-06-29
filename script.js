const images = [{
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

//Milestone 1 Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
//seleziono il carosello, lo popolo delle immagini nascondendole inizialmente, 
//infine per la prima immagine rimuovo la classe per nasconderla e ne metto un altra display block

let carousel = document.querySelector(`.carousel`);
let title = document.getElementById(`title`);
let description = document.getElementById(`description`);
let index = 0;
visualizeImage(0);

function visualizeImage(indexPassed) {
    carousel.innerHTML = "";
    images.forEach((element, index) => {
        if (indexPassed == index) {
            carousel.innerHTML += `<img src="${element.url}" class="w-100  d-block">`;
            title.innerHTML = element.title
            description.innerHTML = element.description
        } else
            carousel.innerHTML += `<img src="${element.url}" class="w-100 visually-hidden">`;
    });
}

previousBtn = document.getElementById("previous-btn");
followingBtn = document.getElementById("following-btn");

function checkright() {
    if (index >= images.length - 1) {
        index = 0;
    } else
        index++;
}

followingBtn.addEventListener(`click`, function() {
    checkright();
    visualizeImage(index);
});

function checkleft() {
    if (index === 0) {
        index = images.length - 1;
    } else
        index--;
}

previousBtn.addEventListener(`click`, function() {
    checkleft();
    visualizeImage(index);
});