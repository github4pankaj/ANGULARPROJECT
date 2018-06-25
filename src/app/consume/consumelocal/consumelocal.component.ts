import { Component, OnInit } from '@angular/core';
import {LocalserviceService} from '../../services/localservice.service'

@Component({
  selector: 'app-consumelocal',
  templateUrl: './consumelocal.component.html',
  styleUrls: ['./consumelocal.component.css']
})
export class ConsumelocalComponent implements OnInit {

  constructor(private lService: LocalserviceService) {
    console.log(lService.sweets)
    lService.sweets.push("imriti")
    console.log(lService.sweets)
   }

  ngOnInit() {
  }

}
