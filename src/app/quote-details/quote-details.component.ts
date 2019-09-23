import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-details",
  templateUrl: "./quote-details.component.html",
  styleUrls: ["./quote-details.component.css"]
})
export class QuoteDetailsComponent implements OnInit {
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  downvote: number = 1;
  upvote: number = 0;

  constructor() {}

  addUpVotes() {
    this.quote.upvote += 1;
  }

  addDownVotes() {
    this.quote.downvote += 1;
  }

  ngOnInit() {}
}
