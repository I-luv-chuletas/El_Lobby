export class Comments {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

    id: string;
    shoutID: string;
    solution: string;
    officialReply: string;
    userId: number;
    text: string;
    rating: number;
}
