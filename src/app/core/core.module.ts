import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeModule } from '../employee/employee.module';
import { EmployeeService } from '../employee/employee.service';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    EmployeeModule
  ],
  declarations: [SidebarComponent],
  exports:[SidebarComponent],
  providers:[EmployeeService]
})
export class CoreModule { }
