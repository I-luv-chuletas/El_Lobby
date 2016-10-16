import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ShoutsComponent} from './shouts/shouts.component';
import {CommentComponent} from './comments/comment.component';
import {CreateShoutComponent} from './create-shout/create-shout.component';

// Services
import {ShoutsService} from './services/shouts.service'

// In memory web api, para simular http
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        DashboardComponent,
        CommentComponent,
        CreateShoutComponent,
        ShoutsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers: [
        appRoutingProviders,
        ShoutsService
        ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
