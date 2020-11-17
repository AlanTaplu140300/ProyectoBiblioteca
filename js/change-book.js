let cont = 0;
fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:Los juegos del hambre&key=AIzaSyBrQ_panRZUN-YKqP6p7a2g6hd4k2-MesM')
    .then(response => response.json())
    .then(data => data.items.forEach(
        element => {
            cont++;
            if (cont < 6) {
                printBooks(element.volumeInfo);
            }
        }
    ));

function printBooks(element) {
    containerBooks = document.getElementById("main_container");
    container = document.createElement("div");
    container.className += "container";
    row = document.createElement("div");
    row.className += "row";
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
    title.innerHTML = bookData.title;
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