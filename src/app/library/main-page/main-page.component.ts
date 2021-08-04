import {Component} from '@angular/core';
import {Book} from "../interfaces/library.interfaces";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  new: Book = {
    name: 'Book 3',
    pages: 45
  }

  constructor() {}
}
