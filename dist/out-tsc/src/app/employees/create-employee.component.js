import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
let CreateEmployeeComponent = class CreateEmployeeComponent {
    constructor(_employeeService, _router, _route) {
        this._employeeService = _employeeService;
        this._router = _router;
        this._route = _route;
        this.previewPhoto = false;
        this.employee = {
            id: null,
            name: null,
            gender: null,
            contactPreference: null,
            phoneNumber: null,
            email: null,
            dateOfBirth: null,
            department: null,
            isActive: null,
            photoPath: null
        };
        this.departments = [
            { id: 1, name: 'Help Desk' },
            { id: 2, name: 'HR' },
            { id: 3, name: 'IT' },
            { id: 4, name: 'Payrole' }
        ];
        this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            minDate: new Date(1948, 1, 1),
            maxDate: new Date(2200, 12, 31),
            dateInputFormat: 'DD/MM/YYYY'
        });
    }
    ngOnInit() {
        this._route.paramMap.subscribe(parameterMap => {
            const id = +parameterMap.get('id');
            this.getEmployee(id);
        });
    }
    getEmployee(id) {
        if (id === 0) {
            this.employee = {
                id: null,
                name: null,
                gender: null,
                contactPreference: null,
                phoneNumber: null,
                email: null,
                dateOfBirth: null,
                department: 'select',
                isActive: null,
                photoPath: null
            };
            this.panelTitle = 'Create Employee';
            this.createEmployeeForm.reset();
        }
        else {
            this.panelTitle = 'Edit Employee';
            this.employee = Object.assign({}, this._employeeService.getEmployee(id));
        }
    }
    saveEmployee() {
        const newEmployee = Object.assign({}, this.employee);
        this._employeeService.save(newEmployee);
        this.createEmployeeForm.reset();
        this._router.navigate(['list']);
    }
    togglePhotoPreview() {
        this.previewPhoto = !this.previewPhoto;
    }
};
tslib_1.__decorate([
    ViewChild('employeeForm', { static: true }),
    tslib_1.__metadata("design:type", NgForm)
], CreateEmployeeComponent.prototype, "createEmployeeForm", void 0);
CreateEmployeeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-create-employee',
        templateUrl: './create-employee.component.html',
        styleUrls: ['./create-employee.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [EmployeeService, Router, ActivatedRoute])
], CreateEmployeeComponent);
export { CreateEmployeeComponent };
//# sourceMappingURL=create-employee.component.js.map