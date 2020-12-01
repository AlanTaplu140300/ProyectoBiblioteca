function searchFunction() {
    search = document.getElementById("buscador").value;
    location.href = "change-book.html?search=" + search;
}

function searchMainFunction() {
    search = document.getElementById("buscador_hero_image").value;
    location.href = "change-book.html?search=" + search;
}

function fourBooks(){
    colspace = document.createElement("div");
    colspace.className = "col-md-1";
    books = document.getElementById("books_row");
    books.append(colspace); 
    busqueda = booksRandom();
    link = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + busqueda + '&key=AIzaSyBrQ_panRZUN-YKqP6p7a2g6hd4k2-MesM';
    cont = 0;
    fetch(link)
        .then(response => response.json())
        .then(data => data.items.forEach(
            element => {
                cont++;
                if (cont < 5) {
                    printBooks(element.volumeInfo,element, books,busqueda);
                }
            }
        ))
        .then(()=>{
            colspace2 = document.createElement("div");
            colspace2.className = "col-md-1";
            books.append(colspace2);
        }); 
}

function printBooks(element,element_complete, books,busqueda) {
    col = document.createElement("div");
    col.className = "col-md";
    card = document.createElement("div");
    card.className = "card border-primary mb-3";
    card_body = document.createElement("div");
    card_body.className = "card-body text-primary";
    img = document.createElement("img");
    img.className = "card-img-top image-fix"; 
    parrafo = document.createElement("p");
    parrafo.className = "card-text";
    h5 = document.createElement("h5");
    h5.className = "card-title";

    enlace = document.createElement("a");
    enlace.href = "prst.html?id=" + element_complete.id + "&search=" + busqueda; 

    h5.innerHTML =  element.title != undefined ? element.title.slice(0, 50) : "N/A";
    parrafo.innerHTML = element.description != undefined ? element.description.slice(0, 100) : "N/A";
    imgsrc = element.imageLinks != undefined ? element.imageLinks.thumbnail : "";
    img.src = imgsrc;

    card_body.append(h5);
    card_body.append(parrafo);

    card.append(img);
    card.append(card_body);

    enlace.append(card);

    col.append(enlace);

    books.append(col);
}

function booksRandom() {
    min = 0;
    max = 5;
    titles = ["Hunger Games","Programming","Harry Potter","Turismo","Game of Thrones", "Gastronomía"];
    return titles[Math.floor(Math.random() * (max - min)) + min];
}