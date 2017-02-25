import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing'
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    MaterialModule.forRoot()
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }