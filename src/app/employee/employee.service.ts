import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { EmployeeModel } from "../employee-model";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  /**
   * URL To Web Api
   */
  public employeeUrl = "api/employeeData";
  /**
   * get the Data from the server
   */
  public getEmployeeDetail(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.employeeUrl);
  }
  /**
   * Add the user Data into the Database
   */
  public addEmployeeDetail(id): Observable<EmployeeModel[]> {
    return this.http.post<EmployeeModel[]>(this.employeeUrl, id);
  }
  /**
   * delete the record of the user
   */
  public deleteEmployee(id): Observable<EmployeeModel[]> {
    return this.http.delete<EmployeeModel[]>(this.employeeUrl+"/"+id);
    // return this.http.delete()
  }
}
