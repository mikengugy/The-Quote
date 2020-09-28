import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'The way to get started is to quit talking and begin doing.','Walt Disney','Michael Ngugi',new Date(2020,9,14)),
    new Quote(2,'If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt','John Pit',new Date(20,1,20)),
    new Quote(3,'The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Dennis Mutai',new Date(2018,3,24))
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date);

    this.quotes.push(quote)
  }
  
  showForm: boolean = false

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit(){
  }
  
  addQuote(){
    this.showForm = true
  }
  hideForm(){
    this.showForm = false
  }

    upVote(i){
      this.quotes[i].upVotes+=1;
    }

    downVote(i){
      this.quotes[i].downVotes+=1;
    }

    originalNum:number
    lastNum:number
    counter:number

    highestUpvote(){
      this.originalNum = 0
      this.lastNum = 0
      
      for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upVotes;
      if(this.lastNum > this.originalNum){this.originalNum = this.lastNum}
      }
      return this.originalNum
      } 
}
