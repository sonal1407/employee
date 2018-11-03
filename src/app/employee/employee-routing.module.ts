import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEmployeeDetailsComponent } from "./add-employee-details/add-employee-details.component";
import { ViewEmployeeDetailsComponent } from "./view-employee-details/view-employee-details.component";

const routes: Routes = [
  {path:'',component:AddEmployeeDetailsComponent},
  { path: "addEmployee", component: AddEmployeeDetailsComponent },
  { path: "ViewEmployee", component: ViewEmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
