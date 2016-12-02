import {Departamento} from './deps'; 

export class Users {

    constructor(public username: string, public pass: string, public mail: string, public dept: string){
        this.userName = username;
        this.password = pass;
        this.email = mail;
        this.departmentName = dept;
    }

    id: number;
    // name: string;
    userName: string;
    password: string;
    email: string;
    priviliges: number;
    departmentID: number;
    departmentName: string;

}