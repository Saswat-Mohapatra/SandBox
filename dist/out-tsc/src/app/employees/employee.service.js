import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
let EmployeeService = class EmployeeService {
    constructor() {
        this.listEmployees = [
            {
                id: 1,
                name: 'Mark',
                gender: 'Male',
                contactPreference: 'Email',
                email: 'mark@techm.com',
                dateOfBirth: new Date('10/25/1988'),
                department: 'IT',
                isActive: true,
                photoPath: 'assets/images/mark.png'
            },
            {
                id: 2,
                name: 'Mary',
                gender: 'Female',
                contactPreference: 'Phone',
                phoneNumber: 2345978640,
                dateOfBirth: new Date('11/20/1979'),
                department: 'HR',
                isActive: true,
                photoPath: 'assets/images/mary.png'
            },
            {
                id: 3,
                name: 'John',
                gender: 'Male',
                contactPreference: 'Phone',
                phoneNumber: 5432978640,
                dateOfBirth: new Date('3/25/1976'),
                department: 'IT',
                isActive: false,
                photoPath: 'assets/images/john.png'
            },
        ];
    }
    getEmployees() {
        return of(this.listEmployees).pipe(delay(2000));
    }
    getEmployee(id) {
        return this.listEmployees.find(emp => emp.id === id);
    }
    save(employee) {
        if (employee.id === null) {
            const maxid = this.listEmployees.reduce(function (e1, e2) {
                return (e1.id > e2.id) ? e1 : e2;
            }).id;
            employee.id = maxid + 1;
            this.listEmployees.push(employee);
        }
        else {
            const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
            this.listEmployees[foundIndex] = employee;
        }
    }
    deleteEmployee(id) {
        const i = this.listEmployees.findIndex(e => e.id === id);
        //    if (i !== -1) {
        this.listEmployees.splice(i, 1);
        //   }
    }
};
EmployeeService = tslib_1.__decorate([
    Injectable()
], EmployeeService);
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map