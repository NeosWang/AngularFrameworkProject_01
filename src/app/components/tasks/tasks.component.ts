import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from 'src/app/services/task.service';
import { Department } from '../departments/department';
import { DepartmentService } from 'src/app/services/department.service';
import { Employee } from '../employees/employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  emps: Employee[];
  depts: Department[];
  newTask: Task;
  showLay: boolean;

  constructor(private empService: EmployeeService,
    private taskService: TaskService,
    private deptService: DepartmentService) { }

  ngOnInit() {
    this.getTasks();
    this.getAllDepts();
    this.showLay = false;
  }

  //  onInit
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  getAllDepts(): void {
    this.deptService.getDepts().subscribe(depts => this.depts = depts);
  }
  // 

  delete(task: Task): void {
    const index = this.tasks.indexOf(task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  add(): void {
    this.newTask = new Task();
    this.newTask.id = this.tasks[this.tasks.length - 1].id + 1;
    this.newTask.employees = [];
    this.showLay = !this.showLay;
  }

  addCfm(): void {
    this.tasks.push(this.newTask);
    console.log(this.newTask);
  }

  onChange(deptId: number): void {
    this.newTask.employees=[];
    const empLst=this.deptService.getEmpsOfTheDept(deptId);
    this.empService.getEmpLst(empLst).subscribe(emps=>this.emps=emps);
  }

  updateAssignList(id: number) {
    const idx = this.newTask.employees.indexOf(id);
    if (idx != -1) {
      this.newTask.employees.splice(idx, 1);
    } else {
      this.newTask.employees.push(id);
    }
  }



}
