import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CounterComponent} from "./counter/counter.component";
import {HumanComponent} from "./humans/human/human.component";
import { ListComponent } from './humans/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HumanComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
