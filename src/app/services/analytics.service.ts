import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import {MostActive} from '../mostactive';
import {MostPopular} from '../mostpopular';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AnalyticsService {

    private shoutsURL = "http://api.neighbornet.io/shout";
    private shoutHitsURL = "http://api.neighbornet.io/hit";
    private mactiveURL = "http://api.neighbornet.io/mostactive/list"; //most active shouts
    private mpopularURL = "http://api.neighbornet.io/rating/sort"; //most popular departments

    private headers   = new Headers({"Content-Type": "application/json" });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http:Http
    ) { }

    getMostPoularList(): Observable<MostPopular[]> {
        return this.http.get(this.mpopularURL, this.options)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    getShoutHits(){
        
    }

    
    getMostActiveList(): Observable<MostActive[]> {
        return this.http.get(this.mactiveURL, this.options)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
