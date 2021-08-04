import {Injectable} from "@angular/core";
import {Book} from "../interfaces/library.interfaces";

@Injectable()
export class LibraryService {

  private _books: Book[] = [
    {
      name: 'Book 1',
      pages: 135
    },
    {
      name: 'Book 2',
      pages: 420
    }
  ];

  get books(): Book[] {
    return [...this._books];
  }

  constructor() {
  }

  addBook(book: Book) {
    this._books.push(book);
  }
}
