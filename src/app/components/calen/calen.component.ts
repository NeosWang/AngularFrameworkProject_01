import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { TaskService } from '../../services/task.service';
import { Task } from '../tasks/task';

@Component({
  selector: 'app-calen',
  templateUrl: './calen.component.html',
  styleUrls: ['./calen.component.scss']
})
export class CalenComponent implements OnInit {

  tasks: Task[];

  calendarOptions: Options;

  displayTask: any;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
    this.getEvents(this.tasks);
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  getEvents(tasks: Task[]): void {
    let data = [];
    for (let t of tasks) {
      data.push({ title: t.name, start: t.due_date })
    }

    console.log(data);

    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: data
    };
  }

  // clickButton(model: any) {
  //   this.displayTask = model;
  //   console.log(this.displayTask);
  // }

  eventClick(model: any) {
    model = {
      task: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayTask = model;
  }

  // updateEvent(model: any) {
  //   model = {
  //     event: {
  //       id: model.event.id,
  //       start: model.event.start,
  //       end: model.event.end,
  //       title: model.event.title
  //       // other params
  //     },
  //     duration: {
  //       _data: model.duration._data
  //     }
  //   }
  //   this.displayTask = model;
  // }

}


