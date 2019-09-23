export class Quote {
  public showAuthor: boolean;
  public upvote: number;
  public downvote: number;

  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public submitter: string,
    public submitTime: Date
  ) // public upvote: number,
  // public downvote: number
  {
    this.showAuthor = false;
    this.downvote = 0;
    this.upvote = 0;
  }
}
