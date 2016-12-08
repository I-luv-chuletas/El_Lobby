export class Comments {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

    id: string;
    shoutID: string;
    solution: string;
    officialReply: string;
    userID: string;
    message: string;
    rating: number;
}
