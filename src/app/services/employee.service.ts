import { Injectable } from '@angular/core';
import { Employee } from '../components/employees/employee';
import jsonData from 'src/assets/data.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EMP = jsonData['employees']
  constructor() { }

  getEmps(): Observable<Employee[]> {
    return of(this.EMP);
  }

  getEmpLst(empLst: number[]): Observable<Employee[]> {

    let output = [];
    for (let i of empLst) {
      for (let emp of this.EMP) {
        if (i == emp.id) {
          output.push(emp);
        }
      }
    }
    return of(output);
  }
}
