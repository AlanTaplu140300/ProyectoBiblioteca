fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:Los juegos del hambre&key=AIzaSyBrQ_panRZUN-YKqP6p7a2g6hd4k2-MesM')
    .then(response => response.json())
    .then(data => data.items.forEach(
        element => (
            printBooks(element.volumeInfo)
        )
    ));

function printBooks(element) {
    containerBooks = document.getElementById("main_container");
    container = document.createElement("div");
    container.className += "container";
    row = document.createElement("div");
    row.className += "row";
    col1 = document.createElement("div");
    col2 = document.createElement("div");
    col1.className += "col";
    col2.className += "col";
    bookData = getData(element);
    console.log(bookData);
    imgsrc = element.imageLinks != undefined ? element.imageLinks.thumbnail : "";
    img = document.createElement("img");
    img.src = imgsrc;
    img.className += "img-thumbnail";
    col1.appendChild(img);
    for (const bookText in bookData) {
        if (bookData.hasOwnProperty(bookText)) {
            parrafo = document.createElement("p");
            parrafo.innerHTML = bookData[bookText];
            col2.appendChild(parrafo);
        }
    }
    row.appendChild(col1);

    row.appendChild(col2);
    container.appendChild(row);
    containerBooks.appendChild(container);
    containerBooks.appendChild(document.createElement("hr"));
}

function getData(element) {
    elements = new Array();
    elements["title"] = element.title != undefined ? element.title : "";
    elements["authors"] = element.authors != undefined ? element.authors[0] : "";
    elements["year"] = element.publishedDate != undefined ? element.publishedDate : "";
    elements["editorial"] = element.publisher != undefined ? element.publisher : "";
    elements["review"] = element.description != undefined ? element.description : "";
    return elements;
}