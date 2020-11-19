let cont = 0;
const urlParams = new URLSearchParams(window.location.search);
let search = urlParams.get('search') ? urlParams.get('search') : "";
apiSearchFunction(search);

function apiSearchFunction(busqueda) {
    document.getElementById("buscador").value = busqueda;
    document.getElementById("resultado_busqueda").innerHTML = 'Resultado para "' + busqueda + '":';
    link = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + busqueda + '&key=AIzaSyBrQ_panRZUN-YKqP6p7a2g6hd4k2-MesM';
    cont = 0;
    fetch(link)
        .then(response => response.json())
        .then(data => data.items.forEach(
            element => {
                cont++;
                if (cont < 6) {
                    printBooks(element.volumeInfo, element, busqueda);
                }
            }
        ));
}

function printBooks(element, element_complete, busqueda) {
    containerBooks = document.getElementById("delete_container");
    container = document.createElement("div");
    container.className += "container";
    container.className += " container_libros";
    row = document.createElement("div");
    row.className += "row";
    row.className += " fix-row";
    col1 = document.createElement("div");
    col2 = document.createElement("div");
    col1.className += "col-2";
    col2.className += "col-7";
    bookData = getData(element);
    imgsrc = element.imageLinks != undefined ? element.imageLinks.thumbnail : "";
    img = document.createElement("img");
    img.src = imgsrc;
    img.className += "img-thumbnail";
    col1.style.textAlign = "right";
    col1.style.paddingRight = "50px";
    col1.appendChild(img);
    row.appendChild(col1);
    title = document.createElement("h3")
    p1 = document.createElement("p");
    p1.innerHTML = bookData.authors + "  |  " + bookData.year;
    p2 = document.createElement("p");
    p2.innerHTML = "<b>Editorial: </b>" + bookData.editorial;
    p3 = document.createElement("p");
    p3.innerHTML = bookData.review.slice(0, 300);
    title.style.color = "#00a1c7";
    enlace = document.createElement("a");
    enlace.href = "prst.html?id=" + element_complete.id + "&search=" + busqueda;
    enlace.innerHTML = bookData.title
    title.appendChild(enlace);
    col2.appendChild(title)
    col2.appendChild(p1);
    col2.appendChild(p2);
    col2.appendChild(p3);
    row.appendChild(col2);
    container.appendChild(row);
    containerBooks.appendChild(container);
    if (cont < 5) {
        hr = document.createElement("hr");
        hr.className += "separador";
        containerBooks.appendChild(hr);
    } else {
        br = document.createElement("br");
        containerBooks.appendChild(br);
    }
}

function getData(element) {
    elements = new Array();
    elements["title"] = element.title != undefined ? element.title : "N/A";
    elements["authors"] = element.authors != undefined ? element.authors[0] : "N/A";
    elements["year"] = element.publishedDate != undefined ? element.publishedDate : "N/A";
    elements["editorial"] = element.publisher != undefined ? element.publisher : "N/A";
    elements["review"] = element.description != undefined ? element.description : "N/A";
    return elements;
}

function searchFunction() {
    book_container = document.getElementById("main_container");
    busqueda = document.getElementById("buscador").value;
    resultado_busqueda = document.getElementById("resultado_busqueda");
    resultado_busqueda.innerHTML = 'Resultado para "' + busqueda + '":';
    delete_container = document.getElementById("delete_container");
    book_container.removeChild(delete_container);
    delete_container = document.createElement("div");
    delete_container.id = "delete_container";
    book_container.appendChild(delete_container)
    apiSearchFunction(busqueda);
}