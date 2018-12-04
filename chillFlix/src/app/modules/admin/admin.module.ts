import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';



@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent,
    MovieFormComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
