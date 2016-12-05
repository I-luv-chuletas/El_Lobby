import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Shouts } from '../shouts';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShoutsService {
    
    private shoutsURL = " http://api.neighbornet.io/shout";
    private headers   = new Headers({"Content-Type": "application/json" });
    

    constructor(
        private http:Http
    ) { this.headers.append('Access-Control-Allow-Origin', '*'); }

    getShouts(): Promise<Shouts[]> {
        // console.log(this.shoutsURL);
        return this.http.get(this.shoutsURL).toPromise().then(response => response.json().data as Shouts[])
        .catch(this.handleError);

    } 


    getShout(id: number): Promise<Shouts> {
        return this.getShouts().then(shouts => shouts.find(shout => shout.id === id));
    }


    update(shout: Shouts): Promise<Shouts>{
        
        const url = `${this.shoutsURL}/${shout.id}`;

        return this.http.post(url, JSON.stringify(shout), {headers: this.headers}).toPromise()
        .then(() => shout)
        .catch(this.handleError);
    }


    create(shout:Shouts): Promise<Shouts>{

        return this.http.post(this.shoutsURL, JSON.stringify(shout), {headers: this.headers}).toPromise()
        .then(response => response.json().data)
        .catch(this.handleError).then();

    }

    // getShouts(): Promise<Shouts[]>{
    //     return Promise.resolve(SHOUTS);
    // }

    private handleError(error: any): Promise<any> {
        console.log('AAAAAH encontre un putazo error pai');
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}