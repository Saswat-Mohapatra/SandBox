import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
let EmployeeDetailsGuardService = class EmployeeDetailsGuardService {
    constructor(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
    }
    canActivate(route, state) {
        const employeeExists = !!this._employeeService.getEmployee(+route.paramMap.get('id'));
        if (employeeExists) {
            return true;
        }
        else {
            this._router.navigate(['notfound']);
            return false;
        }
    }
};
EmployeeDetailsGuardService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [EmployeeService, Router])
], EmployeeDetailsGuardService);
export { EmployeeDetailsGuardService };
//# sourceMappingURL=employee-details-guard.service.js.map