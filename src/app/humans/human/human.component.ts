import {Component} from "@angular/core";

@Component({
  selector: 'app-human',
  templateUrl: 'human.component.html'
})
export class HumanComponent {
  name: string = 'John';
  age: number = 30;

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Karl';
  }

  changeAge(): void {
    this.age = 50;
  }
}
