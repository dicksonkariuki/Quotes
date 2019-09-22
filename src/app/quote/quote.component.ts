// import { Component, OnInit } from "@angular/core";
// import { Quote } from "../quote";

// @Component({
//   selector: "app-quote",
//   templateUrl: "./quote.component.html",
//   styleUrls: ["./quote.component.css"]
// })
// export class QuoteComponent implements OnInit {
//   quotes = [
//     new Quote(
//       1,
//       "Ellen White",
//       "Talk unbelief, and you will have unbelief; but talk faith, and you will have faith.",
//       new Date(2019.09, 21)
//     )
//   ];
//   deleteQuote(isComplete, index) {
//     if (isComplete) {
//       let toDelete = confirm("Are you sure you want to delete quote");
//       if (toDelete) {
//         this.quotes.splice(index, 1);
//       }
//     }
//   }

//   addNewQuote(quote) {
//     let quoteLength = this.quotes.length;
//     quote.id = quoteLength + 1;
//     quote.completeDate = new Date(quote.completeDate);
//     this.quotes.push(quote);
//   }

//   upVotes: number = 0;
//   upVote() {
//     this.upVotes = this.upVotes + 1;
//   }
//   downVotes: number = 0;
//   downVote() {
//     this.downVotes = this.downVotes + 1;
//   }
//   constructor() {}

//   ngOnInit() {}
// }
import { Component, OnInit, Input } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  public Quote: quotes = new Quote(0, "", "", "", new Date(), 0, 0);
  addNewQuote(quote: Quote) {
    //this.Quote = quote;
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  constructor() {}

  ngOnInit() {}
}
