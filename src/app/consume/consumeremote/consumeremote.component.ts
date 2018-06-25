import { Component, OnInit } from '@angular/core';
import { RemoteserviceService } from '../../services/remoteservice.service';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-consumeremote',
  templateUrl: './consumeremote.component.html',
  styleUrls: ['./consumeremote.component.css']
})
export class ConsumeremoteComponent implements OnInit {
 
  constructor(private theRemoteserviceService: RemoteserviceService) {   
    //console.log(this.theRemoteserviceService.callService)
  }

  
  ngOnInit() {
  }

}
