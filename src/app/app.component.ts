import {Component, OnInit} from '@angular/core';

import 'bootstrap/dist/css/bootstrap.css';
// import './rxjs-operators';
import '../styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
    title = "El Lobby!" 
}
