import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm', {static: true}) public createEmployeeForm: NgForm;

  previewPhoto = false;
  panelTitle: string;

  bsConfig: Partial<BsDatepickerConfig>;

  employee: Employee = {
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
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payrole'}
  ];
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
    this.bsConfig = Object.assign({},
       {
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

  private getEmployee(id: number) {
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
    } else {
      this.panelTitle = 'Edit Employee';
      this._employeeService.getEmployee(id).subscribe((employee) => this.employee = employee,
      (err: any) => console.log(err));
      // this.employee = Object.assign({}, this._employeeService.getEmployee(id)); // from old employee array
    }
  }

  saveEmployee(): void {
    // const newEmployee: Employee = Object.assign({}, this.employee);
    if (this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe((data: Employee) => {
      console.log(data);
      this.createEmployeeForm.reset();
      this._router.navigate(['list']);
      },
      (error: any) => console.log(error));
      } else {
          this._employeeService.updateEmployee(this.employee).subscribe(() => {
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
    (error: any) => console.log(error));
    }
    //  this.createEmployeeForm.reset();
    //  this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
