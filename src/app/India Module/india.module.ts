import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiaComponent } from './india.component';
import { Routes, RouterModule } from '@angular/router';
import { FilterSearchModule } from '../SharedModule/filter-search.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/material/material.module';
import { IndiaService } from './india.service';

const indiaRoutes:Routes = [
  {path:'india',component:IndiaComponent}
]

@NgModule({
  declarations: [IndiaComponent],
  providers:[IndiaService],
  imports: [
    CommonModule,
    FilterSearchModule,
    FormsModule,
    RouterModule.forChild(indiaRoutes),
    MaterialModule
  ]
})
export class IndiaModule { 
  constructor(){
    console.log("India module loaded")
  }
}
