import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import data from 'src/assets/data.json';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() {}
  employees: Employee[] = data['employees'];

  formatDate(dob: string): any {
    let monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    var date = new Date(dob);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return year + '-' + monthNames[monthIndex] + '-' + day;
  }

  ngOnInit() {
  }

}


