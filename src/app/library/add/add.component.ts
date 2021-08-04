import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../interfaces/library.interfaces";

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

  @Output()
  onNewBook: EventEmitter<Book> = new EventEmitter();

  add() {
    if (this.new.name.trim().length == 0) {
      return;
    }

    this.onNewBook.emit(this.new);

    this.new = {name: '', pages: 0};
  }
}
