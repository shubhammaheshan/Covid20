import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({

  imports: [MatTableModule, MatInputModule, MatSortModule, MatPaginatorModule],
  exports: [MatTableModule, MatInputModule, MatSortModule, MatPaginatorModule]
})
export class MaterialModule { }
