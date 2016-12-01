import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
// import {CommentComponent} from './comments/comment.component';
import {CreateShoutComponent} from './create-shout/create-shout.component';
import {ShoutDetailsComponent} from './shout-details/shout-details.component';
import {ShoutsComponent} from './shouts/shouts.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {ShoutMenuComponent} from './ShoutMenu/ShoutMenu.component';
import {LoginComponent} from './login/login.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'about', component: AboutComponent},
    { path: 'create-shout', component: CreateShoutComponent},
    { path: 'detail/:id', component: ShoutDetailsComponent},
    { path: 'shouts', component: ShoutsComponent},
    { path: 'analytics', component: AnalyticsComponent},
<<<<<<< HEAD
    {path: 'shouts-menu', component: ShoutMenuComponent}
=======
    { path: 'login', component: LoginComponent}
>>>>>>> 1bdda4e33f29fd61ed8c29585d9b942b3e12ee23
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
