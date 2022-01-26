import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FindOneComponent } from './find-one/find-one.component';
import { ListHomeComponent } from './list-home/list-home.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FindOneComponent,
    ListHomeComponent,
    CreateHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
