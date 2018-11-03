import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { EmployeeModel } from "../../employee-model";

@Component({
  selector: "app-view-employee-details",
  templateUrl: "./view-employee-details.component.html",
  styleUrls: ["./view-employee-details.component.css"]
})
export class ViewEmployeeDetailsComponent implements OnInit {
  public employeeList: EmployeeModel[];
  constructor(private employeeService: EmployeeService) {
    this.employeeList = [];
  }

  ngOnInit() {
    this.getEmployeeList();
  }
  public getEmployeeList() {
    this.employeeService.getEmployeeDetail().subscribe(data => {
      this.employeeList = data;
      console.log(this.employeeList);
    });
  }
  onDeleteClick(id) {
    this.employeeList.pop();
    if(this.employeeList.length == 0){
      alert("No employee found ");
    }
  }
}
