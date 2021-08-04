import {Component, Input} from '@angular/core';
import {Book} from "../interfaces/library.interfaces";
import {LibraryService} from "../services/library.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input()
  new: Book = {
    name: '',
    pages: 0
  }

  constructor(private libraryService: LibraryService) {
  }

  add() {
    if (this.new.name.trim().length == 0) {
      return;
    }

    this.libraryService.addBook(this.new);

    this.new = {name: '', pages: 0};
  }
}
