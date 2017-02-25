import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MatdataService } from './service/matdata.service';
import { Page404Component } from './page404/page404.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    //Page404Component
  ],
  providers:[
    MatdataService
  ],
  exports: [
   //Page404Component
  ]
})
export class SharedModule { }