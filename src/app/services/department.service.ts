import { Injectable } from '@angular/core';
import { Department } from '../components/departments/department'
import jsonData from 'src/assets/data.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  DEPT = jsonData['departments'];
  constructor() { }

  getDepts(): Observable<Department[]> {
    return of(this.DEPT);
  }

  getEmpsOfTheDept(id: number): number[] {
    for (let dept of this.DEPT) {
      if (dept.id == id) {
        return dept.employees;
      }
    }
  }


}
