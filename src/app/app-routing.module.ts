import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndiadaywiseModule } from './IndiaDayWise Module/indiadaywise.module';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'india_DayWise', loadChildren: () => IndiadaywiseModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
