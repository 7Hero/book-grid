import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import data from "../../data/books";
import IBook from "../models/book-card.model";

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css'],
})
export class BookGridComponent implements OnInit, OnChanges {

  books: IBook[] = data;
  currentBook: IBook = this.books[1];
  isOpen: boolean = false;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  setCurrentBook(event: any ) {
    this.isOpen = !this.isOpen;
    this.currentBook = event.currentBook;
  }
  setIsOpen(event: any) {
    this.isOpen = event.isOpen;
  }
}
