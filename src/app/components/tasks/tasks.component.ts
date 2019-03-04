import { Component, OnInit } from '@angular/core';
import { Task } from './task';
// import data from 'src/assets/data.json'; //move to service
import {TaskService} from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor( private taskService: TaskService) { }

  // tasks: Task[] = data['tasks'];
  tasks:Task[];

  getTasks():void{
    this.taskService.getTasks().subscribe(tasks=>this.tasks=tasks);//asynchronous
    // this.tasks=this.taskService.getTasks();
  }

  formatTaskTime(time: string): any {
    if(time == null){
      return '???';
    }

    let monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    var date = new Date(time);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();

    let result = year + '-' + monthNames[monthIndex] + '-' + day + ' ' + hour + ':';
    if (min < 10) {
      result = result + '0' + min;
    } else {
      result += min;
    }
    return result;
  }

  selectedTask: Task;

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  delete(task: Task): void {
    const index = this.tasks.indexOf(task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    //fake delete
    // this.tasks=this.tasks.filter(item=>item!==task); 
  }

  add():void{
    const newTask=new Task();
    newTask.id=this.tasks[this.tasks.length-1].id+1;
    this.tasks.push(newTask);
  }
  ngOnInit() {
    this.getTasks();
  }

  // show = false;
}
