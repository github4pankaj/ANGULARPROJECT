import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  onetask =""
   task = ["learn Angular 6","Read about Eureka","Have fun on the beach","Jalibes in evening"]
   money = 50;
   myDate = new Date()
   scores=[12,4,7,34,23,89,0]
  constructor() { }
  addTask = function(){
    console.log("task called")
    this.task.push(this.onetask)
  }
  deleteTask = function(received){
    this.task.pop(received)
  }
  ngOnInit() {
  }

}
