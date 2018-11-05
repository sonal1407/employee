import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { EmployeeModel } from "../../employee-model";

@Component({
  selector: "app-view-employee-details",
  templateUrl: "./view-employee-details.component.html",
  styleUrls: ["./view-employee-details.component.css"]
})
export class ViewEmployeeDetailsComponent implements OnInit {
  model;
  /**
   * it contain all the data of employee
   */
  public employeeList: EmployeeModel[];
  constructor(private employeeService: EmployeeService) {
    this.employeeList = [];
  }

  ngOnInit() {
    this.getEmployeeList();
  }
  /**
   * get the List of employee
   */
  public getEmployeeList() {
    this.employeeService.getEmployeeDetail().subscribe(data => {
      this.employeeList = data;
      console.log(this.employeeList);
    });
  }
  /**
   * delete the data of the employee
   */
  onDeleteClick(id) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
          this.getEmployeeList()
      console.log(this.employeeList);
    });
  }
}
