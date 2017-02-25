import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MatdataService } from './shared/service/matdata.service';
import { Page404Component } from './shared/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutes,
    SharedModule,
    MaterialModule.forRoot()
  ],
  providers: [
    MatdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
