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


// Services
import {ShoutsService} from './services/shouts.service'


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        DashboardComponent,
        CommentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        ShoutsService
        ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
