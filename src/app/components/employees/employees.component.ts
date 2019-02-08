import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'
import data from 'src/assets/employees.json';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { console.log() }
  employees: Employee[] = data['employees'];

  formatDate(dob: string): any {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var date = new Date(dob);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  ngOnInit() {
  }

}


