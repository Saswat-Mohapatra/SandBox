import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  private _id: number;

  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService,
      private _router: Router) { }

  ngOnInit() {
    // const id = +this._route.snapshot.params['id'];  // deprecated params use paramMap
    // this._id = +this._route.snapshot.paramMap.get('id'); // snapshot is not reactive to form changes use observable
    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this._employeeService.getEmployee(this._id).subscribe((employee) => this.employee = employee,
      (err: any) => console.log(err));
    //  this.employee = this._employeeService.getEmployee(this._id);
    });
  }

  viewNextEmployee() {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }

    this._router.navigate(['/employees', this._id], {
      queryParamsHandling: 'preserve'
    });
  }
}
