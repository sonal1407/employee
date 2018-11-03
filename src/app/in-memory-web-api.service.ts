import { InMemoryDbService } from "angular-in-memory-web-api";
import { EmployeeModule } from "./employee/employee.module";

export class InMemoryWebApiService implements InMemoryDbService {
  /**
   * create Database
   */
  createDb() {
    const employeeData: EmployeeModule = [
      {
        id: 1,
        name: "sonal",
        age: 23,
        designation: "TL",
        joiningDate: new Date("09/10/1995")
      },
      {
        id: 2,
        name: "nikul",
        age: 23,
        designation: "Officer",
        joiningDate: new Date("09/10/1995")
      }
    ];
    return { employeeData };
  }
}
