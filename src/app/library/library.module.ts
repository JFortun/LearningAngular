import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {FormsModule} from "@angular/forms";
import {BooksComponent} from './books/books.component';

@NgModule({
  declarations: [
    MainPageComponent,
    BooksComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LibraryModule {
}
