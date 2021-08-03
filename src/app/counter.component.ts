import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <h3>Base is <strong>{{base}}</strong></h3>
    <button (click)="subtract(base)">- {{base}}</button>
    <span>{{number}}</span>
    <button (click)="sum(base)">+ {{base}}</button>

  `
})
export class CounterComponent {
  title: string = 'Counter App';
  number: number = 10;
  base: number = 5;

  sum(value: number) {
    this.number += value;
  }

  subtract(value: number) {
    this.number -= value;
  }
}
