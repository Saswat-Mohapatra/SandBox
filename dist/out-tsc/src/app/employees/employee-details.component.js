import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
let EmployeeDetailsComponent = class EmployeeDetailsComponent {
    constructor(_route, _employeeService, _router) {
        this._route = _route;
        this._employeeService = _employeeService;
        this._router = _router;
    }
    ngOnInit() {
        // const id = +this._route.snapshot.params['id'];  // deprecated params use paramMap
        // this._id = +this._route.snapshot.paramMap.get('id'); // snapshot is not reactive to form changes use observable
        this._route.paramMap.subscribe(params => {
            this._id = +params.get('id');
            this.employee = this._employeeService.getEmployee(this._id);
        });
    }
    viewNextEmployee() {
        if (this._id < 3) {
            this._id = this._id + 1;
        }
        else {
            this._id = 1;
        }
        this._router.navigate(['/employees', this._id], {
            queryParamsHandling: 'preserve'
        });
    }
};
EmployeeDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-employee-details',
        templateUrl: './employee-details.component.html',
        styleUrls: ['./employee-details.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, EmployeeService,
        Router])
], EmployeeDetailsComponent);
export { EmployeeDetailsComponent };
//# sourceMappingURL=employee-details.component.js.map