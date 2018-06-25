import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }
  submitUserHobby = function(data){
    console.log("User Clicked on Submit Button")
    console.log(data);
  }
  ngOnInit() {
  }

}
