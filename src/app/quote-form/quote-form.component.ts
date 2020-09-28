import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"", "", "", new Date)
  @Output() showForm = new EventEmitter<boolean>();
  @Output() emitNewQuote = new EventEmitter<any>();
  @Output() addQuote = new EventEmitter<Quote>();



  submitQuote(){
    this.showForm.emit();
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
