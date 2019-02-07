import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';

const routes: Routes = [

  {path:'tasks', component:TasksComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'departments',component:DepartmentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
