import { Component, OnInit ,Input} from '@angular/core';
import {Task} from '../tasks/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})

export class TaskDetailComponent implements OnInit {
  @Input() task:Task;

  constructor() { }

  ngOnInit() {
  }

}
