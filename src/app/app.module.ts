import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryWebApiService } from "./in-memory-web-api.service";
import { EmployeeService } from "./employee/employee.service";





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
