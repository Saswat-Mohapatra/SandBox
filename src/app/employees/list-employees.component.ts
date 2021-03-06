import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
// import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedEmployeeList } from './resolved-employeelist.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  filteredEmployees: Employee[];
  employeeToDisplay: Employee;
  error: string;
  // private arrayIndex = 1;
  // dataFromChild: Employee;

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  // private _employeeService: EmployeeService,  // removed from constructor args
  constructor(private _router: Router, private _route: ActivatedRoute) {
    const resolvedData: Employee[] | string = this._route.snapshot.data['employeeList'];
    if (Array.isArray(resolvedData)) {
      this.employees = resolvedData;
    } else {
      this.error = resolvedData;
    }
    // this._employeeService.getEmployees().subscribe((empList) => {this.employees = empList;
      if (this._route.snapshot.queryParamMap.has('searchTerm')) {
        this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      } else {
        this.filteredEmployees = this.employees;
      }
    // });
   }

   onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id === id);
            if (i !== -1) {
                this.filteredEmployees.splice(i, 1);
           }
   }

  ngOnInit() {

    // this.filteredEmployees = this.employees;
    // this.employeeToDisplay = this.employees[0];
    // if (this._route.snapshot.queryParamMap.has('searchTerm')) {
    //   this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    // } else {
    //   this.filteredEmployees = this.employees;
    // }
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.keys);
  }

  // onClick(employeeId: number) {
  //   this._router.navigate(['/employees', employeeId], {
  //     queryParams: {'searchTerm': this.searchTerm, 'testParam': 'testValue'}
  //   }); // link parameter array
  // }

  // changeEmployeeName() {
  //   this.employees[0].name = 'Jordan';  // impure
  //   this.filteredEmployees = this.filterEmployees(this.searchTerm);
  //   // const newEmployeeArray: Employee[] = Object.assign([], this.employees);
  //   // newEmployeeArray[0].name = 'Jordan';
  //   // this.employees = newEmployeeArray;
  // }

  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData;
  // }

  // nextEmployee(): void {
  //   if (this.arrayIndex <= 2) {
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   } else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }
}
