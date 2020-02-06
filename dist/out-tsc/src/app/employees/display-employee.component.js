import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
let DisplayEmployeeComponent = class DisplayEmployeeComponent {
    // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
    constructor(_route, _router, _employeeService) {
        this._route = _route;
        this._router = _router;
        this._employeeService = _employeeService;
    }
    // @Input() employeeId: number;
    set employeeId(val) {
        this._employeeId = val;
    }
    get employeeId() {
        return this._employeeId;
    }
    // @Input() employee: Employee;
    set employee(val) {
        this._employee = val;
    }
    get employee() {
        return this._employee;
    }
    ngOnInit() {
        this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
    }
    getEmployeeNameAndGender() {
        return this.employee.name + ' ' + this.employee.gender;
    }
    viewEmployee() {
        this._router.navigate(['/employees', this.employee.id], {
            queryParams: { 'searchTerm': this.searchTerm }
        });
    }
    editEmployee() {
        this._router.navigate(['/edit', this.employee.id]);
    }
    deleteEmployee() {
        console.log('test');
        this._employeeService.deleteEmployee(this.employee.id);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DisplayEmployeeComponent.prototype, "employeeId", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Employee),
    tslib_1.__metadata("design:paramtypes", [Employee])
], DisplayEmployeeComponent.prototype, "employee", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DisplayEmployeeComponent.prototype, "searchTerm", void 0);
DisplayEmployeeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-display-employee',
        templateUrl: './display-employee.component.html',
        styleUrls: ['./display-employee.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, EmployeeService])
], DisplayEmployeeComponent);
export { DisplayEmployeeComponent };
//# sourceMappingURL=display-employee.component.js.map