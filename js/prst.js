const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');
let search = urlParams.get('search');
link = "https://www.googleapis.com/books/v1/volumes/" + id + "?key=AIzaSyBrQ_panRZUN-YKqP6p7a2g6hd4k2-MesM";
fetch(link)
    .then(response => response.json())
    .then(data => changeData(data));

function changeData(data) {
    breadcrumb = document.getElementById("breadcrumb_title")
    title = document.getElementById("title");
    description = document.getElementById("description");
    img = document.getElementById("book_img");
    autor = document.getElementById("autor");
    editorialyear = document.getElementById("editorialyear");
    isbn = document.getElementById("isbn");
    breadcrumb_search = document.getElementById("breadcrumb_search").href = "change-book.html?search=" + search;
    breadcrumb.innerHTML = data.volumeInfo.title;
    title.innerHTML = data.volumeInfo.title;
    imgsrc = data.volumeInfo.imageLinks != undefined ? data.volumeInfo.imageLinks.thumbnail : "";
    img.src = imgsrc;
    autor.innerHTML = data.volumeInfo.authors != undefined ? data.volumeInfo.authors[0] : "N/A"
    isbn.innerHTML = data.volumeInfo.industryIdentifiers != undefined ? data.volumeInfo.industryIdentifiers[0].identifier : "N/A";
    book_year = data.volumeInfo.publishedDate != undefined ? data.volumeInfo.publishedDate : "N/A";
    book_editorial = data.volumeInfo.publisher != undefined ? data.volumeInfo.publisher : "N/A";
    editorialyear.innerHTML = book_editorial + ", " + book_year;
}