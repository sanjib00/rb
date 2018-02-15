import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'rb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:any = [];

  constructor(/*private http: HttpClient*/ private _userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
    //this.http.get('https://api.myjson.com/bins/hytxx').subscribe(res => this.users = res);
  }

  getUsers() {
    this._userService.getUsers().subscribe(
        res => {
          this.users = res
        }, err => console.log(err),
        () => console.log('done loading users')
    );
  }

}
