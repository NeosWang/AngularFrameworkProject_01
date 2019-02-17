import { Component } from '@angular/core';
// 基本路由
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  Title = 'Angular testing'; //页面属性
  constructor(){}
  ngOnInit(){
  }
}


