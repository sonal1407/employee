/**
 * @author Sonal Prajapati
 */
import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { EmployeeModel } from "../../employee-model";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-employee-details",
  templateUrl: "./add-employee-details.component.html",
  styleUrls: ["./add-employee-details.component.css"]
})
export class AddEmployeeDetailsComponent implements OnInit {
  /**
   *
   * store the details of the employee list
   *
   */

  public employeeData: EmployeeModel[];
  public addEmployeeData: EmployeeModel[];

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.employeeData = [];
    this.addEmployeeData = [];
  }
  employeeForm = this.fb.group({
    name: ["", [Validators.required]],
    age: ["", [Validators.required]],
    designation: ["", [Validators.required]],
    joiningDate: ["", [Validators.required]]
  });
  get name() {
    return this.employeeForm.get("name");
  }
  get age() {
    return this.employeeForm.get("age");
  }
  get designation() {
    return this.employeeForm.get("designation");
  }
  get joiningDate() {
    return this.employeeForm.get("joiningDate");
  }
  ngOnInit() {
    this.getEmployeeList();
  }
  public getEmployeeList() {
    this.employeeService.getEmployeeDetail().subscribe(data => {
      this.employeeData = data;
      console.log(this.employeeData);
    });
  }

  onSubmit(data) {
    this.employeeService.addEmployeeDetail(data).subscribe(data => {
      this.addEmployeeData = data;
      console.log(this.addEmployeeData);
    });
  }
}
