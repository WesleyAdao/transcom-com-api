import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveSearchRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReactiveSearchModule { }
