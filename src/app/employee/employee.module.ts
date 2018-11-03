import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import {FormsModule}from'@angular/forms'
//--------------------------------------------------//
import { EmployeeRoutingModule } from "./employee-routing.module";
import { AddEmployeeDetailsComponent } from "./add-employee-details/add-employee-details.component";
import { ViewEmployeeDetailsComponent } from "./view-employee-details/view-employee-details.component";


@NgModule({
  imports: [CommonModule, EmployeeRoutingModule, ReactiveFormsModule,FormsModule],
  declarations: [AddEmployeeDetailsComponent, ViewEmployeeDetailsComponent]
})
export class EmployeeModule {}
