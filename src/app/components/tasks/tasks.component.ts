import { Component, OnInit } from '@angular/core';
import { task } from './task';
import data from 'src/assets/data.json';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  tasks: task[] = data['tasks'];

  formatTaskTime(time: string): any {
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

  selectedTask: task;
  onSelect(task: task): void {
    this.selectedTask = task;
  }


  ngOnInit() {
  }

}
