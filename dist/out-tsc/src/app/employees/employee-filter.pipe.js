import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let EmployeeFilterPipe = class EmployeeFilterPipe {
    transform(employees, searchTerm) {
        if (!employees || !searchTerm) {
            return employees;
        }
        return employees.filter(employee => employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
};
EmployeeFilterPipe = tslib_1.__decorate([
    Pipe({
        name: 'employeeFilter',
        pure: true
    })
], EmployeeFilterPipe);
export { EmployeeFilterPipe };
//# sourceMappingURL=employee-filter.pipe.js.map