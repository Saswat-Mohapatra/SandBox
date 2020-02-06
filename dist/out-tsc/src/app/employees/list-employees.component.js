import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
let ListEmployeesComponent = class ListEmployeesComponent {
    // private _employeeService: EmployeeService,  // removed from constructor args
    constructor(_router, _route) {
        this._router = _router;
        this._route = _route;
        this.employees = this._route.snapshot.data['employeeList'];
        // this._employeeService.getEmployees().subscribe((empList) => {this.employees = empList;
        if (this._route.snapshot.queryParamMap.has('searchTerm')) {
            this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
        }
        else {
            this.filteredEmployees = this.employees;
        }
        // });
    }
    get searchTerm() {
        return this._searchTerm;
    }
    set searchTerm(value) {
        this._searchTerm = value;
        this.filteredEmployees = this.filterEmployees(value);
    }
    filterEmployees(searchString) {
        return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
    ngOnInit() {
        // this.filteredEmployees = this.employees;
        // this.employeeToDisplay = this.employees[0];
        // if (this._route.snapshot.queryParamMap.has('searchTerm')) {
        //   this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
        // } else {
        //   this.filteredEmployees = this.employees;
        // }
        // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
        // console.log(this._route.snapshot.queryParamMap.keys);
    }
};
ListEmployeesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list-employees',
        templateUrl: './list-employees.component.html',
        styleUrls: ['./list-employees.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], ListEmployeesComponent);
export { ListEmployeesComponent };
//# sourceMappingURL=list-employees.component.js.map