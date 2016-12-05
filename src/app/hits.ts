export class Hits {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  id: number;
  userID: string;
  shoutID: string;
  dept: string;
  createdAt: number;
  updatedAt: string;
}
