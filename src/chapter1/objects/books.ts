interface Book {
  title: string;
  author: string;
  numberOfPages?: number;
  isRead?: boolean;
}

function showbook(book: Book) {
  console.log(
    `Title: ${book.title}, Author: ${book.author},  Read: ${
      book.isRead ? "Yes" : "No"
    }`
  );
}

function setPages(book: Book, pages: number) {
  book.numberOfPages = pages;
}

function readBook(book: Book) {
  book.isRead = true;
}

const warAndPeace = {
  author: "Leo Tolstoy",
  title: "War and Peace",
  isRead: false,
};
const mobyDick: Book = {
  author: "Herman Melville",
  title: "Moby Dick",
};

//  calling methods on the books
setPages(warAndPeace, 1225);
showbook(warAndPeace);
showbook(mobyDick);
readBook(mobyDick);
showbook(mobyDick);
