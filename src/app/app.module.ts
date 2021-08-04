import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HumansModule} from "./humans/humans.module";
import {CounterModule} from "./counter/counter.module";
import {LibraryModule} from "./library/library.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HumansModule,
    CounterModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
