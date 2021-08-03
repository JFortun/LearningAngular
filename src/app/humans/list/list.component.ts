import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  humans: string[] = ['John', 'Karl', 'Mike'];
  removedHuman: string = '';

  removeHuman() {
    this.removedHuman = this.humans.pop() || '';
    console.log('Removing ' + this.removedHuman);
  }
}
