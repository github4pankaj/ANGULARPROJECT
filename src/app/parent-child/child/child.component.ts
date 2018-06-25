import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentName') parentName :string
  @Input('master') masterName :string
  constructor() { }

  ngOnInit() {
  }

}
