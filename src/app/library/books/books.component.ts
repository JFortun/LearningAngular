import {Component, Input} from '@angular/core';
import {Book} from "../interfaces/library.interfaces";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {

  @Input()
  books: Book[] = [];
}
