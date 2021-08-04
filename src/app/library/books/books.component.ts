import {Component} from '@angular/core';
import {LibraryService} from "../services/library.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {

  get books() {
    return this.libraryService.books;
  }

  constructor(private libraryService: LibraryService) {
  }
}
