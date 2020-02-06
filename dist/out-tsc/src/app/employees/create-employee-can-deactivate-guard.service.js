import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CreateEmployeeCanDeactivateGuardService = class CreateEmployeeCanDeactivateGuardService {
    canDeactivate(component) {
        if (component.createEmployeeForm.dirty) {
            return confirm('Are you sure want to discard your changes?');
        }
        return true;
    }
};
CreateEmployeeCanDeactivateGuardService = tslib_1.__decorate([
    Injectable()
], CreateEmployeeCanDeactivateGuardService);
export { CreateEmployeeCanDeactivateGuardService };
//# sourceMappingURL=create-employee-can-deactivate-guard.service.js.map