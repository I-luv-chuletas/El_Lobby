export class Comments {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

    id: string;
    shoutID: string;
    solution: string;
    officialReply: string;
    userId: string;
    text: string;
    rating: number;
}
