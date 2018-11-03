import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeModule } from '../employee/employee.module';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    EmployeeModule
  ],
  declarations: [SidebarComponent],
  exports:[SidebarComponent],
  providers:[]
})
export class CoreModule { }
