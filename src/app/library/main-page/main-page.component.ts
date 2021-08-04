import {Component} from '@angular/core';
import {Book} from "../interfaces/library.interfaces";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  books: Book[] = [
    {
      name: 'Book 1',
      pages: 135
    },
    {
      name: 'Book 2',
      pages: 420
    }
  ]

  new: Book = {
    name: 'Book 3',
    pages: 45
  }

  addNewBook(book: Book) {
    this.books.push(book);
  }
}
