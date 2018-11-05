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
  /**
   * store th value of the server data of the employee
   */
  public addEmployeeData: EmployeeModel[];

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.employeeData = [];
    this.addEmployeeData = [];
  }
  /**
   * forms control
   */
  employeeForm = this.fb.group({
    name: ["", [Validators.required]],
    age: ["", [Validators.required]],
    designation: ["", [Validators.required]],
    joiningDate: ["", [Validators.required]]
  });
  /**
   * for validation
   */
  public get name() {
    return this.employeeForm.get("name");
  }
  public get age() {
    return this.employeeForm.get("age");
  }
  public get designation() {
    return this.employeeForm.get("designation");
  }
  public get joiningDate() {
    return this.employeeForm.get("joiningDate");
  }
  ngOnInit() {
    this.getEmployeeList();
  }
  public getEmployeeList(): void {
    this.employeeService.getEmployeeDetail().subscribe(data => {
      this.employeeData = data;
      console.log(this.employeeData);
    });
  }
  /**
   *  add the data of the employee into the the db.
   */
  public onSubmit(data) {
    /**
     * change the date format;
     */
    let dateFormatChange =
      data.joiningDate.day +
      "/" +
      data.joiningDate.month +
      "/" +
      data.joiningDate.year;
    /**
     * add the formatted value of the date.
     */
    data.joiningDate = dateFormatChange;

    this.employeeService.addEmployeeDetail(data).subscribe(data => {
      this.addEmployeeData = data;
      console.log(this.addEmployeeData);
      alert("data added successfully");
    });
  }
}
