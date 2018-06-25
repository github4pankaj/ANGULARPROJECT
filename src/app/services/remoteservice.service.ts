import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient} from '@angular/common/http'
//import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../interface/user-info';
import { Observable } from 'rxjs';
 

@Injectable()
export class RemoteserviceService {
  constructor(private http: HttpClient) { }
  getUserDetails():Observable<UserInfo>{
    return this.http.get<UserInfo>('https://jsonplaceholder.typicode.com/users');
  }
}
