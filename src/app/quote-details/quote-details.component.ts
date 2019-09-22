import { Component, OnInit, Input } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-details",
  templateUrl: "./quote-details.component.html",
  styleUrls: ["./quote-details.component.css"]
})
export class QuoteDetailsComponent implements OnInit {
  downvote: number = 0;
  upvote: number = 0;

  @Input() quote: Quote;
  constructor() {}

  addUpVotes() {
    this.quote.upvote += 1;
  }

  addDownVotes() {
    this.quote.downvote += 1;
  }

  ngOnInit() {}
}
