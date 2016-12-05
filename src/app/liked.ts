export class Liked {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  id: number;
  userID: string;
  shoutID: string; // Departamentos mencionados/tagueados en
  createdAt: number;
  updatedAt: string;
}
