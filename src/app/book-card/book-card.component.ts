import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import IBook from "../models/book-card.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book : IBook = {
    "ISBN": 0,
    "title": "",
    "author": "",
    "summary": "",
    "image": "",
    "price": {
      "currency": "",
      "value": 0,
      "displayValue": ""
    }
  }
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked() {
    console.log('card clicked');
    this.addToCart.emit({currentBook: this.book});
  }

}
