import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { CreateAnEmployeeComponent } from './reactemployee/create-an-employee.component';

import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  {
     path: 'employees/:id',
     component: EmployeeDetailsComponent,
     canActivate: [EmployeeDetailsGuardService]
  },
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'notfound', component: PageNotFoundComponent},

  { path: 'create', component: CreateAnEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
