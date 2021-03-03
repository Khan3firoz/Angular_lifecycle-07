import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'lifeCycleHooks';
  constructor() { }
  fontColor = 'blue';
  sayHelloId = 78;
  canClick = true;
  message = 'Hello, World';
  sayMessage() {
      alert(this.message);
  }
  ngOnInit(): void{

  }
  ngOnChanges() {

  }
}
