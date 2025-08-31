import type {books as BooksType} from "./books"

let books: typeof BooksType;

if (import.meta.env.DEV) {
    books = (await import('./booksLocal')).books;
} else {
    books = (await import('./books')).books;
}

export { books };