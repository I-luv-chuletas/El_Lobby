export class Comments {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

    id: number;
    shoutID: string;
    userId: number;
    content: string;
    rating: number;
}
