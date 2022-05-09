import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BookGridComponent,
    BookCardComponent,
    BookPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
