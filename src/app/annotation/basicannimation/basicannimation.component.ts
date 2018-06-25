import { Component, OnInit } from '@angular/core';
import {trigger,state,transition,animate,style} from "@angular/animations"
//import { Transform } from 'stream';

@Component({
  selector: 'app-basicannimation',
  templateUrl: './basicannimation.component.html',
  styleUrls: ['./basicannimation.component.css'],
  animations:[
    trigger("grownUp",[
      state("kid",style({
        color:'pink'
      })),
      state("adult",style({
        color:'red',
        transform:'scale(2)'
      })),
      transition('kid <=> adult' , animate("500ms ease-in"))
    ])
  ]
})
export class BasicannimationComponent implements OnInit {
  defaultState:String="kid"

  animateNow = function(){
    this.defaultState = this.defaultState =='adult' ? 'kid' : 'adult'
    console.log(this.defaultState);
  }
  constructor() { }

  ngOnInit() {
  }

}
