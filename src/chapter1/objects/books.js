function showbook(book) {
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ",  Read: ").concat(book.isRead ? 'Yes' : 'No'));
}
function setPages(book, pages) {
    book.numberOfPages = pages;
}
function readBook(book) {
    book.isRead = true;
}
var warAndPeace = {
    author: "Leo Tolstoy",
    title: "War and Peace",
    isRead: false
};
var mobyDick = {
    author: "Herman Melville",
    title: "Moby Dick"
};
//  calling methods on the books
setPages(warAndPeace, 1225);
showbook(warAndPeace);
showbook(mobyDick);
readBook(mobyDick);
showbook(mobyDick);
