import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WorldComponent } from './world.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './search-filter.pipe';
import { SubstringPipe } from './substring.pipe';
import { FilterSearchModule } from '../SharedModule/filter-search.module';

const WorldRoute: Routes = [
  {path:'world',component:WorldComponent}
];

@NgModule({
  declarations: [WorldComponent, SearchFilterPipe, SubstringPipe
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FilterSearchModule,
    RouterModule.forChild(WorldRoute)
  ]
})
export class WorldModule {
  constructor(){
    console.log("World Module Loaded")
  }
 }
