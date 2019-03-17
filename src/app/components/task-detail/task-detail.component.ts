import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../tasks/task';
import { TaskService } from '../../services/task.service';
import { Department } from '../departments/department';
import { DepartmentService } from '../../services/department.service';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  task: Task;
  depts: Department[];
  emps: Employee[];

  constructor(private route: ActivatedRoute,
    private taskService: TaskService,
    private deptService: DepartmentService,
    private empService: EmployeeService,
    private location: Location) { }

  ngOnInit() {
    this.getTask();
    this.getAllDepts();
    this.getEmpsOfDept();
  }

  // OnInit
  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  getAllDepts(): void {
    this.deptService.getDepts().subscribe(depts => this.depts = depts);
  }

  getEmpsOfDept(): void {
    if (this.task.department_id != null) {
      const empLst = this.deptService.getEmpsOfTheDept(this.task.department_id);
      this.empService.getEmpLst(empLst).subscribe(emps => this.emps = emps);
    }
  }
  //

  onChange(deptId: number): void {
    this.task.employees = [];
    const empLst = this.deptService.getEmpsOfTheDept(deptId);
    this.empService.getEmpLst(empLst).subscribe(emps => this.emps = emps);
  }

  updateAssignList(id: number) {
    const idx = this.task.employees.indexOf(id);
    if (idx != -1) {
      this.task.employees.splice(idx, 1);
    } else {
      this.task.employees.push(id);
    }
  }

  goBack(): void {
    this.location.back();
  }

}
