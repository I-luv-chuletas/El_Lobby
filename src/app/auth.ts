export class Auth {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  id: number;
  email: string;
  password: string;
  createdAt: number;
  updatedAt: string;
}
