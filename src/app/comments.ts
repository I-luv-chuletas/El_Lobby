export class Comments {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

    id: number;
    userId: number;
    content: string;
    rating: number;
}
