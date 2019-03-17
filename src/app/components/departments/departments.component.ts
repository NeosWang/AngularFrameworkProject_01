import { Component, OnInit } from '@angular/core';
import {Department} from './department';
import{DepartmentService} from 'src/app/services/department.service';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private deptService:DepartmentService) { }

  depts:Department[];
  selectedDept:Department;
  showLay:boolean;

  getDepts(): void {
    this.deptService.getDepts().subscribe(depts => this.depts = depts);
  }


  onSelect(dept: Department): void {
    this.selectedDept = dept;
    this.showLay=!this.showLay;
  }




  delete(dept: Department): void {
    const index = this.depts.indexOf(dept, 0);
    if (index > -1) {
      this.depts.splice(index, 1);
    }
  }

  add(): void {
    const newDept = new Department();
    newDept.id = this.depts[this.depts.length - 1].id + 1;
    newDept.employees = [];
    this.depts.push(newDept);
  }


  ngOnInit() {
    this.getDepts();
    this.showLay=false;
  }

}
