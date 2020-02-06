import * as tslib_1 from "tslib";
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
let EmployeeListResolverService = class EmployeeListResolverService {
    constructor(_employeeService) {
        this._employeeService = _employeeService;
    }
    resolve(route, state) {
        return this._employeeService.getEmployees();
    }
};
EmployeeListResolverService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [EmployeeService])
], EmployeeListResolverService);
export { EmployeeListResolverService };
//# sourceMappingURL=employee-list-resolver.service.js.map