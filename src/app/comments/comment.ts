export class Comment {
    constructor(by?: string, time?: number, kids?: number[]) {
        this.by = by;
        this.time = time;
        this.kids = kids;
    }

    by: string;
    time: number;
    kids: number[];
}
