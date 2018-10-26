import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent
  ],
  imports: [ AdminRoutingModule ],
})
export class AdminModule { }
