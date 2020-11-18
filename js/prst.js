id = window.location.search.slice(4)
link = "https://www.googleapis.com/books/v1/volumes/" + id + "?key=AIzaSyBrQ_panRZUN-YKqP6p7a2g6hd4k2-MesM";
fetch(link)
    .then(response => response.json())
    .then(data => console.log(data));