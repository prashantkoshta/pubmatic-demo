
import { ModuleWithProviders } from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import { RouterModule,Routes} from '@angular/router';

const routes: Routes = [
      { path: '', component: DashboardComponent },
];
export const DashboardRoutes:ModuleWithProviders = RouterModule.forChild(routes);