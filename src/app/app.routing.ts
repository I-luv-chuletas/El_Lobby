import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { LoginGuard } from './_guards/login.guard';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
// import {CommentComponent} from './comments/comment.component';
import {CreateShoutComponent} from './create-shout/create-shout.component';
import {ShoutDetailsComponent} from './shout-details/shout-details.component';
import {ShoutsComponent} from './shouts/shouts.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {SolutionsComponent} from './solutions/solutions.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'home', component: DashboardComponent},
    { path: 'about', component: AboutComponent},
    { path: 'create-shout', component: CreateShoutComponent, canActivate: [AuthGuard]},
    { path: 'detail/:id', component: ShoutDetailsComponent},
    { path: 'shouts', component: ShoutsComponent},
    { path: 'analytics', component: AnalyticsComponent},
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    { path: 'logout', component: LogoutComponent},
    { path: 'solutions', component: SolutionsComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
