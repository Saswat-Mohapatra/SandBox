import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, of, throwError  } from 'rxjs';
import { delay, catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class EmployeeService {
    constructor(private httpClient: HttpClient) {}
    // private listEmployees: Employee[] = [
    //     {
    //       id: 1,
    //       name: 'Mark',
    //       gender: 'Male',
    //       contactPreference: 'Email',
    //       email: 'mark@techm.com',
    //       dateOfBirth: new Date('10/25/1988'),
    //       department: 'IT',
    //       isActive: true,
    //       photoPath: 'assets/images/mark.png'
    //     },
    //     {
    //       id: 2,
    //       name: 'Mary',
    //       gender: 'Female',
    //       contactPreference: 'Phone',
    //       phoneNumber: 2345978640,
    //       dateOfBirth: new Date('11/20/1979'),
    //       department: 'HR',
    //       isActive: true,
    //       photoPath: 'assets/images/mary.png'
    //     },
    //     {
    //       id: 3,
    //       name: 'John',
    //       gender: 'Male',
    //       contactPreference: 'Phone',
    //       phoneNumber: 5432978640,
    //       dateOfBirth: new Date('3/25/1976'),
    //       department: 'IT',
    //       isActive: false,
    //       photoPath: 'assets/images/john.png'
    //     },
    // ];

    baseUrl = 'http://localhost:3000/employees';

      getEmployees(): Observable<Employee[]> {
         //   return of(this.listEmployees).pipe(delay(2000));
            return this.httpClient.get<Employee[]>(this.baseUrl).pipe(catchError(this.handleError));
        }

      getEmployee(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
            // return this.listEmployees.find(emp => emp.id === id);
        }

      addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(this.baseUrl, employee, {
            headers: new HttpHeaders({
            'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
        //   if (employee.id === null) {
        //       const maxid = this.listEmployees.reduce(function(e1, e2) {
        //         return (e1.id > e2.id) ? e1 : e2;
        //       }).id;
        //       employee.id = maxid + 1;
        //     this.listEmployees.push(employee);
        //    } else {
        //     const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
        //     this.listEmployees[foundIndex] = employee;
        //    }
        }

        updateEmployee(employee: Employee): Observable<void> {
               return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
                  headers: new HttpHeaders({
                  'Content-Type': 'application/json'
                  })
              }).pipe(catchError(this.handleError));
          }

       deleteEmployee(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
        //    const i = this.listEmployees.findIndex(e => e.id === id);
        //     if (i !== -1) {
        //         this.listEmployees.splice(i, 1);
        //    }
        }

        private handleError(errorResponse: HttpErrorResponse) {
            if (errorResponse.error instanceof ErrorEvent) {
                console.error('Client Side Error:', errorResponse.error.message);
            } else {
                console.error('Server Side Error:', errorResponse);
            }
            return throwError('There is a problem with the service. We are notified and working on it. Please try again later.');
        }
}
