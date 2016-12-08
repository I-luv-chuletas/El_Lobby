import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {LikeWidgetComponent} from './like/like.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ShoutsComponent} from './shouts/shouts.component';
import {CommentsComponent} from './comment-section/comment.component';
import {CreateShoutComponent} from './create-shout/create-shout.component';
import {ShoutDetailsComponent} from './shout-details/shout-details.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {Departamento} from './deps';


// Services
import {ShoutsService} from './services/shouts.service';
import {CommentsService} from './services/comments.service';
import {ValidationService} from './services/validation.service';
import {AuthService} from './services/auth.service';
import {LikesService} from './services/likes.service';

// In memory web api, para simular http
//import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
//import {InMemoryDataService} from './services/in-memory-data.service';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginGuard } from './_guards/login.guard';

// import { DepartmentAnalysisComponent } from './home/department-analysis/department-analysis.component';
import { DepartmentAnalysisComponent } from './department-analysis/department-analysis.component';
import { ShoutsAnalysisComponent } from './shouts-analysis/shouts-analysis.component';



@NgModule({
  declarations: [
        AppComponent,
        HomeComponent,
        LikeWidgetComponent,
        AboutComponent,
        DashboardComponent,
        CommentsComponent,
        CreateShoutComponent,
        ShoutsComponent,
        ShoutDetailsComponent,
        AnalyticsComponent,
        LoginComponent,
        SignupComponent,
    SolutionsComponent,
    DepartmentAnalysisComponent,
    DepartmentAnalysisComponent,
    ShoutsAnalysisComponent
  ],
  imports: [
      ReactiveFormsModule,
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      routing,
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    LikesService,
    appRoutingProviders,
    ValidationService,
    CommentsService,
    ShoutsService,
    AuthService,
    Departamento
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
