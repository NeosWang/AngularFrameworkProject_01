import { Injectable } from '@angular/core';
import { Task } from '../components/tasks/task';
import taskData from 'src/assets/data.json';
import { Observable, of} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Observable<Task[]>{
    return of(taskData['tasks']);
  }
}
