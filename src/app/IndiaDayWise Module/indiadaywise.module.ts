import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndiadaywiseComponent } from './indiadaywise.component';

const r1:Routes = [
  {path:'',component:IndiadaywiseComponent}
]

@NgModule({
  declarations: [IndiadaywiseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(r1)
  ]
})
export class IndiadaywiseModule {
  constructor(){
    console.log('India daywise module loaded')
  }
 }
