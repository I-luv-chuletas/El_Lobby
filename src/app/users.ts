import {Departamento} from './deps';

export class Users {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

    id: number;
    // name: string;
    userName: string;
    password: string;
    email: string;
    priviliges: number;
    departmentID: number;
    departmentName: string;
    subscribedShouts: number[];

}
