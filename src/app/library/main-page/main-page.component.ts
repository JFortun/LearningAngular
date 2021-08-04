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
    name: '',
    pages: 0
  }

  add() {
    if (this.new.name.trim().length == 0) {
      return;
    }
    this.books.push(this.new);
    this.new = {name: '', pages: 0};
  }
}
