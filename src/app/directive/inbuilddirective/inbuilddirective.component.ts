import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilddirective',
  templateUrl: './inbuilddirective.component.html',
  styleUrls: ['./inbuilddirective.component.css']
})
export class InbuilddirectiveComponent implements OnInit {
  friends=["pankaj","rahul","amit"]
  name ='pankaj';
  constructor() { }

  ngOnInit() {
  }

}
