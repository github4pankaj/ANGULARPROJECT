import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  hobbyForm;
  constructor() { }

  ngOnInit() {
    this.hobbyForm = new FormGroup({
      fn:new FormControl("",[Validators.compose(
        [Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z]+$")]
      )]),
      ln: new FormControl("",this.myCustomMinLen),
      hobby:new FormControl
    })
  }
  myCustomMinLen(val){
    if(val.value.length>4){
      return {ln:true}
    }
  }
  submitUserHobby = function(user){
    console.log(user)
  }

}
