import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { AccordionComponent } from './shared/accordion.component';
import { CreateAnEmployeeComponent } from './reactemployee/create-an-employee.component';
import { EmployeeModule } from './reactemployee/employee.module';

 const appRoutes: Routes = [
  { path: 'employees', loadChildren: () => import('./app-routing.module').then(mod => mod.AppRoutingModule) }
//   {
//     path: 'list',
//     component: ListEmployeesComponent,
//     resolve: { employeeList: EmployeeListResolverService }
//   },
//   {
//     path: 'edit/:id',
//     component: CreateEmployeeComponent,
//     canDeactivate: [CreateEmployeeCanDeactivateGuardService]
//   },
//   {
//      path: 'employees/:id',
//      component: EmployeeDetailsComponent,
//      canActivate: [EmployeeDetailsGuardService]
//   },
//   { path: '', redirectTo: '/list', pathMatch: 'full'},
//   { path: 'notfound', component: PageNotFoundComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent,
    CreateAnEmployeeComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),   // , {enableTracing: true}
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    EmployeeModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService, EmployeeListResolverService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
