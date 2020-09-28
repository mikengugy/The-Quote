export class Quote {
    public upVotes: number;
    public downVotes: number;
    constructor(public id: number,public name: string,public author: string,public submittedBy: string,public date: Date) {
        this.upVotes = 0;
        this.downVotes = 0;
    }
}
