const cover = document.getElementById('cover');
const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const backcover = document.getElementById('back-cover');
const book = document.getElementById('book');
let open = false;
let currentPage = 1;

cover.addEventListener('click', () => {
    if (!open) {
        // Abre el libro (gira la portada)
        cover.style.transform = 'rotateY(-180deg)';
        book.style.transform = 'perspective(2000px) rotateZ(-10deg)';
        cover.style.zIndex = 1
        cover.style.boxshadow = '100px 10px 8px 5px rgba(0, 0, 0, .27)';
        open = true;
    } else {
        // Cierra el libro (gira la portada)
        open = false;
        cover.style.transform = 'rotateY(0deg)';
    }
});

// Al hacer clic en la página 1
page1.addEventListener('click', () => {
    if (open && currentPage === 1) {
        // Gira la página 1 hacia atrás
        page1.style.transform = 'rotateY(-180deg)';
        cover.style.zIndex = 0;
        page2.style.zIndex = 2; // Página 2 está encima
        page1.style.zIndex = 3 // Página 1 está ahora debajo
        currentPage = 2;
    }else{
        if (open && currentPage === 2){
            page1.style.transform = 'rotateY(0deg)';
            currentPage = 1;
            page1.style.zIndex = 2 // Página 1 está ahora debajo
            page2.style.zIndex = 1; // Página 2 está encima
        }
    }
});

// Al hacer clic en la página 2
page2.addEventListener('click', () => {
    if (open && currentPage === 2) {
        // Gira la página 2 hacia atrás
        page2.style.transform = 'rotateY(-180deg)';
        page1.style.zIndex = 1 // Página 1 está ahora debajo
        page2.style.zIndex = 2; // Página 2 está encima
        currentPage = 3;
    }
    else{
        if (open && currentPage === 3) {
            // Gira la página 2 hacia atrás
            page2.style.transform = 'rotateY(0deg)';
            page2.style.zIndex = page2.style.zIndex+1; // Página 2 está ahora debajo
            currentPage = 2;
        }
    }
});


// Cerrar el libro desde la portada al hacer clic en la parte posterior de la portada
cover.addEventListener('transitionend', () => {
    if (!open) {
        page1.style.transform = 'rotateY(0deg)';
        page2.style.transform = 'rotateY(0deg)';
        cover.style.zIndex = '3';
        page1.style.zIndex = '2';
        page2.style.zIndex = '1';
    }
});
