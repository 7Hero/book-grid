import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import IBook from "../models/book-card.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {

  @ViewChild('modal') modalRef: ElementRef | undefined;
  @Input() content: IBook = {
    title: '',
    author: '',
    image: '',
    ISBN: 0,
    price: {
      value: 0,
      currency: '',
      displayValue: ''
    },
    summary: '',
  };
  @Output() isClose = new EventEmitter<boolean>();

  constructor() { }
  onClick(event: any) {
    if(this.modalRef?.nativeElement == event.target) {
      this.isClose.emit(true);
    }
  }
}
