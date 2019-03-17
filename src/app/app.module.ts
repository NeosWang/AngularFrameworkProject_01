// angular 根模块

//浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';



//核心模块
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//根组件
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NavibarComponent } from './components/navibar/navibar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { CalenComponent } from './components/calen/calen.component';
import { FullCalendarModule} from 'ng-fullcalendar';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EmployeesComponent,
    DepartmentsComponent,
    NavibarComponent,
    DashboardComponent,
    TaskDetailComponent,
    CalenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
