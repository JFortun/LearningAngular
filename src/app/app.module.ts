import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CounterComponent} from "./counter/counter.component";
import {HumanComponent} from "./humans/human/human.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HumanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
