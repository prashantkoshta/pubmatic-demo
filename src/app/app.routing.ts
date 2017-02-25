import { DashboardComponent } from "./dashboard/dashboard.component"; 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { Page404Component } from './shared/page404/page404.component';

const routes:Routes =[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
     // { path: 'home', component: Page404Component},
      { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full' },
     // { path: '*', component: Page404Component },
   //   { path: '**', component: Page404Component }
];

export const AppRoutes = RouterModule.forRoot(routes);