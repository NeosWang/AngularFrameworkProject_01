import { Injectable } from '@angular/core';
import { Task } from '../components/tasks/task';
import jsonData from 'src/assets/data.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  TASKS = jsonData['tasks'];

  constructor() { }

  getTasks(): Observable<Task[]> {
    // return of(jsonData['tasks']);
    return of(this.TASKS);
  }

  getTask(id: number): Observable<Task> {
    return of(this.TASKS.find(task => task.id === id))
  }
}
