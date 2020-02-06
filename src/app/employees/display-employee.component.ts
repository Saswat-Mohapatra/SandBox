import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  private _employeeId: number;
  private selectedEmployeeId: number;
  // @Input() employeeId: number;
  @Input()
  set employeeId(val: number) {
    this._employeeId = val;
  }
  get employeeId(): number {
    return this._employeeId;
  }

  private _employee: Employee;
  // @Input() employee: Employee;
  @Input()
  set employee(val: Employee) {
    this._employee = val;
  }
  get employee(): Employee {
    return this._employee;
  }

  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete = false;

  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private _route: ActivatedRoute, private _router: Router, private _employeeService: EmployeeService) { }

  ngOnInit() {
   this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  getEmployeeNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

  viewEmployee() {
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: {'searchTerm': this.searchTerm }
    });
  }

  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }

  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      () => console.log(`Employee with Id = ${this.employee.id} deleted`),
      (err) => console.log(err)
    );
    this.notifyDelete.emit(this.employee.id);
  }

  // handleClick() {
  //   this.notify.emit(this.employee);
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   // const previousEmployee = <Employee>changes.employee.previousValue;
  //   // const currentEmployee = <Employee>changes.employee.currentValue;
  //   // console.log('previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
  //   // console.log('Current : ' + currentEmployee.name);

  //   // for (const propName of Object.keys(changes)) {
  //   //   const change = changes[propName];
  //   //   const from = JSON.stringify(change.previousValue);
  //   //   const to = JSON.stringify(change.currentValue);

  //   //   console.log(propName + ' changed from ' + from + ' to ' + to);
  //   // }
  // }

}
