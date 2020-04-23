import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemographicComponent } from './demographic.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const demoRoutes:Routes = [
  {path:'demographics', component:DemographicComponent}
]

@NgModule({
  declarations: [DemographicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(demoRoutes),
    HttpClientModule,
    
  ]
})
export class DemographicModule { }
