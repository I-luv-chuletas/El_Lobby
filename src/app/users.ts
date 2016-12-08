import {Departamento} from './deps';

export class Users {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

    id: string;
    anon: string;
    name: string;
    departmento: string;
    priv: string;
    email: string;
    password: string;
    subscribedShouts: string[];
    status: string;
    createdAt: string;
    updatedAt: string;
}
